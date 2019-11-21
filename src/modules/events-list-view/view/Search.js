import React, { useState } from 'react';
import moment from 'moment';
import { DatePicker, Input, Button, Row, Col } from 'antd';

import styles from './events-list-view.module.scss';

export const Search = ({ onSearch }) => {
    const [searchString, setSearchString] = useState('');
    const [dateRange, setDateRange] = useState(['', '']);

    const updateInputValue = e => setSearchString(e.target.value);
    const updateDate = (_, dateStrings) => setDateRange(dateStrings);

    const doSearch = () => onSearch(searchString, ...dateRange);

    return (
        <div className={styles.search}>
            <Row type="flex" justify="start" gutter={[8, 8]}>
                <Col xs={24} md={10}>
                    <Input
                        placeholder="Search"
                        value={searchString}
                        onChange={updateInputValue}
                    />
                </Col>
                <Col>
                    <DatePicker.RangePicker
                        defaultPickerValue={[moment(), moment()]}
                        onChange={updateDate}
                    />
                </Col>
                <Col>
                    <Button onClick={doSearch}>Search</Button>
                </Col>
            </Row>
        </div>
    );
};
