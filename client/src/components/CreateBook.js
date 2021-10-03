import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';

const CreateBook = (props)=>{

  const [newBook, setNewBook] = useState({
    name:"",
    description:"",
    categories:"",
    image:"",
    rating:""
  })

  const newSubmitHandler = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/books',
    newBook
    )
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      navigate("/books")
    })
  }



  return(
    <div>
      <Form submitHandler={newSubmitHandler}
      buttonText="Add New Book"
      book={newBook} setBook={setNewBook}/>
    </div>
  )
}
export default CreateBook;