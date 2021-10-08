import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const DeleteBook = (props)=>{
  const {id, bookList, setBookList} = props;

  const deleteFilter = (id)=>{
    let newList = bookList.filter((book)=>
    book._id !== id)
    setBookList(newList)
  }

  const deleteHandler = (e)=>{
    axios.delete(`http://localhost:8000/api/books/${id}`)
    .then((res)=>{
      console.log(res.data);
      if(bookList){
      deleteFilter(id);
      }
      else{
        navigate("/books")
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return(
    <div>
      <button className="submitbtn" onClick={deleteHandler}>Check out</button>
    </div>
  )
}
export default DeleteBook;