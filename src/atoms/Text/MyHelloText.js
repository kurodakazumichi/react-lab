import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyHelloText extends Component 
{
  render() {
    return <div>こんにちは、{this.props.name}さん!</div>;
  }
}

/**
 * 型定義
 */
MyHelloText.propTypes = {
  name: PropTypes.string.isRequired
};

/**
 * 規定値を定義
 */
MyHelloText.defaultProps = {
  name: '名無しの権兵衛'
};