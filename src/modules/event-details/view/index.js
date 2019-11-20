import { Event } from './Event';
import eventDetails from '../model';
import user from '../../user/model';
import { connect } from '../../../utils/connect';

export default connect({ user, eventDetails })(Event);
