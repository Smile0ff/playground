import { handleActions } from 'redux-actions';

import { LOAD_CHARACTERS } from '../actions/charactersActions';
import { PENDING, FULFILLED, REJECTED } from '../../shared/constants/common';

const defaultState = {
    loading: false,
    data: {},
    err: {}
}

const charactersReducer = handleActions({
    [LOAD_CHARACTERS + PENDING]: (state, action) => {
        const { loading } = action.payload;

        return {
            ...state,
            loading
        };
    },
    [LOAD_CHARACTERS + FULFILLED]: (state, action) => {
        const { loading, data, err } = action.payload;

        return {
            ...state,
            loading,
            data,
            err
        }

    },
    [LOAD_CHARACTERS + REJECTED]: (state, action) => {
        const { loading, data, err } = action.payload;

        return {
            ...state,
            loading,
            data,
            err
        }

    }
}, defaultState);

export const getCharactersData = (state) => {
    const { loading, data, err } = state.characters;

    return {
        loading,
        data,
        err
    };
};

export default charactersReducer;