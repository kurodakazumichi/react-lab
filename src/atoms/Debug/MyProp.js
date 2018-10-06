import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * メンバー
 */
export class Member{}

export default class MyProp extends Component 
{
    /** 描画 */
    render() 
    {
        console.log(this.props);
        return <p>結果はコンソールを確認してください。</p>
    }
}

MyProp.propTypes = {
    prop1: PropTypes.instanceOf(Member),
    prop2: PropTypes.oneOf(['男', '女', '不明']),
}