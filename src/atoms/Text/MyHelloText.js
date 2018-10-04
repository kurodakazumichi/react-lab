import React, { Component } from 'react';

export default class MyHelloText extends Component 
{
  render() {
    return <div>こんにちは、{this.props.name}さん!</div>;
  }
}