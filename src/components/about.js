import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Gvideo from '../images/gitam-video2.mp4'

export default function About() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={12} sm={12}>
                        <video loop autoPlay muted>
                            <source src={Gvideo} type='video/mp4' className='vid-dimensions'></source>
                        </video>

                    </Col>
                </Row>
                <Row>
                    <Col md={8} >
                        <div className='floating-divs'>
                            <div className='floating-div'>
                                <ul className='unordered-list'>
                                    <li><h3 className='digits'>4</h3></li>
                                    <li><p className='text-below-digits'>Campuses</p></li>
                                </ul>
                            </div>
                            <div className='floating-div'>
                                <ul className='unordered-list'>
                                    <li><h3 className='digits'>12</h3></li>
                                    <li><p className='text-below-digits'>schools</p></li>
                                </ul>
                            </div>
                            <div className='floating-div'>
                                <ul className='unordered-list'>
                                    <li><h3 className='digits'>25k</h3></li>
                                    <li><p className='text-below-digits'>students</p></li>
                                </ul>
                            </div>
                            <div className='floating-div'>
                                <ul className='unordered-list'>
                                    <li><h3 className='digits'>1.5k</h3></li>
                                    <li><p className='text-below-digits'>faculties</p></li>
                                </ul>
                            </div>
                        </div>
                        <div>
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
                        </div>
                    </Col>
                    <Col md={4}>
                    <form className='input-form'>
                        <Row>
                            <Col md={12}>
                                <input type='text' placeholder='Full Name' />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <div className='dropdown-box'>
                                    <select id="locations" name="locations" className='dropdown-input'>
                                        <option value="campus">Campus</option>
                                        <option value="visakhapatnam">Visakhapatnam</option>
                                        <option value="bengaluru">bengaluru</option>
                                    </select>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='dropdown-box'>
                                    <select id="degree" name="degree" className='dropdown-input'>
                                        <option value="campus">Degree</option>
                                        <option value="ug">UG</option>
                                        <option value="pg">PG</option>
                                    </select>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='dropdow'>
                                    <select id="school" name="school" className='dropdown-input'>
                                        <option value="Descipline">Descipline</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Architecture">Architecture</option>
                                    </select>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='dropdow'>
                                    <select id="degree" name="degree" className='dropdown-input'>
                                        <option value="campus">interested program</option>
                                        <option value="ug">B.Tech Aerospace engineering</option>
                                        <option value="pg">B.Tech Bio-technology engineering</option>
                                    </select>
                                </div>
                            </Col>
                            <Col md={8}>
                            <input placeholder='Mobile number'/>
                            </Col>
                            <Col md={4}>
                            <input placeholder='OTP'></input>
                            </Col>
                        </Row>




                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}