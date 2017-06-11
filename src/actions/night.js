import wilddog from 'wilddog';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';

import {NIGHT_FETCH_SUCCESS, SLIDER_FETCH_SUCCESS, PLACE_EVENTS_FETCH_SUCCESS, GALLERY_FETCH_SUCCESS} from './types';

export const nightFetch = () => {
  return (dispatch) => {
    wilddog.sync().ref().child('nightlife')
    .on("value", data => {
      dispatch({type: NIGHT_FETCH_SUCCESS, payload: data.val()})
    });
  }
}

export const slider = ({client_number}) => {
  return (dispatch) => {
    wilddog.sync().ref().child('slider').child(client_number)
    .on("value", data => {
      dispatch({type: SLIDER_FETCH_SUCCESS, payload: data.val()})
    });
  }
}


export const gallery = ({client_number}) => {
  return (dispatch) => {
    wilddog.sync().ref().child('gallery').child(client_number)
    .on("value", data => {
      dispatch({type: GALLERY_FETCH_SUCCESS, payload: data.val()})
    });
  }
}


export const events = ({client_number}) => {
  return (dispatch) => {
    wilddog.sync().ref().child('events')
    .on("value", data => {
      let fullArray = [];
      const events = _.map(data.val(), (val, uid) => {
        return {
          ...val,
          uid
        }
      });
      const filterEvents = _.map(data.val(), (val) =>{
        if(val.client_number == client_number) {
          fullArray.push(val)
        }
      })
      console.log('fullArray', fullArray);
      dispatch({type: PLACE_EVENTS_FETCH_SUCCESS, payload: fullArray})
    });
  }
}
