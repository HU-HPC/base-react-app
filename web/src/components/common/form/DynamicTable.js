import React, { useState } from "react"
import { Table, Button, Input } from "reactstrap"

const DynamicTable = ({ fields, data, addRow }) => {
	const [newRowData, setNewRowData] = useState({})
	const [valid, setValid] = useState(false)

	const saveData = ({ target }) => {
		const _newRowData = newRowData
		_newRowData[target.name] = target.value
		setNewRowData(_newRowData)
		validRow()
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
				<th />
			</thead>
		)
	}

	const createRows = () => {
		return data.map(item => (
			<tr>
				{Object.keys(item).map(field => (
					<td>{item[field]}</td>
				))}
				<td />
			</tr>
		))
	}

	const validRow = () => {
		const keys = Object.keys(newRowData)
		console.log(keys, fields.length)
		setValid(fields.length === keys.length)
	}

	const handleNewRowSubmit = () => {
		if (Object.keys(newRowData).length) {
			addRow(newRowData)
			resetNewRowData()
			setValid(false)
		}
	}

	const newRow = () => {
		return (
			<tr>
				{fields.map(item => {
					return (
						<td>
							<Input name={item} onBlur={event => saveData(event)} value={newRowData[item]} />
						</td>
					)
				})}
				<td>
					<Button color="success" onClick={handleNewRowSubmit} disabled={!valid}>
						<i className="fa fa-check" />
					</Button>
				</td>
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
