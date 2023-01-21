import React from 'react'
import '../subSlide/subSlide.css'
import { Container,Carousel,Form,Row,Col } from 'react-bootstrap'


const SubSlide = () => {
  return (
    <section id='subSlide'>
        <Container>
          <Row>
            <Col lg='4'>
                <Carousel interval={1000}>
                        <Carousel.Item className='slidItem' style={{ background: `url(${"images/ss1.jpg"}) no-repeat center` }}>
                          <Container>
                                <div className="slider">
                                    <h4>Only For Tiptravel Users</h4>
                                    <span>15% OFF</span>
                                </div>
                          </Container>
                        </Carousel.Item>
                        <Carousel.Item className='slidItem' style={{ background: `url(${"images/ss2.jpg"}) no-repeat center` }}>
                          <Container>
                                <div className="slider">
                                    <h4>Only For Tiptravel Users</h4>
                                    <span>15% OFF</span>
                                </div>
                          </Container>
                        </Carousel.Item>
                        <Carousel.Item className='slidItem' style={{ background: `url(${"images/ss3.jpg"}) no-repeat center` }}>
                          <Container>
                                <div className="slider">
                                    <h4>Only For Tiptravel Users</h4>
                                    <span>15% OFF</span>
                                </div>
                          </Container>
                        </Carousel.Item>
                </Carousel>
            </Col>
            <Col lg='4'>
                <Carousel interval={1000}>
                        <Carousel.Item className='slidItem' style={{ background: `url(${"images/ss4.jpg"}) no-repeat center` }}>
                          <Container>
                                <div className="slider">
                                    <h4>Only For Tiptravel Users</h4>
                                    <span>15% OFF</span>
                                </div>
                          </Container>
                        </Carousel.Item>
                        <Carousel.Item className='slidItem' style={{ background: `url(${"images/ss5.jpg"}) no-repeat center` }}>
                          <Container>
                                <div className="slider">
                                    <h4>Only For Tiptravel Users</h4>
                                    <span>15% OFF</span>
                                </div>
                          </Container>
                        </Carousel.Item>
                        <Carousel.Item className='slidItem' style={{ background: `url(${"images/ss6.jpg"}) no-repeat center` }}>
                          <Container>
                                <div className="slider">
                                    <h4>Only For Tiptravel Users</h4>
                                    <span>15% OFF</span>
                                </div>
                          </Container>
                        </Carousel.Item>
                </Carousel>
            </Col>
            <Col lg='4'>
                <Carousel interval={1000}>
                        <Carousel.Item className='slidItem' style={{ background: `url(${"images/ss9.jpg"}) no-repeat center` }}>
                          <Container>
                                <div className="slider">
                                    <h4>Only For Tiptravel Users</h4>
                                    <span>15% OFF</span>
                                </div>
                          </Container>
                        </Carousel.Item>
                        <Carousel.Item className='slidItem' style={{ background: `url(${"images/ss8.jpg"}) no-repeat center` }}>
                          <Container>
                                <div className="slider">
                                    <h4>Only For Tiptravel Users</h4>
                                    <span>15% OFF</span>
                                </div>
                          </Container>
                        </Carousel.Item>
                        <Carousel.Item className='slidItem' style={{ background: `url(${"images/ss7.jpg"}) no-repeat center` }}>
                          <Container>
                                <div className="slider">
                                    <h4>Only For Tiptravel Users</h4>
                                    <span>15% OFF</span>
                                </div>
                          </Container>
                        </Carousel.Item>
                </Carousel>
            </Col>
          </Row>
        </Container>
    </section>
  )
}

export default SubSlide