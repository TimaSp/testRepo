import React, {Component} from 'react';
import styles from '../styles/styles';
import {Image, View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
class TaxiModal extends Component {

  render() {
    const {address} = this.props.event;
    return (
      <View style={styles.modalView}>
        <Text style={styles.welcome} onPress={() => Actions.pop()}>
          {address}
        </Text>

      </View>
    );
  }
}

export default TaxiModal;
