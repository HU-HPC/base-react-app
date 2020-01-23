import React from "react"
import { SelectField } from "components/common/form"

const HOURS = [
	{ value: 1, name: "1" },
	{ value: 2, name: "2" },
	{ value: 3, name: "3" },
	{ value: 4, name: "4" },
	{ value: 5, name: "5" },
	{ value: 6, name: "6" },
	{ value: 7, name: "7" },
	{ value: 8, name: "8" },
	{ value: 9, name: "9" },
	{ value: 10, name: "10" },
	{ value: 11, name: "11" },
	{ value: 12, name: "12" },
]

const MINUTES = [
	{ value: 0, name: "00" },
	{ value: 10, name: "10" },
	{ value: 20, name: "20" },
	{ value: 30, name: "30" },
	{ value: 40, name: "40" },
	{ value: 50, name: "50" },
]

const isPM = [
	{ value: false, name: "AM" },
	{ value: true, name: "PM" },
]

const TimeSelector = () => {
	return (
		<>
			<SelectField name="hours" items={HOURS} labelBy={item => item.name} valueBy={item => item.value} />
			<SelectField name="minutes" items={MINUTES} labelBy={item => item.name} valueBy={item => item.value} />
			<SelectField name="isPM" items={isPM} labelBy={item => item.name} valueBy={item => item.value} />
		</>
	)
}

export default TimeSelector
