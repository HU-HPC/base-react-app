import React, { useState, useEffect } from "react"

import Select from "react-select"

function SelectField({ items, labelBy, valueBy, selectedItem, onSelect, isMulti }) {
	const [_items, set_items] = useState(items)
	const [selected, setSelected] = useState(null)
	useEffect(() => {
		standardizeItems()
		setSelected(selectedItem)
	}, [items])

	const standardizeItems = () => {
		if (labelBy) {
			set_items(
				items.map(i => {
					i.label = labelBy(i)
					return i
				}),
			)
		}
		if (valueBy) {
			set_items(
				items.map(i => {
					i.value = valueBy(i)
					return i
				}),
			)
		}
	}
	return <Select options={_items} value={selected} onChange={onSelect} isMulti={isMulti} />
}

export default SelectField
