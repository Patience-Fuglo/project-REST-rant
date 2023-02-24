const React = require("react");

function Default(html) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        />
        <link href="/images/favicon3.png" rel="icon" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <title>{html.title || "REST-Rant"}</title>
      </head>
      <body>
        <div className="wrapper">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/places">Places</a>
              </li>
              <li>
                <a href="/places/new">Add Place</a>
              </li>
            </ul>
          </nav>
          <p>
            <h1>REST-Rant</h1>
          </p>
          {html.children}
          <div className="push"></div>
        </div>
        <footer className="footer"></footer>
      </body>
    </html>
  );
}

module.exports = Default;
