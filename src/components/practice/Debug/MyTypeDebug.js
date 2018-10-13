import { Component } from 'react';

export default class MyTypeDebug extends Component
{
    render() {
        console.log(this.props.value);
        return null;
    }
}