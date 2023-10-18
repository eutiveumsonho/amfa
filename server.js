const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Parse the request URL to determine which file to serve
  const url = req.url === "/" ? "/amormeufuturoamor.html" : req.url;
  const filePath = path.join(__dirname, url);

  // Check if the file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.statusCode = 404;
      res.end("File not found");
      return;
    }

    // Determine the content type based on the file extension
    const ext = path.extname(filePath);
    let contentType = "text/html";

    if (ext === ".jpg") {
      contentType = "image/jpeg";
    }

    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Internal Server Error");
      } else {
        res.setHeader("Content-Type", contentType);
        res.end(data);
      }
    });
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
