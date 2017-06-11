import {PROFILE_FETCH} from '../actions/types'

const INITIAL_STATE = {

}

export default(state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case PROFILE_FETCH:
      return action.payload;
    default:
      return state
  }
};
