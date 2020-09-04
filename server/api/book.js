// api/book.js
var path = require("path");

const userRoutes = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("Welcome to the development api-server");
  });

  // variables
  const dataBooks = "./mocks/GET_books.json";

  // READ
  app.get("/api/books", (req, res) => {
    fs.readFile(dataBooks, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });

  app.get("/api/books/:isbn/commercialOffers", (req, res) => {
    var isbn = req.params.isbn;
    console.log(`isbn:` + isbn);
    res.sendFile(path.join(__dirname, "../mocks/", "GET_offers.json"));
  });
};

module.exports = userRoutes;
