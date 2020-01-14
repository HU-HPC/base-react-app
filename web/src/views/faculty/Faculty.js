import React, { useEffect, useState } from "react"
import { Container, Button, Row, Col } from "reactstrap"
import FacultyListGroup from "./FacultyListGroup"
import BaseModal from "components/common/modal/BaseModal"
import CreateInstructor from "views/faculty/CreateInstructor"
import FacultyContext from "./FacultyContext"
import InstructorService from "service/InstructorService"

const Faculty = () => {
	const [instructors, setInstructors] = useState([])
	const [selectedInstructorId, setSelectedInstructorId] = useState("")
	const [selectedInstructor, setSelectedInstructor] = useState(null)
	const svc = new InstructorService(false)

	useEffect(() => {
		const doSomething = async () => {
			if (selectedInstructorId) {
				fetchInstructor(selectedInstructorId)
			}
			return setInstructors(await svc.listInstructors())
		}
		doSomething()
	}, [selectedInstructorId])

	const facultyControlls = {
		openModal: instructor => setSelectedInstructorId(instructor),
		deleteInstructor: id => deleteInstructor(id),
	}

	const createInstructor = payload => {
		console.log(payload)
		svc.createInstructor(payload)
		setSelectedInstructorId("")
	}

	const fetchInstructor = id => {
		setSelectedInstructor(svc.fetchInstructor(id))
	}

	const deleteInstructor = id => {
		return svc.deleteInstructor(id)
	}

	return (
		<FacultyContext.Provider value={facultyControlls}>
			<Container>
				<Row className="justify-content-between">
					<Col>
						<h1>Faculty</h1>
					</Col>
					<Col style={{ textAlign: "right" }}>
						<Button color="secondary" onClick={() => setSelectedInstructor(-1)}>
							Add Instructor
						</Button>
					</Col>
				</Row>
				<FacultyListGroup instructors={instructors} />
			</Container>
			<BaseModal
				isOpen={!!selectedInstructor}
				closeModal={() => setSelectedInstructor(null)}
				title="Create Instructor"
			>
				<CreateInstructor
					selectedInstructor={selectedInstructor}
					createInstructor={createInstructor}
					fetchInstructor={fetchInstructor}
				/>
			</BaseModal>
		</FacultyContext.Provider>
	)
}

export default Faculty
