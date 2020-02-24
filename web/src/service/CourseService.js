import axios from "axios"

const BASE = "/course"

class CourseService {
	listCourse = () => {
		const response = axios.get(BASE)
		return response.data
	}

	createCourse = request => {
		console.log(request)
		const response = axios.post(BASE, request)
		return response.data
	}
}

export default CourseService
