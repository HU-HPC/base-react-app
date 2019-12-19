import React from "react"
import {Formik} from "formik"
import {Form} from "reactstrap"

const BaseForm = ({children, schema, defaults, onSubmit}) => {
    return (
        // <Formik validationSchema={schema} initialValues={defaults} onSubmit={values => console.log(values)}>
        // 	{({ handleSubmit, handleChange, handleBlur, values, errors }) => {
        // 		return <Form onSubmit={handleSubmit}>{children}</Form>
        // 	}}
        // </Formik>
        <Form onSubmit={onSubmit}>{children}</Form>
    )
}

export default BaseForm
