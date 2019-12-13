import React from "react"
import {ReactMarkdown} from "react-markdown"
import {Card, Cardbody} from "reactstrap"

const MarkdownField = ({source}) => {
    return (
        <Card>
            <Cardbody>
                <ReactMarkdown source={source} />
            </Cardbody>
        </Card>
    )
}

export default MarkdownField
