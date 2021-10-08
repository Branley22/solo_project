import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Header = (props)=>{

  const {headerText, headerPath} = props;
  const [currentUserId, setCurrentUserId] = useState("");
  const {reloadBoolean} = props;

  const logout = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8000/api/users/logout",{ 
    }, {
      withCredentials: true,
    })
    .then((res)=>{
      console.log(res.data);
      setCurrentUserId("");
      localStorage.removeItem("userId");
      navigate("/login");
    })
    .catch((err)=>{
      console.log(err);
    })
  };
  
  useEffect(()=>{
    console.log("inside useEffect in header");
    setCurrentUserId(localStorage.getItem("userId"));
  },[reloadBoolean])

  return(
    <div>
      <ul style={{display:"flex", justifyContent:"space-between", marginBottom:"35px"}}>
        <Link to={headerPath}>{headerText}</Link>
        {
          currentUserId?
          <Link to={`/users/profile/${currentUserId}`}><li> Your Profile</li></Link>
          :null
        }
        <button className="logout-link" onClick={logout}>Logout</button>
      </ul>
    </div>
  )
}
export default Header;