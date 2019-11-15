import React from "react"
import { Button as Strap_Button } from "reactstrap"

function Button({ children, onClick, className, color="primary" }) {
	return <Strap_Button className={className} color={color} onClick={onClick}>{children}</Strap_Button>
}

export default Button
