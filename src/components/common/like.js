import React, {Component} from 'react';
import {connect} from 'react-redux';
import {doLike, checklike} from '../../actions';
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

class LikeAdd extends Component {
  componentWillMount() {
    const {uid, like} = this.props.event;
    const type = 'likes';
    const tpf = this.props.typeOfPage;
    this.props.checklike({uid, type, tpf, like});
  } 
  onButtonPress() {
    const {uid, like} = this.props.event;
    const type = 'likes';
    const tpf = this.props.typeOfPage;
    this.props.doLike({uid, like, type, tpf});
    this.props.event.like = this.props.event.like + 1
  }
  onLikePress() {
    Actions.like({event: this.props.event})
  }
  render() {
    if (this.props.can_like) {
      return (
        <Button transparent onPress={this.onButtonPress.bind(this)}>
        <Icon name="beer"/>
        <Text>{this.props.event.like}</Text>
        </Button>
      )
    } else {
      return (
        <Button transparent onPress={this.onLikePress.bind(this)}>
          <Icon active name="beer"/>
          <Text>{this.props.event.like}</Text>
        </Button>
      );
    }

  }
}

const mapStateToProps = ({comm}) => {
  const {uid, can_like, like} = comm;
  return {uid, can_like, like}
}

export default connect(mapStateToProps, {doLike, checklike})(LikeAdd);
