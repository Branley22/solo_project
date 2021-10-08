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
      <div>
      <h1 style={{paddingBottom:"30px", textAlign:"left", color:"rgb(119,242,245)", fontStyle:"italic"}}>Good Reads</h1>
      </div>
      <Header headerText="Go back" headerPath={`/books`}/>
      <div>
        <h2 style={{color:"rgb(119,242,245)"}}>
          <span style={{color:"rgb(209,209,209)", marginRight:"10px"}}>
            Book Name:
          </span>{OneBook.name}
          </h2>
        {/* <Header headerText="Go back" headerPath={`/books`}/> */}
      </div>
        <div className="one-book">
          <img style={{width:"350px", height:"350px", border:"5px solid black"}} src={OneBook.image} alt="image"/>
          <h2 style={{color:"rgb(209, 209, 209)", marginBottom:"10px"}}>Description:</h2>
          <p style={{color:"rgb(209, 209, 209)", marginBottom:"15px"}}className="one-book_description">{OneBook.description}</p>
          <DeleteBook id={OneBook._id}/>
        </div>
        {/* <DeleteBook id={OneBook._id}/> */}
      </div>
  )
}
export default OneBook;


{/* <p>{OneBook.description}</p> */}
{/* <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}> */}
{/* <p>{OneBook.rating}</p> */}