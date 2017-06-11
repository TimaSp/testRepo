//Import a library to help create a Component
import React from 'react';
// import ReactNative from 'react-native';
import { Text, View } from 'react-native';

//Create a Component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{props.title}</Text>
      </View>
    );
};
//Create some styles
const styles = {
  viewStyle: {
    backgroundColor: '#d2d2d2',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: 'white'
  }
};
//Make the component avialable to other parts of the app
export { Header };

