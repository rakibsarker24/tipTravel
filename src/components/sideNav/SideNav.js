import React from 'react'
import '../sideNav/sideNav.css'
import { Container,Row,Col } from 'react-bootstrap'
import { FaHome } from 'react-icons/fa';
import { MdCloudUpload } from 'react-icons/md';
import { AiOutlineDown } from 'react-icons/ai';
import { ImSwitch } from 'react-icons/im';




const SideNav = () => {
  return (
    <>
        <Container>
            <Row>
                <Col lg='3'>
                     <div className='sidenav'>
                            <ul>
                                <li><a href=''><span><FaHome className='home'/></span>Home</a></li>
                                <li><a href=''><span><MdCloudUpload className='home'/></span>product upload<span><AiOutlineDown className='lp'/></span></a></li>
                                <li><a href=''><span><MdCloudUpload className='home'/></span>banner upload</a></li>
                                <li><a href=''><span><MdCloudUpload className='home'/></span>logo upload</a></li>
                                <li><a href=''><span><MdCloudUpload className='home'/></span>card upload</a></li>
                                <li><a href=''><span><MdCloudUpload className='home'/></span>contact</a></li>
                                <li><a href=''><span><MdCloudUpload className='home'/></span>Logout</a></li>
                                <li><a href=''><span><MdCloudUpload className='home'/></span>Logout</a></li>
                                <li><a href=''><span><MdCloudUpload className='home'/></span>Logout</a></li>
                                <li><a href=''><span><MdCloudUpload className='home'/></span>Logout</a></li>
                                <li><a href=''><span><ImSwitch className='home'/></span>Logout</a></li>
                            </ul>
                     </div>
                </Col>
                <Col lg='9'>
                    <div className=''>
                            Content show
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default SideNav