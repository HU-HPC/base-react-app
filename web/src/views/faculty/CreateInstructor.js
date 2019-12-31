import React, { useContext } from 'react'
import * as Yup from 'yup'
import ValidationMessage from 'service/validation/ValidationMessage'
import { Row, Col, Container, Button, Form } from 'reactstrap'
import { Formik } from 'formik'
import { FormField, TextField } from 'components/common/form'
import FacultyContext from './FacultyContext'

const SCHEMA = Yup.object().shape({
	id: Yup.string(),
	first_name: Yup.string().required(ValidationMessage.messages().required),
	last_name: Yup.string().required(ValidationMessage.messages().required),
	email: Yup.string().required(ValidationMessage.messages().email),
})

const DEFAULTS = {
	id: '',
	first_name: '',
	last_name: '',
	email: '',
}

const CreateInstructorForm = ({ schema, defaults, onSubmit }) => {
	return (
		<Formik validationSchema={schema} onSubmit={onSubmit} initialValues={defaults}>
			{(props) => (
				<React.Fragment>
					<Row>
						<Form onSubmit={props.handleSubmit} style={{ width: '100%' }}>
							<Col>
								<FormField
									name="first_name"
									type="text"
									label="First Name"
									target={<TextField {...props} name="first_name" />}
								/>
							</Col>
							<Col>
								<FormField
									name="last_name"
									type="text"
									label="Last Name"
									target={<TextField {...props} name="last_name" />}
								/>
							</Col>
							<Col>
								<FormField
									name="email"
									type="text"
									label="Email"
									target={<TextField {...props} name="email" />}
								/>
							</Col>
						</Form>
					</Row>
					<Button type="submit" onClick={(values) => props.handleSubmit(values)}>
						Submit
					</Button>
				</React.Fragment>
			)}
		</Formik>
	)
}

const CreateInstructor = ({ selectedInstructor }) => {
	const [ controller ] = useContext(FacultyContext)
	console.log(controller)
	const toSchema = (instructorObject) => ({
		id: instructorObject.id,
		first_name: instructorObject.first_name,
		last_name: instructorObject.last_name,
		email: instructorObject.email,
	})

	const initVal = selectedInstructor === -1 ? DEFAULTS : toSchema(controller.fetchInstructor(selectedInstructor))

	return (
		<Container>
			<CreateInstructorForm
				defaults={initVal}
				schema={SCHEMA}
				onSubmit={(values) => {
					console.log(values)
				}}
			/>
		</Container>
	)
}
export default CreateInstructor
