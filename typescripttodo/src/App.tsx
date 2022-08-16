import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import Todolist from './components/Todolist';

let name:String;
name="Basila";

const App:React.FC=()=> {

  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
    setTodos([...todos,{id:Date.now(), todo:todo , isDone:false}])
    setTodo("")
     
    }

    console.log(todos)

  }
  console.log(todo)

  return (
    <div className="App">
      <span className="heading">Todo Practise</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/> 




       {/* Todo list */}

       <Todolist todos={todos} setTodos={setTodos}/>

       {/* {todos.map((t)=>(
        <li>{t.todo}</li>

       ))}
       */}
    </div>
  );
}

export default App;
