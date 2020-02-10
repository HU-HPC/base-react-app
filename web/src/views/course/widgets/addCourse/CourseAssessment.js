import React, { useState, useEffect } from "react"
import { Card, CardHeader, CardBody } from "reactstrap"
import { MarkdownField } from "components/common/form"

const CourseAssessment = ({ courseDescription, updateCourse }) => {
	const [value, setValue] = useState(courseDescription)

	useEffect(() => {
		updateCourse("assessment", value)
	}, [value])

	return (
		<Card>
			<CardHeader>Course Assessment</CardHeader>
			<CardBody>
				<MarkdownField value={value} setValue={setValue} />
			</CardBody>
		</Card>
	)
}

export default CourseAssessment
