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

class EventCard extends Component {
  onRowPress() {
    Actions.es({event: this.props.event})
  }

  render() {
    const {poster} = this.props.event;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>

        <Card >
          <CardItem cardBody>
            <Image style={{
              width: 365,
              height: 200
            }} source={{
              uri: poster + '?imageslim'
            }}/>
          </CardItem>
        </Card>

      </TouchableWithoutFeedback>

    );
  }

}

export default EventCard;
