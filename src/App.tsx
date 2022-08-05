import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Tables from "./components/Tables";
import Todo from "./components/AllTodo";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Todo />
      <Tables />
    </div>
  );
};

export default App;
