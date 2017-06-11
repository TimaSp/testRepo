const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  cardButton: {
    justifyContent: 'space-between',
    display: 'flex',
    marginLeft: 0,
    marginRight: 0
  },
  withoutMargin:{
    marginLeft: 0,
    marginRight: 0
  },
  noBorder: {
    borderBottomColor: '#fff',
  },
  view: {
    backgroundColor: '#D3D3D3',
  },
  cardWithoutBorder: {
    backgroundColor: '#fff',
    marginTop: 1,
    marginLeft: 0,
    marginRight: 0
  }
};
