import React from "react"
import * as Yup from "yup"
import { Card, CardBody, CardHeader, Form } from "reactstrap"
import { Formik } from "formik"
import { FormField, TextField } from "components/common/form"

const SCHEMA = Yup.object().shape({
	topics: Yup.array(),
})

const DEFAULTS = {
	topics: [],
}

const TopicsForm = ({ schema, defaults, onSubmit }) => {
	return (
		<Formik validationSchema={schema} onSubmit={onSubmit} initialValues={defaults}>
			{props => (
				<Form onSubmit={props.handleSubmit} style={{ width: "100%" }}>
					<FormField name="topics" target={<TextField {...props} name="topics" textArea />} />
				</Form>
			)}
		</Formik>
	)
}

const Topics = () => {
	return (
		<Card>
			<CardHeader>Topics</CardHeader>
			<CardBody>
				<TopicsForm schema={SCHEMA} onSubmit={values => console.log(values)} defaults={DEFAULTS} />
			</CardBody>
		</Card>
	)
}

export default Topics
