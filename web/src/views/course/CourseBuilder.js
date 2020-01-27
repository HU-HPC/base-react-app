import React, { useState, useEffect } from "react"
import { Card } from "reactstrap"
import CreateCourseHead from "./widgets/addCourse/CreateCourseHead"
import AddCourseBaseDetails from "./widgets/addCourse/AddCourseBaseDetails"
import CourseDescription from "./widgets/addCourse/CourseDescription"
import CoursePrerequesites from "./widgets/addCourse/CoursePrerequesites"
import ExpectedKnowledge from "./widgets/addCourse/ExpectedKnowledge"
import CourseAssessment from "./widgets/addCourse/CourseAssessment"
import LearningObjectives from "./widgets/addCourse/LearningObjectives"
import RequiredText from "./widgets/addCourse/RequiredText"
import Topics from "./widgets/addCourse/Topics"
import CourseService from "../../service/CourseService"

function CourseBuilder({ instructors }) {
	const [course, setCourse] = useState({})
	const courseSvc = new CourseService()

	const updateCourse = (field, value) => {
		const _course = course
		_course[field] = value
		setCourse(_course)
	}

	const updateCourseBulk = values => {
		Object.keys(values).map(key => updateCourse(key, values[key]))
	}

	const submitCourse = () => {
		return courseSvc(course)
	}

	return (
		<>
			<Card>
				<CreateCourseHead updateCourse={updateCourseBulk} submitCourse={submitCourse} validCourse={false} />
				<AddCourseBaseDetails instructors={instructors} updateCourse={updateCourseBulk} />
			</Card>
			<CourseDescription updateCourse={updateCourse} courseDescription={course.description} />
			<Topics updateCourse={updateCourseBulk} />
			<CoursePrerequesites updateCourse={updateCourseBulk} />
			<ExpectedKnowledge updateCourse={updateCourseBulk} />
			<CourseAssessment updateCourse={updateCourseBulk} />
			<LearningObjectives updateCourse={updateCourseBulk} />
			<RequiredText updateCourse={updateCourseBulk} />
		</>
	)
}

export default CourseBuilder
