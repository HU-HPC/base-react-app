import React, { useState, useEffect } from "react"

import Select from "react-select"

function SelectField({ items, labelBy, valueBy, selectedItem, onSelect }) {
	const [_items, set_items] = useState(items)
	const [selected, setSelected] = useState(null)
	console.log(items)
	useEffect(() => {
		standardizeItems()
		setSelected(selectedItem)
	}, [items])

	const standardizeItems = () => {
		if (labelBy) {
			set_items(
				items.map(i => {
					i.label = labelBy(i)
					console.log(i, labelBy(i))
					return i
				}),
			)
		}
		if (valueBy) {
			set_items(
				items.map(i => {
					i.value = valueBy(i)
					console.log(i, valueBy(i))
					return i
				}),
			)
		}
	}
	console.log(_items)
	return <Select options={_items} value={selected} onChange={onSelect} />
}

export default SelectField
