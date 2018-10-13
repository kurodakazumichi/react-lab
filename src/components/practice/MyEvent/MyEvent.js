import React, { Component } from 'react';

export default class MyEvent extends Component 
{
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
  }

  // 入力ボックス変更時にメッセージを出力
  show (e) {
    // 3.greet プロパティ、入力値に基づいて、メッセージを生成
    console.log(`${this.props.greet}, ${e.target.value}!!`);
  }

  render() {
    return (
      <form>
        <label htmlFor="txtName">名前：</label>
        {/* 1, 2.入力変更時にshowメソッドを呼び出し*/}
        <input id="txtName" type="text" onChange={this.show} />
      </form>
    );
  }

}