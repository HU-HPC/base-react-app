import React, { useEffect, useState } from "react"
import CourseBuilder from "./CourseBuilder"
import InstructorService from "service/InstructorService"

const Course = () => {
	const instructorSvc = new InstructorService()

	const [instructors, setInstructors] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			setInstructors(await fetchInstructors())
		}
		fetchData()
	}, [])

	const fetchInstructors = async () => {
		const instructors = await instructorSvc.listInstructors()
		console.log(instructors)
		return instructors
	}

	return (
		<div>
			<CourseBuilder instructors={instructors} />
		</div>
	)
}

export default Course
