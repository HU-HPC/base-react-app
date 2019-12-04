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
                                <Input style={{ maxWidth:'70px', marginBottom: '10px', marginLeft:'15px' }} type="select" name="startHour" id="courseStartHour">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </Input>
                                <p style={{ marginTop: '7px', marginLeft: '4px' }}>
                                    :
                                </p>
                                <Input style={{ maxWidth:'70px', marginBottom: '10px', marginLeft:'5px' }} type="select" name="startMinutes" id="courseStartMinutes">
                                    <option>00</option>
                                    <option>05</option>
                                    <option>10</option>
                                    <option>15</option>
                                    <option>20</option>
                                    <option>25</option>
                                    <option>30</option>
                                    <option>35</option>
                                    <option>40</option>
                                    <option>45</option>
                                    <option>50</option>
                                    <option>55</option>
                                </Input>
                                <Input style={{ maxWidth:'70px', marginBottom: '10px', marginLeft:'5px' }} type="select" name="startAMPM" id="courseStartAMPM">
                                    <option>AM</option>
                                    <option>PM</option>
                                </Input>
                                <p style={{ marginTop: '7px', marginLeft: '4px' }}>
                                    -
                                </p>
                            </Row>
                        <Input style={{ marginBottom: '20px', marginRight: '15px'}} type="text" id="courseInstructor" placeholder="Building, Floor, Room #"/> 
                        <Label for="courseInstructor">Office Hours</Label>
                        <Input style={{ marginBottom: '20px' }} type="text" id="courseInstructor" placeholder="Building, Floor, Room #"/>
                        </div>                    
                    </Form>
                </CardBody>
            </Card> 
        </div>
    )
}

export default AddCourse
