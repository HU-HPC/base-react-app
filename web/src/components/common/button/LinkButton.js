import React from 'react'
import { Link } from "@reach/router"
import Button from './Button'

function LinkButton({to, children, className}) {
    return (
        <Link to={to}>
            <Button onClick={() => {}} className={className}>{children}</Button>
        </Link>
    )
}

export default LinkButton
