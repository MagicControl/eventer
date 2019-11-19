import React from 'react';
import { observer } from 'mobx-react';
import { Card } from 'antd';
import styles from './events-list-view.module.scss';

export const EventsView = observer(({ events }) =>
    events.map(({ id, name, logo_uri, uri }) => (
        <Card
            className={styles['event-card']}
            key={id}
            hoverable
            cover={<img alt={name} src={logo_uri} />}
        >
            <Card.Meta title={name} description={uri} />
        </Card>
    ))
);
