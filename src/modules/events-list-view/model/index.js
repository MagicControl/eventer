import { EventsList } from './EventsLists';
import { EventsListService } from './EventsListService';
import { api } from '../../api';

export default new EventsList(new EventsListService(api));
