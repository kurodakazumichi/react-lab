import React, { Component } from 'react';

export default class MyFormUn extends Component {

  constructor(props) {
    super(props);

    this.name = React.createRef();
    this.email = React.createRef();
  }

  show() {
    console.log(`name: ${this.name.current.value}`);
    console.log(`email:${this.email.current.value}`);
  }

  render() {
    return (
      <form>
        <div>
          <label htmlFor='name'>名前：</label>
          <input id="name" name="name" type="text" ref={this.name} defaultValue="山田太郎" />
        </div>
        <div>
          <label htmlFor='email'>メールアドレス：</label>
          <input id="email" name="email" type="mail" ref={this.email} defaultValue="kazumichi96@gmail.com" />
        </div>
        <div>
          <button type="button" onClick={this.show.bind(this)}>送信</button>
        </div>
      </form>
    );

  }
}