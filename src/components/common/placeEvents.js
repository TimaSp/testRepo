import React, {Component} from 'react';
import {connect} from 'react-redux';
import {events} from '../../actions';
import {Scene, Router, Actions} from 'react-native-router-flux';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,
  Button
} from 'native-base';

class PlaceEvents extends Component {
  componentWillMount() {
    const {client_number} = this.props.event;
    this.props.events({client_number});
  }
  render() {
    console.log('this.props.eventList', this.props.eventList)
    return (
      <Container>
        <Content>
          <List
          dataArray={this.props.eventList}
          renderRow={(item) =>
          <ListItem avatar>
            <Left>
              <Thumbnail source={{
                uri: item.poster
              }}/>
            </Left>
            <Body>
              <Text >{item.title}</Text>
            </Body>
            <Right>
              <Text note>
                </Text>
            </Right>
          </ListItem>
        }>
          </List>
        </Content>
      </Container>
    );
  }
}


const mapStateToProps = ({media, night}) => {
  console.warn(media)
  const {eventList} = media;
  const {client_number} = night;
  return {client_number, eventList}

}


export default connect(mapStateToProps, {events})(PlaceEvents);
