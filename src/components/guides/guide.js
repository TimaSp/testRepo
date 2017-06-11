import React, {Component} from 'react';
import {Image, View} from 'react-native';
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
import Moment from 'moment';

class GuideSingle extends Component {
  render() {
    const {
      author,
      avatar,
      text,
      like,
      date,
      title,
      thumbnail
    } = this.props.guide;
    return (
      <Container>
        <Content>
          <Card >
            <CardItem>
              <Left>
                <Thumbnail source={{
                  uri: avatar
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
                uri: thumbnail
              }}/>
            </CardItem>
            <CardItem content>
              <Text>{text}</Text>
            </CardItem>
            <CardItem footer>
              <Button transparent>
                <Icon active name="thumbs-up"/>
                <Text>{like}
                  Likes</Text>
              </Button>
              <Button transparent>
                <Icon active name="chatbubbles"/>
                <Text>4 Comments</Text>
              </Button>
              <Text>{date}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default GuideSingle;
