import React, { useState } from "react"
import { Table, Button, Input } from "reactstrap"
import TextField from "./field/TextField"

const DynamicTable = ({ fields, data, addRow }) => {
	const [fullRow, setFullRow] = useState(false)
	const [newRowData, setNewRowData] = useState({})

	const saveData = event => {
		console.log(event.target.name)
		// const _newRowData = newRow
		// _newRowData[name] = data
		// setNewRowData(_newRowData)
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
				<td>{item.data}</td>
			</tr>
		))
	}

	const _addRow = () => {
		console.log(newRowData)
	}

	const newRow = () => {
		return (
			<tr>
				{fields.map((item, idx) => {
					console.log(item, idx)
					return (
						<td>
							<Input
								name={item.name}
								onBlur={event => {
									saveData(event)
								}}
							/>
						</td>
					)
				})}
				<td>
					<Button color="success" onClick={() => _addRow(newRowData)}>
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
