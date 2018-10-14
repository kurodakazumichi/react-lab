import React, { Component } from 'react';
// Part4 import list
import MyHelloText from '../Text/MyHelloText/MyHelloText'
import MyTypeDebug from '../Debug/MyTypeDebug';
import MyAttrText from '../Text/MyAttrText';
import MyHelloContentText from '../Text/MyHelloContentText';
import MyBook from '../MyBooks/MyBooks';

// Part5 import list
import MyProp, { Member } from '../Debug/MyProp'

// Part6 import list
import MyArticle from '../MyArticle/MyArticle';

// Part7 import list
import MyEvent from '../MyEvent/MyEvent';
import MyPool from '../MyPool/MyPool';
import MyState from '../MyState/MyState';
import MyParent from '../MyParent/MyParent';
import MyForm from '../MyForm/MyForm';
import MyFormUn from '../MyFormUn/MyFormUn';

// Part8 import list
import MyTextarea from '../MyTextArea/MyTextArea';
import MySelect from '../MySelect/MySelect';
import MyList from '../MyList/MyList';
import MyRadio from '../MyRadio/MyRadio';
import MyCheck from '../MyCheck/MyCheck';
import MyCheckMulti from '../MyCheckMulti/MyCheckMulti';
import MyFile from '../MyFile/MyFile';

// Part9 import list
import MyLife from '../MyLife/MyLife';

export default class Practice extends Component
{
  render(){
    return (
      <div>
        <h1>速習React</h1>
        {this.part4()}
        {this.part5()}
        {this.part6()}
        {this.part7()}
        {this.part8()}
        {this.part9()}
      </div>
    );
  }
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
        <h2>パート4</h2>
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
        <h2>パート5</h2>
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
        <h2>パート6</h2>
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
        <h2>パート7</h2>
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
        <h2>パート8</h2>
        <MyTextarea />
        <MySelect />
        <MyList />
        <MyRadio />
        <MyCheck />
        <MyCheckMulti />
        <MyFile />
      </div>
    );
  }

  /**
   * 速習React part9
   */
  part9() {
    return (
      <div className="part9">
        <h2>パート9</h2>
        <MyLife />
      </div>
    );
  }
}