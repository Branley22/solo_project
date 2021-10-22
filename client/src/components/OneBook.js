import React, {useState, useEffect} from 'react';
import axios from 'axios';
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
    <div className="edit-container">
      <h1 className="edit-header">Good Reads</h1>
        <div>
        <Header headerText="Go back" headerPath={`/books`} />
        </div>
      <div>
        <h4>
          <span>
            Book Name:
          </span>
          {OneBook.name}
        </h4>
      </div>
        <div className="one-book">
          <img src={OneBook.image} alt="specific book" className="lg-img"/>
          <h3>Description:</h3>
            <p className="one-book-p">{OneBook.description}</p>
          <h3>Rating:</h3>
            <p className="one-book-p">{OneBook.rating}</p>
            <DeleteBook id={OneBook._id}/>
        </div>
      </div>
  )
}
export default OneBook;