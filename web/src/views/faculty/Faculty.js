import React, { useEffect, useState } from "react"
import { Container, Button, Row, Col } from "reactstrap"
import InstructorService from "service/InstructorService"
import FacultyListGroup from "./FacultyListGroup"
import BaseModal from "components/common/modal/BaseModal"

import CreateInstructor from "./CreateInstructor"

const Faculty = () => {
	const [instructors, setInstructors] = useState([])
	const [createInstuctor, setCreateInstuctor] = useState(false)
	const svc = new InstructorService()

	const getInstructors = async () => {
		const data = await svc.listInstructors()
		setInstructors(data)
	}

	useEffect(() => {
		getInstructors()
	}, [])
	return (
		<>
			<Container className="no-gutters">
				<Row className="justify-content-between">
					<Col>
						<h1>Faculty</h1>
					</Col>
					<Col style={{ textAlign: "right" }}>
						<Button color="secondary" onClick={() => setCreateInstuctor(true)}>
							Add Instructor
						</Button>
					</Col>
				</Row>
				<FacultyListGroup instructors={instructors} />
			</Container>
			{/* <BaseModal isOpen={createInstuctor} title="Create Instructor"> */}
			{/* </BaseModal> */}
				<CreateInstructor />
		</>
	)
}

export default Faculty
