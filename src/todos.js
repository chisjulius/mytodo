import React from 'react';

function Todos  ({todos, deleteTodo, completeTodo })  {
    const todoList = todos.length ?(
        todos.map((todo, index) =>(
           <div key={todo.id}  className="collection-item" style={{textDecoration: todo.isCompleted ?("line-through") :("")}}>
               {todo.content}            
               <button className="btn-small secondary-content"  onClick = {() => {deleteTodo(todo.id)}}>delete</button>
               <button className="btn-small secondary-content"  onClick = {() => {completeTodo(index)}}>complete</button> 
           </div> 
        ))
    ) :(
        <p className="center">No more todos</p>
    )
            return (
                <div className="collection">
                    {todoList}
                </div>
            ) 
    
    
        }
export default Todos