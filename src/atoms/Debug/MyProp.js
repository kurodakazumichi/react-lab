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
    /** 特定のインスタンスかどうか */
    prop1: PropTypes.instanceOf(Member),
    /** 指定された値が指定された値のいずれかであること */
    prop2: PropTypes.oneOf(['男', '女', '不明']),
    /** 指定された値が指定された型のいずれかであること */
    prop3: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number, PropTypes.bool
    ]),
    /** numberの配列であること */
    prop4: PropTypes.arrayOf(PropTypes.number)
}