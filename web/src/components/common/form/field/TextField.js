import React from "react"
import { Input } from "reactstrap"

const TextField = props => {
	console.log(props)
	return (
		<>
			<Input onChange={props.handkeChange} onBlur={props.handleBlur} name={props.name} value={props.value} />
		</>
	)
}

export default TextField
