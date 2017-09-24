import { createActions } from 'redux-actions';
import { PENDING, FULFILLED, REJECTED } from '../../shared/constants/common';

export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';

export default createActions({
    LOAD_CHARACTERS: null
});