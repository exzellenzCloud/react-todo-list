import React from "react";
import logo from "./logo.svg";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
state ={
  items:[{id:1,title:'wake up'},
  {id:1,title:'sleep'}]
}



  return (
    <div className="container">
      <div className="row">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
