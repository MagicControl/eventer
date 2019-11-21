import View from './Login';

import user from '../../user/model';
import { connect } from '../../../utils/connect';

export default connect({ user })(View);
