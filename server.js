const http = require("http");
const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");

const server = http.createServer(async (req, res) => {
  const client = await new MongoClient(process.env.MONGODB_URI).connect();

  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const parsedBody = JSON.parse(body);
        client
          .db(process.env.MONGODB_DB)
          .collection("letters")
          .insertOne(parsedBody);

        res.statusCode = 201;
        res.end("Ok");
      } catch (error) {
        console.log(error);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    });

    res.setHeader("Content-Type", "application/json");
    return;
  }

  // Parse the request URL to determine which file to serve
  const url =
    req.url === "/" || req.url.includes("/?enviado") ? "/index.html" : req.url;
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
