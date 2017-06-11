import React from 'React';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import GuideSingle from './components/guides/guide';
import EventSingle from './components/events/event';
import Place from './components/nightlife/place';
import GuideTab from './components/guides/guideTab';
import EventTab from './components/events/eventTab';
import NightTab from './components/nightlife/nightTab';
import DayTab from './components/daylife/dayTab';
import ProfileTab from './components/profile/profileTab';
import FollowersList from './components/profile/followers';


import Taxi from './components/modals/taxi';
import specialModal from './components/modals/special';
import Home from './components/home';
import Comments from './components/common/comments';
import Favorite from './components/common/favorite';
import PlaceEvents from './components/common/placeEvents';

import Likes from './components/common/likes';
import Gallery from './components/common/gallery';
import AddComment from './components/common/addcomment';
import {Text} from 'react-native';

const TabIcon = ({selected, title}) => {
  return (
    <Text style={{
      color: selected
        ? 'red'
        : 'white'
    }}>{title}</Text>
  );
}

const RouterComponent = () => {
  return (

    <Router >
    <Scene key="auth">
      <Scene key="login" component={LoginForm} title='Please Login' hideNavBar={true}/>
    </Scene>
      <Scene key="root">
        <Scene key="tabbar" tabs={true} tabBarStyle={{
          backgroundColor: '#2d2d2d'
        }}>
          <Scene key="guides" title="Guides" icon={TabIcon}>
            <Scene sceneStyle={{
              paddingTop: 65,
              paddingBottom: 55
            }} key="scarlet" component={GuideTab} title="Scarlet"/>
            <Scene sceneStyle={{
              paddingTop: 65,
              paddingBottom: 55
            }} key="oe" component={GuideSingle} title="Guide"/>
          </Scene>

          <Scene key="ev" title="Events" icon={TabIcon}>
            <Scene sceneStyle={{
              paddingTop: 65,
              paddingBottom: 55
            }} key="eve" component={EventTab} title="Events"/>
            <Scene sceneStyle={{
              paddingTop: 65
            }} key="es" hideTabBar={true} component={EventSingle} title="Event"/>
            <Scene sceneStyle={{
              paddingTop: 65
            }} key="come" hideTabBar={true} component={Comments} title="Comments"/>
            <Scene sceneStyle={{
              paddingTop: 65
            }} key="newcome" hideTabBar={true} component={AddComment} title="Comment"/>
            <Scene sceneStyle={{
              paddingTop: 65
            }} key="fave" hideTabBar={true} component={Favorite} title="Followers"/>
            <Scene sceneStyle={{
              paddingTop: 65
            }} key="like" hideTabBar={true} component={Likes} title="Likes"/>
          </Scene>

          <Scene key="nig" title="Nightlife" icon={TabIcon}>
            <Scene sceneStyle={{
              paddingTop: 65,
              paddingBottom: 55
            }} key="night" component={NightTab} title="Nightlife"/>
            <Scene sceneStyle={{
              paddingTop: 65
            }} key="nightes" hideTabBar={true} component={Place} title="Place"/>
            <Scene sceneStyle={{
              paddingTop: 65
            }} key="come" hideTabBar={true} component={Comments} title="Comments"/>
            <Scene sceneStyle={{
              paddingTop: 65
            }} key="newcome" hideTabBar={true} component={AddComment} title="Comment"/>
            <Scene sceneStyle={{
              paddingTop: 65
            }} key="fave" hideTabBar={true} component={Favorite} title="Followers"/>
            <Scene sceneStyle={{
              paddingTop: 65
            }} key="like" hideTabBar={true} component={Likes} title="Likes"/>
            <Scene sceneStyle={{
              paddingTop: 65
            }} key="gal"  hideTabBar={true} component={Gallery} title="Gallery"/>
            <Scene sceneStyle={{
              paddingTop: 65
            }} key="peve"  hideTabBar={true} component={PlaceEvents} title="Events"/>
          </Scene>
          <Scene key="dig" title="Daylife" icon={TabIcon}>
          <Scene sceneStyle={{
            paddingTop: 65,
            paddingBottom: 55
          }} key="dign" component={DayTab} title="DAylife"/>
          <Scene sceneStyle={{
            paddingTop: 65
          }} key="nightes" hideTabBar={true} component={Place} title="Place"/>
          <Scene sceneStyle={{
            paddingTop: 65
          }} key="come" hideTabBar={true} component={Comments} title="Comments"/>
          <Scene sceneStyle={{
            paddingTop: 65
          }} key="newcome" hideTabBar={true} component={AddComment} title="Comment"/>
          <Scene sceneStyle={{
            paddingTop: 65
          }} key="fave" hideTabBar={true} component={Favorite} title="Followers"/>
          <Scene sceneStyle={{
            paddingTop: 65
          }} key="like" hideTabBar={true} component={Likes} title="Likes"/>
          <Scene sceneStyle={{
            paddingTop: 65
          }} key="gal"  hideTabBar={true} component={Gallery} title="Gallery"/>
          <Scene sceneStyle={{
            paddingTop: 65
          }} key="peve"  hideTabBar={true} component={PlaceEvents} title="Events"/>

          </Scene>
          <Scene key="profile" hideNavBar={true} title="Profile" icon={TabIcon}>
            <Scene sceneStyle={{
              paddingBottom: 50
            }} key="pro" component={ProfileTab} title="Profile"/>
            <Scene sceneStyle={{
              paddingTop: 65,
              paddingBottom: 50
            }} key="followers" component={FollowersList} title="Followers"/>
          </Scene>
        </Scene>
        <Scene key="taxiModal" direction="vertical" component={Taxi} title="Taxi print-out" hideNavBar/>
        <Scene key="specialModal" direction="vertical" component={specialModal} title="Special offer" hideNavBar/>
      </Scene>

      <Scene key="main">
        <Scene key="home" component={Home} title='Please Login'/>
      </Scene>
    </Router>

  );
};

export default RouterComponent;
