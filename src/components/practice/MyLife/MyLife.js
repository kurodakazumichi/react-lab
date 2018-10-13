import React, { Component } from 'react';

export default class MyLife extends Component
{
  constructor(props)
  {
    super(props);
    
    this.state = {
      current: new Date()
    };
  }

  componentDidMount()
  {
    this.timer = setInterval(
      () => {
        this.setState({
          current: new Date()
        })
      },
      1000
    );
  }

  componentWillUnmount()
  {
    clearInterval(this.timer)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(`currentState:${this.state}`);
    // console.log(`nextState:${nextState}`);
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot)
  {
    // console.log(`prevProps:${prevProps}`);
    // console.log(`prevState:${prevState}`);
    // console.log(`snapshot:${snapshot}`);
  }
  render()
  {
    return (
      <div>
        現在時刻は{this.state.current.toLocaleString()}です。
      </div>
    );
  }
}