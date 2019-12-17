import React from "react"

import {FormGroup, Label} from "reactstrap"

const FormField = ({label, target, name}) => {
    console.log(target)

    return (
        <FormGroup>
            <Label htmlFor={name}>{label}</Label>
            {target}
        </FormGroup>
    )
}

export default FormField
