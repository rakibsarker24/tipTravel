import React from 'react'
import '../header/header.css'
import { Container,Row,Col } from 'react-bootstrap'
import { MdEmail } from 'react-icons/md';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';


const Header = () => {
  return (
    <>
        <section id="header">
            <Container>
                <Row>
                    <Col lg='4' >
                        <div className="flex">
                            <div className="phone">
                                <span><MdEmail/></span>
                                <label>018252131654</label>
                            </div>
                            <div className="phone">
                                <span><BsFillTelephonePlusFill/></span>
                                <label>018252131654</label>
                            </div>
                        </div>
                    </Col>
                    <Col lg='8'>
                    <div className="location ">
                            <span><MdLocationOn/></span>
                            <label>West Kafrul, Dhaka-1207</label>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Header