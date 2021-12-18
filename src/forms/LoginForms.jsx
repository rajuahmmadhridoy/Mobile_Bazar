import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from 'redux/actions/authAction';

const LoginForm = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const dispatch = useDispatch();
    return (
        <div className="login_form mt-5">
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }} className="bg-white rounded shadow p-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    onChange={handleOnChange}
                                    placeholder="Enter email"
                                />
                                <Form.Text className="text-muted">
                                    Well never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="password"
                                    onChange={handleOnChange}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button onClick={() => dispatch(login(data))} variant="primary">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginForm;
