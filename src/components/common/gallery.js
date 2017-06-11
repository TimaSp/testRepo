import React, {Component} from 'react';
import {connect} from 'react-redux';
import {gallery} from '../../actions';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Gallery from 'react-native-gallery';

class GalleryPlace extends Component {
  componentWillMount() {
    const {client_number} = this.props.event;
    this.props.gallery({client_number});
  }

  render() {
    let Ar = []
    const newSlides = _.map(this.props.gallerys, (val, uid) => {
      Ar.push(val.poster + '?imageslim')
      console.log(Ar);
    });
    return (
      <Gallery
        style={{flex: 1, backgroundColor: 'black'}}
        images={Ar}
      />
    );
  }
}

const mapStateToProps = ({media, night}) => {
  console.warn(media)
  const {gallerys} = media;
  const {client_number} = night;
  return {client_number, gallerys}

}

export default connect(mapStateToProps, {gallery})(GalleryPlace);
