import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Part4 import list
import MyHelloText from './components/atoms/Text/MyHelloText'
import MyTypeDebug from './components/atoms/Debug/MyTypeDebug';
import MyAttrText from './components/atoms/Text/MyAttrText';
import MyHelloContentText from './components/atoms/Text/MyHelloContentText';
import MyBook from './components/molecules/MyBooks/MyBooks';

// Part5 import list
import MyProp, { Member } from './components/atoms/Debug/MyProp'

/**
 * アプリケーション
 */
class App extends Component 
{
  /**
   * 速習React part4
   */
  part4 () {
    const data = {
      name:'山田権左衛門',
      age: 18,
      sex: '男'
    };
    const book = {
      isbn: 'WGS-JST-001',
      title:'速習 webpack',
      price:454,
      published:'WINGSプロジェクト'
    };
    return (
      <div className="part4">
          <MyHelloText />
          <MyTypeDebug value="山田" />
          <MyTypeDebug value={ '鈴木' } />
          <MyTypeDebug value={ 108 }  />
          <MyTypeDebug value={ true } />
          <MyTypeDebug value={ ['うめ', 'もも', 'さくら'] } />
          <MyTypeDebug value={ {name: '山田太郎', age: 40} } />
          <MyTypeDebug value={ () => console.log('Hoge') } />
          <MyAttrText {...data} />
          <MyHelloContentText>山田</MyHelloContentText>
          <MyBook info={book} />
      </div>
    );
  }

  /**
   * 速習React part5
   */
  part5 () {
    return (
      <div className="part5">
        <MyProp prop1={new Member()} />
        <MyProp prop2="男" />
        <MyProp prop3={true} />
        <MyProp prop4={[10, 20]} />
        <MyProp prop5={{name:"山田", age:40, sex:'男'}} />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Welcome to React</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>

          {this.part4()}
          {this.part5()}
        </div>
      </div>
    );
  }
}

export default App;
