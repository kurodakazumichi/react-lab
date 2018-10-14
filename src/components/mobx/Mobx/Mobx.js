import React, { Component } from 'react';
import TodoList from '../TodoList';

export default class Mobx extends Component
{
  constructor(props)
  {
    super(props);
    
  }

  render() {
    return (
      <div>
        <h1>Mobx</h1>
        <TodoList />
      </div>
    );
  }
}