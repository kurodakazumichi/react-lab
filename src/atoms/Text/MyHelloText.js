import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyHelloText extends Component 
{
  render() {
    return <div>こんにちは、{this.props.name}さん!</div>;
  }
}

MyHelloText.propTypes = {
  name: PropTypes.string.isRequired
};