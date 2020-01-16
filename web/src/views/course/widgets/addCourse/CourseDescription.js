import React from "react"
import * as Yup from "yup"
import ValidationMessage from "service/validation/ValidationMessage"
import { Row, Col, Card, Button, Form, CardHeader, CardBody } from "reactstrap"
import { Formik } from "formik"
import { FormField, TextField } from "components/common/form"

const SCHEMA = Yup.object().shape({
	description: Yup.string().required(ValidationMessage.required),
})

const DEFAULTS = {
	descriptions: "",
}

const CourseDescriptionForm = ({ schema, defaults, onSubmit }) => {
	return (
		<Formik validationSchema={schema} onSubmit={onSubmit} initialValues={defaults}>
			{props => (
				<Form onSubmit={props.handleSubmit} style={{ width: "100%" }}>
					<FormField name="first_name" target={<TextField {...props} name="description" textArea={true} />} />
				</Form>
			)}
		</Formik>
	)
}

const CourseDescription = () => {
	return (
		<Card>
			<CardHeader>Course Description</CardHeader>
			<CardBody>
				<CourseDescriptionForm schema={SCHEMA} onSubmit={values => console.log(values)} defaults={DEFAULTS} />
			</CardBody>
		</Card>
	)
}

export default CourseDescription
