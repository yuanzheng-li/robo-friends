import { shallow } from 'enzyme';
import React from 'react';
import { MainPage } from './MainPage';

let wrapper;
let mockProps;

beforeEach(() => {
  mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };

  wrapper = shallow(<MainPage { ...mockProps } />);
});

it('should render MainPage component', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should filter robots correctly', () => {
  mockProps = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 1,
      name: 'emma',
      email: 'emma@gmail.com'
    }],
    searchField: 'emma',
    isPending: false
  };

  wrapper = shallow(<MainPage {...mockProps} />);
  
  expect(wrapper.instance().filterRobots()).toEqual([{
    id: 1,
    name: 'emma',
    email: 'emma@gmail.com'
  }]);
});
