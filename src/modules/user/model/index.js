import { UserService } from './UserService';
import { User } from './User';
import { api } from '../../api';

export default new User(new UserService(api));
