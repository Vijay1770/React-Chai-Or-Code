//1:11:32
import { useState } from "react"
import { postData } from "../api/PostApi";

export const Form=()=>{

  //Adding the form data on API....or list...
const [addData , setAddData]=useState({
  title:"",
  body:"",
});

const handleInputChange=(e)=>{
  const name=e.target.name;
  const value =e.target.value;

  setAddData((prev)=>{
    return {
      ...prev,
      [name]:value,      
    };
  });
  console.log(setAddData());
  
};

const addPostData=async()=>{
  postData(addData);
}


const handleFormSubmit=(e)=>{
  e.preventDefault();
  addPostData();
}


return (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="title"></label>
            <input
              type="text"
              autoComplete="off"
              id="title"
              name="title"
              placeholder="Add Title"
              value={addData.title}
              onChange={handleInputChange}
            />
          </div>
    
          <div> 
            <label htmlFor="body"></label>
            <input
              type="text"
              autoComplete="off"
              placeholder="Add Post"
              id="body"
              name="body"
              value={addData.body}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Add
          </button>
        </form>
      );
}