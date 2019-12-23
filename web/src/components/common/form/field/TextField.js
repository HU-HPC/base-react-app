import React from "react"
import {Input, FormFeedback} from "reactstrap"

const TextField = ({name, ...props}) => {
    console.log(props)
    return <>
    <Input onChange={props.handleChange} onBlur={props.handleBlur} name={props.name} value={props.value} />
    {props.errors[name] ? <FormFeedback className="d-block">{props.errors[name]}</FormFeedback> : null}

    </>
}

export default TextField
