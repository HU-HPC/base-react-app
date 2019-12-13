import React from "react"
import * as Yup from "yup"
import {Formik} from "formik"
import {Form as RSForm} from "reactstrap"

function BaseForm({DEFAULT, SCHEMA, onSubmit, children}) {
    return (
        <Formik initialErrors={DEFAULT} validationSchema={SCHEMA}>
            <RSForm onSubmit={onSubmit}>{children}</RSForm>
        </Formik>
    )
}

export default BaseForm
