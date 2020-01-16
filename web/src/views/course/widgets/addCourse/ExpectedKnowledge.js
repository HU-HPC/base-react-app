import React from "react"
import * as Yup from "yup"
import ValidationMessage from "service/validation/ValidationMessage"
import { Card, Form, CardHeader, CardBody } from "reactstrap"
import { Formik } from "formik"
import { FormField, TextField } from "components/common/form"

const SCHEMA = Yup.object().shape({
	expectedKnowledge: Yup.string().required(ValidationMessage.required),
})

const DEFAULTS = {
	expectedKnowledge: "",
}

const ExpectedKnowledgeForm = ({ schema, defaults, onSubmit }) => {
	return (
		<Formik validationSchema={schema} onSubmit={onSubmit} initialValues={defaults}>
			{props => (
				<Form onSubmit={props.handleSubmit} style={{ width: "100%" }}>
					<FormField
						name="expectedKnowledge"
						target={<TextField {...props} textArea name="expectedKnowledge" />}
					/>
				</Form>
			)}
		</Formik>
	)
}

const ExpectedKnowledge = () => {
	return (
		<Card>
			<CardHeader>Expected Knowledge at the Start of the Course</CardHeader>
			<CardBody>
				<ExpectedKnowledgeForm schema={SCHEMA} onSubmit={values => console.log(values)} defaults={DEFAULTS} />
			</CardBody>
		</Card>
	)
}

export default ExpectedKnowledge
