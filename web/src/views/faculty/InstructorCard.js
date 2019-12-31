import React, { useContext } from 'react'
import { ListGroupItem, Card, CardHeader, CardBody, Button } from 'reactstrap'
import FacultyContext from './FacultyContext'

const InstructorCard = ({ instructor }) => {
	const [ controller, modalActions ] = useContext(FacultyContext)
	return (
		<ListGroupItem>
			<Card>
				<CardHeader>
					{instructor.first_name} {instructor.last_name}
					<div className="pull-right">
						<Button size="sm" color="warning" outline onClick={() => modalActions.openModal(instructor.id)}>
							<i className="fa fa-pencil" />
						</Button>
					</div>
				</CardHeader>
				<CardBody>{instructor.email}</CardBody>
			</Card>
		</ListGroupItem>
	)
}

export default InstructorCard
