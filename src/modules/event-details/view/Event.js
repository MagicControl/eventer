import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Input, Icon, Button, Typography } from 'antd';

import styles from './event.module.scss';

export const Event = ({ user, eventDetails }) => {
    const { id } = useParams();
    useEffect(() => {
        eventDetails.loadData(id);
    }, []);

    if (!eventDetails.data) {
        return null;
    }

    const updateName = e => eventDetails.updateName(e.target.value);

    const applyChanges = () => eventDetails.applyUpdates(user.token);

    const { name, logo_uri, organizer, category } = eventDetails.data;

    return (
        <Row type="flex" gutter={[8, 8]}>
            <Col xs={24} md={8}>
                <img className={styles.logo} src={logo_uri} alt={name} />
            </Col>
            <Col xs={24} md={16}>
                <Row gutter={[0, 8]}>
                    <Col xs={24} md={16}>
                        <Input
                            addonBefore="Title"
                            addonAfter={!user.id && <Icon type="lock" />}
                            value={name}
                            onChange={updateName}
                            disabled={!user.token}
                        />
                    </Col>
                </Row>
                <Row gutter={[0, 8]}>
                    <Col xs={24} md={16}>
                        Organizer: {organizer.name}
                    </Col>
                </Row>
                <Row gutter={[0, 8]}>
                    <Col xs={24} md={16}>
                        Category: {category.name}
                    </Col>
                </Row>
                {user.token && (
                    <Row gutter={[0, 8]}>
                        <Col xs={24} md={16}>
                            <Button type="primary" onClick={applyChanges}>
                                Apply updates
                            </Button>
                        </Col>
                    </Row>
                )}
            </Col>
        </Row>
    );
};
