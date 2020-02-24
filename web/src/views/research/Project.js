import React from "react"
import { Card, Button, CardBody } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
const Project = () => {
	return (
		<Card>
			<h3>Research Projects</h3>
			<Link to="/research/project/new">
				<Button>New Project</Button>
			</Link>
			<CardBody>List of current research projects faculty</CardBody>
		</Card>
	)
}

export default withRouter(Project)
