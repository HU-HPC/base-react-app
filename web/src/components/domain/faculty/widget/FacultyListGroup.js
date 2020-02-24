import React from "react"
import { Row, Col } from "reactstrap"
import InstructorCard from "./InstructorCard"

const FacultyListGroup = ({ instructors }) => {
	const generateItems = () => {
		return instructors.map(instructor => {
			return (
				<Col key={instructor.id}>
					<InstructorCard instructor={instructor} />
				</Col>
			)
		})
	}

	return <Row>{generateItems()}</Row>
}

export default FacultyListGroup
