import _ from 'lodash';
import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';
import {Image, ListView} from 'react-native';
import {connect} from 'react-redux';
import {guidesFetch} from '../actions';
import { Container, Content, Card} from 'native-base';
import GuideCard from './guides/guideCard'


class Home extends Component {

  componentWillMount() {
    this.props.guidesFetch();
    this.createDataSource(this.props)
  }
  componentWillReceiveProps(nextProps) {
      this.createDataSource(nextProps)
  }

  createDataSource({guides}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(guides)
  }

  renderRow(guide) {
    return (
      <GuideCard guide = {guide} />
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
  const guides = _.map(state.guide, (val, uid) => {
      return {...val, uid}
  });

  return {guides}
}

export default connect(mapStateToProps, {guidesFetch})(Home);
