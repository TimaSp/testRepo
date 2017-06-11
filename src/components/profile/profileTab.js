import _ from 'lodash';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Image, ListView, View} from 'react-native';
import {connect} from 'react-redux';
import {profileFetch} from '../../actions';
import {Container, Content, Card} from 'native-base';
import ScrollableHeader from './header'
import Userinfo from './userInfo';
class ProfileTab extends Component {

  componentWillMount() {
    this.props.profileFetch();
  }


  render() {
    return (<ScrollableHeader user={this.props.user} />);
  }
}

const mapStateToProps = state => {
  const user = state.profile;
  return {user}
}

export default connect(mapStateToProps, {profileFetch})(ProfileTab);
