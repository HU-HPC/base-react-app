import React from "react"
import * as Yup from "yup"
import ValidationMessage from "service/validation/ValidationMessage"
import { Row, Col, Card, Button, Form } from "reactstrap"
import { Formik } from "formik"
import { FormField, TextField } from "components/common/form"

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

const CreateInstructorForm = ({ schema, defaults, onSubmit }) => {
	return (
		<Formik validationSchema={schema} onSubmit={onSubmit} initialValues={defaults}>
			{props => (
				<>
					<Form onSubmit={props.handleSubmit}>
						<FormField
							name="first_name"
							type="text"
							label="First Name"
							target={<TextField {...props} name="first_name" />}
						/>
						<FormField
							name="last_name"
							type="text"
							label="Last Name"
							target={<TextField {...props} name="last_name" />}
						/>
						<FormField
							name="email"
							type="text"
							label="Email"
							target={<TextField {...props} name="email" />}
						/>
					</Form>
					<Button type="submit" onClick={values => props.handleSubmit(values)}>
						Submit
					</Button>
				</>
			)}
		</Formik>
	)
}

const CreateInstructor = () => {
	return (
		<Card>
			<CreateInstructorForm
				defaults={DEFAULTS}
				schema={SCHEMA}
				onSubmit={values => {
					console.log(values)
				}}
			/>
		</Card>
	)
}

export default CreateInstructor
