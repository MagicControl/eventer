import { connect } from '../../../utils/connect';
import { ListView } from './ListView';
import eventsList from '../model';

export default connect({ eventsList })(ListView);
