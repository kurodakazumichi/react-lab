import React, { Component } from 'react';

export default class MyHelloContentText extends Component
{
    render() {
        return <div>こんにちは、{this.props.children}さん!</div>
    }
}