 import logoG from "../images/gitan-header-logo.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AppHeader() {
    return (
        <>
            <div className="header-bg-container">
           
           <Container>
            <Row>
                <Col md={12}>
                <div className='header-div'>
                    <div>
                        <img src={logoG} alt="Gitam_logo" className="img-fluid"/>
                        
                    </div>
                    <div className='contact-no-icon pt-2'>
                        <h6 style={{color:"#ffffff"}}><i className="fa-solid fa-phone" style={{color: "#ffffff"}}></i>8880884000</h6>
                    </div>
                </div>
                </Col>
            </Row>
           </Container>
        </div>
        </>
    )
}