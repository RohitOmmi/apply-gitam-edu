import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Copyrights(){
    return(
        <>
        <div className="bg-container">
           
           <Container>
            <Row>
                <Col md={12}>
                <div className='footer-div'>
                    <div>
                        <h6><i className="fa-regular fa-copyright" style={{color: "#ffffff"}}></i>2024 GITAM- All Rights Reserved</h6>
                    </div>
                    <div>
                        <h6>Powered by Team CATS</h6>
                    </div>
                </div>
                </Col>
            </Row>
           </Container>
        </div>
        </>
    )
}