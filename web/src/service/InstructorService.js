import axios from "axios"
import InstructorModel from "model/InstructorModel"

const BASE = "instructor"

class InstructorService {
    listInstructors = async () => {
        const response = await axios.get(BASE)
        const instructors = []
        for (const o of response.data) {
            instructors.push(InstructorModel.fromObject(o))
        }
        return instructors
    }

    createInstructor = async request => {
        const response = await axios.post(BASE, request)
        return response.data
    }

    deleteInstructor = async ({id}) => {
        const response = await axios.delete(BASE + id)
        return response.data
    }
}

export default InstructorService
