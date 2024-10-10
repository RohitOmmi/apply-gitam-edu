import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import image2 from '../images/instructions-image.png'


export default function Instructions() {
  return (
    <>

      <Container >
        <Row>
         
          
          <Col md={5}>
            <img src={image2} alt="fee_instructions-image" className='image-fee-instructions w-100' />
          </Col>
          <Col md={7}>
            <div className='section-title-div'>
              <h1 className='sec-titile'>Instructions</h1>
              <div className='line'></div>
            </div>
            <Accordion  flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Instructions for filling online application</Accordion.Header>
                <Accordion.Body>
                  <ul className='unordered-list-acordion'>
                    <li>Log on to https://apply.gitam.edu to access the applicants portal.</li>
                    <li>Click on the "Register" button and it will open the registration page. On this page, applicant need to fill in the basic personal<br /> information, as well as any other details that are required.</li>
                    <li>Fields marked with an asterisk "*" are mandatory and must be filled by the applicant.</li>
                    <li>There are clear instructions for each field, so please read them carefully before filling out the form.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Application for current education details</Accordion.Header>
                <Accordion.Body>
                  <p>This section asks for applicant current education details, including the current field of study, the name of your school, the subjects he/ she is studying, the campus interested in, the year of completion of graduation / +2, the list of eligible disciplines, and eligible programs.
                    <br />
                    After entering the details, click the "Save" button at the bottom of the page. Then click the "Next" button to proceed to the next page and move on to program selection section.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Program selection details</Accordion.Header>
                <Accordion.Body>
                  <ul className='unordered-list-accordion'>
                    <li>This section displays the eligible programs based on the group selected by the applicant in their current education section. On<br /> this page, applicant need to select the programs he / she interested in</li>
                    <li>In a tabular format, there will be a display of the "Application no", "Program name", "Amount", "Application Status", and "Delete"<br /> option for each program applied for.</li>
                    <li>Applicant should review the details entered on the page and select the preferred exam state, city and exam date before proceed to pay the application fee.</li>
                    <li>Please note that, after payment of application fee, you can not change or delete the programs selected.</li>
                    <li>Applicant can click "Previous" button at any time to go back and make changes if any by deleting the selected programs</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Personal details</Accordion.Header>
                <Accordion.Body>
                 <p>This section requires applicants to fill in their personal details, including :</p>
                  <ul className='unordered-list-accordion'>
                    <li>Gender</li>
                    <li>Date of birth</li>
                    <li>Aadhaar no.</li>
                    <li>Mother tongue</li>
                    <li>Category</li>
                    <li>Nationality</li>
                    <li>Country of permanent residence</li>
                    <li>Parent details</li>
                  </ul>
                  
                  <p>Additionally, applicants must upload a passport-size photograph that</p>
                  <ul className='unordered-list-accordion'>
                    <li>Formal passport size</li>
                    <li>JPEG/JPG format</li>
                    <li>Dimensions not larger than 35 mm X 45 mm</li>
                    <li>File size not larger than 1 MB</li>
                  </ul>
                  <p>Applicant can click "Previous"button at any time to go back and make changes if any.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <p>After filling of personal details applicant will be redirected to an
              "Application Print" page where a print copy of the application form is <br />
              available for download / print for the record. If thepaymentis unsuccessful,<br />
              you will be redirected to a "Program selection" page where you can retry
              payment.
            </p>
          </Col>
       
        </Row>
      </Container>
      {/* <h1>fee instructions</h1> */}
    </>
  )
}