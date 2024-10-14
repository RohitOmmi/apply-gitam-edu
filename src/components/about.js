import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Gvideo from '../images/gitam-video2.mp4'
import { useState } from 'react';

export default function About() {
    const [fullName, setFullName] = useState("");

    const onchangeFullName = (e) => {
        setFullName(e.target.value)
    }
    const formSubmission =(e) => {
            console.log(e.preventDefault);
            console.log("Form Submitted")
    }
    return (
        <>
            <div className='container-fluid'>
                <video loop autoPlay muted>
                    <source src={Gvideo} type='video/mp4' className='vid-dimensions'></source>
                </video>
            </div>
            <Container>

                <Row>
                    <Col md={2} >
                        <div className='floating-div'>
                            <h3 className='digits'>4</h3>
                            <h6 className='text-below-digits'>Campuses</h6>
                        </div>
                    </Col>
                    <Col md={2} >
                        <div className='floating-div'>
                            <h3 className='digits'>12</h3>
                            <h6 className='text-below-digits'>Schools</h6>
                        </div>
                    </Col>
                    <Col md={2} >
                        <div className='floating-div'>
                            <h3 className='digits'>25K</h3>
                            <h6 className='text-below-digits'>Students</h6>
                        </div>
                    </Col>
                    <Col md={2} >
                        <div className='floating-div'>
                            <h3 className='digits'>1.5K</h3>
                            <h6 className='text-below-digits'>Faculties</h6>
                        </div>
                    </Col>
                    <Col md={4}>
                        <form className='input-form' style={{width:"100%"}} >
                          {/* <Container> */}
                                <Row>
                                    <Col md={12}>
                                        <input type='text' placeholder='Full Name' style={{width:"100%"}} onChange={onchangeFullName} />
                                       
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <div className='dropdown-box' style={{width:"100%"}}>
                                            <select id="locations" name="locations" className='dropdown-input'>
                                                <option value="campus">Campus</option>
                                                <option value="visakhapatnam">Visakhapatnam</option>
                                                <option value="bengaluru">bengaluru</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='dropdown-box ' style={{width:"100%"}}>
                                            <select id="degree" name="degree" className='dropdown-input'>
                                                <option value="campus">Degree</option>
                                                <option value="ug">UG</option>
                                                <option value="pg">PG</option>
                                            </select>
                                        </div>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col md={6}>
                                        <div className='dropdown-box' style={{width:"100%"}}>
                                            <select id="school" name="school" className='dropdown-input'>
                                                <option value="Descipline">Descipline</option>
                                                <option value="Engineering">Engineering</option>
                                                <option value="Architecture">Architecture</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='dropdow' style={{width:"100%"}}>
                                            <select id="degrees" name="degrees" className='dropdown-input'>
                                                <option value="campus">interested program</option>
                                                <option value="ug">B.Tech Aerospace engineering</option>
                                                <option value="pg">B.Tech Bio-technology engineering</option>
                                            </select>
                                        </div>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col md={8}>
                                        <input placeholder='Mobile number' type='number' style={{width:"100%"}}/>
                                    </Col>
                                    <Col md={4}>
                                        <input placeholder='OTP' type='number'style={{width:"100%"}} />
                                    </Col>
                                    </Row>
                            {/* </Container>  */}
                           
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <p className='about-info'>
                            GITAM deemed to be University, with four campuses across three
                            states, is a
                            beacon of diverse
                            academic excellence, global recognition and student empowerment through innovation and
                            research.
                            Our vibrant community nurtures holistic development, shaping alumini who excel in
                            various
                            fields.

                        </p>
                        
                    </Col>
                </Row>

            </Container >
        </>
    )
}