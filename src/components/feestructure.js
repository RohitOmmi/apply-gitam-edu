import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

export default function FeeStructure() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='section-title-div'>
                            <h1 className='sec-title'>Fee Structure</h1>
                            <div className='line'></div>
                        </div>
                        <p>Explore our affordable and transparent fee structure, making quality education accessible to all.</p>
                        {/* <div>toogle button</div> */}
                    </Col>

                </Row>
                <Row>
                    <Col md={4}>
                        <div>
                            <select name="campus" id="campus" className='w-100 dropdwon-shadow'>
                                <option value="Select campus">Select campus</option>
                                <option value="volvo">Visakhaptnam</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Bengaluru">Bengaluru</option>

                            </select>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <select name="stream" id="stream" className='w-100 dropdwon-shadow'>
                                <option value="Select Discipline">Select Discipline</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Architecture">Architecture</option>
                                <option value="Humanities">Humanities</option>

                            </select>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <select name="course" id="course" className=' w-100 dropdwon-shadow'>
                                <option value="Select Course Name">Select Course Name</option>
                                <option value="B.tech Aerospace Enginnering">B.tech Aerospace Enginnering</option>
                                <option value="B.tech Bio-Tech Enginnering">B.tech Bio-Tech Enginnering</option>
                                <option value="M.Tech Data Science">M.Tech Data Science</option>

                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} >
                        <div className="cardBox">
                            <div className="fee-card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h5 className="cardTitle">First year</h5>
                                        <h3 className="cardValue"><i class="fa-solid fa-indian-rupee-sign"></i> 295000</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="fee-card-footer bg_red">
                                <div className='card-footer-alignment'>
                                    <div>
                                        <h5 className="subTitle">Sem 1</h5>
                                        <h6><i class="fa-solid fa-indian-rupee-sign"></i>145000</h6>
                                    </div>
                                    <div>
                                        <h5 className="subTitle">Sem 2</h5>
                                        <h6><i class="fa-solid fa-indian-rupee-sign"></i>145000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} >
                        <div className="cardBox">
                            <div className="fee-card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h5 className="cardTitle">Second year</h5>
                                        <h3 className="cardValue"><i class="fa-solid fa-indian-rupee-sign"></i> 295000</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="fee-card-footer bg_red">
                                <div className='card-footer-alignment'>
                                    <div>
                                        <h5 className="subTitle">Sem 1</h5>
                                        <h6><i class="fa-solid fa-indian-rupee-sign"></i>145000</h6>
                                    </div>
                                    <div>
                                        <h5 className="subTitle">Sem 2</h5>
                                        <h6><i class="fa-solid fa-indian-rupee-sign"></i>145000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} >
                        <div className="cardBox">
                            <div className="fee-card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h5 className="cardTitle">Third year</h5>
                                        <h3 className="cardValue"><i class="fa-solid fa-indian-rupee-sign"></i> 295000</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="fee-card-footer bg_red">
                                <div className='card-footer-alignment'>
                                    <div>
                                        <h5 className="subTitle">Sem 1</h5>
                                        <h6><i class="fa-solid fa-indian-rupee-sign"></i>145000</h6>
                                    </div>
                                    <div>
                                        <h5 className="subTitle">Sem 2</h5>
                                        <h6><i class="fa-solid fa-indian-rupee-sign"></i>145000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} >
                        <div className="cardBox">
                            <div className="fee-card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h5 className="cardTitle">Fourth year</h5>
                                        <h3 className="cardValue"><i class="fa-solid fa-indian-rupee-sign"></i> 295000</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="fee-card-footer bg_red">
                                <div className='card-footer-alignment'>
                                    <div>
                                        <h5 className="subTitle">Sem 1</h5>
                                        <h6><i class="fa-solid fa-indian-rupee-sign"></i>145000</h6>
                                    </div>
                                    <div>
                                        <h5 className="subTitle">Sem 2</h5>
                                        <h6><i class="fa-solid fa-indian-rupee-sign"></i>145000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} >
                        <div className="cardBox">
                            <div className="fee-card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h5 className="cardTitle">Fifth year</h5>
                                        <h3 className="cardValue"><i class="fa-solid fa-indian-rupee-sign"></i> 295000</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="fee-card-footer bg_red">
                                <div className='card-footer-alignment'>
                                    <div>
                                        <h5 className="subTitle">Sem 1</h5>
                                        <h6><i class="fa-solid fa-indian-rupee-sign"></i>145000</h6>
                                    </div>
                                    <div>
                                        <h5 className="subTitle">Sem 2</h5>
                                        <h6><i class="fa-solid fa-indian-rupee-sign"></i>145000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className='cardBox'>
                            <p className='note'><span className='green-text'>Note:</span>3% increase of tution fee, if paid in semester wise</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='bg-accordion'>Eligibilty</Accordion.Header>
                                <Accordion.Body>
                                    <h6>A minimum of 60% or 6.0 CGPA (55% incase of CBSE and ICSE) aggregate marks in Intermediate or 10+2 examination from a recognized central / state board with Physics, Chemistry & Mathematics subjects</h6>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Exam Pattern</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col>
                                            <h6>The duration of the test is 2 hours. The test consists of three sections and all questions are of objective type (multiple choice questions). Each question has four options of which one is correct. Each correct answer will be awarded 2 marks. The wrong answer and unanswered questions will receive nil marks.</h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Selection</th>
                                                        <th>Subkject</th>
                                                        <th>Questions</th>
                                                        <th>Total marks</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>A</td>
                                                        <td>Engineering (Separate Paper for each branch)</td>
                                                        <td>40</td>
                                                        <td>80</td>
                                                    </tr>
                                                    <tr>
                                                        <td>B</td>
                                                        <td>Mathematics</td>
                                                        <td>20</td>
                                                        <td>40</td>
                                                    </tr>
                                                    <tr>
                                                        <td>C</td>
                                                        <td>Physics</td>
                                                        <td>15</td>
                                                        <td>30</td>
                                                    </tr>
                                                    <tr>
                                                        <td>D</td>
                                                        <td>Chemistry</td>
                                                        <td>15</td>
                                                        <td>30</td>
                                                    </tr>
                                                    <tr>
                                                        <td>E</td>
                                                        <td>English</td>
                                                        <td>10</td>
                                                        <td>20</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>Total</td>
                                                        <td>100</td>
                                                        <td>200</td>
                                                    </tr>
                                                </tbody>
                                            </Table>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <div>
                                            <ul className='unordered-list-acordion'>
                                                <li>
                                                Gamified assessment which strengthens a candidate's engagement and differentiates the assessment process. It is as easy as playing a video game. However, you will be evaluated on your Section.
                                                This entire assessment is divided different challenges like Motion challenge, Grid challenge, Switch challenge, Digit challenge and English. Each of these challenges has up to level 7 to crack. 
                                                Every time you clear a level, next level gets unlocked.
                                                </li>
                                                <li>This is a system based exam, which will be held at specific exam centres finalized by GITAM after the last date of application <span style={{color:'red'}}>Click Here</span></li>
                                                <li>The candidates need to choose date & time for exam and download the admit card.</li>
                                            </ul>
                                        </div>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Syallbus & Sample papers</Accordion.Header>
                                <Accordion.Body>
                                   <div>
                                    <Row>
                                        <Col>
                                        <div>
                                            <ul className='unordered-list-acordion'>
                                                <li>
                                                <span style={{color:'red'}}>Click here for syllabus</span>
                                                </li>
                                            </ul>
                                            <h3>Sample Papers</h3>
                                            <ul className='unordered-list-acordion'>
                                                <li>
                                                <span style={{color:'red'}}>Click here</span> for Physics , chemistry & Mathematics(MPC) 
                                                </li>
                                                <li>
                                                <span style={{color:'red'}}>Click here </span>for Physics , chemistry & Biology(MPC) 
                                                </li>
                                            </ul>
                                        </div>
                                        </Col>
                                    </Row>
                                   </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </>
    )
}