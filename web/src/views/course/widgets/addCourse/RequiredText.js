import React from "react"
import * as Yup from "yup"
import { Card, Form, CardHeader, CardBody } from "reactstrap"
import { Formik } from "formik"
import { FormField, TextField } from "components/common/form"

const SCHEMA = Yup.object().shape({
	requiredTexts: Yup.array(),
})

const DEFAULTS = {
	requiredTexts: [],
}

const RequiredTextForm = ({ schema, defaults, onSubmit }) => {
	return (
		<Formik validationSchema={schema} onSubmit={onSubmit} initialValues={defaults}>
			{props => (
				<Form onSubmit={props.handleSubmit} style={{ width: "100%" }}>
					<FormField name="requiredTexts" target={<TextField textArea name="requiredTexts" {...props} />} />
				</Form>
			)}
		</Formik>
	)
}

const RequiredText = () => {
	return (
		<Card>
			<CardHeader>Required Textbooks and References</CardHeader>
			<CardBody>
				<RequiredTextForm schema={SCHEMA} defaults={DEFAULTS} onSubmit={values => console.log(values)} />
			</CardBody>
		</Card>
	)
}

export default RequiredText
