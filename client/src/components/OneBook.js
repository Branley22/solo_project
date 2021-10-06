import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteBook from './DeleteBook';

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
    <div className="one-book">
      <h2 style={{paddingBottom:"20px"}}>{OneBook.name}</h2>
      {/* <p>{OneBook.description}</p> */}
      {/* <p>{OneBook.categories}</p> */}
      <div className="align-one-book">
      <img className="one-book-img" src={OneBook.image} alt="image"/>
      {/* <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}> */}
      <p className="one-book_description">{OneBook.description}</p>
      </div>
      {/* <p>{OneBook.rating}</p> */}
      {/* </div> */}
      <DeleteBook id={OneBook._id}/>
    </div>
  )
}
export default OneBook;