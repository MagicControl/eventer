import React, { useEffect } from 'react';
import { Pagination } from 'antd';

import { EventsView } from './EventsView';
import { Search } from './Search';
import styles from './events-list-view.module.scss';

export const ListView = ({ eventsList }) => {
    useEffect(() => {
        eventsList.load();
    }, []);

    const setPage = page => eventsList.setActivePage(page);

    const runSearch = (searchString, minDate, maxDate) =>
        eventsList.search(searchString, minDate, maxDate);

    if (!eventsList.events) {
        return null;
    }

    return (
        <div className={styles.events}>
            <Search onSearch={runSearch} />
            <div className={styles['list-wrapper']}>
                <EventsView events={eventsList.events} />
            </div>
            <div className={styles.pagination}>
                <Pagination
                    current={eventsList.currentPage}
                    defaultCurrent={1}
                    pageSize={eventsList.itemsPerPage}
                    total={eventsList.totalItems}
                    onChange={setPage}
                />
            </div>
        </div>
    );
};
