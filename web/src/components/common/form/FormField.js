import React from "react"
import { FormGroup, Label, FormFeedback } from "reactstrap"
import { useField } from "formik"
import TextField from "./field/TextField"

const FormField = ({ label, ...props }) => {
	const [field, meta] = useField(props)
	return (
		<FormGroup>
			<Label>{label}</Label>
			<TextField {...field} {...props} meta={meta} />
			{meta.error ? <div>{meta.error}</div> : null}
		</FormGroup>
	)
}

export default FormField
