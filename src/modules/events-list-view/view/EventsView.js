import React from 'react';
import { observer } from 'mobx-react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styles from './events-list-view.module.scss';

export const EventsView = observer(({ events }) =>
    events.map(({ id, name, logo_uri, start_date }) => (
        <Link className={styles['event-card']} key={id} to={`/event/${id}`}>
            <Card hoverable cover={<img alt={name} src={logo_uri} />}>
                <Card.Meta
                    title={name}
                    description={`Starting: ${moment(start_date).format(
                        'YYYY-MM-DD HH:mm'
                    )}`}
                />
            </Card>
        </Link>
    ))
);
