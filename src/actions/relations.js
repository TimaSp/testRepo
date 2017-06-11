import wilddog from 'wilddog';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';

import {FOLLOWERS_FETCH, FOLLOWING_FETCH} from './types';

export const followersFetch = ({uid}) => {
  console.log('<GET></GET>', uid);
  return (dispatch) => {
    wilddog.sync().ref().child('users').child(uid).child('relations').child('followers')
    .on("value", data => {
      let fullArray = [];
      let usersArray = Object.values(data.val());
      usersArray = _.map(usersArray, (item) => {
        wilddog.sync().ref().child('users').child(item.user_uid).on("value", data => {
          if (data.val().avatar != null) {
            console.log(data.val().avatar)
            item.user_gravatar = data.val().avatar;
            item.fullname = data.val().fullname;
            console.log(item)
            fullArray.push(item)
          }
        });

      })
      dispatch({type: FOLLOWERS_FETCH, payload: fullArray})
    });
  }
}
