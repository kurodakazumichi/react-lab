import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputText extends Component
{
  /**
   * 型定義
   */
  static propTypes = {
    
  }
  
  /**
   * 規定値を定義
   */
  static defaultProps = {
    name: '',
    type: 'text',
    value: '',
    onChange: () => {}
  };

  constructor(props)
  {
    super(props);
    

  }

  render () {
    const { props } = this;
    return (
      <div>
        <input 
          name={props.name}
          type={props.type}
          onChange={props.onChange}
        />
      </div>
    );
  }
}