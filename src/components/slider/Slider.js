import React from 'react'
import '../slider/slider.css'
import { Container,Carousel,Form } from 'react-bootstrap'
import { FaPlaneDeparture } from 'react-icons/fa';
import { FaPlaneArrival } from 'react-icons/fa';
import { TbPlaneInflight } from 'react-icons/tb';
import { RiHotelLine } from 'react-icons/ri';
import { RiTreasureMapLine } from 'react-icons/ri';

const Slider = () => {
  return (
    <>
        <section className='slid'>
                <Carousel fade>
                    <Carousel.Item id='slider' style={{ background: `url(${"images/s1.jpg"}) no-repeat center` }}>
                       <Container>
                            <div className="slider-content">
                                <h1>Life is either a daring adventure</h1>
                                <span>Find awaresome flight, hote, tour, car and packages.</span>
                            </div>
                       </Container>
                    </Carousel.Item>
                    <Carousel.Item id='slider' style={{ background: `url(${"images/s2.jpg"}) no-repeat center` }}>
                       <Container>
                            <div className="slider-content">
                                <h1>Explore the world together</h1>
                                <span>Find awaresome flight, hote, tour, car and packages.</span>
                            </div>
                       </Container>
                    </Carousel.Item>
                    <Carousel.Item id='slider' style={{ background: `url(${"images/s3.jpg"}) no-repeat center` }}>
                       <Container>
                            <div className="slider-content">
                                <h1>Fear is only temporary</h1>
                                <span>Find awaresome flight, hote, tour, car and packages.</span>
                            </div>
                       </Container>
                    </Carousel.Item>
                </Carousel>

                <Container>
                    <div className='bootom'>
                        <div className="bottomContent">
                            <div className='top flex'>
                                <div className="text">
                                    <a href=''><TbPlaneInflight className='icon'/>Flight</a>
                                    <a href=''><RiTreasureMapLine className='icon'/>Tours</a>
                                    <a href=''><RiHotelLine className='icon'/>Hotel</a>
                                </div>
                                <div className="rtext">
                                    <a href=''>One Way</a>
                                    <a href=''>Roundtrip</a>
                                    <a href=''>Multi City</a>
                                </div>
                            </div>
                            <div className='form flex'>
                                <div className="left">
                                    <p htmlFor="">Form</p>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Form" />
                                    </Form.Group>
                                    <span><FaPlaneDeparture/></span>
                                </div>
                                <div className="left">
                                    <p htmlFor="">To</p>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="To" />
                                    </Form.Group>
                                    <span><FaPlaneArrival/></span>
                                </div>
                                <div className="left">
                                    <p htmlFor="">Journy Date</p>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="date" placeholder="Form" />
                                    </Form.Group>
                                </div>
                                <div className="left">
                                    <p htmlFor="">Passenger, Class</p>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select</option>
                                        <option >One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className='button'>
                                <a href="">Search Flight</a>
                            </div>
                        </div>
                    </div>
                </Container>
        </section>
    </>
  )
}

export default Slider