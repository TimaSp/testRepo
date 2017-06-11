import React, {Component} from 'react';
import {connect} from 'react-redux';
import {slider} from '../../actions';
import {Scene, Router, Actions} from 'react-native-router-flux';
import ImageSlider from 'react-native-image-slider';
import {Text} from 'react-native';

class Slider extends Component {
  componentWillMount() {
    const {client_number} = this.props.event;
    this.props.slider({client_number});
  }

  render() {
    console.log('this render', this.props)
    let Ar = []
    const newSlides = _.map(this.props.slides, (val, uid) => {
      Ar.push(val.poster + '?imageslim')
    });
    return (<ImageSlider height={250} images={Ar}/>);

  }
}

const mapStateToProps = ({media, night}) => {
  console.warn(media)
  const {slides} = media;
  const {client_number} = night;
  return {client_number, slides}

}

export default connect(mapStateToProps, {slider})(Slider);
