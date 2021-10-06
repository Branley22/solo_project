import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteBook from './DeleteBook';

const AllBooks = (props)=>{

  const [bookList, setBookList] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/books')
    .then((res)=>{
      console.log(res.data);
      setBookList(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return(
    <div>
      <h1>The Book Collection</h1>
      <div>
        {
          bookList.map((book, index)=>(
            <div key={index}>
              <Link to={`/books/${book._id}`}>
                <p>{book.name}</p>
                <p>{book.description}</p>
                <p>{book.categories}</p>
                <img src={book.image} alt="book image" style={{width:"150px", height:"150px"}}/>
                <p>{book.rating}</p>
              </Link>
              <Link to={`/books/edit/${book._id}`}>
                Edit
              </Link>
              <Link to={`/users/profile/${book.user_id?._id}`}><p>Added by:{book.user_id?.username}</p></Link>
              <DeleteBook bookList={bookList} setBookList={setBookList} id={book._id}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default AllBooks;