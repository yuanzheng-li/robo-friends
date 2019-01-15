import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('should render CardList component', () => {
  const mockRobots = [{
    id: 1,
    name: 'Yuanzheng Li',
    email: 'yli@gmail.com' 
  }];
  
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
