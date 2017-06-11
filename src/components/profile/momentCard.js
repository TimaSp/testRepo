import React, {Component} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {Image, TouchableWithoutFeedback, View} from 'react-native';
import Moment from 'moment';

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

class MomentCard extends Component {
  onRowPress() {
    Actions.singleMoment({moment: this.props.moment})
  }

  render() {
    const {content, img, date, liked} = this.props.moment;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{
                uri: 'http://oisooyqzw.bkt.clouddn.com/o_1bfgve8s5g1k8vulsh80s185qh.jpeg' + '?imageslim'
              }}/>
              <Body>
                <Text>Max Nakamura</Text>
                <Text note>{Moment(date).format('d MMM')}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem content>
            <Text>{content}</Text>
          </CardItem>
          <CardItem cardBody>
            <Image style={{
              width: 365,
              height: 200
            }} source={{
              uri: img + '?imageslim'
            }}/>
          </CardItem>

          <CardItem style={{justifyContent: 'space-between'}}>
            <Button transparent>
              <Icon active name="heart"/>
              <Text>{liked}
                </Text>
            </Button>
            <Button transparent>
              <Icon active name="chatbubbles"/>
              <Text>4 </Text>
            </Button>
          </CardItem>
        </Card>
      </TouchableWithoutFeedback>

    );
  }

}

export default MomentCard;
