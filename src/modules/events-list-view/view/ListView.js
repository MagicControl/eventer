import React, { useEffect } from 'react';

import { EventsView } from './EventsView';

import styles from './events-list-view.module.scss';

export const ListView = ({ eventsList }) => {
    useEffect(() => {
        eventsList.load();
    }, []);

    const setPage = page => eventsList.setActivePage(page);

    if (!eventsList.events) {
        return null;
    }

    return (
        <div className={styles['list-wrapper']}>
            <EventsView events={eventsList.events} />
        </div>
    );
};
