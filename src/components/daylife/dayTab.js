import _ from 'lodash';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Image, ListView} from 'react-native';
import {connect} from 'react-redux';
import {dayFetch} from '../../actions';
import {Container, Content, Card} from 'native-base';
import NightCard from '../nightlife/nightCard'

class DayTab extends Component {

  componentWillMount() {
    this.props.dayFetch();
    console.log('getting data from', this.props);
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({places}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(places)
  }

  renderRow(place) {
    return (<NightCard place={place}/>);
  }

  render() {
    return (
      <Container>
        <Content>
          <ListView enableEmptySections dataSource={this.dataSource} renderRow={this.renderRow}/>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const places = _.map(state.day, (val, uid) => {
    return {
      ...val,
      uid
    }
  });
  return {places}
}

export default connect(mapStateToProps, {dayFetch})(DayTab);
