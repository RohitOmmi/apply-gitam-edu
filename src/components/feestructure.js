import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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
            </Container>
        </>
    )
}