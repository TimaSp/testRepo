import React, {Component} from 'react';
import {connect} from 'react-redux';
import {doFavorite, checkfav} from '../../actions';
import {Scene, Router, Actions} from 'react-native-router-flux';

import {
  Container,
  Content,
  Text,
  Left,
  Right,
  Button,
  Icon
} from 'native-base';

class FavAdd extends Component {
  componentWillMount() {
    const {uid, fav_count} = this.props.event;
    const type = 'users_fav';
    const tpf = this.props.typeOfPage;
    this.props.checkfav({uid, type, tpf, fav_count});
  }
  onFavoritePress() {
    Actions.fave({event: this.props.event})
  }
  onButtonPress() {
    const {
      uid,
      fav_count,
      addresscn,
      addressen,
      address,
      name,
      thumbnail, title, poster,
    } = this.props.event;
    if (this.props.typeOfPage == 'nightlife' || this.props.typeOfPage == 'daylife') {
      console.log('this place');
      const tpf = this.props.typeOfPage;
      this.props.doFavorite({
        uid,
        fav_count,
        tpf,
        addresscn,
        name,
        addressen,
        address,
        thumbnail
      });
    } else {
      console.log('this event')
      const tpf = this.props.typeOfPage;
      this.props.doFavorite({
        uid,
        fav_count,
        tpf,
        address,
        addressen,
        title,
        poster
      });
    }

    this.props.event.fav_count = this.props.event.fav_count + 1
  }
  render() {
    if (this.props.can_follow) {
      return (
        <Button transparent onPress={this.onButtonPress.bind(this)}>
          <Icon name="heart"/>
          <Text>{this.props.event.fav_count}</Text>
        </Button>
      )
    } else {
      return (
        <Button transparent onPress={this.onFavoritePress.bind(this)}>
          <Icon active name="heart"/>
          <Text>{this.props.event.fav_count}</Text>
        </Button>
      );
    }

  }
}

const mapStateToProps = ({comm}) => {
  const {
    uid,
    can_follow,
    fav_count,
    poster,
    title,
    name,
    thumbnail,
    addresscn,
    address,
    addressen
  } = comm;
  return {
    uid,
    can_follow,
    fav_count,
    poster,
    title,
    name,
    thumbnail,
    addresscn,
    address,
    addressen
  }
}

export default connect(mapStateToProps, {doFavorite, checkfav})(FavAdd);
