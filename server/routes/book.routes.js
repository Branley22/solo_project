const BookController = require("../controllers/book.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app)=>{
  app.get("/api/books", BookController.findAllBooks);
  app.post("/api/books", authenticate, BookController.createNewBook);
  app.get("/api/books/users/:id", BookController.findAllBooksByUser);
  app.get("/api/books/:id", BookController.findOneBook);
  app.put("/api/books/:id", BookController.updateBook);
  app.delete("/api/books/:id", BookController.deleteBook);
}