import React, { useState } from "react"
import { Table } from "reactstrap"
import TextField from "./field/TextField"

const DynamicTable = ({ fields, data, updateData, addRow }) => {
	console.log(fields)

	const [fullRow, setFullRow] = useState(false)
	const [newRowData, setNewRowData] = useState({})

	const saveData = (name, data) => {
		const _newRowData = newRow
		_newRowData[name] = data
		setNewRowData(_newRowData)
	}

	const resetNewRowData = () => {
		setNewRowData({})
	}

	const createHeader = () => {
		return (
			<thead>
				{fields.map(header => (
					<th>{header}</th>
				))}
			</thead>
		)
	}

	const createRows = () => {
		return data.map(item => (
			<tr>
				<td>{item.data}</td>
			</tr>
		))
	}

	const newRow = () => {
		return (
			<tr>
				{fields.map((item, idx) => (
					<td>
						<TextField
							name={item.name}
							onChange={value => updateData(value.target.name, value.target.value)}
						/>
					</td>
				))}
			</tr>
		)
	}

	return (
		<Table>
			{createHeader()}
			{createRows()}
			{newRow()}
		</Table>
	)
}

export default DynamicTable
