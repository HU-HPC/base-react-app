import React from "react"
import {FormGroup, Label, FormFeedback, Input} from "reactstrap"


const FormField = ({label, name, type, ...props}) => {
    // const [field, meta] = useField(props)
    console.log(props)
    return (
        <FormGroup>
            <Label for={name}>{label}</Label>
            <Input
                id={name}
                type={type}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values[name]}
                name={NamedNodeMap}
            />
            {props.errors[name] ? <FormFeedback className="d-block">{props.errors[name]}</FormFeedback> : null}
        </FormGroup>
    )
}

export default FormField
