import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

export const appState = observable({count: 0})
appState.increment = function() {
  this.count++;
}
appState.decrement = function() {
  this.count--;
}

@observer class Counter extends Component
{
  @observable count = 0;

  render () {
    return (
      <div>
        Counter: {this.props.store.count}<br />
        <button onClick={this.handleDec}>-</button>
        <button onClick={this.handleInc}>+</button>
      </div>
    );
  }

  handleDec = () => {
    this.props.store.decrement();
  }

  handleInc = () => {
    this.props.store.increment();
  }
}

export default Counter;