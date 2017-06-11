import {GALLERY_FETCH_SUCCESS, PLACE_EVENTS_FETCH_SUCCESS, SLIDER_FETCH_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
  slides: [],
  gallerys: [],
  eventList: []
}

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GALLERY_FETCH_SUCCESS:
      return {
        ...state,
        gallerys: action.payload
      }
    case PLACE_EVENTS_FETCH_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        eventList: action.payload
      }
    case SLIDER_FETCH_SUCCESS:
      return {
        ...state,
        slides: action.payload
      }
    default:
      return state
  }
};
