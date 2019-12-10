import API from "./API"

const BASE = "/instructor"

class InstructorService {
    listInstructors = () => {
        const response = API.get(BASE)
        return response.data
    }

    createInstructor = request => {
        const response = API.post(BASE, request)
        return response.data
    }

    deleteInstructor = request => {
        const response = API.delete(BASE)
        return response.data
    }
}

export default InstructorService
