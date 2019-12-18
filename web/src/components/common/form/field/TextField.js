import React from "react"
import {Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap"
import {Field} from "formik"

const TextField = ({icon, addonType, field, form: {touched, errors}}) => {
    console.log(field, touched, errors)
    return icon ? (
        <InputGroup>
            <InputGroupAddon addonType={addonType}>
                <InputGroupText>
                    <i className={icon} />
                </InputGroupText>
            </InputGroupAddon>
            <Input
                name={field.name}
                value={field.value}
                id={field.name}
                type="text"
                onChange={field.onChange}
                onBlur={field.onBlur}
                tag={Field}
            />
        </InputGroup>
    ) : (
        <Input
            onChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            // value={value}
            // id={name}
            // type={type}
            // tag={Field}
        />
    )
}

export default TextField
