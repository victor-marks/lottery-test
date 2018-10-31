import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Ball from './Ball';

it('renders without crashing', function () {
  shallow(<Ball />);
});

it('matches snapshot', function () {
  let wrapper = shallow(<Ball />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});