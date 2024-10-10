import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import onefinger1 from '../images/one-finger-hold.png';
import onefinger2 from '../images/one-finger-tap.png';
import announcement from '../images/annoncement-megaphone.png';
import bagrupee from '../images/bag-rupee.png';
import necktie from '../images/necktie.png';
import  handheld from '../images/hand-held.png';



export default function ImportantDates() {
    return (
        <>
            <Container>
                <Row>
                    <Col >

                        <div className='section-title-div'>
                            <h1 className='sec-title'>Important Dates</h1>
                            <div className='line'></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p className='text-center'>GAT/GBAT- Cycle 5</p>
                        <div className='important-dates-div'>
                        <Card style={{ width: '17rem', height:'20rem',textAlign:'center'  }} >
                            <Card.Img variant="top" src={onefinger1} className='important-date-imgs text-center' />
                            <Card.Body className='shadow-card' style={{textAlign:'center',paddingTop:'50px'}}>
                                <Card.Title><h1 className='date'>24th</h1>
                                    <br/><span>May   <br/> 2024</span>
                                </Card.Title>
                                <Card.Text>
                                  Last Date to apply.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                        <Card style={{  width: '17rem', height:'20rem',textAlign:'center'  }} >
                            <Card.Img variant="top" src={handheld} className='important-date-imgs text-center' />
                            <Card.Body className='shadow-card' style={{textAlign:'center',paddingTop:'50px'}}>
                                <Card.Title><h1 className='date'>26th</h1>
                                    <br/><span>May  <br/>  2024</span>
                                </Card.Title>
                                <Card.Text>
                                  Last Date to apply.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '17rem', height:'20rem',textAlign:'center'  }} >
                            <Card.Img variant="top" src={necktie} className='important-date-imgs text-center' />
                            <Card.Body className='shadow-card' style={{textAlign:'center',paddingTop:'50px'}}>
                                <Card.Title><h1 className='date'>26th-28th</h1>
                                    <br/><span>May  <br/> 2024</span>
                                </Card.Title>
                                <Card.Text>
                                  Last Date to apply.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                        <Card style={{  width: '17rem', height:'20rem',textAlign:'center'  }} >
                            <Card.Img variant="top" src={announcement} className='important-date-imgs text-center' />
                            <Card.Body className='shadow-card' style={{textAlign:'center',paddingTop:'50px'}}>
                                <Card.Title><h1 className='date'>30th</h1>
                                    <br/><span>May <br/> 2024</span>
                                </Card.Title>
                                <Card.Text>
                                  Last Date to apply.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                        <Card style={{  width: '17rem', height:'20rem',textAlign:'center'  }}>
                            <Card.Img variant="top" src={bagrupee} className='important-date-imgs text-center' />
                            <Card.Body className='shadow-card' style={{textAlign:'center',paddingTop:'50px'}}>
                                <Card.Title><h1 className='date'>-</h1>
                                    <br/><span>May <br/>  2024</span>
                                </Card.Title>
                                <Card.Text>
                                  Last Date to apply.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '17rem', height:'20rem',textAlign:'center' }}>
                            <Card.Img variant="top" src={onefinger2} className='important-date-imgs text-center' />
                            <Card.Body className='shadow-card' style={{textAlign:'center',paddingTop:'50px'}}>
                                <Card.Title><h1 className='date'>-</h1>
                                    <br/><span>May  <br/>  2024</span>
                                </Card.Title>
                                <Card.Text>
                                  Last Date to apply.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                        </div>
                      

                    </Col>
                </Row>
            </Container>

        </>
    )
}