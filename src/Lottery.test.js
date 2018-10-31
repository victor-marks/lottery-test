import React from 'react';
import { shallow, mount } from 'enzyme';
import Lottery from './Lottery';

it('renders without crashing', function () {
  shallow(<Lottery />);
});

it('can be event tested', function () {
  let wrapper = shallow(<Lottery numBalls={3} maxNum={10} />);

  wrapper.setState({ nums: [1, 2, 3] });
  wrapper.simulate("click");
  expect(wrapper.html()).toContain("<i>1</i>")
}); // end

it('can be event tested', function () {
  let wrapper = mount(<Lottery numBalls={2} maxNum={10} />);
  let b_elem = wrapper.find('button').first();
  b_elem.simulate('click');
  let twoNumbers = wrapper.state().nums;
  console.log('HEY YOU THIS IS WRAPPER: ', wrapper);
  console.log(wrapper.state().nums);

  expect(twoNumbers).toEqual([expect.any(Number), expect.any(Number)])
}); 