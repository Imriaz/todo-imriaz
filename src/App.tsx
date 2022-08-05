import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './Model/model';
import TodoList from './Components/TodoList';
import Navbar from './Components/Navbar';

// let name:string;
// let age:number | string;
// let isStudent:boolean;
// let hobbies:string[];
// let role:[number, string];

// name="imriaz";
// console.log(name);

// let printName:(name:string) =>never;

// type Person = {
//   name:string;
//   age?:number;
// }

// let person:Person = {
// name:"Imriaz",
// age:22
// }

// let listOfPeople:Person[];

// interface Person {
//   name:string;
//   age?:number;
// }

// interface Guy extends Person {
//   profession:string;
// }

// type X = {
//   a:string,
//   b:number
// }
// type Y = X & {
//   c: string;
//   d: number;
// };

// let y:Y={
//   a:"He",
//   b:1,
//   c:"hello",
//   d:5
// }


const App: React.FC =() =>{
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  }

  console.log(todos);

  return (
    <div className="App">
      <Navbar />
      <span className="heading">Task</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
