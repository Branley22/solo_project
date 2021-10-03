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
    <div>
      <p>{OneBook.name}</p>
      <p>{OneBook.description}</p>
      <p>{OneBook.categories}</p>
      <img src={OneBook.image} alt="image" style={{width:"150px", height:"150px"}}/>
      <p>{OneBook.rating}</p>
      <DeleteBook id={OneBook._id}/>
    </div>
  )
}
export default OneBook;