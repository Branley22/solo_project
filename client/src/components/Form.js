import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Form = (props)=>{

  const {submitHandler, buttonText, book, setBook} = props;


  const newChangeHandler = (e)=>{
    let newStateObject = {...book};
    book.name = e.target.value;
    newStateObject[e.target.name] = e.target.value;
    console.log(e.target.name, e.target.value);
    setBook(newStateObject);
  }




  return(
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Name</label>
          <input onChange={newChangeHandler} name="name" type="text" value={book.name}/>
        </div>

        <div>
          <label htmlFor="">Description</label>
          <input onChange={newChangeHandler} name="description" type="textbox" value={book.description}/>
        </div>

        <div>
          <label htmlFor="">Categories</label>
          <select onChange={newChangeHandler} name="categories" value={book.categories}>
            <option value="none" defaultValue hidden>
              Select a category
            </option>
            <option value = "Action">Action</option>
            <option value = "Comedy">Comedy</option>
            <option value = "Religion">Religion</option>
            <option value = "Self-Help">Self-Help</option>
            <option value = "Romance">Romance</option>
          </select>
        </div>

        <div>
          <label htmlFor="">Image</label>
          <input onChange={newChangeHandler} name="image" type="text" value={book.image}/>
        </div>

        <div>
          <label htmlFor="">Rating</label>
          <input onChange={newChangeHandler} name="rating" type="text" value={book.rating}/>
        </div>
        
        <button>{buttonText}</button>
      </form>
    </div>
  )
}
export default Form;