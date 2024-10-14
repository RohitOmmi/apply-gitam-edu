import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Accordion from 'react-bootstrap/Accordion';

import Faqimage from "../images/faq-img.png"


export default function Faqs() {
    return (
        <>


            <Container>
                <Row>
                    <Col md={8}>
                        <div className='section-title-div'>
                            <h1 className='sec-title' style={{ paddingTop: '65px' }}>FAQ's</h1>
                            <div className='line'></div>
                        </div>
                        <div className='faqs-accordion-div'>
                            <Accordion flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>How to apply for courses at GITAM( Deemed to be university)?</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <ul style={{listStyleType:'none'}}>
                                                <li>Applicants can log on to <span style={{color:'red'}}> apply.gitam.edu</span> and fill in their application form for the desired course through online mode only.</li>
                                            </ul>
                                        </div>
                                        
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>if a student for one course, can the apply for other courses ?</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <p>
                                            Yes. A student can add the eligible courses after registration. They can log on with the same credentials and select the multiple courses they are interested in.
                                            </p>
                                        </div>
                                       
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>What is eligibility criteria for admission ?</Accordion.Header>
                                    <Accordion.Body>
                                       <div>
                                        <p></p>The eligibility criterion varies from program to program. One can verify the Eligibility by following the below procedure - (a)Visit https://gat.gitam.edu, (b)Select the respective course & Click on Eligibility and test Pattern to check the eligibility of the test.
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>I made mistakes in my application, How will I be able to correct them ?</Accordion.Header>
                                    <Accordion.Body>
                                       <div>
                                        <p>You need to send information from your registered email ID to gat@gitam.edu explaining the corrections/details. Don’t forget to mention your application ID and registered Mobile, or you can call us at 8880884000. The change of Email ID is not entertained under any circumstances.</p>
                                       </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>I am expecting to get 90% marks in +2. Will I get any scholarship ?</Accordion.Header>
                                    <Accordion.Body>
                                      <div>
                                        <p>No, but you can still get a scholarship based on your performance in GAT or other competitive tests as mentioned in the framework of the scholarship of GITAM; for details, visit the Scholarships Page.</p>
                                      </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>
                    </Col>
                    <Col md={4}>
                        <div>
                            <img src={Faqimage} alt="FAQ's-image" className='w-100' />

                        </div>

                    </Col>
                </Row>

            </Container>





        </>
    )
}