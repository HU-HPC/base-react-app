import { withFormik } from "formik"
export { default as BaseForm } from "./BaseForm"
export { default as TextField } from "./field/TextField"
export { default as SelectField } from "./field/SelectField"
export { default as TextArea } from "./field/TextArea"
export { default as MarkdownField } from "./field/MarkdownField"
export { default as FormField } from "./FormField"

export const withForm = form => {
	console.log(form)
	const MyEnhancedForm = withFormik({
		mapPropsToValues: () => ({ name: "" }),

		// Custom sync validation
		validate: values => {
			const errors = {}

			if (!values.name) {
				errors.name = "Required"
			}

			return errors
		},

		handleSubmit: (values, { setSubmitting }) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2))
				setSubmitting(false)
			}, 1000)
		},
	})(form)
	console.log(MyEnhancedForm)
	return MyEnhancedForm
}
