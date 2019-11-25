import React from "react"

const Faculty = React.lazy(() => import("./views/faculty/Faculty"))
const ResearchThesis = React.lazy(() => import("./views/research/Thesis"))
const ResearchProject = React.lazy(() => import("./views/research/Project"))
const ProgramObjective = React.lazy(() => import("./views/program/ProgramObjective"))
const StudentLearningObjective = React.lazy(() => import("./views/program/StudentLearningObjective"))
const ProgramMeeting = React.lazy(() => import("./views/program/ProgramMeeting"))
const ProgramWorkshop = React.lazy(() => import("./views/program/ProgramWorkshop"))
const Assessment = React.lazy(() => import("./views/assessment/Assessment"))
const Course = React.lazy(() => import("./views/course/Course"))
const HPCRL = React.lazy(() => import("./views/research/HPCRL/HPCRL"))
const HPCRLUnit = React.lazy(() => import("./views/research/HPCRL/unit/Unit"))
const HPCRLInvestigator = React.lazy(() => import("./views/research/HPCRL/unit/Investigator"))
const Grant = React.lazy(() => import("./views/research/HPCRL/Grant"))
const Student = React.lazy(() => import("./views/student/Student"))

const routes = [
    {path: "/program/peo", exact: true, name: "Program Objectives", component: ProgramObjective},
    {path: "/program/slo", exact: true, name: "Projects", component: StudentLearningObjective},
    {path: "/program/meeting", exact: true, name: "Projects", component: ProgramMeeting},
    {path: "/program/workshop", exact: true, name: "Projects", component: ProgramWorkshop},
    {path: "/assessment", exact: true, name: "Assessments", component: Assessment},
    {path: "/course", exact: true, name: "Courses", component: Course},
    {path: "/faculty", exact: true, name: "Faculty", component: Faculty},
    {path: "/research/thesis", exact: true, name: "Thesis", component: ResearchThesis},
    {path: "/research/project", exact: true, name: "Projects", component: ResearchProject},
    {path: "/research/hpcrl", exact: true, name: "HPC Research Laboratory", component: HPCRL},
    {path: "/research/hpcrl/unit", exact: true, name: "Research Unit", component: HPCRLUnit},
    {
        path: "/research/hpcrl/unit/investigator",
        exact: true,
        name: "Primary Investigator",
        component: HPCRLInvestigator
    },
    {path: "/research/hpcrl/grant", exact: true, name: "Research Grant", component: Grant},
    {path: "/student", exact: true, name: "Students", component: Student}
]

export default routes
