import React, {Component} from 'react';
import Moment from 'moment';
import wilddog from 'wilddog';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';

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

class Comments extends Component {
  onCommentPress() {
    Actions.newcome({event: this.props.event}) 
  }
  render() {
    const {comments} = this.props.event;
    var anComm = Object.values(comments);
    anComm = _.map(this.props.event.comments, (item) => {
      wilddog.sync().ref().child('users').child(item.userUid)
        .on("value", data => {
          item.user_gravatar = data.val().avatar;
          item.fullname = data.val().fullname;
        });
      return item;
    })
    return (
      <Container>
        <Content>
        <Button onPress={this.onCommentPress.bind(this)}>
          <Text>
            New comment
          </Text>
        </Button>
          <List
          dataArray={anComm}
          renderRow={(item) =>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{
                uri: item.user_gravatar
              }}/>
            </Left>
            <Body>
              <Text >{item.fullname}</Text>
              <Text note>{item.content}</Text>
            </Body>
            <Right>
              <Text note>
                {Moment(item.time).format('MMM Do h:mm')}</Text>
            </Right>
          </ListItem>
        }>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Comments;
