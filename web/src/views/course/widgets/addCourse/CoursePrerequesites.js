import React, { useState } from "react"
import { Card, CardBody, CardHeader } from "reactstrap"
import DynamicTable from "components/common/form/DynamicTable"

const FIELDS = ["Course Code", "Course Name"]

const CoursePrerequesites = ({ updateCourse }) => {
	const [data, setData] = useState([])

	const addRow = rowData => {
		const _data = data
		_data.push(rowData)
		setData(_data)
		updateCourse("prerequisites", _data)
	}

	return (
		<Card>
			<CardHeader>Course Prerequesites</CardHeader>
			<CardBody>
				<DynamicTable fields={FIELDS} addRow={addRow} data={data} />
			</CardBody>
		</Card>
	)
}

export default CoursePrerequesites
