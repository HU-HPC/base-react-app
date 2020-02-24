import axios from "axios"
// import ResearchProposalModel from "components/domain/research/model/ResearchProposalModel"

const BASE = "/research"

class ResearchService {
	createProposal = ({ isValid, ...request }) => {
		return axios.post(BASE, request)
	}

	deleteProposal = id => {
		return axios.delete(BASE + "/" + id)
	}
}

export default ResearchService
