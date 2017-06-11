import wilddog from 'wilddog';
import { Actions } from 'react-native-router-flux';

import {
  GUIDES_FETCH_SUCCESS
} from './types';


export const guidesFetch = () => {
  return(dispatch) => {
      wilddog.sync().ref().child('guides').child('vlogs')
        .on("value", data => {
        dispatch({type: GUIDES_FETCH_SUCCESS, payload: data.val() })
    });
  }
}
