import React from 'react'
import { ListGroup, Row, Col } from 'reactstrap'
import InstructorCard from './InstructorCard'

const FacultyListGroup = ({ instructors }) => {
	const generateItems = () => {
		return instructors.map((instructor) => {
			return (
				<Col size="3" key={instructor.id}>
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
