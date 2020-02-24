class ResearchProposalModel {
	facultyId = 0
	researchTitle = ""
	description = ""
	rationale = ""
	design = ""
	preliminaryData = ""
	expectedResults = ""
	timeSchedule = ""
	qualifications = ""
	sponsors = ""
	consecutiveFunding = ""
	detailedFunding = ""
	proposalTitle = ""

	static fromObject(o) {
		const proposal = new ResearchProposalModel()
		for (const key of Object.keys(o)) {
			proposal[key] = o[key]
		}
		return proposal
	}

	get isValid() {
		for (const key of Object.keys(this)) {
			if (!!this[key] === false) {
				return false
			}
		}
		return true
	}
}

export default ResearchProposalModel
