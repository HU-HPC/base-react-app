import React from "react"
import { FormGroup, Label } from "reactstrap"

const FormField = ({ label, name, target, className }) => {
	return (
		<FormGroup className={className}>
			<Label for={name}>{label}</Label>
			{target}
		</FormGroup>
	)
}

export default FormField
