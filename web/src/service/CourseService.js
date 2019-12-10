import API from "./API"

class CourseService {
    listInstructors = () => {
        const response = API.get("/course")
        return response.data
    }

    createInstructor = request => {
        const response = API.post("/course", request)
        return response.data
    }
}

export default CourseService
