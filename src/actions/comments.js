import wilddog from 'wilddog';
import {Actions} from 'react-native-router-flux';

import {
  COMMENTS_FETCH_SUCCESS,
  COMMENT_CHANGED,
  LIKE_SUCCESS,
  CAN_LIKE,
  CANT_LIKE,
  CANT_FOLLOW,
  CAN_FOLLOW
} from './types'

export const commentChanged = (text) => {
  return {type: COMMENT_CHANGED, payload: text}
}

export const submitComment = ({comment, uid, tpf}) => {
  return (dispatch) => {
    dispatch({type: COMMENTS_FETCH_SUCCESS});
    const ref = wilddog.sync().ref().child(tpf).child(uid).child('comments');
    const user = wilddog.auth().currentUser;
    ref.push({like: 0, content: comment, userUid: user.uid, time: Date.now()})
  };
}

export const checklike = ({uid, type, tpf, like}) => {
  return (dispatch) => {
    dispatch({type: LIKE_SUCCESS});
    const likesObj = wilddog.sync().ref().child(tpf).child(uid).child(type);
    const ufid = wilddog.auth().currentUser.uid;
    likesObj.on("value", data => {

      if (like > 0) {
        const likes = Object.values(data.val())
        var likeArray = [];
        likes.forEach(i => {
          likeArray.push(i['user_uid'])
        })
        if (likeArray.indexOf(ufid) > -1) {
          console.log('Вы уже лайкали это место');
          dispatch({type: CANT_LIKE});
        } else {
          console.log('Вы еще не лайкали это место');
          dispatch({type: CAN_LIKE});
        }
      } else if (like == 0 || like == undefined) {
        console.log('Вы еще не лайкали это место');
        dispatch({type: CAN_LIKE});
      }

    });
  }
}

export const checkfav = ({uid, type, tpf, fav_count}) => {
  return (dispatch) => {
    const favObj = wilddog.sync().ref().child(tpf).child(uid).child(type);
    const ufid = wilddog.auth().currentUser.uid;
    favObj.on("value", data => {
      if (fav_count > 0) {
        const likes = Object.values(data.val())
        var likeArray = [];
        likes.forEach(i => {
          likeArray.push(i['user_uid'])
        })
        if (likeArray.indexOf(ufid) > -1) {
          console.log('Уже в избранном');
          dispatch({type: CANT_FOLLOW});
        } else {
          console.log('Еще не в избранном');
          dispatch({type: CAN_FOLLOW});
        }
      } else if (fav_count == 0 || fav_count == undefined) {
        console.log('Еще не в избранном');
        dispatch({type: CAN_FOLLOW});
      }

    });
  }
}

export const doLike = ({uid, like, type, tpf}) => {
  return (dispatch) => {
    const ufid = wilddog.auth().currentUser.uid;
    const likesCount = wilddog.sync().ref().child(tpf).child(uid);
    const likesObj = wilddog.sync().ref().child(tpf).child(uid).child('likes').child(ufid);
    likesObj.set({user_uid: ufid}).then(() => {
      var newLike = like + 1
      likesCount.update({like: newLike})
      dispatch({type: CANT_LIKE});
    })
  }
}

export const doFavorite = ({
  uid,
  fav_count,
  tpf,
  poster,
  title,
  address,
  name,
  addressen,
  thumbnail,
  addresscn,
}) => {

  return (dispatch) => {
    const ufid = wilddog.auth().currentUser.uid;
    const favObj = wilddog.sync().ref().child(tpf).child(uid).child('users_fav').child(ufid);
    const favCount = wilddog.sync().ref().child(tpf).child(uid);
    favObj.set({user_uid: ufid})
    const page = wilddog.sync().ref().child('users').child(ufid).child('favorite').child(tpf).child(uid);
if (tpf == 'events') {
  console.log('event')
  page.set({
    thumbnail: poster,
    placeId: uid,
    title: title,
    date: Date.now(),
    type_of_place: tpf,
    address: address,
    addressen: addressen
  })
} else {
  console.log('place')
  page.set({
    thumbnail: thumbnail,
    placeId: uid,
    title: name,
    date: Date.now(),
    type_of_place: tpf,
    address: address,
    addresscn: addresscn
  })
}
    let newFav = fav_count + 1
    favCount.update({fav_count: newFav})
    dispatch({type: CANT_FOLLOW});
  };
}

const commentSendedSuccess = (dispatch, comment) => {
  dispatch({type: LOGIN_USER_SUCCESS, payload: user})
  Actions.root();
}
