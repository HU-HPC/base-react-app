import React from "react"
import * as Yup from "yup"
import ValidationMessage from "service/validation/ValidationMessage"
import {Row, Col, Card} from "reactstrap"
import {BaseForm, TextField, FormField} from "components/common/form"

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

const CreateInstructorForm = (props, form) => {
    return (
        <BaseForm>
            <FormField name="first_name" label="First Name" target={props => <TextField {...props} />} />
            <FormField name="last_name" label="Last Name" target={props => <TextField {...props} />} />
        </BaseForm>
    )
}
// const CreateInstructorEnhancedForm = withForm(CreateInstructorForm)
// createInstructorForm.displayName = "CreateInstructorForm"

const CreateInstructor = () => {
    return (
        <Card>
            <CreateInstructorForm DEFAULTS={DEFAULTS} SCHEMA={SCHEMA} onSubmit={() => {}} />
            {/* <CreateInstructorForm DEFAULTS={DEFAULTS} SCHEMA={SCHEMA} onSubmit={() => {}} /> */}
        </Card>
    )
}

export default CreateInstructor
