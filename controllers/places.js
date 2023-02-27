const express = require("express");
const router = express.Router();
const db = require("../models");

// GET /places
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

//EDIT
router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/edit", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// SHOW /places
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      console.log(place.comments);
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.get("*", (req, res) => {
  res.render("error404");
});

// CREATE Places
router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";
        if (err && err.name == "ValidationError") {
          let message = "Validation Error: ";
          for (var field in err.errors) {
            message += `${field} was ${err.errors[field].value}. `;
            message += `${err.errors[field].message}`;
          }
          console.log("Validation error message", message);
          res.render("places/new", { message });
        } else {
          res.render("error404");
        }
        res.render("places/new", { message });
      } else {
        res.render("error404");
      }
    });
});

// CREATE Comments
router.post("/:id/comment", (req, res) => {
  console.log(req.body);
  db.Place.findById(req.params.id)
    .then((place) => {
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place.save().then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          res.render("error404");
        });
    })
    .catch((err) => {
      res.render("error404");
    });
});

// EDIT
router.put("/:id", (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "/images/coffee-unsplash.jpg";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  // Save the new data
  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedPlace) => {
      res.redirect(`/places/${req.params.id}`);
    }
  );
});

// DELETE
router.delete("/:id", (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then((place) => {
      res.status(303).redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

module.exports = router;
