import React, { useState } from "react"

import { Card, CardHeader, CardBody } from "reactstrap"
import DynamicTable from "components/common/form/DynamicTable"

const FIELDS = ["Code", "Title"]

const LearningObjectives = () => {
	const [data, setData] = useState([])

	const addRow = rowData => {
		const _data = data
		_data.push(rowData)
		setData(_data)
	}
	return (
		<Card>
			<CardHeader>Course Learning Outcomes</CardHeader>
			<CardBody>
				<DynamicTable fields={FIELDS} addRow={addRow} data={data} />
			</CardBody>
		</Card>
	)
}

export default LearningObjectives
