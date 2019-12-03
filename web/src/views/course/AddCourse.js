import React from "react"
import { Col, Row, Card, CardBody, CardDeck, Input, Form, CardHeader, Label, FormGroup } from "reactstrap"

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
                            </Row>
                        <Input style={{ marginBottom: '20px', marginRight: '15px'}} type="text" id="courseInstructor" placeholder="Building, Floor, Room #"/> 
                        <Label for="courseInstructor">Office</Label>
                        <Input style={{ marginBottom: '20px' }} type="text" id="courseInstructor" placeholder="Building, Floor, Room #"/>
                        </div>                    
                    </Form>
                </CardBody>
            </Card> 
        </div>
    )
}

export default AddCourse
