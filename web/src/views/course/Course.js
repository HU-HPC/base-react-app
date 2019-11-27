import React from "react"
import {Card, CardBody, CardHeader, CardImg, CardDeck, Collapse} from "reactstrap"
import DefaultLayout from "../../containers/DefaultLayout/DefaultLayout"

function Course(course) {
    
    return (
    <div>
        <CardDeck style={{marginBottom:'20px'}}>
            <Card style={{maxWidth: '300px'}}>
                <CardImg></CardImg>
            </Card>
            <Card>
                <CardHeader>{course.title}</CardHeader>
                <CardBody>Instructor: {course.instructor}</CardBody>
                <CardBody>Email: {course.email}</CardBody>
                <CardBody>Office: {course.office}</CardBody>
                <CardBody>Online Meetings: Scheduled on MyHU</CardBody>
                <CardBody>On Campus: Scheduled on MyHU</CardBody>
            </Card>
        </CardDeck> 
            <div>
                <Card>
                    <CardHeader>Catalog Data</CardHeader>
                    <CardBody>{course.data}</CardBody>
                </Card>
                <Card>
                    <CardHeader>Course Prerequisite</CardHeader>
                    <CardBody>{course.prereq}</CardBody>
                </Card>
                <Card>
                    <CardHeader>Expected Knowledge at the Start of the Course</CardHeader>
                    <CardBody>{course.prior}</CardBody>
                </Card>
                <Card>
                    <CardHeader>Course Assessment</CardHeader>
                    <CardBody>{course.assessment}</CardBody>
                </Card>
                <Card>
                    <CardHeader>Course Learning Outcomes (CLOs)</CardHeader>
                    <CardBody>{course.clos}</CardBody>
                </Card>
                <Card>
                    <CardHeader>Course Assessment</CardHeader>
                    <CardBody>{course.assessment}</CardBody>
                </Card>
                <Card>
                    <CardHeader>Textbooks and References</CardHeader>
                    <CardBody>{course.texts}</CardBody>
                </Card>
                <Card>
                    <CardHeader>Textbooks and References</CardHeader>
                    <CardBody>{course.texts}</CardBody>
                </Card>
                <Card>
                    <CardHeader>Notes Students With Disbilities</CardHeader>
                    <CardBody>{course.nswd}</CardBody>
                </Card>
                <Card>
                    <CardHeader>Class Conduct</CardHeader>
                    <CardBody>{course.cc}</CardBody>
                </Card>
                <Card>
                    <CardHeader>Grade Scale</CardHeader>
                    <CardBody>{course.gs}</CardBody>
                </Card>
                <Card>
                    <CardHeader>Class Schedule</CardHeader>
                    <CardBody>{course.scheduletext}{course.schedule}</CardBody>
                </Card>
                <Card>
                    <CardHeader>Exams, Grading, and Feedback</CardHeader>
                    <CardBody>{course.egf}</CardBody>
                </Card>
                <Card>
                    <CardHeader>Statement on Academic Integrity</CardHeader>
                    <CardBody>{course.soai}</CardBody>
                </Card>
                <Card>
                    <CardBody>Honor Code - We as members of Harrisburg University community pledge not to cheat, plagarize, steal, or lie in matters related to academic work. As a Community of Learners, we honor and uphold the HU Honor Code.</CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Course
