const React = require("react");
const Def = require("../default");

function index({ places }) {
  let placesFormatted = places.map((place) => {
    return (
      <div key={place.id} className="col-sm-6 col-md-3 col-lg-3">
        <h2>
          <a href={`/places/${place.id}`}>{place.name}</a>
        </h2>
        <p className="text-center">{place.cuisines}</p>
        <img
          src={place.pic}
          className="rounded mx-auto d-block"
          alt={place.name}
        />
        <p className="text-center">
          Located in {place.city}, {place.state}. {place.founded}.
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div className="container">
          <div className="row">{placesFormatted}</div>
        </div>
      </main>
    </Def>
  );
}

module.exports = index;
