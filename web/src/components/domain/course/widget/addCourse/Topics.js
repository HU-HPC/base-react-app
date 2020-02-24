import React, { useState } from "react"
import { Card, CardBody, CardHeader } from "reactstrap"
import { DynamicTable } from "components/common/form"

const FIELDS = ["ID", "SUBJECT", "FOO", "BAR"]

const Topics = () => {
	const [data, setData] = useState([])

	const updateData = (field, value) => {
		const _data = data
		_data[field] = value
		setData(_data)
	}

	const addRow = rowData => {
		const _data = data
		_data.push(rowData)
		setData(_data)
	}

	return (
		<Card>
			<CardHeader>Topics</CardHeader>
			<CardBody>
				<DynamicTable fields={FIELDS} data={data} updateData={updateData} addRow={addRow} />
			</CardBody>
		</Card>
	)
}

export default Topics
