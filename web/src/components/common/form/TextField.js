import React from "react"
import {Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap"

const TextField = ({name, value, onChange, onBlur icon = "", addonType = "", type = "text"}) => {
    return icon ? (
        <InputGroup>
            <InputGroupAddon addonType={addonType}>
                <InputGroupText>
                    <i className={icon} />
                </InputGroupText>
            </InputGroupAddon>
            <Input name={name} value={value} id={name} type={type} onChange={onChange} onBlur={onBlur} />
        </InputGroup>
    ) : (
        <Input onChange={onChange} onBlur={onBlur} name={name} value={value} id={name} type={type} />
    )
}

export default TextField
