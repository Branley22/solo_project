import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import Form from '../components/Form';

const CreateBook = (props)=>{

  const [errors, setErrors] = useState({});
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
    newBook,
    {
      withCredentials: true
    }
    )
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      navigate("/books")
    })
    .catch((err)=>{
      console.log(err);
      console.log(err.response.data.errors);
      // setErrs(err.response.data.errors);
      if(err.response.status === 401){
        navigate("/");
      }
      if(err.response.data.errors){
        setErrors(err.response.data.errors)
      }
    })
  }



  return(
    <div className="edit-container">
      <h1 className="edit-header">Good Reads</h1>
      <h2 className="edit-title" className>New Book</h2>
      <Form submitHandler={newSubmitHandler}
      buttonText="Add New Book"
      book={newBook} setBook={setNewBook}
      errors={errors}/>
    </div>
  )
}
export default CreateBook;