import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Header = (props)=>{





  return(
    <div>
      <ul>
        <li><Link to="/books">All books</Link></li>
        <li><Link to="/books/new">New book</Link></li>
      </ul>
    </div>
  )
}
export default Header;