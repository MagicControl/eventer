import { UserService } from './UserService';
import { User } from './User';
import { api } from '../../api';
import storage from './Storage';

export default new User(new UserService(api), storage);
