const React = require("react");
const Default = require("./default");

function home() {
  return (
    <Default>
      <main>
        <h1></h1>
        <div>
          <img
            src="/images/salad-bar.jpg"
            alt="gourmet greens salad"
            id="home-img"
          />
          <p>
            Photo by <a href="AUTHOR LINK">Dan Gold</a> on{" "}
            <a href="https://unsplash.com/">Unsplash</a>
          </p>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Default>
  );
}

module.exports = home;
