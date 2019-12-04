import React, { useState } from "react"
// import { FontAwesomeIcon } from 'font-awesome'
import {ListGroup, Card, CardBody, CardHeader, CardImg, CardDeck, ListGroupItem, Collapse, Button} from "reactstrap"

function CourseView (course) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
    <div>
        <CardDeck style={{marginBottom:'20px'}}>
            <Card style={{maxWidth: '300px'}}>
               <CardImg src={course.img} alt="Instructor image"/> 
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
        <div style={{textAlign:"center"}}>
            <Button style={{ marginBottom:'20px' }}class="btn btn-link" onClick={toggle}>See Sylabus</Button> 
        </div>
        <Collapse isOpen={isOpen}>
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
                <CardHeader>Textbooks and References</CardHeader>
                <CardBody>{course.texts}No specific textbook is required, the instructor will provide his own lecture notes, handouts, codes, references to URLs, papers, and other online material.</CardBody>
            </Card>
            <Card>
                <CardHeader>Notes Students With Disbilities</CardHeader>
                <CardBody>Harrisburg University's policy is to not discriminate against qualified students with documented disabilities. It is also your instructor's policy to try and help students learn by whatever reasonable means necessary. If you have a disability related need that requires a modification in your testing situation, please notify your instructor a week before the first test or quiz   so   that   your   need   can   be   accommodated.   You   may   be   asked   to   present documentation that describes the nature of your disability and the recommended remedy.</CardBody>
            </Card>
            <Card>
                <CardHeader>Class Conduct</CardHeader>
                <CardBody>Classes will start on time and end as scheduled. Please be there on time and try as much as you can to not miss a class otherwise you are going to miss a lot. You will attend each class and actively participate in the discussions during class. If you are uncomfortable with public speaking, or if English is not your native language, please talk to the instructor in the first two weeks of the course to establish ways to make you more comfortable in speaking and interacting with other students (your peers). You are responsible for all the readings, even if the material is not explicitly covered in class. You should read the class materials prior to class and be prepared todiscuss and ask questions about the readings and assignments. You should also re-read the material after class as not every topic would be covered during class time. Take notes as I’m teaching, as I usually let my students you have their notes with them for all exams and quizzes. These notes will help you better understand theissues, concepts and techniques that are being presented and they are the most valuable assets of the course. I anticipate that for each session you will need to budget about 2 hours weekly. 4   to   8   hours   weekly   are   anticipated   for   programming   challenges   and assignments, and with your test preparation, this implies that you need to budget an average of 120 hours of out-of-class time over the course of the semester. This time estimate is a guide and you may need to budget more. For example, if the material isnew to you or difficult to comprehend, it will require more of your time. All communications with the instructor should be done using Harrisburg's electronic mail service.  Any email sent a different mail system will NOT be answered. All course deliverables are individual unless mentioned. Students who participate in University-sanctioned events (like connection leaders, e-sports, or athletics) must make prior arrangements and give the instructor ample notice. Missing class for practice is not advised. One last thing: Do not fall behind and come talk to me asap. Do not wait until the end of the course to talk to me about it, it will be too late and the only advice I have for you is to retake the class next year.</CardBody>
            </Card>
            <CardDeck style={{marginBottom: '20px'}}>
                <Card style={{maxWidth: '130px'}}>
                    <CardHeader>Grade Scale</CardHeader>
                    <ListGroup variant="flush">
                        <ListGroupItem>A | 90-100%</ListGroupItem>
                        <ListGroupItem>B | 80-89%</ListGroupItem>
                        <ListGroupItem>C | 70-79%</ListGroupItem>
                        <ListGroupItem>D | 60-69%</ListGroupItem>
                        <ListGroupItem>F | 0-60%</ListGroupItem>
                    </ListGroup>
                </Card>
                <Card>
                    <CardHeader>Class Schedule</CardHeader>
                    <CardBody>{course.scheduletext}{course.schedule}</CardBody>
                </Card>
            </CardDeck>
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
        </Collapse>
    </div>
    )
}
export default CourseView
