const Book = require("../models/book.model");
const jwt = require("jsonwebtoken");

module.exports = {
  // get all
  findAllBooks:(req,res)=>{
    console.log("all the books!")
    Book.find({})
    .populate("user_id", "username")
    .then((allBooks)=>{
      res.json(allBooks);
    })
    .catch((err)=>{
      console.log("Get all books failed");
      res.status(400).json(err);
    })
  },

  findAllBooksByUser:(req,res)=>{
    
    Book.find({user_id: req.params.id})
    .then((allUserBooks)=>{
      console.log(allUserBooks);
      res.json(allUserBooks);
    })
    .catch((err)=>{
      console.log(err);
      res.status(400).json(err);
    })
  }, 
  // get one
  findOneBook:(req,res)=>{
    Book.findOne({_id:req.params.id})
    .then((oneBook)=>{
      res.json(oneBook)
    })
    .catch((err)=>{
      console.log("finding one book failed");
      res.status(400).json(err)
    })
  },
  // post(create Book)
  createNewBook: (req,res)=>{
    const book = new Book(req.body);
    const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
    book.user_id = decodedJwt.payload.user_id;
    book.createdByUserName = decodedJwt.payload.username;

    console.log(decodedJwt.payload.user_id);
    console.log(decodedJwt.payload.username);
    console.log(book);

    Book.create(book)
    .then((newBook)=>{
      res.json(newBook)
    })
    .catch((err)=>{
      console.log("create book failed");
      res.status(400).json(err)
    })
  },
  // put(update Book)
  updateBook:(req,res)=>{
    Book.findOneAndUpdate(
      {_id:req.params.id},
      req.body,
      { new: true, runValidators: true}
    )
    .then((updateBook)=>{
      res.json(updateBook)
    })
    .catch((err)=>{
      console.log("update book failed");
      res.status(400).json(err)
    })
  },
  // del
  deleteBook:(req,res)=>{
    Book.deleteOne({_id:req.params.id})
    .then((deletedBook)=>{
      res.json(deletedBook)
    })
    .catch((err)=>{
      console.log("error deleting book");
      res.status(400).json(err)
    })
  }
}