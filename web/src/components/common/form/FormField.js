import React from 'react'
import { FormGroup, Label } from 'reactstrap'

const FormField = ({ label, name, target, ...props }) => {
	return (
		<FormGroup>
			<Label for={name}>{label}</Label>
			{target}
		</FormGroup>
	)
}

export default FormField
