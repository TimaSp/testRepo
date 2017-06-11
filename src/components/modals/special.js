import React, {Component} from 'react';
import styles from '../styles/styles';
import {Image, View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
  Button
} from 'native-base';
class SpecialModal extends Component {

  render() {
    const {special} = this.props.event;
    return (
      <View style={styles.modalView}>
        <Button onPress={() => Actions.pop()}>
          <Text >Click Me!
          </Text>
        </Button>

        <Text >
          {special}
        </Text>

      </View>
    );
  }
}

export default SpecialModal;
