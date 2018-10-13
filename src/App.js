import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Part4 import list
import MyHelloText from './components/practice/Text/MyHelloText/MyHelloText'
import MyTypeDebug from './components/practice/Debug/MyTypeDebug';
import MyAttrText from './components/practice/Text/MyAttrText';
import MyHelloContentText from './components/practice/Text/MyHelloContentText';
import MyBook from './components/practice/MyBooks/MyBooks';

// Part5 import list
import MyProp, { Member } from './components/practice/Debug/MyProp'

// Part6 import list
import MyArticle from './components/practice/MyArticle/MyArticle';

// Part7 import list
import MyEvent from './components/practice/MyEvent/MyEvent';
import MyPool from './components/practice/MyPool/MyPool';
import MyState from './components/practice/MyState/MyState';
import MyParent from './components/practice/MyParent/MyParent';
import MyForm from './components/practice/MyForm/MyForm';
import MyFormUn from './components/practice/MyFormUn/MyFormUn';

// Part8 import list
import MyTextarea from './components/practice/MyTextArea/MyTextArea';
import MySelect from './components/practice/MySelect/MySelect';
import MyList from './components/practice/MyList/MyList';
import MyRadio from './components/practice/MyRadio/MyRadio';
import MyCheck from './components/practice/MyCheck/MyCheck';


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

  /**
   * 速習React part6
   */
  part6() {

    const articles = [
      { 
        url         : 'https://reactjs.org/', 
        title       : 'React',
        description : 'React公式サイト',
        isNew       : true,
      },
      {
        url         : 'https://mobx.js.org/',
        title       : 'mobx',
        description : 'mobx公式サイト'
      },
      {
        url         : 'https://jestjs.io/',
        title       : 'Jest',
        description : 'Jest公式サイト'
      },
      {
        url         : 'https://airbnb.io/enzyme/',
        title       : 'Enzyme',
        description : 'Enzymeリファレンス'
      },
      {
        url         : 'https://storybook.js.org/',
        title       : 'storybook',
        description : 'storybook公式'
      }
    ];

    const list = articles.map((article) => <MyArticle {...article} key={article.url} />);

    return (
      <div className="part6">
        <dl>{list}</dl>
      </div>
    )
  }

  /**
   * 速習React part7
   */
  part7 (){
    return (
      <div className="part7">
        <MyEvent greet="Hello" />
        <MyPool />
        <MyState />
        <MyParent />
        <MyForm />
        <MyFormUn />
      </div>
    );
  }

  /**
   * 速習React part8
   */
  part8() {
    return (
      <div className="part8">
        <MyTextarea />
        <MySelect />
        <MyList />
        <MyRadio />
        <MyCheck />
      </div>
    );
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
          {this.part6()}
          {this.part7()}
          {this.part8()}
        </div>
      </div>
    );
  }
}

export default App;
