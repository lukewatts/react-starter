import React, { Component } from 'react';
import './App.css';
import '../TodoList/TodoList';
import TodoList from '../TodoList/TodoList';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoList />
      </div>
    );
  }
}
