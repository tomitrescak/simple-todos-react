import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import {expect} from 'chai';
import sinon from 'sinon';

describe('Testing <App />', () => {

  it('renders header named "Todo List"', () => {
    const wrapper = shallow(<App tasks={[]} incompleteCount={10} />);
    const header = wrapper.find('h1').at(0);
    expect(header.text()).to.be.equal('Todo List (10)');
  });

  const items = [{}, {}];

  it('renders 10 items when 2 tasks specified', () => {
    const wrapper = shallow(<App tasks={items} incompleteCount={1} />);
    expect(wrapper.find('Task').length).to.be.equal(items.length);
  });

  it('simulates click events', () => {
    const hideCompleted = sinon.spy();
    const wrapper = shallow(
      <App tasks={items} incompleteCount={1} hideCompleted={hideCompleted} />
    );
    wrapper.find('#hideCompleted').simulate('click');
    expect(hideCompleted.calledOnce).to.equal(true);
  });

  // write more tests
  // examples: 
  // 1. Test that added item with text "ABCDEF" is rendered with ABCDEF
  // 2. Test that completed item is rendered 

});