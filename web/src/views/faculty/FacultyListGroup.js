import React from "react"
import {ListGroup, Row, Col, Card} from "reactstrap"
import InstructorCard from "./InstructorCard"

const FacultyListGroup = ({instructors}) => {
    console.log(instructors)
    const generateItems = () => {
        return instructors.map(instructor => {
            console.log(instructor)
            return (
                <Col size="3">
                    <InstructorCard instructor={instructor} />
                </Col>
            )
        })
    }

    return (
        <ListGroup>
            <Row>{generateItems()}</Row>
        </ListGroup>
    )
}

export default FacultyListGroup
