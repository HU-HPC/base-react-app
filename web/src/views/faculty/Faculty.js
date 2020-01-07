import React, { useEffect, useState } from 'react'
import { Container, Button, Row, Col } from 'reactstrap'
import FacultyListGroup from './FacultyListGroup'
import BaseModal from 'components/common/modal/BaseModal'
import useAxios from 'axios-hooks'
import InstructorEndpoints from 'service/InstructorEndpoints'
import CreateInstructor from 'views/faculty/CreateInstructor'
import FacultyContext from './FacultyContext'
import FacultyController from './FacultyController'
import InstructorService from '../../service/InstructorService'
import { setIn } from 'formik'

const Faculty = () => {
	const [ isLoading, setIsLoading ] = useState(false)
	const [ instructors, setInstructors ] = useState([])
	const [ selectedInstructor, setSelectedInstructor ] = useState(null)
	const svc = new InstructorService()
	// const listInstructors = useAxios({ url: InstructorEndpoints.base, method: InstructorEndpoints.list.method })
	// const createInstructor = useAxios(
	// 	{ url: InstructorEndpoints.base, method: InstructorEndpoints.base.method },
	// 	{ manual: true },
	// )
	// const deleteInstructor = useAxios(
	// 	{ url: InstructorEndpoints.base, method: InstructorEndpoints.delete.method },
	// 	{ manual: true },
	// )
	// const editInstructor = useAxios(
	// 	{ url: InstructorEndpoints.base, method: InstructorEndpoints.edit.method },
	// 	{ manual: true },
	// )
	// const getInstructor = useAxios(
	// 	{ url: InstructorEndpoints.base, method: InstructorEndpoints.get.method },
	// 	{ manual: true },
	// )

	// const fetchInstructor = (id) => {
	// 	getInstructor({
	// 		data: {
	// 			...getInstructor[0].data,
	// 			id: id,
	// 		},
	// 	})
	// }

	// const _createInstructor = (instructor) => {
	// 	createInstructor({
	// 		data: {
	// 			...createInstructor[0].data,
	// 			...instructor,
	// 		},
	// 	})
	// }

	useEffect(() => {
		setIsLoading(true)
		fetch = async () => {
			setInstructors(await svc.listInstructor())
		}
		fetch()
		setIsLoading(false)
	}, [])

	// const actions = {
	// 	createInstructor: _createInstructor,
	// 	deleteInstructor,
	// 	editInstructor,
	// 	fetchInstructor,
	// }

	const modalControls = {
		openModal: (id) => setSelectedInstructor(id),
	}

	return (
		<FacultyContext.Provider value={svc}>
			<Container className="no-gutters">
				<Row className="justify-content-between">
					<Col>
						<h1>Faculty</h1>
					</Col>
					<Col style={{ textAlign: 'right' }}>
						<Button color="secondary" onClick={() => setSelectedInstructor(-1)}>
							Add Instructor
						</Button>
					</Col>
				</Row>
				<FacultyListGroup instructors={instructors} />
			</Container>
			<BaseModal
				isOpen={selectedInstructor}
				closeModal={() => setSelectedInstructor(null)}
				title="Create Instructor">
				<CreateInstructor selectedInstructor={selectedInstructor} />
			</BaseModal>
		</FacultyContext.Provider>
	)
}

export default Faculty
