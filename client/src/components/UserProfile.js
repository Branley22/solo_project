import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
    <div>
      <h1>Welcome to {userPage.username}'s Profile!</h1>
      {
        userBookList.map((book, index)=>(
          <div key ={index}>
          <p>{book.name}</p>
          <p>{book.description}</p>
          <p>{book.categories}</p>
          <img src={book.image} style={{width:"150px", height:"150px"}}/> 
          <p>{book.rating}</p>
          </div>
        ))
      }
    </div>
  )
}
export default UserProfile;