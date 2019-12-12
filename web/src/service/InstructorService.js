import axios from "axios"
const BASE = "instructor"

class InstructorService {
	listInstructors = async () => {
		const response = await axios.get(BASE)
		const data = response.data
		return data
	}

	createInstructor = request => {
		const response = axios.post(BASE, request)
		return response.data
	}

	deleteInstructor = ({ id }) => {
		const response = axios.delete(BASE + id)
		return response.data
	}
}

export default InstructorService
