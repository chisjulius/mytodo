import React, {useState} from 'react';


 function  AddTodo ({addTodo}){
 const [content, setContent]= useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTodo({content});
        setContent("")
    }
    const handleChange = e => {
        setContent( e.target.value)
    }
   
        return (
          <div className="collection-item">
              <form onSubmit = {handleSubmit}>
                  <div className="input-field">
                    <label htmlFor="addtodo">Add todo</label>
                    <input type="text" name="addtodo" onChange = {handleChange} value = {content}></input>
                  </div>
                  <div className="input-field center-align">
                     <button className="btn-small center">submit</button>
                  </div>
            
              </form>
          </div>
        )
    } 


export default AddTodo