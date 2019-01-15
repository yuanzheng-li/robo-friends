import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL
} from './constants';

import * as reducers from './reducers';

describe('Search Robots', () => {
  const initialStateSearch = {
    searchField: ''
  };

  it('should return the initial search state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'test'
      })
    ).toEqual({
      searchField: 'test'
    });
  });
});

describe('Request Robots', () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      isPending: true,
      robots: [],
      error: ''
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 1,
            name: 'Test',
            email: 'test@gmail.com'
          }
        ]
      })
    ).toEqual({
      isPending: false,
      robots: [
        {
          id: 1,
          name: 'Test',
          email: 'test@gmail.com'
        }
      ],
      error: ''
    });
  });

  it('should handle REQUEST_ROBOTS_FAIL', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAIL,
        payload: 'Error'
      })
    ).toEqual({
      isPending: false,
      robots: [],
      error: 'Error'
    });
  });
});
