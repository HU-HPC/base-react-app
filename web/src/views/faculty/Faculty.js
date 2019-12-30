import React, { useEffect, useState } from "react"
import { Container, Button, Row, Col } from "reactstrap"
import InstructorService from "service/InstructorService"
import FacultyListGroup from "./FacultyListGroup"
import BaseModal from "components/common/modal/BaseModal"
import useAxios from "axios-hooks"
import InstructorEndpoints from "service/InstructorEndpoints"
import useModal from "service/hooks/useModal"

import CreateInstructor from "./CreateInstructor"

const Faculty = () => {
	const [instructors, setInstructors] = useState([])
	const [createInstuctorModalIsOpen, setCreateInstuctorModalIsOpen] = useState(false)
	const { openModal, closeModal, isOpen, CreateInstructor } = useModal()

	const listInstructors = useAxios({ url: InstructorEndpoints.base, method: InstructorEndpoints.list.method })

	const svc = new InstructorService()

	useEffect(() => {
		if (!listInstructors[0].loading) {
			setInstructors(listInstructors[0].data)
		}
	}, [listInstructors[0].loading])
	return (
		<>
			<Container className="no-gutters">
				<Row className="justify-content-between">
					<Col>
						<h1>Faculty</h1>
					</Col>
					<Col style={{ textAlign: "right" }}>
						<Button color="secondary" onClick={e => openModal(e)}>
							Add Instructor
						</Button>
					</Col>
				</Row>
				<FacultyListGroup instructors={instructors} />
			</Container>
			<BaseModal modalOpen={createInstuctorModalIsOpen} closeModal={closeModal} title="Create Instructor">
				<CreateInstructor />
			</BaseModal>
		</>
	)
}

export default Faculty
