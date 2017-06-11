import React, {Component} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {Image, View, WebView} from 'react-native';
import Moment from 'moment';
import styles from './style';
import LikeAdd from '../common/like';
import FavAdd from '../common/addFavorite';
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  Card,
  CardItem,
  Right
} from 'native-base';

class EventSingle extends Component {

  onRowPress() {
    Actions.taxiModal({event: this.props.event})
  }
  onSpecialPress() {
    Actions.specialModal({event: this.props.event})
  }
  onLikePress() {
    Actions.like({event: this.props.event})
  }
  onCommentsPress() {
    Actions.come({event: this.props.event, com: 'events'})
  }
  renderSpecial() {
    const {special} = this.props.event;
    if (special) {
      return (
        <CardItem >
          <Icon onPress={this.onSpecialPress.bind(this)} active name="pulse"/>
          <Text onPress={this.onSpecialPress.bind(this)}>Special Offer</Text>
          <Right>
            <Icon name="arrow-forward" onPress={this.onSpecialPress.bind(this)}/>
          </Right>
        </CardItem>
      );
    }
  }

  render() {
    const {
      title,
      poster,
      address,
      description,
      time,
      date,
      like,
      comments,
      users_fav,
      special
    } = this.props.event;

    if (comments !== undefined) {
      var hmcomment = Object.values(comments).length
    } else {
      var hmcomment = 0
    }
    console.log('get special', special);
    return (
      <Container>
        <Content>
          <Image source={{
            uri: poster + '?imageslim'
          }} style={{
            height: 220,
            left: 0,
            right: 0
          }}/>

          <Card>
            <CardItem style={styles.cardButton}>
              <LikeAdd event={this.props.event} typeOfPage='events'/>
              <Button transparent onPress={this.onCommentsPress.bind(this)}>
                <Icon name="chatbubbles"/>
                <Text>{hmcomment}</Text>
              </Button>
              <FavAdd event={this.props.event} typeOfPage='events'/>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon name="navigate"/>
              <Text>{address}</Text>
              <Right>
                <Icon name="arrow-forward"/>
              </Right>
            </CardItem>
            <CardItem onPress={this.onRowPress.bind(this)}>
              <Icon active name="car" onPress={this.onRowPress.bind(this)}/>
              <Text onPress={this.onRowPress.bind(this)}>Taxi Info</Text>
              <Right >
                <Icon name="arrow-forward" onPress={this.onRowPress.bind(this)}/>
              </Right>
            </CardItem>

            {this.renderSpecial()}
            <CardItem>
              <Icon active name="time"/>
              <Text>{time}</Text>
            </CardItem>
            <CardItem>
              <Icon active name="calendar"/>
              <Text>{Moment(date).format('d MMM')}
              </Text>
            </CardItem>
            <CardItem>
              <WebView style={{
                height: 500
              }} source={{
                html: description
              }}/>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default EventSingle;
