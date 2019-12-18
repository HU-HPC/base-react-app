import React from "react"
import {Formik, Field} from "formik"
import {Form} from "reactstrap"

const BaseForm = ({defaults, schema, onSubmit, children}) => {
    return (
        <Formik initialValues={defaults} validationSchema={schema} onSubmit={values => console.log(values)}>
            {props => {
                return <Form onSubmit={props.handleSubmit}>{children}</Form>
            }}
        </Formik>
    )
}

export default BaseForm
