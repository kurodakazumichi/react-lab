import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyHelloText extends Component 
{
  /**
   * 型定義
   */
  static propTypes = {
    name: PropTypes.string.isRequired
  }
  
  /**
   * 規定値を定義
   */
  static defaultProps = {
    name: '名無しの権兵衛'
  };

  /** 描画 */
  render() {
    return <div>こんにちは、{this.props.name}さん!</div>;
  }
}

