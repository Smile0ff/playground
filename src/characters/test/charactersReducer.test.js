import charactersReducer from '../reducers/charactersReducer';
import { LOAD_CHARACTERS } from '../actions/charactersActions';
import { PENDING, FULFILLED, REJECTED } from '../../shared/constants/common';

const expectedResultsObject = {
  birth_year: '',
  created: '',
  edited: '',
  eye_color: '',
  films: [],
  gender: '',
  hair_color: '',
  height: '',
  homeworld: '',
  mass: '',
  name: '',
  skin_color: '',
  species: [],
  starships: [],
  url: '',
  vehicles: []
}

const expectedData = {
  count: 1,
  next: '',
  previous: null,
  results: []
};

describe('character list reducer', () => {

  it('should return default state', () => {

    expect(charactersReducer(undefined, {})).toEqual({
      loading: false,
      data: {},
      err: {}
    });

  });

  it('should handle LOAD_CHARACTERS_PENDING', () => {
    const pendingAction = {
      type: LOAD_CHARACTERS + PENDING,
      payload: { loading: true }
    };

    expect(charactersReducer({}, pendingAction)).toEqual({ loading: true });

  });

  it('should handle LOAD_CHARACTERS_FULFILLED', () => {
    const fulfilledAction = {
      type: LOAD_CHARACTERS + FULFILLED,
      payload: {
        loading: false,
        data: expectedData,
        err: null
      }
    };
    const fulfilledActionWithState = {
      type: LOAD_CHARACTERS + FULFILLED,
      payload: {
        loading: false,
        data: {
          ...expectedData,
          results: [expectedResultsObject, expectedResultsObject]
        },
        err: null
      }
    }

    expect(charactersReducer({}, fulfilledAction)).toEqual({
      loading: false,
      data: expectedData,
      err: null
    });

    expect(charactersReducer({
      loading: true,
      data: {
        ...expectedData,
        results: [expectedResultsObject]
      },
      err: null
    }, fulfilledActionWithState)).toEqual({
      loading: false,
      data: {
        ...expectedData,
        results: [expectedResultsObject, expectedResultsObject]
      },
      err: null
    });

  });

  it('should handle LOAD_CHARACTERS_REJECTED', () => {
    const rejectedAction = {
      type: LOAD_CHARACTERS + REJECTED,
      payload: {
        loading: false,
        data: {},
        err: new Error('Character list loading error')
      }
    }

    expect(charactersReducer({}, rejectedAction)).toEqual({
      loading: false,
      data: {},
      err: new Error('Character list loading error')
    });

    expect(charactersReducer({
      loading: true,
      data: {},
      err: null
    }, rejectedAction)).toEqual({
      loading: false,
      data: {},
      err: new Error('Character list loading error')
    });

  });

});
