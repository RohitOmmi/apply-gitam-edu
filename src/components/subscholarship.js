import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';


import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Subscholarshipsection() {
    const [key, setKey] = useState('home');
    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='sub-scholar-div'>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <input disabled value="Engineering" readOnly className='input-readonly' />
                                <input disabled value='B.Tech Aerospace Engineering' readOnly className='input-readonly' />

                                <select name="exam" id="exam" className=' dropdwon-shadow'>
                                    <option value="Select campus">Competative exam</option>
                                    <option value="GAT 2023">GAT 2023</option>
                                    <option value="GAT Percentile">GAT Percentile</option>


                                </select>


                                <select name="rank" id="rank" className=' dropdwon-shadow'>
                                    <option value="Select campus">Rank</option>
                                    <option value="1-25">1-25</option>
                                    <option value="26-100">26-100</option>
                                    <option value="101-250">101-250</option>

                                </select>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '34px' }}>
                                <button className='btn custom-button'>Search</button>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>

            <Container>
                <Row>
                    <Col md={12}>
                        <div className='div-unordered-list'>
                            <ul style={{ listStyleType: 'square' }}>
                                <li>Students can avail 100% of scholarship based on the entered rank /score/percentile of the eligible GAT or national or state entrance test as per GITAM scholarship policy.</li>
                                <li>This scholarship is applicable only for the first year, and to avail of the same scholarship for the subsequent years of study, candidates should score a CGPA of 8.0 and above.</li>
                                <li>Scholarship is offered on a first-come, first-serve basis.</li>
                                <li>As scholarship seats are in limited number, this candidate can avail of a scholarship subject to the availability of the seats under the scholarship quota.</li>
                                <li>If the scholarship quota seats are filled, candidates can still be admitted into the desired programme without a scholarship.</li>
                            </ul>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div>
                            <Accordion >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>General terms</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <ul style={{ listStyleType: 'square' }}>
                                                <li>Admissions to eligible scholarship candidates will be offered on a "first-come-first-served" basis.</li>
                                                <li>Admissions through scholarships will be considered up to 20% of the sanctioned intake for CSE and its specializations and 30% for all the other programs.</li>
                                                <li>Once the earmarked limit is exhausted in a program through scholarships, the student will not be entitled to the scholarship despite qualifying for the scholarship. Exceptions will be made at the discretion of the "Management."</li>
                                                <li>The primary scholarship policy will be merit-driven and have need-based financial support. Merit scholarships up to 100% of the tuition fee are offered depending on merit. The additional Need-based scholarships to the merit students are offered based on the combined annual income of both the parents of the eligible students.</li>
                                                <li>The scholarship slabs are 100%, 75%, 60%, 40%, 25%, and 15% in place of the existing merit scholarship slabs.</li>
                                                <li>Apart from the above, the following scholarships are also offered to eligible students.
                                                    <ol style={{ listStyleType: 'i ' }}>
                                                        <li>Employee children scholarships (60%, 40%, and 20%)</li>
                                                        <li>Loyalty Scholarships (10% for Any alumni returning to do higher studies /Children of Alumni / Real siblings (Not applicable to step siblings or cousins)/ Children of retired employees of GITAM/Spouse of GITAM employees).</li>
                                                        <li>Sports Scholarships (100%, 75%, 50%, 25% and 15%)</li>
                                                    </ol>
                                                </li>
                                            </ul>

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Combination of scholarships</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <ul style={{ listStyleType: 'square' }}>
                                                <li>The combination of merit-driven, need-based, employee children, loyalty, and sports scholarships should not exceed 75%. The combination of scholarships chosen cannot be changed during the student's course of study.</li>
                                                <li>For any combination of scholarships with the merit-driven need-based scholarship, the percentage of total scholarship should not exceed 75% after deducting course fee concession. It will be awarded in the following order of preference:
                                                    <ol style={{ listStyleType: 'i ' }}>
                                                        <li>
                                                            % of Merit and Management Scholarship on the tuition fee
                                                        </li>
                                                        <li>% of Need-based scholarship on the scholarship as per the order of precedence on balance after Sl. No (1).</li>
                                                        <li>% of Employees Children on the scholarship as per the order of precedence on balance after Sl. No (1) & (2).</li>
                                                        <li>% of Loyalty Scholarship on the scholarship as per the order of precedence on balance after Sl. No (1), (2) and (3).</li>
                                                        <li>% of Sports Scholarship on the scholarship as per the order of precedence on balance after Sl. No (1), (2), (3) and (4).</li>
                                                    </ol>
                                                </li>
                                                <li>Eligible students can avail of any one scholarship from the above up to 100% without any combination.</li>
                                                <li>Ph.D. scholars are not considered for alumni scholarships. Center for Distance Learning (CDL) students cannot be regarded as alumni.</li>
                                                <li>Scholarship to the student is subject to the payment of fees on time. Students having dues will not be eligible for the award of scholarships. Students facing disciplinary action will not be eligible for any scholarship for the remaining years.</li>
                                                <li>This scholarship scheme is effective from the academic year 2024-25. This scholarship scheme is not applicable for the previous academic years.</li>
                                                <li>This approved scholarship policy will not apply to the Kautilya School of Public Policy MBBS and Ph.D. programs and admissions through KCET.</li>
                                                <li>In case of any conflict in interpreting the scholarship rules, the Vice-Chancellor's decision is final and binding.</li>
                                                <li>The JEE Mains percentile of the students will be rounded up to the nearest number. For Example, If the student's percentile is 91.7604922, this will be rounded up to 92.00.If the student's percentile is 91.4604922, this will be rounded up to 91.00.If the student's percentile is 91.504922, this will be rounded up to 92.00. The subsequent scholarships will be applicable accordingly in tune with the necessary terms and conditions.</li>
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Merit scholarships</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <ul style={{ listStyleType: 'square' }}>
                                                <li>For the scholarships offered through various National / State Entrance Tests, the students are encouraged to apply for the GITAM Admission Test (GAT)/GITAM Business Aptitude Test (GBAT) and attend the counseling for admission as per the schedule.</li>
                                                <li>Suppose a student is eligible for a scholarship under more than one category through GBAT/ GAT/ National / State Entrance Tests. In that case, they will be awarded the highest percentage of the scholarship.</li>
                                                <li>The scholarship offered through GBAT/ GAT / National / State Entrance Tests only applies for the First Year. The same scholarship will be continued in the subsequent years of study, subject to scoring a CGPA of 8.0 or above. The student will be eligible for the scholarship in the year in which he fulfills the scoring of the required CGPA in any particular year in their course of study.</li>
                                                <li>The scholarship does not apply to students who have failed or achieved the minimum CGPA through betterment in that particular year. Any student who completes the minimum CGPA through recounting would be eligible for the scholarship.</li>

                                            </ul>
                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Need-based scholarships</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <ul style={{ listStyleType: 'square' }}>
                                                <li>The courses offered across campuses will be divided into two tiers,
                                                    <ol style={{ listStyleType: "none" }}>
                                                        <li>a.Tier A: Tuition Fee &gt;=  2.00 LPA </li>
                                                        <li>b. Tier B: Tuition Fee &lt; 2.00 LPA</li>
                                                    </ol>
                                                </li>
                                                <li>  To be eligible for the need-based scholarship, the combined income of both parents/guardians of the eligible student/If the student is married, the combined income of the family, i.e., the student's and spouse's income, must be as given below:
                                                    <ol style={{ listStyleType: "none" }}>
                                                        <li>a. Tier A: Less than 12.00 LPA &nbsp; b. Tier B: Less than 08.00 LPA</li>
                                                        <li>(Classification of Tier A & Tier B is referred in above Point)</li>
                                                    </ol>
                                                </li>
                                                <li>The candidates admitted through merit scholarship in the slabs of 75%, 60%, 40%, 25%,and 15%, and the parents/guardians combined income is less than the prescribed limits are eligible for the additional need-based scholarship.</li>
                                                <li>For the award of the need-based scholarship, the student must upload the tax documents of both parents/guardians, i.e., Form-16 / Acknowledgement of Income Tax Return for the respective financial year in the counseling portal before the closure of the admission cycle. Upon successful verification, their scholarship will be upgraded from 75% to 100%, 60% to 75%, 40% to 60%, 25% to 40% and 15% to 25%.</li>
                                                <li>
                                                    In addition, students awarded need-based scholarships after merit scholarships will receive an additional 20% scholarship specifically allocated for hostel fees at GITAM for slabs: 15%, 25%, 40%, and 60%.
                                                </li>
                                                <li>
                                                    Students awarded 75% & 100% scholarships are also awarded the same percentage in the hostel fees.
                                                </li>

                                                <li>
                                                    Suppose any student is eligible for the need-based scholarship and is unwilling to upload both parents/guardians tax documents in the counseling portal before the closure of the admission cycle. In that case, they will not be eligible to be upgraded with the additional need-based scholarship.
                                                </li>
                                                <li>
                                                    The need-basedscholarship will be awarded to the eligible candidate upon filling out the need-based scholarship form in the counseling portal before the closure of the admission cycle as prescribed by the Department of Finance. The Department of Finance will evaluate the need-based scholarships of the eligible students.
                                                </li>
                                                <li>
                                                    The need-based scholarships will only be applicable for 75%, 60%, 40%, 25%, and 15% of the slabs.
                                                </li>
                                                <li>
                                                    The scholarship award is entitled to the first year of their study. The same scholarship will be continued in the subsequent years of study subject to scoring a CGPA of 8.0 & above and upon evaluation of both their parent/guardians tax documents for subsequent years before commencement of classes for the upcoming academic year or as notified through mail as per the prescribed criteria (Referred in above points) of the need-based scholarships.
                                                </li>
                                                <li>
                                                    The students eligible for the merit-driven need-based scholarship further qualify for loyalty scholarships/sports scholarships, provided the total scholarship is not over 75%.
                                                </li>
                                            </ul>
                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Loyality scholarships</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <ul style={{ listStyleType: 'square' }}>
                                                <li>The students admitted are further eligible for loyalty scholarships like alumni returning to higher education, alumni children, sibling scholarship, retired employee children scholarship, and spouse of GITAM employee.</li>
                                                <li>Only one criterion from the loyalty scholarships will be applied at any time. A maximum of 10% will be awarded through the loyalty scholarship.Once the loyalty scholarship is awarded to the student, the same will be continued for further study, irrespective of academic performance.</li>
                                                <li>To determine eligibility," status as at the beginning of the year" will be considered. Any eligibility acquired during the year will be regarded as from the next academic year. It cannot be pro-rata or from the middle of the year.</li>
                                                <li>Loyalty scholarships will not apply to students who secured 100% / 75% through merit-driven need-based scholarships.</li>
                                                <li>If both siblings are admitted in the same academic year, the sibling scholarship will apply to one with a higher tuition fee.</li>
                                                <li>For exceptional cases and deserving candidates, subsidized or free accommodation may be provided at the GITAM student residences.</li>
                                                <li>While the students' achievements and prowess in sports will be given importance, there shall be equal significance attributed to their academic performance once they start the student-athlete journey.</li>
                                            </ul>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Scholarship Scheme</th>
                                                        <th>Scholarship%</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Any Alumni returning to do higher studies</td>
                                                        <td>10%</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Children of Alumni</td>
                                                        <td>10%</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Real Siblings (Not applicable to stepsiblings or cousins)</td>
                                                        <td>10%</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Children of retired employees of GITAM</td>
                                                        <td >10%</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Spouse of GITAM Employee</td>
                                                        <td >10%</td>

                                                    </tr>
                                                </tbody>
                                            </Table>

                                            <h6 style={{ color: ' #007367' }}>Employee children scholarships</h6>
                                            <ul style={{ listStyleType: 'square' }}>
                                                <li>The children of GITAM employees admitted in full-time courses who have secured 100% and 75% of scholarships are not eligible for employee's children scholarships.</li>
                                                <li>The children of GITAM employees admitted in full-time courses can avail 60%, 40%, 25%, and 15% of scholarships, not exceeding a total combined scholarship of 75%.</li>
                                                <li>The children of GITAM employees admitted are eligible for loyalty scholarships, and total scholarships should not exceed 75%.</li>
                                                <li>Employees with a minimum of one year of continuous completed permanent service will be considered on a prospective basis at the time of admission or the beginning of the academic yea.</li>
                                                <li>Quantum of scholarship based on the employee's salary at the time of admission is applicable for the entire course duration of the student on a prospective basis with effect from the academic year 2024-25 admitted batch students.</li>
                                                <li>If both the parents of the admitted student are GITAM employees, then the higher-salaried parent will be considered for the scholarship award.</li>

                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Sports scholarships</Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <Tabs
                                                id="controlled-tab-example"
                                                activeKey={key}
                                                onSelect={(k) => setKey(k)}
                                                className="mb-3 tab-heading"
                                            >
                                                <Tab
                                                    eventKey="Sports at GITAM"
                                                    title={<span className={`tab-button ${key === 'Sports at GITAM' ? 'active' : ''}`}>Sports at GITAM</span>}
                                                >
                                                    <div>
                                                        <ul style={{ listStyleType: 'none' }}>
                                                            <li>At GITAM, we believe that Sports is one of the key components in enhancing the Campus life experience of students. Hence, we focus on providing sports opportunities to students to help with developing social awareness and interaction.</li>
                                                            <br />
                                                            <li>Sport is a great tool to address students’ physical and mental health, social and personal development, in parallel with intellectual and academic developments. GITAM intends to be a leading enabler in sport-based development, and towards that end, will offer engagement opportunities to students to access high quality playing facilities which in turn will contribute to a positive and healthy sports culture within the University.</li>
                                                            <br />
                                                            <li>The establishment of a competitive sports culture is an essential element in our pursuit of instituting a robust and sustainable sports ecosystem.</li>
                                                            <br />
                                                            <li>The time-tested way of establishing a competitive sports culture is by introducing Student athletes through an effective Sports Quota system. The vision for Student-athletes in GITAM is to provide deserving students a chance to get quality education in conjunction with pursuing their athletic dreams.</li>
                                                        </ul>
                                                    </div>
                                                </Tab>
                                                <Tab
                                                    eventKey="Scholarship levels"
                                                    title={<span className={`tab-button ${key === 'Scholarship levels' ? 'active' : ''}`}>Scholarship levels</span>}
                                                >
                                                    <div>
                                                        <ul style={{ listStyleType: 'square' }}>
                                                            <li>A potential candidate may be eligible for scholarships in sports. The scholarship levels are 100%, 75%, 50%, 25%, and 15%.</li>
                                                        </ul>
                                                    </div>
                                                </Tab>
                                                <Tab
                                                    eventKey="Application process"
                                                    title={<span className={`tab-button ${key === 'Application process' ? 'active' : ''}`}>Application process</span>}
                                                >

                                                    <div>
                                                        <ul style={{ listStyleType: 'square' }}>
                                                            <li>Proceed to fill out the regular GITAM Application.</li>
                                                            <li>The prospective students may select Sports Quota in the scholarship drop-down box, which will open a separate section for entering sports-related information.</li>
                                                            <li>All the sports achievements must be listed in the application form by uploading a scanned copy of proof (certificates, paper clippings, etc.) in the allotted provision.</li>
                                                            <li>The achievements should be within three years from the year of application.</li>
                                                            <li>The application will be considered only if the applicant has participated/won in their sport at an International, National, State, or Zonal level.</li>
                                                            <li>The list of sports for which Admissions are available under Sports Quota is mentioned below:</li>
                                                        </ul>
                                                        <Table striped bordered hover>
                                                            <thead>
                                                                <tr>
                                                                    <th>Campus</th>
                                                                    <th>Sports Offered</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Visakhapatnam</td>
                                                                    <td>Basketball, Badminton, Chess, Cricket, Football, Table Tennis, Tennis & Volleyball.</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>Hyderabad</td>
                                                                    <td>Chess & Kabaddi</td>

                                                                </tr>
                                                                <tr>
                                                                    <td>Bengaluru</td>
                                                                    <td>Chess</td>

                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                        <p>If the student has participated at an International or National level in any sport not listed above, they may write mentioning the relevant achievements (along with certificates) to sports_scholarships@gitam.edu. Scholarships for these candidates will be granted at the discretion of the Directorate of Sports, GITAM.</p>

                                                        <h6 style={{ color: ' #007367' }}>Shortlisting & Trials</h6>
                                                        <ul style={{ listStyleType: 'square' }}>
                                                            <li>Application review :
                                                                All applications will be analyzed, and the candidates who rank the highest amongst the applicants and meet the criteria set will be called for Selection Trials & Interviews.</li>
                                                            <li>Selection Trials + Interview :
                                                                <ul style={{ listStyleType: 'circle' }}>
                                                                    <li>The candidates who have cleared the Application review process will participate in a Selection Trials process. The Selection Trial will be an assessment of their game/sport – which shall include :
                                                                        <ol style={{ listStyleType: 'none' }}>
                                                                            <li>a. Sport Specific Fitness</li>
                                                                            <li>b. Fundamental knowledge and skills in the sport</li>
                                                                            <li>c. Overall playing ability</li>
                                                                        </ol>
                                                                    </li>
                                                                    <li>The personal interview will also assess the candidate's overall fit.</li>
                                                                </ul>
                                                            </li>
                                                            <li>The personal interview will also assess the candidate's overall fit.</li>


                                                        </ul>
                                                    </div>

                                                </Tab>
                                                <Tab
                                                    eventKey="Evaluation"
                                                    title={<span className={`tab-button ${key === 'Evaluation' ? 'active' : ''}`}>Evaluation</span>}
                                                >
                                                    <div>
                                                        <h6>The overall evaluation process shall be as follows</h6>
                                                        <div>
                                                            <Table striped bordered hover>
                                                                <thead>
                                                                    <tr>
                                                                        <th>stage</th>
                                                                        <th>Assessment type</th>
                                                                        <th>Assessment categories</th>
                                                                        <th>Weightage</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>Application process</td>
                                                                        <td>Sports Achievement</td>
                                                                        <td>30%</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2</td>
                                                                        <td>selection trials</td>
                                                                        <td>
                                                                            <tr>
                                                                                <td>Academic History + GAT/GBAT/Entrance Test Score</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Sports Specific trials</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Personal Interviews</td>
                                                                            </tr>
                                                                        </td>
                                                                        <td>
                                                                            <tr>
                                                                                <td>20%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>40%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>10%</td>
                                                                            </tr>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={2}>Total</td>
                                                                        <td >100%</td>
                                                                        <td></td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>

                                                        <h6>The various levels of competitions and categories of events are given below</h6>
                                                        <div>
                                                            <Table striped bordered hover>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Level of Competation</th>
                                                                        <th>Name of Competations</th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td rowSpan={2}>Recognized International Events</td>
                                                                        <td>International (Olympics/Asian games)</td>

                                                                    </tr>

                                                                    <tr>
                                                                        <td>International (Games conducted every six months), International level competitions organized by the World Federation for the sport</td>
                                                                    </tr>



                                                                    <tr>
                                                                        <td rowSpan={5}>Recognized National Events</td>
                                                                        <td>National Championships/National Games – Organized by National Federations/IOA/MYAS</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>School Games Federation of India (SGFI) Meet (National Level)/Khelo India School Games/Khelo India University Games</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>All India Rural Sports Meet/PYKKA (Panchayat YuvaKrida Aur Khel Abhiyan) National Level Rural Competition (National Level), AIU Inter University Games</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>National Sports Festival for Women/PYKKA National Level Women Competition (National Level)</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>National Inter-School Competition (National Level)</td>
                                                                    </tr>




                                                                </tbody>
                                                            </Table>

                                                        </div>
                                                        <div>
                                                            <Table striped bordered hover>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Level of Competation</th>
                                                                        <th>Name of Competations</th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Recognized State championship</td>
                                                                        <td>
                                                                            State Championship Representing Revenue District – Organized by State Association
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td rowSpan={2}>Recognized National Events</td>
                                                                        <td>KVS/CBSE National Sports Meet (State Level)</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>PYKKA State Rural Competition</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td rowSpan={5}>Recognized District/Zonal events</td>
                                                                        <td>District Tournaments/Sports Meet/Championships conducted by District Sports Associations</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>District Inter School Competition/SAI Promotion Games (District Level)
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>PYKKA – District Level Rural competition</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>PYKKA District Level Women competition</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>AIU Zonal level competitions</td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>

                                                        </div>
                                                        <h6>Authorization authority for certificates</h6>
                                                        <div>
                                                            <Table striped bordered hover>
                                                                <thead>
                                                                    <tr>

                                                                        <th>Category details</th>
                                                                        <th>Competent authority for authorization</th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>

                                                                        <td>International (Representing Nation)</td>
                                                                        <td>President/Secretary of the National Sports Federation (recognized by Ministry of Youth Affairs and Sports/IOA) Participation certificate should be signed by the President/Secretary General/Chairman of the Organizing Committee of the host Nation</td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>National (Representing State)</td>
                                                                        <td>Member Secretary, Secretary of the State Association</td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>National Games (Representing the State)</td>
                                                                        <td>President/Secretary of IOA and Chairman of the organizing committee</td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>National (Representing State)</td>
                                                                        <td>	Chief Inspector of Physical Education for National School Games competitions</td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>Khelo India University Games</td>
                                                                        <td>	VC/Registrar of University/Khelo India Games Certificate</td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>School Games Federation of India (SGFI) (National Level)</td>
                                                                        <td>President/Hon. Gen. Secretary, SGFI</td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>Khelo India/National Inter-School Competition (National Level)</td>
                                                                        <td>Executive Director/Director-General, Sports Authority of India</td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>All India Rural Sports (National Level)</td>
                                                                        <td>Executive Director/Director-General, Sports Authority of India</td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>National Sports Festival for Women (National Level)k</td>
                                                                        <td>Executive Director/Director-General, Sports Authority of India</td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>PYKKA (Panchayat Yuva Krida Aur Khel Abhiyan) National Level Rural Tournament</td>
                                                                        <td>Executive Director/Director-General, Sports Authority of India
                                                                        </td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>KVS Nationals (State Level)</td>
                                                                        <td>Commissioner / Joint Commissioner of KVS</td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>CBSE National Sports Meet (State Level)</td>
                                                                        <td>A. E. O. – Sports/Secretary, CBSE
                                                                        </td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>State Inter School Competitions (State Level)</td>
                                                                        <td>	Member Secretary, State Sports Development Authority</td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>PYKKA State Rural Competition	</td>
                                                                        <td>Member Secretary, State Sports Development Authority
                                                                        </td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>CBSE South Zone Sports Meet (Divisional Level)	</td>
                                                                        <td>A.E.O. – Sports/Secretary, CBSE
                                                                        </td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>District Inter School Competitions (Divisional Level)	</td>
                                                                        <td>District Sports Officer
                                                                        </td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>PYKKA District Rural Competition	</td>
                                                                        <td>Member Secretary and District Sports Officer
                                                                        </td>

                                                                    </tr>
                                                                    <tr>

                                                                        <td>District Level Competitions	</td>
                                                                        <td>District Education Officer
                                                                        </td>

                                                                    </tr>

                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                        <h6 style={{color:'#007367'}}>Scholarship renewal</h6>
                                                        <p>The scholarship offered under Sports is applicable only for the first year. The same scholarship will be continued, revised in the subsequent years of study subject to</p>
                                                        <div>
                                                            <ol style={{listStyleType:'i'}}>
                                                                <li>Scoring a minimum CGPA of 6.0.</li>
                                                                <li>Performance & achievement in sport, including but not limited to representing the University at approved sports competitions.</li>
                                                                <li>Maintaining an impeccable disciplinary record.</li>
                                                                <li>Failing in one or more of the above criteria will lead to scholarship withdrawal.</li>
                                                                <li>Scholarship revision will be done at the discretion of the Management.</li>
                                                            </ol>
                                                        </div>
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}