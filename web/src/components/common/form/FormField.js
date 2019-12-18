import React from "react"
import {FormGroup, Label} from "reactstrap"
import {Field} from "formik"

const FormField = ({label, target, name, ...props}) => {
    console.log(target, props)
    return (
        <Field name={name} component={target}>
            <Label for={name}>{label}</Label>
        </Field>
    )
}

export default FormField
