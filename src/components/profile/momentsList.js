import _ from 'lodash';
import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import {Image, ListView} from 'react-native';
import {connect} from 'react-redux';
import {momentsFetch} from '../../actions';
import { Container, Content, Card} from 'native-base';
import MomentCard from './momentCard'


class MomentsList extends Component {

  componentWillMount() {
    this.props.momentsFetch();
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
      this.createDataSource(nextProps)
  }

  createDataSource({moments}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(moments)
  }

  renderRow(moment) {
    return (
      <MomentCard moment = {moment} />
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
  const moments = _.map(state.moment.moments, (val, uid) => {
      return {...val, uid}
  });

  return {moments}
}

export default connect(mapStateToProps, {momentsFetch})(MomentsList);
