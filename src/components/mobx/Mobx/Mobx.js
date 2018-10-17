import React, { Component } from 'react';
import Counter, { appState } from '../Counter/Counter';
import TodoList from '../TodoList/TodoList';
import TodoStore from '../TodoList/TodoStore';

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
        <Counter store={appState} />
        <TodoList store={TodoStore} />
      </div>
    );
  }
}