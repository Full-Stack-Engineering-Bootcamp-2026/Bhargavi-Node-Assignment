const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === "GET" && url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(`
      <html>
        <body>
          <h1>Home Page</h1>
          <a href="/about">Go to About</a>
        </body>
      </html>
    `);
    }

    else if (method === "GET" && url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(`
      <html>
        <body>
          <h1>About Page</h1>
          <p>Name: Bhargavi Thorat</p>
          <a href="/">Back to Home</a>
        </body>
      </html>
    `);
    }

    else if (method === "GET" && url === "/redirect") {
        res.writeHead(302, { Location: "/" });
        return res.end();
    }

    else if (method === "POST" && url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(`
      <html>
        <body>
          <h1>POST Request Received on Home</h1>
          <a href="/">Go Back</a>
        </body>
      </html>
    `);
    }

    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end(`
      <html>
        <body>
          <h1>404 Page Not Found</h1>
          <a href="/">Go Home</a>
        </body>
      </html>
    `);
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});