import React, {Component} from 'react';
import {connect} from 'react-redux';
import {followersFetch} from '../../actions';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,
  Button
} from 'native-base';

class Followers extends Component {
  componentWillMount() {
    console.log(this.props.user);
    const {uid} = this.props.user;
    this.props.followersFetch({uid});
  }
  render() {
    // console.log('this.props.eventList', this.props.followers)
    return (
      <Container>
        <Content>

        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  const {uid} = state.profile;
  return {uid}

}

export default connect(mapStateToProps, {followersFetch})(Followers);
