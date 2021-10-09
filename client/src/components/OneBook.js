import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteBook from './DeleteBook';
import Header from '../components/Header';

const OneBook = (props)=>{

  const [OneBook, setOneBook] = useState({});

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/books/${props.id}`)
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      setOneBook(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])


  return(
    <div className="login-container">
      <h1 className="userProfile-header">Good Reads</h1>
        <Header headerText="Go back" headerPath={`/books`}/>
      <div>
        <h2>
          <span>
            Book Name:
          </span>
          {OneBook.name}
        </h2>
      </div>
        <div className="one-book">
          <img src={OneBook.image} alt="image" className="lg-img"/>
          <h3>Description:</h3>
            <p style={{color:"rgb(209, 209, 209)"}}>{OneBook.description}</p>
            <DeleteBook id={OneBook._id}/>
        </div>
      </div>
  )
}
export default OneBook;