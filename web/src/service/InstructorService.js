import axios from "axios"
import InstructorModel from "model/InstructorModel"
import mockFaculty from "resource/data/mock_data/FacultyListPayload"

const BASE = "/instructor"

class InstructorService {
	constructor(mock) {
		if (mock) {
			this.mock = true
		} else {
			this.mock = false
		}
	}

	listInstructors = async () => {
		const instructors = []
		if (this.mock) {
			for (const o of mockFaculty) {
				instructors.push(InstructorModel.fromObject(o))
			}
			return instructors
		}
		const response = await axios.get(BASE)
		for (const o of response.data) {
			instructors.push(InstructorModel.fromObject(o))
		}

		return instructors
	}

	createInstructor = request => {
		return axios.post(BASE, request)
	}

	fetchInstructor = async id => {
		const response = await axios.get(BASE + "?id=" + id)

		if (response.data[0]) {
			const insturctor = InstructorModel.fromObject(response.data[0])
			console.log(insturctor)
			return insturctor
		}
	}

	deleteInstructor = id => {
		return axios.delete(BASE + "/" + id)
	}
}

export default InstructorService
