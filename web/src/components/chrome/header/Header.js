import React from "react"
import { Card, Row} from "reactstrap"
import LinkButton from "../../common/button/LinkButton"

function Header() {
	return (
		<Card className="header">
            <Row className="justify-content-md-center">
                <LinkButton to="/" className="mx-3" >Home</LinkButton>
                <LinkButton to="/covert" className="mx-3">Zac Sandbox</LinkButton>
            </Row>
		</Card>
	)
}

export default Header
