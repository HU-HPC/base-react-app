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
import CourseService from "service/CourseService"
import Course from "./model/Course"

function CourseBuilder({ instructors }) {
	const [course, setCourse] = useState(new Course())
	const [isValid, setIsValid] = useState(false)
	const courseSvc = new CourseService()

	const updateCourse = (field, value) => {
		const _course = course
		_course[field] = value
		setCourse(_course)
		console.log(course)
	}

	const submitCourse = () => {
		return courseSvc(course)
	}

	useEffect(() => {
		console.log(course)
		setIsValid(course.isValid)
	}, [course.code])

	return (
		<>
			<Card>
				<CreateCourseHead updateCourse={updateCourse} submitCourse={submitCourse} validCourse={isValid} />
				<AddCourseBaseDetails instructors={instructors} updateCourse={updateCourse} />
			</Card>
			<CourseDescription updateCourse={updateCourse} description={course.description} />
			<Topics updateCourse={updateCourse} />
			<CoursePrerequesites updateCourse={updateCourse} />
			<ExpectedKnowledge updateCourse={updateCourse} />
			<CourseAssessment updateCourse={updateCourse} />
			<LearningObjectives updateCourse={updateCourse} />
			<RequiredText updateCourse={updateCourse} />
		</>
	)
}

export default CourseBuilder
