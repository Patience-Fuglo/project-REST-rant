const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page</p>
        <div>
          <img src="/images/error404.jpg" alt="error 404 page not found" />
          <div>
            Photo by <a href="AUTHOR LINK">Coding Nepal</a> on{" "}
            <a href="https://codingnepalweb.com/">CodingNepal</a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
