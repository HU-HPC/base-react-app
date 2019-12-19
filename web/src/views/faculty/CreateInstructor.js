import React from "react"
import * as Yup from "yup"
import ValidationMessage from "service/validation/ValidationMessage"
import {Row, Col, Card, Button, Input, Form, FormGroup, FormFeedback, Label} from "reactstrap"
import {Formik, Field} from "formik"
import {BaseForm, FormField, TextField, withForm} from "components/common/form"

const SCHEMA = Yup.object().shape({
    first_name: Yup.string().required(ValidationMessage.messages().required),
    last_name: Yup.string().required(ValidationMessage.messages().required),
    email: Yup.string().required(ValidationMessage.messages().email)
})

const DEFAULTS = {
    first_name: "",
    last_name: "",
    email: ""
}

// const CreateInstructorForm = ({ schema, defaults, onSubmit, init, form = {values : {}} }) => {
//     const {first_name, last_name, email} = form.values
// 	return (
// 		<>
// 			<BaseForm defaults={defaults} schema={schema} onSubmit={onSubmit}>
// 				<FormField name="first_name" type="text" label="First Name" target={(props) => <TextField value={first_name} {...props} />}/>
// 				<FormField name="last_name" type="text" label="Last Name" target={(props) => <TextField value={last_name} {...props} />}/>
// 				<FormField name="email" type="text" label="Email" target={(props) => <TextField value={email} {...props} />}/>
// 			</BaseForm>
// 			<Button
// 				type="submit"
// 				onClick={values => {
// 					console.log(values)
// 					onSubmit(values)
// 				}}
// 			>
// 				Submit
// 			</Button>
// 		</>
// 	)
// }
const CreateInstructorForm = ({schema, defaults, onSubmit, init}) => {
    return (
        <Formik validationSchema={schema} onSubmit={onSubmit} initialValues={defaults}>
            {props => (
                <>
                <Form onSubmit={props.handleSubmit}>
                    {console.log(props.errors)}
                    <FormGroup>
                        <Label for="first_name">First Name</Label>
                        <Input
                            id="first_name"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.first_name}
                            name="first_name"
                        />
                        {props.errors.first_name ? <FormFeedback className="d-block">{props.errors.first_name}</FormFeedback> : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="last_name">Last Name</Label>
                        <Input
                            id="last_name"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.last_name}
                            name="last_name"
                        />
                        {props.errors.last_name ? <FormFeedback className="d-block">{props.errors.last_name}</FormFeedback> : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.email}
                            name="email"
                        />
                        {props.errors.email ? (
                            <FormFeedback className="d-block">{props.errors.email}</FormFeedback>
                        ) : null}
                    </FormGroup>
                </Form>
                <Button type="submit" onClick={values => props.handleSubmit(values)}>Submit</Button>
                </>
            )}
        </Formik>
    )
}

// const CreateInstructorEnhancedForm = withForm(CreateInstructorForm)
// createInstructorForm.displayName = "CreateInstructorForm"

const CreateInstructor = () => {
    const foo = {
        first_name: "",
        last_name: "",
        email: ""
    }

    return (
        <Card>
            <CreateInstructorForm
                defaults={DEFAULTS}
                schema={SCHEMA}
                init={foo}
                onSubmit={values => {
                    console.log(values)
                }}
            />
        </Card>
    )
}

export default CreateInstructor
