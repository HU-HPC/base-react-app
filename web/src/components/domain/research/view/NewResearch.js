import React, { useState, useEffect } from "react"
import { Card, CardBody, CardHeader, Button, Row, Col } from "reactstrap"
import NewResearchForm from "../widget/NewResearchForm"
import ResearchProposalModel from "../model/ResearchProposalModel"
import ResearchService from "service/ResearchService"
import InstructorService from "service/InstructorService"
function NewResearch() {
	const [researchProposal, setResearchProposal] = useState(new ResearchProposalModel())
	const [instructors, setInstructors] = useState([])
	const researchSvc = new ResearchService()
	const instructorSvc = new InstructorService()
	const [valid, setValid] = useState(false)

	const editProposal = (field, value) => {
		const proposal = researchProposal
		proposal[field] = value
		setResearchProposal(proposal)
		setValid(proposal.isValid)
	}

	const submitProposal = () => {
		return researchSvc.createProposal(researchProposal)
	}

	useEffect(async () => {
		setInstructors(await instructorSvc.listInstructors())
	}, [])

	return (
		<Card>
			<CardHeader>
				<Row className="justify-content-between">
					<Col>
						<h1>New Research</h1>
					</Col>
					<Col style={{ textAlign: "right" }}>
						<Button color="secondary" onClick={submitProposal} disabled={!valid}>
							Submit
						</Button>
					</Col>
				</Row>
			</CardHeader>
			<CardBody>
				<NewResearchForm editProposal={editProposal} instructors={instructors} />
			</CardBody>
		</Card>
	)
}

export default NewResearch
