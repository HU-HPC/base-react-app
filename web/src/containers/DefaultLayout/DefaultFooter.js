import React, {Component} from "react"
import PropTypes from "prop-types"

const propTypes = {
    children: PropTypes.node
}

const defaultProps = {}

class DefaultFooter extends Component {
    render() {
        // eslint-disable-next-line
        const {children, ...attributes} = this.props

        return (
            <React.Fragment>
                <span>
                    <a href="https://harrisburgu.edu">Harrisburg University of Science and Technology</a>
                </span>
                <span className="ml-auto">
                    Powered by <a href="https://harrisburgu.edu">HU High Performance Computing</a>
                </span>
            </React.Fragment>
        )
    }
}

DefaultFooter.propTypes = propTypes
DefaultFooter.defaultProps = defaultProps

export default DefaultFooter
