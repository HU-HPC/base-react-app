import React from "react"
import { ReactMarkdown } from "react-markdown"
import { Card, CardBody } from "reactstrap"

const MarkdownField = ({ source }) => {
	return (
		<Card>
			<CardBody>
				<ReactMarkdown source={source} />
			</CardBody>
		</Card>
	)
}

export default MarkdownField
