import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MyHelloText from './MyHelloText';

describe('<MyHelloText /> Testing', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MyHelloText />);
  })

  it('DOM', () => {
    expect(wrapper.text()).toBe('こんにちは、名無しの権兵衛さん!');
    wrapper.setProps({ name: '山田' })
    expect(wrapper.text()).toBe('こんにちは、山田さん!');
  })

  it('MyHelloText renders correctoly', () => {
    const tree = renderer
      .create(<MyHelloText />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
