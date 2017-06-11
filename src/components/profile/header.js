import React, {Component} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import UserInfo from './userInfo';
import AddPost from './addPost';
import MomentsList from './momentsList'
const HEADER_MAX_HEIGHT = 290;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class ScrollableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  _renderScrollViewContent() {
    return (
      <View style={styles.scrollViewContent}>
        <UserInfo style={styles.mp} />
        <AddPost style={styles.mp} />
        <MomentsList user={this.props.user} />
      </View>
    );
  }

  render() {
    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [
        0, HEADER_SCROLL_DISTANCE / 2,
        HEADER_SCROLL_DISTANCE
      ],
      outputRange: [
        1, 1, 0
      ],
      extrapolate: 'clamp'
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [
        0, HEADER_SCROLL_DISTANCE
      ],
      outputRange: [
        0, -50
      ],
      extrapolate: 'clamp'
    });
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [
        0, HEADER_SCROLL_DISTANCE
      ],
      outputRange: [
        HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT
      ],
      extrapolate: 'clamp'
    });
    return (

      <View style={styles.fill}>
        <StatusBar backgroundColor="blue" barStyle="light-content"/>
        <ScrollView style={styles.fill} scrollEventThrottle={16} onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: this.state.scrollY
              }
            }
          }
        ])}>
          {this._renderScrollViewContent()}
        </ScrollView>
        <Animated.View style={[
          styles.header, {
            height: headerHeight
          }
        ]}>
          <Animated.Image style={[
            styles.backgroundImage, {
              opacity: imageOpacity,
              transform: [
                {
                  translateY: imageTranslate
                }
              ]
            }
          ]} source={{
            uri: this.props.user.avatar
          }}/>
          <View style={styles.bare}>
            <Text style={styles.title}>{this.props.user.fullname}</Text>
          </View>
          <View style={styles.bar}>
            <Text style={styles.title}>{this.props.user.fullname}</Text>
          </View>

        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#2d2d2d',
    overflow: 'hidden'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover'
  },
  bar: {
    marginTop: 138,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bare: {
    marginTop: 18,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT
  },
  mp: {
    marginBottom:10
  }
});
