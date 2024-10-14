import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Card from 'react-bootstrap/Card';
import architecture from '../images/architecture.png';
import engineering from"../images/engineering.png";
import humanity from "../images/humanities.png";
import law from "../images/Law.png";
import management from "../images/management.png";
import paramedical from "../images/paramedic.png";
import pharmacy from "../images/Pharmacy.png";
import physiotherapy from "../images/Physiotherapy.png";
import medicine from "../images/Medicine.png";
import nursing from "../images/Nursing.png";
import publicpolicy from "../images/Public-Policy.png";
import science from "../images/Science.png"



export default function Discipline() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className='section-title-div'>
                            <h1 className='sec-title'>Discipline</h1>
                            <div className='line'></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <div className='dispcard'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={architecture}  style={{width:'40px', height:'40px',marginLeft:'auto',marginRight:'auto',marginTop:'12px'}}/>
                                <Card.Body>
                                    
                                    <Card.Text style={{textAlign:"center"}}>
                                        <p>Architecture</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='dispcard'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={engineering}  style={{width:'40px', height:'40px',marginLeft:'auto',marginRight:'auto',marginTop:'12px'}}/>
                                <Card.Body>
                                    
                                    <Card.Text style={{textAlign:"center"}}>
                                        <p>Engineering</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='dispcard'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={humanity}  style={{width:'40px', height:'40px',marginLeft:'auto',marginRight:'auto',marginTop:'12px'}}/>
                                <Card.Body>
                                    
                                    <Card.Text style={{textAlign:"center"}}>
                                        <p>Humanity&Social science</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='dispcard'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={law}  style={{width:'40px', height:'40px',marginLeft:'auto',marginRight:'auto',marginTop:'12px'}}/>
                                <Card.Body>
                                    
                                    <Card.Text style={{textAlign:"center"}}>
                                        <p>Law</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='dispcard'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={management}  style={{width:'40px', height:'40px',marginLeft:'auto',marginRight:'auto',marginTop:'12px'}}/>
                                <Card.Body>
                                    
                                    <Card.Text style={{textAlign:"center"}}>
                                        <p>Management</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='dispcard'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={paramedical}  style={{width:'40px', height:'40px',marginLeft:'auto',marginRight:'auto',marginTop:'12px'}}/>
                                <Card.Body>
                                    
                                    <Card.Text style={{textAlign:"center"}}>
                                        <p>Paramedical</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='dispcard'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={pharmacy}  style={{width:'40px', height:'40px',marginLeft:'auto',marginRight:'auto',marginTop:'12px'}}/>
                                <Card.Body>
                                    
                                    <Card.Text style={{textAlign:"center"}}>
                                        <p>Pharmacy</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='dispcard'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={physiotherapy}  style={{width:'40px', height:'40px',marginLeft:'auto',marginRight:'auto',marginTop:'12px'}}/>
                                <Card.Body>
                                    
                                    <Card.Text style={{textAlign:"center"}}>
                                        <p>Physiotherapy</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='dispcard'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={medicine}  style={{width:'40px', height:'40px',marginLeft:'auto',marginRight:'auto',marginTop:'12px'}}/>
                                <Card.Body>
                                    
                                    <Card.Text style={{textAlign:"center"}}>
                                        <p>Medicine</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='dispcard'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={nursing}  style={{width:'40px', height:'40px',marginLeft:'auto',marginRight:'auto',marginTop:'12px'}}/>
                                <Card.Body>
                                    
                                    <Card.Text style={{textAlign:"center"}}>
                                        <p>Nursing</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='dispcard'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={publicpolicy}  style={{width:'40px', height:'40px',marginLeft:'auto',marginRight:'auto',marginTop:'12px'}}/>
                                <Card.Body>
                                    
                                    <Card.Text style={{textAlign:"center"}}>
                                        <p>publicpolicy</p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='dispcard'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={science}  style={{width:'40px', height:'40px',marginLeft:'auto',marginRight:'auto',marginTop:'12px'}}/>
                                <Card.Body>
                                    
                                    <Card.Text style={{textAlign:"center"}}>
                                        <p>Science</p>
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