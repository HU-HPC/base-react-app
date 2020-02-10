class Course {
	code = ""
	instructorId = 0
	location = ""
	semester = ""
	dayOfWeek = []
	startTime = ""
	endTime = ""
	roomNumber = ""
	description = ""
	topics = []
	prerequisites = []
	expectedKnowledge = []
	assessment = ""
	learningObjectives = []
	requiredText = []

	static fromObject(o) {
		const course = new Course()
		for (const key of Object.keys(o)) {
			course[key] = o[key]
		}
		return course
	}
	//&& this.instructorId && this.description && this.location && this.semester
	get isValid() {
		console.log(this.code)
		if (this.code) {
			return true
		}
		return false
	}
}

export default Course
