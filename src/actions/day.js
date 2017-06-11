import wilddog from 'wilddog';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';

import {DAY_FETCH_SUCCESS} from './types';

export const dayFetch = () => {
  return (dispatch) => {
    wilddog.sync().ref().child('daylife')
    .on("value", data => {
      dispatch({type: DAY_FETCH_SUCCESS, payload: data.val()})
    });
  }
}
