import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from '../components/Form';

const UpdateBook = (props)=>{

  const [errors,setErrors] = useState({});
  const [updateBook, setUpdateBook] = useState({
    name:"",
    description:"",
    categories:"",
    image:"",
    rating:""
  })

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/books/${props.id}`)
    .then((res)=>{
      console.log(res.data);
      setUpdateBook(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  const updateBookHandler = (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/books/${props.id}`,
    updateBook
    )
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      navigate("/books")
    })
    .catch((err)=>{
      console.log(err);
      console.log(err.response.data.errors);
      setErrors(err.response.data.errors)
    })
  }

  
  return(
    <div className="edit-container">
      <h1 className="edit-header">Good Reads</h1>
      <h2 className="edit-title">Update Book</h2>
      <Form submitHandler={updateBookHandler}
      buttonText="Update Book"
      book={updateBook} setBook={setUpdateBook}
      errors={errors}/>
    </div>
  )
}
export default UpdateBook;