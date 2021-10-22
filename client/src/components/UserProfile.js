import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../components/Header';

const UserProfile = (props)=>{

  const [userBookList, setUserBookList] = useState([]);
  const [userPage, setUserPage] = useState({});
  const {id} = props;


  useEffect(()=>{
    axios.get(`http://localhost:8000/api/books/users/${id}`)
    .then((res)=>{
      console.log(res.data);
      setUserBookList(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/users/${id}`)
    .then((res)=>{
      console.log(res.data);
      setUserPage(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return(
    <div className="userP-container">
        <Header headerText="Go back" headerPath={`/books`}/>
        <h1 className="userProfile-header">Good Reads</h1>
      <h1 className="userProfile-title">Welcome to {userPage.username}'s Profile!</h1>

      <table className="userProfile-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Rating</th>
          </tr>
        </thead>
      </table>
      
      {
        userBookList.map((book, index)=>(
          <div key ={index}>
            <table className="userProfile-table">
              <thead>
                <tr>
                <td><img src={book.image} className="small-img" alt="specific book"/></td>
                <td>{book.name}</td>
                <td>{book.description}</td>
                <td>{book.categories}</td>
                <td>{book.rating}</td>
                </tr>
              </thead>
            </table>
          </div>
        ))
      }
    </div>
  )
}
export default UserProfile;