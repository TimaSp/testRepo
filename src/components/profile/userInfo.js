import _ from 'lodash';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {profileFetch} from '../../actions';
import styles from './style'
import {
  List,
  ListItem,
  Text,
  Icon,
  Badge,
  Left,
  Body,
  Right,
  Card,
} from 'native-base';
import {
  View,Platform
} from 'react-native';



class UserInfo extends Component {
  onFollowersPress() {
    Actions.followers({user: this.props.user})
  }
  componentWillMount() {
    this.props.profileFetch({user: this.props.user});
  }

  render() {
    const {
    about,
    city,
    created_at,
    date,
    email,
    fullname,
    phone,
    sex,
    wechat,
    relations
  } = this.props.user;
    if (relations.followers !== undefined) {
      var followers = Object.values(relations.followers).length
    } else {
      var followers = 0
    }
    if (relations.following !== undefined) {
      var following = Object.values(relations.following).length
    } else {
      var following = 0
    }
    return (

      <Card style={styles.cardWithoutBorder}>
      <ListItem icon style={styles.noBorder} onPress={this.onFollowersPress.bind(this)}>
        <Left>
          <Icon active name="people"/>
        </Left>
        <Body>
          <Text>{followers} followers</Text>
        </Body>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon  name="people"/>
        </Left>
        <Body>
          <Text>{following} following</Text>
        </Body>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon  name="map"/>
        </Left>
        <Body>
          <Text>Lives in {city}</Text>
        </Body>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon  name="calendar"/>
        </Left>
        <Body>
          <Text>Birth at {date}</Text>
        </Body>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon  name='link'/>
        </Left>
        <Body>
          <Text> {wechat}</Text>
        </Body>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon  name='mail'/>
        </Left>
        <Body>
          <Text> {email}</Text>
        </Body>
      </ListItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const user = state.profile;
  return {user}
}

export default connect(mapStateToProps, {profileFetch})(UserInfo);
