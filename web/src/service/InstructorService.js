import useAxios from "axios-hooks"
import InstructorModel from "model/InstructorModel"

const BASE = { url: "instructor" }

const GET = { method: "GET" }
const POST = { methood: "POST" }
const DELETE = { methood: "DELETE" }

class InstructorService {
	listInstructors = () => {
		const response = useAxios({ ...BASE, ...GET })
		const instructors = []
		for (const o of response[0].data) {
			instructors.push(InstructorModel.fromObject(o))
		}
		response[0].rawData = response[0].data
		response[0].data = instructors
		return response
	}

	createInstructor = request => {
		const response = useAxios({ ...BASE, ...POST, options: request })
		return response
	}

	deleteInstructor = id => {
		const response = useAxios({ ...BASE, ...DELETE, options: { id: id } })
		return response
	}
}

export default InstructorService
