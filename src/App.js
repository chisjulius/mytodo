import React, {useState} from 'react';
import Todos from './todos'
import AddTodo from './addtodo'

function App (){
  const [todos, setTodos] =useState([
    {id: 1, content: "Buy some milk", isCompleted: false},
    {id: 2, content: "Play football", isCompleted: false},
    {id: 3, content: "Have some rest",isCompleted: false}
  ])

  const deleteTodo = (id)=>{
    const newTodos = todos.filter(todo =>(
      todo.id !==id
    ))
    setTodos(
      newTodos
    )
  }
  const addTodo = (todo) => {
    todo.id = Math.random()
    const newTodos = [...todos, todo];
    setTodos(
      newTodos
    )
  }
  const completeTodo =(index) =>{
    const newTodos =[...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }

    return(
      <div  className="todo-app">
        <div className="container">
          <h3 className="center teal-text">Todos</h3>
          <Todos deleteTodo={deleteTodo}  todos={todos} completeTodo={completeTodo}/>
          <AddTodo addTodo = {addTodo}/>
        </div>
      </div>

    );
  }



export default App;