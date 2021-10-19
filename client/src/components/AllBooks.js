import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteBook from './DeleteBook';
import Header from '../components/Header';
import UserProfile from '../components/UserProfile';

const AllBooks = (props)=>{

  const [userPage, setUserPage] = useState({});
  const [currentUserId, setCurrentUserId] = useState("");
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
      <div className="allbook-container">
        <div className="allbooks-header">
          <h1 className="allbooks-title">Good Reads</h1>
          <Header headerText="" headerPath={`/users/profile/${currentUserId}`}/>
        </div>
        <p className="add-new-book-p">
          <Link to={`/books/new/`} style={{color:"white", fontWeight:"bold"}}>
            Add new book
          </Link>
        </p>

        <table>
          <thead className="allbook-table">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>User Name</th>
              <th>Actions</th>
            </tr>
          </thead>
        </table>
        
        {
          bookList.map((book, index)=>(
            <div key={index}>
              <table className="allbook-table">
                <thead>
                  <tr>
                    <td>
                      <img src={book.image} alt="book image" className="small-img"/></td>
                    <td>{book.name}</td>
                    <td>
                      <Link to={`/users/profile/${book.user_id?._id}`}><p style={{color:"white"}}>Added by:{book.user_id?.username}</p></Link>
                    </td>
                    <td>
                      <Link to={`/books/${book._id}`} style={{color:"white"}}>
                        details
                      </Link> |
                      <Link to={`/books/edit/${book._id}`} style={{color:"white"}}>
                        edit
                      </Link>
                    </td>
                  </tr>
                </thead>
              </table>
              {/* <DeleteBook bookList={bookList} setBookList={setBookList} id={book._id}/> */}
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default AllBooks;