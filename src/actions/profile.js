import wilddog from 'wilddog';
import {Actions} from 'react-native-router-flux';

import {PROFILE_FETCH, MOMENTS_FETCH} from './types';

export const profileFetch = () => {
  return (dispatch) => {
    const ufid = wilddog.auth().currentUser.uid;
    wilddog.sync().ref().child('users').child(ufid)
    .on("value", data => {
      console.log('this user', data.val())
      dispatch({type: PROFILE_FETCH, payload: data.val()})
    });
  }
}


export const momentsFetch = () => {
  return (dispatch) => {
    const ufid = wilddog.auth().currentUser.uid;
    wilddog.sync().ref().child('users').child(ufid).child('moments')
    .on("value", data => {
      console.log('this user', data.val())
      dispatch({type: MOMENTS_FETCH, payload: data.val()})
    });
  }
}
