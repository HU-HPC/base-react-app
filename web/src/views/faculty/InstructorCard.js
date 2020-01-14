import React, { useContext } from "react"
import { Card, CardHeader, CardBody, Button } from "reactstrap"
import FacultyContext from "./FacultyContext"

const InstructorCard = ({ instructor }) => {
	const facultyActions = useContext(FacultyContext)
	return (
		<Card style={{ width: "18rem", height: "18rem" }}>
			<CardHeader>
				{instructor.first_name} {instructor.last_name}
				<div className="pull-right">
					<Button
						className="mx-2"
						size="sm"
						color="warning"
						outline
						onClick={() => facultyActions.openModal(instructor.id)}
					>
						<i className="fa fa-pencil" />
					</Button>
					<Button
						size="sm"
						color="danger"
						outline
						onClick={() => facultyActions.deleteInstructor(instructor.id)}
					>
						<i className="fa fa-trash" />
					</Button>
				</div>
			</CardHeader>
			<CardBody style={{ overflow: "scroll", cursor: "pointer" }} onClick={() => console.log("details")}>
				Email: {instructor.email}
			</CardBody>
		</Card>
	)
}

export default InstructorCard
