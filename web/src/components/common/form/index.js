import {withFormik} from "formik"
export {default as BaseForm} from "./BaseForm"
export {default as TextField} from "./field/TextField"
export {default as SelectField} from "./field/SelectField"
export {default as TextArea} from "./field/TextArea"
export {default as MarkdownField} from "./field/MarkdownField"
export {default as FormField} from "./FormField"

export const withForm = form => {
    console.log(form)
    //mapsPropsToValue: () => ({name: ""})
    // return withFormik(form)
}
