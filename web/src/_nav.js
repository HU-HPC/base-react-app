import React from "react"
export default {
    items: [
        {
            name: <b>PROGRAM</b>,
            url: "/program",
            icon: "fa fa-umbrella",
            children: [
                {
                    name: "Program Objectives",
                    url: "/program/peo"
                },
                {
                    name: "Student Outcomes",
                    url: "/program/slo"
                },
                {
                    name: "Meetings",
                    url: "/program/meeting"
                },
                {
                    name: "Workshops",
                    url: "/program/workshop"
                }
            ]
        },
        {
            name: <b>ASSESSMENTS</b>,
            url: "/assessment",
            icon: "fa fa-balance-scale"
        },
        {
            name: <b>COURSES</b>,
            url: "/course",
            icon: "fa fa-map"
        },
        {
            name: <b>RESEARCH</b>,
            url: "/research",
            icon: "fa fa-rocket",
            children: [
                {
                    name: "Cap 699",
                    url: "/research/thesis",
                    icon: "icon-paper"
                },
                {
                    name: "Projects",
                    url: "/research/project",
                    icon: "icon-science"
                },
                {
                    name: "HPC Laboratory",
                    url: "/research/hpcrl",
                    icon: "fa fa-flask",
                    children: [
                        {
                            name: "Research Units",
                            url: "/research/hpcrl/unit",
                            children: [
                                {
                                    name: "Principle Investigators",
                                    url: "/research/hpcrl/unit/investigator"
                                },
                                {
                                    name: "Courses",
                                    url: "/course"
                                }
                            ]
                        },
                        {
                            name: "Research Grants",
                            url: "/research/hpcrl/grant"
                        }
                    ]
                }
            ]
        },
        {
            name: <b>FACULTY</b>,
            url: "/faculty",
            icon: "fa fa-user"
        },
        {
            name: <b>STUDENTS</b>,
            url: "/student",
            icon: "fa fa-user"
        }
    ]
}
