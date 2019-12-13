import React from "react"
import { Col, Row, Card, CardBody, CardDeck, Input, Form, CardHeader, Label, FormGroup } from "reactstrap"
import SelectTime from "./SelectTime"

function AddCourse() {
    
    return (
        <div>
           <Card>
                <CardHeader>
                    <Form>
                        <Input type="text" id="courseName" placeholder="Course #, Course Title"/>
                    </Form>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Label for="courseInstructor">Instructor</Label>
                        <Input style={{ marginBottom: '20px' }} type="text" id="courseInstructor" placeholder="Dr. John Smith"/>
                        <Label for="courseInstructorEmail">Email</Label>
                        <Input style={{ marginBottom: '20px' }} type="email" id="courseInstructorEmail" placeholder="example@harrisburgu.edu"/>
                        <Label for="courseMeetingSelect">Meetings</Label>
                        <div>   
                            <Row style={{marginBottom:'10px', marginLeft:'0px'}}>
                                <Input style={{ maxWidth:'200px', marginBottom: '10px' }}type="select" name="meetings" id="courseMeetingSelect">
                                    <option>On Campus</option>
                                    <option>Online</option>
                                    <option>On Campus and Online</option>
                                </Input>
                                <Label check style={{ marginLeft:'30px', marginTop:'6px'}}>
                                    <Input type="checkbox" name="M" />{' '}
                                    M
                                </Label>
                                <Label check style={{ marginLeft:'30px', marginTop:'6px'}}>
                                    <Input type="checkbox" name="T" />{' '}
                                    T
                                </Label>
                                <Label check style={{ marginLeft:'30px', marginTop:'6px'}}>
                                    <Input type="checkbox" name="W" />{' '}
                                    W
                                </Label>
                                <Label check style={{ marginLeft:'30px', marginTop:'6px'}}>
                                    <Input type="checkbox" name="R" />{' '}
                                    R
                                </Label>
                                <Label check style={{ marginLeft:'30px', marginTop:'6px'}}>
                                    <Input type="checkbox" name="F" />{' '}
                                    F
                                </Label>
                                <Label check style={{ marginLeft:'30px', marginTop:'6px'}}>
                                    <Input type="checkbox" name="S" />{' '}
                                    S
                                </Label>
                                <SelectTime />
                                <p style={{ marginTop: '7px', marginLeft: '10px', marginRight: '-4px' }}>
                                to
                                </p>
                                <SelectTime />
                            </Row>
                        <Input style={{ marginBottom: '20px', marginRight: '15px'}} type="text" id="courseInstructor" placeholder="Building, Floor, Room #"/> 
                        <Label for="courseOffice">Office Hours</Label>
                        
                        <Input style={{ marginBottom: '20px' }} type="text" id="courseOffice" placeholder="Building, Floor, Room #"/>
                        </div>                    
                    </Form>
                </CardBody>
            </Card> 
            <Card>
                <CardHeader>Course Description</CardHeader>
                <Form>
                    <CardBody>
                        <Input type="textarea" name="courseDesc" id="courseDesc" />
                    </CardBody>
                </Form>
            </Card>
            <Card>
                <CardHeader>Course Prerequesites</CardHeader>
                <Form>
                    <CardBody>
                        <Input type="textarea" name="coursePrereq" id="coursePrereq" />
                    </CardBody>
                </Form>
                
            </Card>
            <Card>
                <CardHeader>Expected Knowledge at the Start of the Course</CardHeader>   
                <Form>
                    <CardBody>
                        <Input type="textarea" name="courseReq" id="courseReq" />
                    </CardBody>
                </Form>
            </Card>
            <Card>
                <CardHeader>Course Assessment</CardHeader>   
                <Form>
                    <CardBody>
                        <Input type="textarea" name="courseAssessment" id="courseAssessment" />
                    </CardBody>
                </Form>
            </Card>
            <Card>
                <CardHeader>Course Learning Outcomes</CardHeader>   
                <Form>
                    <CardBody>
                        <Input type="textarea" name="courseLO" id="courseLO" />
                    </CardBody>
                </Form>
            </Card>
            <Card>
                <CardHeader>Course Learning Outcomes (CLOs)</CardHeader>   
                <Form>
                    <CardBody>
                        <Input type="textarea" name="courseCLOs" id="courseCLOs" />
                    </CardBody>
                </Form>
            </Card>
            <Card>
                <CardHeader>Textbooks and References</CardHeader>   
                <Form>
                    <CardBody>
                        <Input type="textarea" name="courseTexts" id="courseTexts" />
                    </CardBody>
                </Form>
            </Card>
            <Card>
                <CardHeader>Textbooks and References</CardHeader>   
                <Form>
                    <CardBody>
                        <Input type="textarea" name="courseTexts" id="courseTexts" />
                    </CardBody>
                </Form>
            </Card>          
        </div>
    )
}

export default AddCourse
