import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import GuideReducer from './GuidesReducer';
import EventsReducer from './EventsReducer';
import CommentsReducer from './CommentsReducer';
import NightReducer from './NightReducer';
import MediaReducer from './MediaReducer';
import DayReducer from './DayReducer';
import ProfileReducer from './ProfileReducer';
import MomentsReducer from './MomentsReducer';
import RelationsReducer from './RelationsReducer'

export default combineReducers({
  auth: AuthReducer,
  guide: GuideReducer,
  event: EventsReducer,
  comm: CommentsReducer,
  night: NightReducer,
  media: MediaReducer,
  day: DayReducer,
  profile: ProfileReducer,
  moment: MomentsReducer,
  relation: RelationsReducer
});
