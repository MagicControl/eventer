import { EventDetails } from './EventDetails';
import { EventService } from './EventService';
import { api } from '../../api';

export default new EventDetails(new EventService(api));
