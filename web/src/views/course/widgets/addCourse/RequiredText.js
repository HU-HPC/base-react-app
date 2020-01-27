import React, { useState } from "react"

import { Card, CardHeader, CardBody } from "reactstrap"
import DynamicTable from "components/common/form/DynamicTable"

const FIELDS = ["ISBN", "Title", "Edition", "Author"]

const RequiredText = () => {
	const [data, setData] = useState([])

	const addRow = rowData => {
		const _data = data
		_data.push(rowData)
		setData(_data)
	}
	return (
		<Card>
			<CardHeader>Required Textbooks and References</CardHeader>
			<CardBody>
				<DynamicTable fields={FIELDS} data={data} addRow={addRow} />
			</CardBody>
		</Card>
	)
}

export default RequiredText
