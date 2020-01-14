import React from "react"
import { Input, FormFeedback } from "reactstrap"

const TextField = ({ ...props }) => {
	return (
		<>
			<Input onChange={props.handleChange} onBlur={props.handleBlur} name={props.name} value={props.value} />
			{props.errors[props.name] ? (
				<FormFeedback className="d-block">{props.errors[props.name]}</FormFeedback>
			) : null}
		</>
	)
}

export default TextField
