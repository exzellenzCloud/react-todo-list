import logo from "./logo.svg";
import uuid from "uuid/dist/v4";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    items: [],
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

  clearList = (e) => {
    this.setState({
      items:[]
    })
  };

  handleEdit = (id) => {
    const filteredItems= this.state.items.filter(item => item.id !== id)
    const selectedItem = this.state.items.find(item=>item.id === id);
    
    this.setState({
      items:filteredItems,
      item:selectedItem.title,
      id:id,
      editItem:true
    })



  };

  handleDelete = (id) => {
    const filteredItems= this.state.items.filter(item => item.id !== id)

    this.setState({
      items:filteredItems
    })
  };

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
