class InstructorModel {
    first_name = ""
    last_name = ""
    email = ""
    id = 0

    static fromObject(o) {
        const instructor = new InstructorModel()
        for (const key of Object.keys(o)) {
            instructor[key] = o[key]
        }
        return instructor
    }
}

export default InstructorModel
