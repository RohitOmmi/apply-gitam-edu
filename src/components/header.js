
import logo from "../images/gitan-header-logo.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AppHeader() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={12} sm={12}>

                        <div className="header">
                            <div className="logo">
                                <img src={logo} alt='gitam_logo' className='gitam-logo' />
                            </div>
                            <div className="contact">
                                <div className="contact-icon">
                                    <i class="fa-solid fa-phone"></i>

                                    <h5 className="contact-color">8880884000</h5>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>





        </>
    )
}