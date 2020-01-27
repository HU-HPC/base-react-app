import React, { useState } from "react"
import { Card, CardBody, CardHeader } from "reactstrap"
import { DynamicTable } from "components/common/form"

const FIELDS = ["Id", "Subject", "Description", "Duration"]

const Topics = () => {
	const [data, setData] = useState([])

	const addRow = rowData => {
		const _data = data
		_data.push(rowData)
		setData(_data)
	}

	return (
		<Card>
			<CardHeader>Topics</CardHeader>
			<CardBody>
				<DynamicTable fields={FIELDS} data={data} addRow={addRow} />
			</CardBody>
		</Card>
	)
}

export default Topics
