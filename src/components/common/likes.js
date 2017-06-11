import React, {Component} from 'react';
import Moment from 'moment';
import wilddog from 'wilddog';
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

class Favorite extends Component {
  componentWillMount() {
    const {likes} = this.props.event;
    var anComm = Object.values(likes);
    anComm = _.map(likes, (item) => {
      wilddog.sync().ref().child('users').child(item.user_uid)
        .on("value", data => {
          if (data.val().avatar != null) {
            console.log(data.val().avatar)
            item.user_gravatar = data.val().avatar;
            item.fullname = data.val().fullname;
          }
        });
      return item;
    })
  }
  render() {
    const {likes} = this.props.event;
    var anComm = Object.values(likes);
    anComm = _.map(likes, (item) => {
      wilddog.sync().ref().child('users').child(item.user_uid)
        .on("value", data => {
          if (data.val().avatar != null) {
            console.log(data.val().avatar)
            item.user_gravatar = data.val().avatar;
            item.fullname = data.val().fullname;
          }
        });
      return item;
    })
    return (
      <Container>
        <Content>

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

export default Favorite;
