import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
} from './constants';

import * as actions from './actions';
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('Set Search Field', () => {
  const text = 'test';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };

  it('should return the expected action', () => {
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe('Request Robots', () => {
  it('should handle requesting robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    };

    expect(action[0]).toEqual(expectedAction);
  });
});