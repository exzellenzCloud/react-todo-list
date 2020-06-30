import React from "react";
import logo from "./logo.svg";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList'

function App() {
  return (
    <div className="container">
      <div className="row">
        <TodoInput/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
