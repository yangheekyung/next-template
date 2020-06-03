import React from 'react';
import {withTranslation} from "../i18n";
import Router from "next/router";
import {Container, Row, Col, Card, Form, Button} from "react-bootstrap";

const Login = () => (
    <Container fluid>
        <Row className="justify-content-center align-items-center" style={{height: '100vh'}}>
            <Col sm={6} md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title className="text-center">
                            <img
                                src="/image/logo.png"
                                width={60}
                                height={60}
                            />
                        </Card.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <hr/>
                            <Button block onClick={() => {Router.push('/')}}>Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default withTranslation('common')(Login);