import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function ExamInstructions() {
    const [key, setKey] = useState('home');

    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='section-title-div'>
                            <h1 className='sec-title'>Exam Instructions</h1>
                            <div className='line'></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3 tab-heading"
                        >
                            <Tab
                                eventKey="Test Centres"
                                title={<span className={`tab-button ${key === 'Test Centres' ? 'active' : ''}`}>Test Centres</span>}
                            >
                                <div>

                                    <p>GITAM will conduct Centre-based admission test at the following states. Please choose your preferred state from the list of tentative test centres available.</p>
                                    <Row>
                                        <Col>
                                            <div>
                                                <select name="states" id="states" className='  dropdwon-shadow'>
                                                    <option value="Choose state">Choose states</option>
                                                    <option value="Visakhapatnam">Visakhapatnam</option>
                                                    <option value="Telangana">Telangana</option>

                                                </select>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className='locations-div'>
                                        <Row>
                                            <Col>
                                                <div className='locations'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <h4>Ananthapuram</h4>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='locations'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <h4>Kakinada</h4>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='locations'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <h4>Rajahmundary</h4>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='locations'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <h4>Vijayawada</h4>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='locations'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <h4>Bhimavaram</h4>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='locations'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <h4>Kurnool</h4>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='locations'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <h4>Srikakulam</h4>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='locations'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <h4>Visakhapatnam</h4>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='locations'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <h4>Kadapa</h4>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='locations'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <h4>Nellore</h4>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='locations'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <h4>Tirupati</h4>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='locations'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <h4>Visakhapatnam</h4>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='locations'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <h4>Guntur</h4>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className='locations'>
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <h4>Ongole</h4>
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>
                                </div>
                            </Tab>
                            <Tab
                                eventKey="General Instructions"
                                title={<span className={`tab-button ${key === 'General Instructions' ? 'active' : ''}`}>General Instructions</span>}
                            >
                                <div>
                                    <ul style={{ listStyleType: 'numbers' }}>
                                        <li>The final list of centres will be announced to candidates through <span style={{color:'red'}}>www.gitam.edu </span>. GITAM reserves the right to cancel any test centre and in such a case, candidates allotted to these centres will be accommodated in alternate test centres.</li>
                                        <li>Candidates are informed that, depending on administrative convenience, tests may be conducted for a limited number of days in some centers. The final list of test centers, venues, and days of the test will be announced only after all the applications are received.
                                            Candidates will be informed through the GITAM website <span style={{color:'red'}}>www.gitam.edu </span>. to enable them to choose their center, date, and time for the test according to their convenience and the availability of slots in any of the aforementioned centers.</li>
                                        <li>The candidate has to register his/her name at the registration counter in the test centre. The e-hall tickets of the candidates will be verified by the proctor to confirm the candidate's identity.
                                            The candidate has to produce any one of the following for personal identification: Passport / Driving License / EC voter ID card / IT PAN card / School or College photo bearing ID card / Aadhar Card.
                                            Each candidate will be given a seat with a computer. Candidate must take the allotted seat at least 15 minutes before the test commences</li>
                                        <li>Candidates will not be allowed to carry any textual material, printed or written, bits of papers or any other material except the e-hall ticket into the examination hall. Candidates are also not permitted to bring calculators, slide rules, Clark tables and electronic watches with facilities of calculators, laptop or palmtop computers, personal stereo systems, walkie- talkie sets, mobile phones, paging devices or any other object/device that is likely to be of unfair assistance.</li>  
                                        <li>No candidate will be allowed to go outside the test hall till the completion of the entire duration of the test. Once a candidate leaves the test hall, he/she will not be permitted to re-enter in to the test hall under any circumstances.</li>
                                        <li>Smoking is strictly prohibited. Tea, coffee, soft drinks / snacks are not allowed into the test hall. There will not be any waiting lounge facilities for family and friends at the test centre.</li> 
                                        <li>Candidates should maintain perfect silence. All actions of the candidate in the examination hall will be closely monitored using web cam and closed circuit cameras. Any conversation or gesticulation or disturbance in the examination hall shall be deemed as misbehaviour and if any candidate is found using unfair means or impersonation, his/her candidature will be cancelled and they will be liable to be debarred from taking examination either permanently or for a specified period, as decided by the Institution. GITAM reserves the right to withhold the result of such candidates.</li>
                                        <li>Candidates must sign the attendance sheet in the presence of the invigilator. The candidate must obey the rules of the test centres, otherwise he / she will be automatically debarred from the test.</li>
                                        <li>In rare and unlikely event of a technical failure during the test, the candidate may be required to take the test again.</li> 
                                    </ul>
                                </div>
                            </Tab>
                            <Tab
                                eventKey="About GAT"
                                title={<span className={`tab-button ${key === 'About GAT' ? 'active' : ''}`}>About GAT</span>}
                            >
                                <div>

                                    <ul style={{ listStyleType: 'numbers' }}>
                                        <li>Candidates should arrive at the test centre one hour before the scheduled time. There will be an on-site orientation before the test commences. If a candidate arrives after the on- site orientation begins, he/she will not be allowed to take the test. If candidates do not report on time, they are likely to miss some of the general instructions relating to the test. The examination hall will be opened 30 minutes before the commencement of the test.</li>
                                        <li>The candidate is expected to have basic familiarity with the computer skills like use of keyboard and mouse operation. It is the responsibility of the candidate to acquire these skills before appearing for the test and the Institution cannot take any responsibility in this matter.</li>
                                        <li>The questions are generated from a large question bank and all the candidates will get different question sets. An expert committee will ensure that the question sets are of equal standard level, content, question type, etc. In this matter, the decision of the Institution is final and binding on the candidate.</li>
                                        <li>The candidate must ensure that the computer allotted to him/her is switched on and any problem with the computer is to be intimated to the Proctor immediately. All the questions will be in English medium only. All the questions will be of multiple choices.</li>
                                        <li>On completion of the test, the computer will display the result in terms of number of total correct answers and wrong answers and the net score.</li>
                                        <li>There will not be any negative scoring for incorrect answers or unanswered questions</li>
                                        <li>No student will be allowed to repeat the test in the same year.</li>
                                        <li>The method adopted for resolving ties shall be in the order of scores in mathematics / biology, physics, chemistry and age of the candidate.</li>
                                        <li>For any further queries on the examination, eligibility and pattern please refer <span style={{color:'red'}}>gat.gitam.edu.</span></li>
                                    </ul>
                                </div>
                            </Tab>
                            <Tab
                                eventKey="Demo Test"
                                title={<span className={`tab-button ${key === 'Demo Test' ? 'active' : ''}`}>Demo Test</span>}
                            >
                                <div>
                                <ul  className='unordered-list-acordion'>
                                    <li>This is a trial assessment to demonstrate how questions will be presented and how the gamified session functions. The format may be different in the actual exam. Click here for Demo<span style={{color:'red'}}>test.</span></li>
                                </ul>
                                </div>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    )
}