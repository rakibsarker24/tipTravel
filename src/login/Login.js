import React from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../login/login.css'

const Login = () => {
  return (
    <section id="login">
        <Container>
             <Row>
                <Col lg="5" className='mid color'>
                    <h2>Login</h2>
                </Col>
            </Row>
            <Row>
                <Col lg='5' className='mid'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <p>Have not a account? <Link to={"/reg"}>Registration</Link> </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Login