import React, {useState} from 'react';
import {Router} from '@reach/router';
import './App.css';
import Header from './components/Header';
import AllBooks from './components/AllBooks';
import CreateBook from './components/CreateBook';
import OneBook from './components/OneBook';
import UpdateBook from './components/UpdateBook';
import LogReg from './view/LogReg';
import Login from './components/Login';
import UserProfile from './components/UserProfile';

function App() {

  const [reloadBoolean, setReloadBoolean] = useState(false);

  return (
    <div className="App">
      {/* <Header setReloadBoolean={setReloadBoolean} reloadBoolean={reloadBoolean}/> */}
      <Router>
        <LogReg path="/"/>
        <Login setReloadBoolean={setReloadBoolean} reloadBoolean={reloadBoolean}
        path="/login"/>
        <AllBooks 
        default/>
        <CreateBook path='/books/new'/>
        <UserProfile path="/users/profile/:id"/>
        <OneBook path='/books/:id'/>
        <UpdateBook path='/books/edit/:id'/>
      </Router>
    </div>
  );
}

export default App;
