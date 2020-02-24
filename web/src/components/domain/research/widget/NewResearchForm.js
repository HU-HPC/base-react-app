import React from "react"
import { Row, Col, Input } from "reactstrap"
import { FormField, SelectField } from "components/common/form"
const NewResearchForm = ({ editProposal, instructors }) => {
	return (
		<Row>
			<Col sm="6">
				<FormField
					name="instructorId"
					label="Instructor"
					target={
						<SelectField
							name="instructorId"
							items={instructors || []}
							labelBy={item => item.first_name + " " + item.last_name}
							valueBy={item => item.id}
							onSelect={e => editProposal(e.target.name, e.target.value)}
						/>
					}
				/>
			</Col>
			<Col sm="6">
				<FormField
					label="Research Title"
					name="researchTitle"
					target={<Input name="researchTitle" onBlur={e => editProposal(e.target.name, e.target.value)} />}
				/>
			</Col>
			<Col sm="12">
				<FormField
					label="Description of Research"
					name="description"
					target={
						<Input
							name="description"
							onBlur={e => editProposal(e.target.name, e.target.value)}
							type="textarea"
							placeholder="Include research goals, relationship to student learning outcomes, contribution to science and technology, local and global society."
						/>
					}
				/>
			</Col>
			<Col sm="12">
				<FormField
					label="Research Rationale"
					name="rationale"
					target={
						<Input
							name="rationale"
							onBlur={e => editProposal(e.target.name, e.target.value)}
							type="textarea"
							placeholder="Include research specific target and relationship to, and a selected bibliography of, similar research."
						/>
					}
				/>
			</Col>
			<Col sm="12">
				<FormField
					label="Research Design"
					name="design"
					target={
						<Input
							name="design"
							onBlur={e => editProposal(e.target.name, e.target.value)}
							type="textarea"
							placeholder="Include how program objectives are to be attained, the procedures of implementation, and citation of professional reference sources for the research design to be used.
                            "
						/>
					}
				/>
			</Col>
			<Col sm="12">
				<FormField
					label="Preliminary Data for Research"
					name="preliminaryData"
					target={
						<Input
							name="preliminaryData"
							onBlur={e => editProposal(e.target.name, e.target.value)}
							type="textarea"
							placeholder="Include preliminary data or stats or previous findings."
						/>
					}
				/>
			</Col>
			<Col sm="12">
				<FormField
					label="Expected Results"
					name="expectedResults"
					target={
						<Input
							onBlur={e => editProposal(e.target.name, e.target.value)}
							name="expectedResults"
							type="textarea"
							placeholder="Include name of specific journal, scholarly meeting, or institution of implementation in which research results will appear."
						/>
					}
				/>
			</Col>
			<Col sm="12">
				<FormField
					label="Time Schedule"
					name="timeSchedule"
					target={
						<Input
							onBlur={e => editProposal(e.target.name, e.target.value)}
							name="timeSchedule"
							type="textarea"
							placeholder=" Provide a detailed schedule of work, including projected completion date of research."
						/>
					}
				/>
			</Col>
			<Col sm="12">
				<FormField
					label="Researcher’s Qualifications"
					name="qualifications"
					target={
						<Input
							name="qualifications"
							onBlur={e => editProposal(e.target.name, e.target.value)}
							type="textarea"
							placeholder="Attach curriculum vitae listing previous publications and grants received, if any."
						/>
					}
				/>
			</Col>
			<Col sm="12">
				<FormField
					label="Internal and External Research Sponsors"
					name="sponsors"
					target={
						<Input
							name="sponsors"
							onBlur={e => editProposal(e.target.name, e.target.value)}
							type="textarea"
							placeholder="Include names of other sponsors to which this proposal has been or will be submitted and indicate specifically how it will not receive duplicating funds and/or will not provide a combined salary stipend from HU and other sources greater than the applicant’s current academic year salary rate calculated monthly."
						/>
					}
				/>
			</Col>
			<Col sm="12">
				<FormField
					label="Consecutive Funding"
					name="consecutiveFunding"
					target={
						<Input
							name="consecutiveFunding"
							onBlur={e => editProposal(e.target.name, e.target.value)}
							type="textarea"
							placeholder="List the years and projects that the applicant(s) been awarded for the past years."
						/>
					}
				/>
			</Col>
			<Col sm="12">
				<FormField
					label="Detailed Funding"
					name="detailedFunding"
					target={
						<Input
							name="detailedFunding"
							onBlur={e => editProposal(e.target.name, e.target.value)}
							type="textarea"
							placeholder="List the years and projects that the applicant(s) been awarded for the past years."
						/>
					}
				/>
				<small>
					The major expense will be the stipend salary of involved HU students as well as the support for
					their participation of top-tier conferences including conference registration, travel expenses, and
					etc.
				</small>
			</Col>
			<Col sm="12">
				<FormField
					label="Proposal Title"
					name="proposalTitle"
					target={
						<Input
							name="proposalTitle"
							onBlur={e => editProposal(e.target.name, e.target.value)}
							type="textarea"
							placeholder="List the years and projects that the applicant(s) been awarded for the past years."
						/>
					}
				/>
			</Col>
		</Row>
	)
}

export default NewResearchForm
