import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Icon, Input, Button, Typography } from 'antd';

import styles from './registration.module.scss';

const Registration = ({ user, form }) => {
    const history = useHistory();
    const { getFieldDecorator } = form;
    const handleSubmit = e => {
        e.preventDefault();
        form.validateFields(async (err, values) => {
            if (!err) {
                const { email, password } = values;
                await user.register(email, password);
                history.push('/login');
            }
        });
    };

    return (
        <div className={styles.registration}>
            <Typography.Title level={3}>Register new User</Typography.Title>
            <Form onSubmit={handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ],
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type="user"
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                />
                            }
                            placeholder="Email"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ],
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type="lock"
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    )}
                </Form.Item>
                <Form.Item className={styles['register-button']}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>{' '}
                    or <Link to="/login">login</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Form.create({ name: 'registration' })(Registration);
