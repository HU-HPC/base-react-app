import React from "react"
import * as Yup from "yup"
import ValidationMessage from "service/validation/ValidationMessage"
import { Row, Col, CardHeader, Form, Button } from "reactstrap"
import { Formik } from "formik"
import { FormField, TextField } from "components/common/form"

const SCHEMA = Yup.object().shape({
	code: Yup.string().required(ValidationMessage.required),
})

const DEFAULTS = {
	code: "CISC ",
}

const CreateCourseHeadForm = ({ schema, defaults, onSubmit, valid, submitCourse }) => {
	return (
		<Row>
			<Col>
				<Formik validationSchema={schema} initialValues={defaults} onSubmit={onSubmit}>
					{props => (
						<Form onSubmit={props.handleSubmit} style={{ width: "100%" }}>
							<FormField
								label="Course Code"
								name="code"
								target={<TextField {...props} name="code" onBlur={props.handleSubmit} />}
							/>
						</Form>
					)}
				</Formik>
			</Col>
			<Col sm={{ offset: 1 }}>
				<Button disabled={!valid} color="success" className="mt-4 mr-5" size="lg" onClick={submitCourse}>
					Submit
				</Button>
			</Col>
		</Row>
	)
}

const CreateCourseHead = ({ updateCourse, validCourse, submitCourse }) => {
	const handleSubmit = value => {
		updateCourse("code", value["code"])
	}

	console.log(validCourse)

	return (
		<CardHeader>
			<CreateCourseHeadForm
				schema={SCHEMA}
				defaults={DEFAULTS}
				onSubmit={handleSubmit}
				valid={validCourse}
				submitCourse={submitCourse}
			/>
		</CardHeader>
	)
}

export default CreateCourseHead
