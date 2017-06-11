import React, {Component} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {Image, TouchableWithoutFeedback, View} from 'react-native';
import {
  Thumbnail,
  Text,
  Body,
  ListItem
} from 'native-base';

class NightCard extends Component {
  onRowPress() {
    Actions.nightes({place: this.props.place})
  }

  render() {
    const {thumbnail, name, address} = this.props.place;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <ListItem>
          <Thumbnail square size={90} source={{
            uri: thumbnail
          }} />
          <Body>
            <Text>{name}</Text>
            <Text>{address}</Text>
          </Body>
        </ListItem>
      </TouchableWithoutFeedback>

    );
  }

}

export default NightCard;
