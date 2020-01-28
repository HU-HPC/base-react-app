import React, { useEffect, useState } from "react"
import { Card, CardHeader, CardBody } from "reactstrap"
import { MarkdownField } from "components/common/form"

const CourseDescription = ({ updateCourse, courseDescription }) => {
	const [value, setValue] = useState(courseDescription)

	useEffect(() => {
		console.log(value)
		updateCourse("description", value)
	}, [value])

	const _setValue = val => {
		setValue(val)
	}

	return (
		<Card>
			<CardHeader>Course Description</CardHeader>
			<CardBody>
				<MarkdownField value={value} setValue={_setValue} />
			</CardBody>
		</Card>
	)
}

export default CourseDescription
