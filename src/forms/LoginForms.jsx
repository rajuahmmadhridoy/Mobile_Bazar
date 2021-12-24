import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { login } from 'redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleOnChange = (e) => {
        // setFormData({...formData,[e.target.name]:e.target.value})
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const loginAction = login(formData);
        dispatch(loginAction);
    };

    const { data, status, error } = useSelector((state) => state.authReducer);

    const navigate = useNavigate();
    if (data) {
        navigate('/home');
    }

    return (
        <div className="login_form mt-5">
            <Container>
                <Row>
                    {status === 'error' && (
                        <Col md={{ span: 4, offset: 4 }}>
                            <Alert variant="primary">{error}</Alert>
                        </Col>
                    )}
                    <Col md={{ span: 4, offset: 4 }} className="bg-white rounded shadow p-5">
                        <Form onSubmit={submitHandler}>
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
                            <Button disabled={status === 'pending'} type="submit" variant="primary">
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
