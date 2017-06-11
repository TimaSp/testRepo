import _ from 'lodash';
import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import {Image, ListView} from 'react-native';
import {connect} from 'react-redux';
import {eventsFetch} from '../../actions';
import { Container, Content, Card} from 'native-base';
import EventCard from './eventCard'


class EventTab extends Component {

  componentWillMount() {
    this.props.eventsFetch();
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
      this.createDataSource(nextProps)
  }

  createDataSource({events}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(events)
  }

  renderRow(event) {
    return (
      <EventCard event = {event} />
    );

  }

  render() {
    return (

      <Container>
          <Content>
              <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
              />
          </Content>
      </Container>
    );
  }
}

const  mapStateToProps = state  => {
  console.log('tasdsadasd', state)
  const events = _.map(state.event, (val, uid) => {
      return {...val, uid}
  });

  return {events}
}

export default connect(mapStateToProps, {eventsFetch})(EventTab);
