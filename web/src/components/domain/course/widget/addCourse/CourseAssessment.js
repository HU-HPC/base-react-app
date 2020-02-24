import React from "react"
import * as Yup from "yup"
import ValidationMessage from "service/validation/ValidationMessage"
import { Card, Form, CardHeader, CardBody } from "reactstrap"
import { Formik } from "formik"
import { FormField, TextField } from "components/common/form"

const SCHEMA = Yup.object().shape({
	assessment: Yup.string().required(ValidationMessage.required),
})

const DEFAULTS = {
	assessment: "",
}

const CourseAssessmentForm = ({ schema, defaults, onSubmit }) => {
	return (
		<Formik validationSchema={schema} onSubmit={onSubmit} initialValues={defaults}>
			{props => (
				<Form onSubmit={props.handleSubmit} style={{ width: "100%" }}>
					<FormField name="assessment" target={<TextField textArea name="assessment" {...props} />} />
				</Form>
			)}
		</Formik>
	)
}

const CourseAssessment = () => {
	return (
		<Card>
			<CardHeader>Course Assessment</CardHeader>
			<CardBody>
				<CourseAssessmentForm schema={SCHEMA} defaults={DEFAULTS} onSubmit={values => console.log(values)} />
			</CardBody>
		</Card>
	)
}

export default CourseAssessment
