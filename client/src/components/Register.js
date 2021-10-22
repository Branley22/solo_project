import React, {useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Register = (props)=>{

  const [confirmReg, setConfirmReg] = useState("");
  const [Errors, SetErrors] = useState({});
  const [user, setUser] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const handleChange = (e)=>{
    setUser({
      ...user,
        [e.target.name]: e.target.value
    })
  }


  const register = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8000/api/users/register",
    user,
    {
      withCredentials: true,
    }
    )
    .then((res)=>{
      console.log(res.data);
      navigate("/login");
      setUser({
        userName:"",
        email:"",
        password:"",
        confirmPassword:"",
      })
      setConfirmReg("Thank you for registering, can login now");
      SetErrors({});
    })
    .catch((err)=>{
      console.log(err);
      SetErrors(err.response.data.errors);
    })
  }


  return(
    <div className="login-container">
      <h2 className="login-title"><span className="title">Register</span></h2>
      <form onSubmit={register} className="register-form">
        {
          confirmReg?
          <h1 style={{color:"grey"}}>{confirmReg}</h1>
          :null
        }
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={user.username} onChange={(e)=>handleChange(e)}/>
          {
            Errors.username?
            <span className="errors-text">{Errors.username.message}</span>
            :null
          }
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={(e)=>handleChange(e)}/><br/>
          {
            Errors.email?
            <span className="errors-text">{Errors.email.message}</span>
            :null
          }
        </div>

        <div>
          <label>Password:</label>
          <input type="password" name="password" value={user.password} onChange={(e)=>handleChange(e)}/>
          {
            Errors.password?
            <span className="errors-text">{Errors.password.message}</span>
            :null
          }
        </div>

        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={(e)=>handleChange(e)}/>
          {
            Errors.confirmPassword?
            <span className="errors-text">{Errors.confirmPassword.message}</span>
            :null
          }
        </div>
        <button className="loginbtn">
          <Link to="/login">
            Back to login
          </Link>
        </button>
        <button className="loginbtn" type="submit">Register Me</button>
      </form>
    </div>
  )
}

export default Register;