import React from 'react';
import { mount } from 'enzyme';
import Lottery from './Lottery';

it('renders without crashing', function () {
  mount(<Lottery />);
});