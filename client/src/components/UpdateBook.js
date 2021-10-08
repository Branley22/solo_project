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
    <div className="login-container">
      <h1 style={{paddingBottom:"30px", textAlign:"left", color:"rgb(119,242,245)", fontStyle:"italic"}}>Good Reads</h1>
      <h2 style={{fontSize:"25px", color:"rgb(119,242,245)", paddingBottom:"15px"}}>Edit/Update Book</h2>
      <Form submitHandler={updateBookHandler}
      buttonText="Update Book"
      book={updateBook} setBook={setUpdateBook}
      errors={errors}/>
    </div>
  )
}
export default UpdateBook;