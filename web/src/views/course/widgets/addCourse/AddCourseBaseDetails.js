import React from "react"
import * as Yup from "yup"
import ValidationMessage from "service/validation/ValidationMessage"
import { Row, Col, CardBody, Form } from "reactstrap"
import { Formik } from "formik"
import { SelectField } from "components/common/form"
import { FormField, TextField } from "components/common/form"

const SCHEMA = Yup.object().shape({
	instructorId: Yup.number()
		.positive()
		.integer()
		.required(ValidationMessage.required),
	meetingLocationId: Yup.number()
		.positive()
		.integer()
		.required(ValidationMessage.required),
	semseterId: Yup.number()
		.positive()
		.integer()
		.required(),
	dayOfWeek: Yup.array()
		.min(1)
		.max(7)
		.required(ValidationMessage.required),
	startTime: Yup.number()
		.integer()
		.min(0)
		.max(23)
		.required(ValidationMessage.required),
	endTime: Yup.number()
		.min(Yup.ref("startTime"))
		.max(23)
		.required(ValidationMessage.required),
	roomNumber: Yup.number()
		.integer()
		.positive(),
})

const DEFAULTS = {
	instructorId: 0,
	meetingLocationId: 0,
	semesterId: 0,
	dayOfWeek: [],
	startTime: 0,
	endTime: 1,
	roomNumber: 0,
}

const LOCATIONS = [
	{ id: 0, name: "Main Campus" },
	{ id: 1, name: "Online" },
	{ id: 2, name: "Executive Format" },
]

const SEMESTERS = [
	{ id: 0, name: "Fall" },
	{ id: 1, name: "Spring" },
	{ id: 2, name: "Summer" },
	{ id: 3, name: "Late Fall" },
	{ id: 4, name: "Late Spring" },
	{ id: 5, name: "Late Summer" },
]

const DAY_OF_WEEK = [
	{ id: 0, name: "Sunday" },
	{ id: 1, name: "Monday" },
	{ id: 2, name: "Tuesday" },
	{ id: 3, name: "Wednesday" },
	{ id: 4, name: "Thursday" },
	{ id: 5, name: "Friday" },
	{ id: 6, name: "Saturday" },
]

const AddCourseForm = ({ schema, defaults, onSubmit, instructors }) => {
	console.log(instructors)
	return (
		<Formik validationSchema={schema} onSubmit={onSubmit} initialValues={defaults}>
			{props => (
				<Row>
					<Form onSubmit={props.handleSubmit} style={{ width: "100%" }}>
						<Col>
							<FormField
								name="instructorId"
								label="Instructor"
								target={
									<SelectField
										{...props}
										name="instructorId"
										items={instructors}
										labelBy={item => item.first_name + " " + item.last_name}
										valueBy={item => item.id}
									/>
								}
							/>
						</Col>
						<Col>
							<FormField
								name="meetingLocationId"
								label="Location"
								target={
									<SelectField
										{...props}
										name="meetingLocationId"
										items={LOCATIONS}
										labelBy={item => item.name}
										valueBy={item => item.id}
									/>
								}
							/>
						</Col>
						<Col>
							<FormField
								name="semesterId"
								label="Semester"
								target={
									<SelectField
										{...props}
										name="semesterId"
										items={SEMESTERS}
										labelBy={item => item.name}
										valueBy={item => item.id}
									/>
								}
							/>
						</Col>
						<Col>
							<FormField
								name="dayOfWeek"
								label="Day(s) of Week"
								target={
									<SelectField
										{...props}
										name="dayOfWeek"
										items={DAY_OF_WEEK}
										valueBy={item => item.id}
										labelBy={item => item.name}
										isMulti
									/>
								}
							/>
						</Col>
						<Col>
							<FormField
								name="startTime"
								label="Start Time"
								target={<TextField {...props} name="startTime" style={{ display: "inline" }} />}
							/>
						</Col>
						<Col>
							<FormField
								name="endTime"
								label="End Time"
								target={<TextField {...props} name="endTime" />}
							/>
						</Col>
						<Col>
							<FormField
								name="roomNumber"
								label="Room Number"
								target={<TextField {...props} name="roomNumber" />}
							/>
						</Col>
					</Form>
				</Row>
			)}
		</Formik>
	)
}

const AddCourseBaseDetails = ({ instructors }) => {
	return (
		<CardBody>
			<AddCourseForm
				defaults={DEFAULTS}
				schema={SCHEMA}
				onSubmit={values => console.log(values)}
				instructors={instructors}
			/>
		</CardBody>
	)
}

export default AddCourseBaseDetails
