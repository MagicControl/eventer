import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Input, Icon, Button } from 'antd';

import styles from './event.module.scss';

export const Event = ({ user, eventDetails }) => {
    const { id } = useParams();
    useEffect(() => {
        eventDetails.loadData(id);
    }, []);

    if (!eventDetails.data) {
        return null;
    }

    const updateField = fieldName => e =>
        eventDetails.updateField(fieldName, e.target.value);

    const updateName = e => eventDetails.updateName(e.target.value);

    const applyChanges = () => eventDetails.applyUpdates();

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
                            disabled={!user.id}
                        />
                    </Col>
                </Row>
                <Row gutter={[0, 8]}>
                    <Col xs={24} md={16}>
                        <Input
                            addonBefore="Organizer"
                            addonAfter={!user.id && <Icon type="lock" />}
                            value={organizer.name}
                            onChange={updateField('organizer')}
                            disabled={!user.id}
                        />
                    </Col>
                </Row>
                <Row gutter={[0, 8]}>
                    <Col xs={24} md={16}>
                        <Input
                            addonBefore="Category"
                            addonAfter={!user.id && <Icon type="lock" />}
                            value={category.name}
                            onChange={updateField('category')}
                            disabled={!user.id}
                        />
                    </Col>
                </Row>
                <Row gutter={[0, 8]}>
                    <Col xs={24} md={16}>
                        <Button type="primary" onClick={applyChanges}>
                            Apply updates
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
