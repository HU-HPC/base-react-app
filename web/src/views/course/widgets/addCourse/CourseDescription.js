import React, { useEffect, useState } from "react"
import { Card, CardHeader, CardBody } from "reactstrap"
import { MarkdownField } from "components/common/form"

const CourseDescription = ({ updateCourse, description }) => {
	const [value, setValue] = useState(description)

	useEffect(() => {
		updateCourse("description", value)
	}, [value])

	return (
		<Card>
			<CardHeader>Course Description</CardHeader>
			<CardBody>
				<MarkdownField value={value} setValue={setValue} />
			</CardBody>
		</Card>
	)
}

export default CourseDescription
