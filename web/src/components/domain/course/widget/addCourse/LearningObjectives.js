import React from "react"
import * as Yup from "yup"
import ValidationMessage from "service/validation/ValidationMessage"
import { Card, Form, CardHeader, CardBody } from "reactstrap"
import { Formik } from "formik"
import { FormField, TextField } from "components/common/form"

const SCHEMA = Yup.object().shape({
	clos: Yup.array().required(ValidationMessage.required),
})

const DEFAULTS = {
	clos: "",
}

const LearningObjectivesForm = ({ schema, defaults, onSubmit }) => {
	return (
		<Formik validationSchema={schema} onSubmit={onSubmit} initialValues={defaults}>
			{props => (
				<Form onSubmit={props.handleSubmit} style={{ width: "100%" }}>
					<FormField name="clos" target={<TextField textArea name="clos" {...props} />} />
				</Form>
			)}
		</Formik>
	)
}

const LearningObjectives = () => {
	return (
		<Card>
			<CardHeader>Course Learning Outcomes</CardHeader>
			<CardBody>
				<LearningObjectivesForm schema={SCHEMA} defaults={DEFAULTS} onSubmit={values => console.log(values)} />
			</CardBody>
		</Card>
	)
}

export default LearningObjectives
