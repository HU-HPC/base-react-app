import React, { useState } from "react"
import { Card, CardHeader, CardBody } from "reactstrap"
import DynamicTable from "components/common/form/DynamicTable"

const FIELDS = ["Title", "Description"]

const ExpectedKnowledge = () => {
	const [data, setData] = useState([])

	const addRow = rowData => {
		const _data = data
		_data.push(rowData)
		setData(_data)
	}
	return (
		<Card>
			<CardHeader>Expected Knowledge at the Start of the Course</CardHeader>
			<CardBody>
				<DynamicTable fields={FIELDS} data={data} addRow={addRow} />
			</CardBody>
		</Card>
	)
}

export default ExpectedKnowledge
