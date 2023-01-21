import React from 'react'
import '../hotel/hotel.css'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'

const Hotel = () => {
  return (
    <>
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/ss2.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='3'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/ss2.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='3'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/ss2.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='3'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src="images/ss2.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Hotel