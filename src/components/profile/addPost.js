import _ from 'lodash';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {profileFetch} from '../../actions';
import {Card, Button, Icon, Text, CardItem} from 'native-base';
import {View, Platform} from 'react-native';
import styles from './style'

class AddPost extends Component {

  componentWillMount() {
    this.props.profileFetch();
  }

  render() {
    return (
      <Card style={styles.withoutMargin}>
        <CardItem style={styles.cardButton}>
        <Button iconLeft transparent full>
          <Icon name='create'/>
          <Text>New Post</Text>
        </Button>
        <Button iconLeft transparent full>
          <Icon name='heart'/>
          <Text>Favorite</Text>
        </Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const user = state.profile;
  return {user}
}

export default connect(mapStateToProps, {profileFetch})(AddPost);
