import {MOMENTS_FETCH} from '../actions/types';

const INITIAL_STATE = {
  moments: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case MOMENTS_FETCH:
        return {
          moments: action.payload
        }
      default:
        return state
    }
};
