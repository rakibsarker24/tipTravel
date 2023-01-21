import { useState } from 'react'
import { Container,Row,Col,Form,Button,Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../registration/registration.css'
import axios from 'axios'

const Registration = () => {

    let [user,setUser] = useState("")
    let [erruser,setErruser] = useState("")

    let [email,setEmail] = useState("")
    let [erremail,setErremail] = useState("")

    let [password,setPassword] = useState("")
    let [errpassword,setErrpassword] = useState("")

    let [cpassword,setCpassword] = useState("")
    let [errcpassword,setErrCpassword] = useState("")
    let [match,setMatch] = useState("")


    let handleSubmit =async(e)=>{
        e.preventDefault()
        if(user==""){
            setErruser("please enter username")
        }else if (email=="") {
            setErremail("please enter email")
        } else if(password=="") {
            setErrpassword("enter your passord")
        }else if(cpassword==""){
            setErrCpassword("confrim password")
        }else if(password!=cpassword){
            setMatch("password can't match")
        }

        let data = await axios.post("http://localhost:8000/registration",{
            user:user,
            email:email,
            password:password,
            cpassword:cpassword,
        })



    }




  return (
    <section id="reg">
        <Container>
            <Row>
                <Col lg="5" className='mid color'>
                    <h2>Registration</h2>
                </Col>
            </Row>
            <Row>
                <Col lg='5' className='mid'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="User Name" value={user} onChange={(e)=>{setUser(e.target.value)}} />
                            {erruser?
                                <Form.Text className="text-muted red">
                                   {erruser}
                                </Form.Text>
                            :
                            ""
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            {erremail?
                                <Form.Text className="text-muted red">
                                   {erremail}
                                </Form.Text>
                            :
                            ""
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Create Password</Form.Label>
                            <Form.Control type="password" placeholder="Create Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                            {errpassword?
                                <Form.Text className="text-muted red">
                                   {errpassword}
                                </Form.Text>
                            :
                            ""
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confrim Password</Form.Label>
                            <Form.Control type="password" placeholder="Confrim Password" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}/>
                            {errcpassword?
                                <Form.Text className="text-muted red">
                                   {errcpassword}
                                </Form.Text>
                            :
                            ""
                            }
                            {match?
                                <Form.Text className="text-muted red">
                                   {match}
                                </Form.Text>
                            :
                            ""
                            }
                        </Form.Group>
                       
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                        <p>Have already a account?<Link to="/login">Login</Link></p>
                    </Form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Registration