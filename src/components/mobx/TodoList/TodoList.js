import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class TodoList extends Component
{
  createNew(e) {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value);
      e.target.value = "";
    }
  }
  filter(e) {
    this.props.store.filter = e.target.value;
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete;
  }

  clear(todo) {
    this.props.store.clear(todo.id);
  }

  render () {
    const { filter, todos, filteredTodos, clearComplete, clear } = this.props.store;
    const todoList = filteredTodos.map(todo => (
      <li key={todo.id}>
        <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
        {todo.value}
        <a href="#" onClick={this.clear.bind(this, todo)}>削除</a>
      </li>
      
    ));

    return (
      <div>
        <h1>todos</h1>
        <label htmlFor="filter">Filter:</label>
        <input id="filter" className="create" onKeyPress={this.createNew.bind(this)} /><br />
        <label htmlFor="new">New:</label>
        <input id="new" className="filter" value={filter} onChange={this.filter.bind(this)} />
        <ul>{todoList}</ul>
        <a href="#" onClick={clearComplete}>Clear Complete</a>
      </div>
    );
  }
}

export default TodoList;