import React, {Component} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {Image, View, WebView} from 'react-native';
import Moment from 'moment';
import styles from './style';
import LikeAdd from '../common/like';
import FavAdd from '../common/addFavorite';
import Slider from '../common/slider';
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

class Place extends Component {

  onRowPress() {
    Actions.taxiModal({event: this.props.place})
  }
  onSpecialPress() {
    Actions.specialModal({event: this.props.place})
  }
  onLikePress() {
    Actions.like({event: this.props.place})
  }
  onCommentsPress() {
    Actions.come({event: this.props.place, com: 'nightlife'})
  }
  onGalPress() {
    Actions.gal({event: this.props.place})
  }
  onEvePress() {
    Actions.peve({event: this.props.place})
  }
  renderSpecial() {
    const {special} = this.props.place;
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
      name,
      thumbnail,
      addresscn,
      addressen,
      address,
      description,
      work_hour,
      like,
      comments,
      users_fav,
      special,
      phone,
      everage,
      type
    } = this.props.place;

    if (comments !== undefined) {
      var hmcomment = Object.values(comments).length
    } else {
      var hmcomment = 0
    }
    console.log('get special', special);
    return (
      <Container>
        <Content>
          <Slider event={this.props.place}/>
          <Card>
            <CardItem style={styles.cardButton}>
              <LikeAdd event={this.props.place} typeOfPage={type}/>
              <Button transparent onPress={this.onCommentsPress.bind(this)}>
                <Icon name="chatbubbles"/>
                <Text>{hmcomment}</Text>
              </Button>
              <FavAdd event={this.props.place} typeOfPage={type}/>
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
            <CardItem>
              <Icon name="navigate"/>
              <Text>{addressen}</Text>
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
            <CardItem onPress={this.onGalPress.bind(this)}>
              <Icon name="car" onPress={this.onGalPress.bind(this)}/>
              <Text onPress={this.onGalPress.bind(this)}>Gallery</Text>
              <Right >
                <Icon name="arrow-forward" onPress={this.onGalPress.bind(this)}/>
              </Right>
            </CardItem>
            <CardItem onPress={this.onEvePress.bind(this)}>
              <Icon name="car" onPress={this.onEvePress.bind(this)}/>
              <Text onPress={this.onEvePress.bind(this)}>Events</Text>
              <Right >
                <Icon name="arrow-forward" onPress={this.onEvePress.bind(this)}/>
              </Right>
            </CardItem>
            {this.renderSpecial()}
            <CardItem>
              <Icon active name="time"/>
              <Text>{work_hour}</Text>
            </CardItem>
            <CardItem>
              <Icon active name="call"/>
              <Text>{phone}
              </Text>
            </CardItem>
            <CardItem>
              <Icon active name="cash"/>
              <Text>{everage}
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

export default Place;
