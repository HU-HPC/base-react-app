import React from "react"
import { Button as Strap_Button } from "reactstrap"

function Button({ children, onClick }) {
	return <Strap_Button onClick={onClick}>{children}</Strap_Button>
}

export default Button
