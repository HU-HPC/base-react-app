import React from 'react'
import FacultyController from './FacultyController'

const FacultyContext = React.createContext([ new FacultyController({}), {} ])

export default FacultyContext
