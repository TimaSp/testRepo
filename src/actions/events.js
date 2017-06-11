import wilddog from 'wilddog';
import { Actions } from 'react-native-router-flux';

import {
  EVENTS_FETCH_SUCCESS
} from './types';


export const eventsFetch = () => {
  return(dispatch) => {
      wilddog.sync().ref().child('events')
        .on("value", data => {
        dispatch({type: EVENTS_FETCH_SUCCESS, payload: data.val() })
    });
  }
}
