import React from "react"
import * as Yup from "yup"
import ValidationMessage from "service/validation/ValidationMessage"
import { Row, Col, Card, Button } from "reactstrap"
import { BaseForm, FormField } from "components/common/form"

const SCHEMA = Yup.object().shape({
	first_name: Yup.string().required(ValidationMessage.messages().required),
	last_name: Yup.string().required(ValidationMessage.messages().required),
	email: Yup.string().required(ValidationMessage.messages().email),
})

const DEFAULTS = {
	first_name: "",
	last_name: "",
	email: "",
}

const CreateInstructorForm = ({ schema, defaults, onSubmit, init, ...props }) => {
	return (
		<>
			<BaseForm defaults={defaults} schema={schema} onSubmit={onSubmit}>
				<FormField name="first_name" type="text" label="First Name" />
				<FormField name="last_name" type="text" label="Last Name" />
				<FormField name="email" type="text" label="Email" />
			</BaseForm>
			<Button
				type="submit"
				onClick={values => {
					console.log(values)
					onSubmit(values)
				}}
			>
				Submit
			</Button>
		</>
	)
}

// const CreateInstructorEnhancedForm = withForm(CreateInstructorForm)
// createInstructorForm.displayName = "CreateInstructorForm"

const CreateInstructor = () => {
	const foo = {
		first_name: "",
		last_name: "",
		email: "",
	}

	return (
		<Card>
			<CreateInstructorForm
				defaults={DEFAULTS}
				schema={SCHEMA}
				init={foo}
				onSubmit={values => {
					console.log(values)
				}}
			/>
		</Card>
	)
}

export default CreateInstructor
