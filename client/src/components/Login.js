import React, {useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Login = (props)=>{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {reloadBoolean, setReloadBoolean} = props;

  const login = event =>{
    event.preventDefault();
    axios.post("http://localhost:8000/api/users/login",{
      email: email,
      password: password,
    },

    {
      withCredentials: true
    })

    .then((res)=>{
      console.log(res.cookie, "cookie");
      console.log(res, "res");
      console.log(res.data, "is res data");
      localStorage.setItem("userId", res.data.userId);
      setReloadBoolean(!reloadBoolean);
      navigate("/books");
      // navigate("/");
    })
    .catch((err) =>{
      console.log(err.response);
      setErrorMessage(err.response.data.message)
    });
  }
  return(
    <div className="login-container">
      <h2 className="login-title">
        <span className="title">Login</span>
      </h2>

      <form onSubmit={login} className="login-form">
        <div>
          <label>Email Address:</label>
          <input
            type="text" 
            name="email" 
            value={email} onChange={(e)=> setEmail(e.target.value)}
            placeholder="Example@gmail.com"/>
        </div>
        <div>
          <label>Password:</label>
          <input
          type="password" 
          name="password" 
          value={password.password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>

        <p className="login-error-text">{errorMessage? errorMessage : ""}</p>

        <div className="login-footer">
          <button className="loginbtn">
          <Link to="/">
            Don't have an account?
          </Link>
          </button>
          <button className="loginbtn"
            type="submit">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  )
  }


  export default Login;