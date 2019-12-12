import React, { useEffect, useState } from "react"
import { Card, CardHeader, CardBody } from "reactstrap"
import SelectField from "../../components/common/form/SelectField"
import InstructorService from "../../service/InstructorService"

const Faculty = () => {
	const svc = new InstructorService()
	const [instructors, setInstructors] = useState([])

	const getInstructors = async () => {
		const data = await svc.listInstructors()
		setInstructors(data)
	}

	useEffect(() => {
		getInstructors()
	}, [])

	return (
		<Card>
			<CardHeader>Faculty</CardHeader>
			<CardBody>
				<SelectField
					items={instructors}
					valueBy={item => item.email}
					labelBy={item => item.first_name + " " + item.last_name}
				/>
			</CardBody>
		</Card>
	)
}

export default Faculty
