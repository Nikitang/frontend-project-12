// import React from 'react';
import { useFormik } from 'formik';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import * as yup from 'yup';

import hexletLogin from '../assets/hexletLogin.jpeg';

const validationSchema = yup.object().shape({
    name: yup.string().required('Обязательно'),
    password: yup.string().required('Обязательно'),
});

const Login = () => {
    const formik = useFormik({
        initialValues: { username: '', password: '' },
        validationSchema: validationSchema,
        onSubmit: () => {
            alert('Good Job!');
        },
    });
    return (
        <Container className="container-fluid h-100">
            <Row className="justify-content-center align-content-center h-100">
                <Col className="col-12 col-md-8 col-xxl-6">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <img src={hexletLogin} />
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Ваш ник</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Пароль</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
