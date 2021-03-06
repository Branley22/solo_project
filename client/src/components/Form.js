import React from 'react';

const Form = (props)=>{

  const {submitHandler, buttonText, book, setBook, errors} = props;


  const newChangeHandler = (e)=>{
    let newStateObject = {...book};
    book.name = e.target.value;
    newStateObject[e.target.name] = e.target.value;
    console.log(e.target.name, e.target.value);
    setBook(newStateObject);
  }




  return(
    <div className="editbook">
      <form onSubmit={submitHandler} className="edit-form">
        
        <div>
          <label htmlFor="">Name:</label>
          <input onChange={newChangeHandler} name="name" type="text" value={book.name}/>
          {
            errors.name?
            <span style={{color:"red"}}>{errors.name.message}</span>
            :null
          }
        </div>

        <div>
          <label htmlFor="">Description:</label>
          <input onChange={newChangeHandler} name="description" type="textbox" value={book.description}/>
          {
            errors.description?
            <span style={{color:"red"}}>{errors.description.message}</span>
            :null
          }
        </div>

        <div>
          <label htmlFor="">Categories:</label>
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
          {
            errors.categories?
            <span style={{color:"red"}}>{errors.categories.message}</span>
            :null
          }
        </div>

        <div>
          <label htmlFor="">Image:</label>
          <input onChange={newChangeHandler} name="image" type="text" value={book.image}/>

          {
            errors.image?
            <span style={{color:"red"}}>{errors.image.message}</span>
            :null
          }
        </div>

        <div>
          <label htmlFor="">Rating:</label>
          <input onChange={newChangeHandler} name="rating" type="text" value={book.rating}/>
          {
            errors.rating?
            <span style={{color:"red"}}>{errors.rating.message}</span>
            :null
          }
        </div>
        
        <button className="deletebtn">{buttonText}</button>
      </form>
    </div>
  )
}
export default Form;