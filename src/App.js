import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyHelloText from './atoms/Text/MyHelloText'
import MyTypeDebug from './atoms/Debug/MyTypeDebug';
import MyAttrText from './atoms/Text/MyAttrText';
import MyHelloContentText from './atoms/Text/MyHelloContentText';
import MyBook from './molecules/MyBooks/MyBooks';

class App extends Component 
{
  renderMyAttrText(){
    const data = {
      name:'山田権左衛門',
      age: 18,
      sex: '男'
    };

    return (
      <MyAttrText {...data} />
    )
  }

  renderMyBook() {
    const book = {
      isbn: 'WGS-JST-001',
      title:'速習 webpack',
      price:454,
      published:'WINGSプロジェクト'
    };

    return <MyBook info={book} />
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
          <MyHelloText name="山田" />
          <MyTypeDebug value="山田" />
          <MyTypeDebug value={ '鈴木' } />
          <MyTypeDebug value={ 108 }  />
          <MyTypeDebug value={ true } />
          <MyTypeDebug value={ ['うめ', 'もも', 'さくら'] } />
          <MyTypeDebug value={ {name: '山田太郎', age: 40} } />
          <MyTypeDebug value={ () => console.log('Hoge') } />
          {this.renderMyAttrText()}
          <MyHelloContentText>山田</MyHelloContentText>
          {this.renderMyBook()}
        </div>
      </div>
    );
  }
}

export default App;
