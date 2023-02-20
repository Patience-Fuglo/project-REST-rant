const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>REST Rant</h1>
        <div>
          <img src="/images/salad-bar.jpg" alt="gourmet greens salad" />
          <p>
            Photo by <a href="AUTHOR LINK">Dan Gold</a> on{" "}
            <a href="https://unsplash.com/">Unsplash</a>
          </p>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}
module.exports = home;
