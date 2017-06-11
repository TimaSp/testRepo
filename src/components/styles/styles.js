
const React = require('react-native');

const HEADER_MAX_HEIGHT = 290;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
  },
  padd: {
    padding: 10
  },
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color:'red'
  },
  mp: {
    marginBottom: 10
  },
  shadow: {
    flex: 1,
    width: 100,
    height: 100,
  },
  btn: {
    marginBottom: 5
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center'
  },
  modalView: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
  },
};
