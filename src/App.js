import logo from "./logo.svg";
import uuid from "uuid/dist/v4";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "sleep" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem ={
      id:this.state.id,
      title:this.state.item
    }

    const updatedItems = [...this.state.items,newItem]

    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    })
  };

  clearList = (e) => {};

  handleEdit = (id) => {};

  handleDelete = (id) => {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-10 mt-4">
                <h3 className="text-capitalize text-center">ToDo Input</h3>
                <TodoInput
                  item={this.state.item}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete}
                />
                <TodoList
                  items={this.state.items}
                  handleChange={this.handleChange}
                  clearList={this.clearList}
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
