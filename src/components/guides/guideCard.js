import React, {Component} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {Image, TouchableWithoutFeedback, View} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from 'native-base';

class GuideCard extends Component {
  onRowPress() {
    Actions.oe({guide: this.props.guide})
  }

  render() {
    const {
      name,
      author,
      avatar,
      like,
      date,
      title,
      thumbnail
    } = this.props.guide;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{
                uri: avatar + '?imageslim'
              }}/>
              <Body>
                <Text>{title}</Text>
                <Text note>{author}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image style={{
              width: 365,
              height: 200
            }} source={{
              uri: thumbnail + '?imageslim'
            }}/>
          </CardItem>
          <CardItem content>
            <Text>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</Text>
          </CardItem>
          <CardItem >
            <Button transparent>
              <Icon active name="thumbs-up"/>
              <Text>{like}
                likes</Text>
            </Button>
            <Button transparent>
              <Icon active name="chatbubbles"/>
              <Text>4 Comments</Text>
            </Button>
            <Text>{date}</Text>
          </CardItem>
        </Card>
      </TouchableWithoutFeedback>

    );
  }

}

export default GuideCard;
