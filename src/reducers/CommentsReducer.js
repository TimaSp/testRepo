import {
  COMMENTS_FETCH_SUCCESS,
  CAN_LIKE,
  CANT_LIKE,
  COMMENT_CHANGED,
  LIKE_SUCCESS,
  FOLLOW_SUCCESS,
  WILL_GO_SUCCESS,
  CAN_FOLLOW,
  CANT_FOLLOW
} from '../actions/types'

const INITIAL_STATE = {
  comment: null,
  error: '',
  loading: false,
  can_like: false,
  can_follow: false,
  will: '',
  like: ''
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CAN_LIKE:
      return {
        ...state,
        can_like: true,
        like: action.payload
      }
    case CANT_LIKE:
      return {
        ...state,
        can_like: false,
        error: 'you already like this post',
        like: action.payload
      }
    case CAN_FOLLOW:
      return {
        ...state,
        can_follow: true
      }
    case CANT_FOLLOW:
      return {
        ...state,
        can_follow: false,
        error: 'This is one of your favorite place'
      }
    case COMMENT_CHANGED:
      return {
        ...state,
        comment: action.payload
      };
    case COMMENTS_FETCH_SUCCESS:
      return {
        ...state,
        comment: action.payload
      };
    case LIKE_SUCCESS:
      return {
        ...state,
        like: action.payload
      };
    case FOLLOW_SUCCESS:
      return {
        ...state,
        follow: action.payload
      };
    case WILL_GO_SUCCESS:
      return {
        ...state,
        will: action.payload
      };
    default:
      return state;
  }
}
