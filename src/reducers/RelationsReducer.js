import {FOLLOWERS_FETCH, FOLLOWING_FETCH} from '../actions/types';

const INITIAL_STATE = {
  followersList: [],
  following: [],
}

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FOLLOWERS_FETCH:
      return {
        ...state,
        followersList: action.payload
      }
    case FOLLOWING_FETCH:
      console.log(action.payload)
      return {
        ...state,
        following: action.payload
      }
    default:
      return state
  }
};
