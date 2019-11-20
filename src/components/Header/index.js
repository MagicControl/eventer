import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { PageHeader } from 'antd';

import { connect } from '../../utils/connect';
import user from '../../modules/user/model';

import styles from './header.module.scss';

const Header = ({ user }) => {
    const history = useHistory();
    const location = useLocation();
    return (
        <PageHeader
            title="Eventer"
            onBack={
                location.pathname !== '/' ? () => history.push('/') : undefined
            }
            className={styles.header}
            extra={!user.token && <Link to="/login">Login</Link>}
        />
    );
};

export default connect({ user })(Header);
