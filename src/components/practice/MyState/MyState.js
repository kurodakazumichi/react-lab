import React, { Component } from 'react';

export default class MyState extends Component
{
  constructor(props) {
    super(props);

    // Stateを初期化
    this.state = {
      current : new Date()
    };

    // 1000 ミリ病おきにStateを更新
    setInterval(() => {
      this.setState({
        current: new Date()
      })
    }, 1000);
  }

  render() {
    return (
      <div>現在時刻は{this.state.current.toLocaleString()}です。</div>
    );
  }
}