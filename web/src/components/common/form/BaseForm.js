import React from "react"

import {Formik} from "formik"

function BaseForm({defaults, schema, onSubmit, children}) {
    console.log(children)
    return (
        <Formik initialErrors={defaults} validationSchema={schema} onSubmit={values => console.log(values)}>
            {children}
        </Formik>
    )
}

export default BaseForm
