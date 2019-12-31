class FacultyController {
	constructor(actions) {
		this.actions = actions
	}

	createInstructor = (instructor) => {
		return this.actions.createInstructor(instructor)
	}

	editInstructor = (instructor) => {
		return this.actions.editInstructor(instructor)
	}

	deleteInstructor = (id) => {
		return this.actions.deleteInstructor(id)
	}

	fetchInstructor = (id) => {
		return this.actions.fetchInstructor(id)
	}
}

export default FacultyController
