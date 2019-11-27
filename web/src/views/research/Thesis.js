import React, {useState} from "react"
import {Card, CardHeader, CardBody, Input} from "reactstrap"
import SelectField from "../../components/common/form/SelectField"

import mockFaculty from "../../resource/data/mock_data/FacultyListPayload.json"

const Thesis = () => {

    const [faculty, setFaculty] = useState("")

    return (
        <>
        <Card>
            <CardHeader>CS MS Capstone</CardHeader>
            <CardBody>
                <ul>
                    <li>General Information</li>
                    <li>Learning Outcomes</li>
                    <li>Evaluation</li>
                    <li>Assessment</li>
                    <li>Syllabus</li>
                    <li>Choosing a Topic</li>
                    <li>Choosing an Advisor</li>
                </ul>
            </CardBody>
        </Card>
        <Card>
            <CardHeader>
                General Information
            </CardHeader>
            <CardBody>
                <Input type="textarea" placeholder="What is your thesis about? What do you want to achieve?" />
            </CardBody>
        </Card>
        <Card>
            <CardHeader>
                Learning Outcomes
            </CardHeader>
            <CardBody>
               <Input type="textarea" placeholder="What are your outcomes...?"/>
            </CardBody>
        </Card>
        <Card>
            <CardHeader>
                Evaluation
            </CardHeader>
            <CardBody>
                <Input type="textarea" placeholder="Deadlines"/>
                <Input type="textarea" placeholder="Deliverables"/>
                <small>Thesis Submission</small>
                <Input type="file" placeholder="Thesis Submission"/>
                <small>Thesis Defense</small>
                <Input type="file" placeholder="Thesis Defense"/>
            </CardBody>
        </Card>
        <Card>
            <CardHeader>
                Assessment
            </CardHeader>
            <CardBody>
                <Input type="textarea" placeholder="Add links for later" />
            </CardBody>
        </Card>
        <Card>
            <CardHeader>
                Syllabus
            </CardHeader>
            <CardBody>
                <Input type="file" placeholder="Choose a file" />
            </CardBody>
        </Card>
        <Card>
            <CardHeader>
                Choosing a Topic
            </CardHeader>
            <CardBody>
                <Input type="select">
                    <option>Choose a topic from this list... </option>
                    <option>Foo</option>
                    <option>Bar</option>
                    </Input>
                <Input type="text" placeholder="Or propose your own topic?"/>
            </CardBody>
        </Card>
        <Card>
            <CardHeader>
                Choosing an Advisor
            </CardHeader>
            <CardBody>
                <SelectField items={mockFaculty} labelBy={i => i.last_name} valueBy={i => i.id} onSelect={(value) => {console.log(value);return setFaculty(value)}} selectedItem={mockFaculty.find(f => f === faculty)}/>
            </CardBody>
        </Card>
</>
    )
}

export default Thesis
