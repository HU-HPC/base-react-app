import React from "react"
import * as Yup from "yup"
import { Card, CardBody, CardHeader, Form } from "reactstrap"
import { Formik } from "formik"
import { FormField, TextField } from "components/common/form"

const SCHEMA = Yup.object().shape({
	prerequesites: Yup.array(),
})

const DEFAULTS = {
	prerequesites: [],
}

const CoursePrerequesitesForm = ({ schema, defaults, onSubmit }) => {
	return (
		<Formik validationSchema={schema} onSubmit={onSubmit} initialValues={defaults}>
			{props => (
				<Form onSubmit={props.handleSubmit} style={{ width: "100%" }}>
					<FormField name="prerequesites" target={<TextField {...props} name="prerequesites" textArea />} />
				</Form>
			)}
		</Formik>
	)
}

const CoursePrerequesites = () => {
	return (
		<Card>
			<CardHeader>Course Prerequesites</CardHeader>
			<CardBody>
				<CoursePrerequesitesForm schema={SCHEMA} onSubmit={values => console.log(values)} defaults={DEFAULTS} />
			</CardBody>
		</Card>
	)
}

export default CoursePrerequesites
