import logo from "./logo.svg";
import uuid from "uuid/dist/v4";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import React, { Component } from 'react'

export default class App extends Component {
  
state ={
  items:[{id:1,title:'wake up'},
  {id:2,title:'sleep'}],
  id: uuid(),
  item:'',
  editItem:false 
};

  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    );
  }
}
