import React from 'react';

function Todos  ({todos, deleteTodo, completeTodo })  {
    const todoList = todos.length ?(
        todos.map((todo, index) =>(
            <React.Fragment>
           <div key={todo.id}  className="collection-item" style={{textDecoration: todo.isCompleted ?("line-through") :("")}}>
               <span className="title">{todo.content}</span>
               <div>
                    <button className="btn-small"  onClick = {() => {deleteTodo(todo.id)}}>x</button>
                    <button className="btn-small"  onClick = {() => {completeTodo(index)}}>-</button>
               </div>  
            </div> 
           
            </React.Fragment>
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