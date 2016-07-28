import React from 'react';
import { mount, shallow } from 'enzyme';
import Task from '../Task';
import {expect} from 'chai';
import sinon from 'sinon';

describe('<Task />', () => {

  it('calls componentDidMount', () => {
    const task = {
      text: "ABCDEF"
    }
    const wrapper = shallow(<Task task={task} />);
    const header = wrapper.find('.taskText').at(0);
    expect(header.text()).to.be.equal(': ' + task.text);
  });
});

// write more tests
// examples: 
// 1. Test that item with text "ABCDEF" is rendered as ": ABCDEF" (DONE)
// 2. Test that completed task is rendered with class "checked"
// 3. Test that private task is rendered with class "private"
// 4. Test that private task button has text "Private"
// 5. Test that non private task button has text "Public"
// 6. Test that action togglePrivate is executed with parameter "true"" if task is public and viceversa
// 7. Test that action toggleChecked is executed with parameter "true"" if task is not completed and viceversa
// 8. Test that action deleteThisTask is executed