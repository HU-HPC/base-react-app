import React from "react"
import {ListGroupItem, Card, CardHeader, CardBody} from "reactstrap"

const InstructorCard = ({instructor}) => {
    return (
        <ListGroupItem>
            <Card>
                <CardHeader>
                    {instructor.first_name} {instructor.last_name}
                </CardHeader>
                <CardBody>{instructor.email}</CardBody>
            </Card>
        </ListGroupItem>
    )
}

export default InstructorCard
