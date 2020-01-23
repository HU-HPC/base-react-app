import React from "react"
import { Input, FormFeedback } from "reactstrap"
import InputMask from "react-input-mask"

const TextField = ({ ...props }) => {
	return props.isMasked ? (
		<>
			<InputMask {...props} mask={props.mask} maskChar={props.maskChar} />
		</>
	) : (
		<>
			<Input
				type={props.textArea ? "textarea" : "text"}
				onChange={props.handleChange}
				onBlur={props.onBlur ? props.onBlur : props.handleBlur}
				name={props.name}
				value={props.value}
				placeholder={props.placeholder}
				className={props.className}
				disabled={props.disabled}
			/>
			{props.errors && props.errors[props.name] ? (
				<FormFeedback className="d-block">{props.errors[props.name]}</FormFeedback>
			) : null}
		</>
	)
}

export default TextField
