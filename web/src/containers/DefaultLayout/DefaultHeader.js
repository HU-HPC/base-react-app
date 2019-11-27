import React, {Component} from "react"
import {Link, NavLink} from "react-router-dom"
import {Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem} from "reactstrap"


import {AppAsideToggler, AppNavbarBrand, AppSidebarToggler} from "@coreui/react"



class DefaultHeader extends Component {
    render() {
     

        return (
            <>
                <AppSidebarToggler className="d-lg-none" display="md" mobile />
                <AppNavbarBrand
                    full={{
                        src: "https://harrisburgu.edu/wp-content/uploads/2015/07/HU_finalLogo.png",
                        width: 140,
                        height: 45,
                        alt: "Harrisburg University of Science & Technology"
                    }}
                />
                <AppSidebarToggler className="d-md-down-none" display="lg" />

                <Nav className="d-md-down-none" navbar>
                    <NavItem className="px-3">
                        <NavLink to="/faculty" className="nav-link">
                            Faculty
                        </NavLink>
                    </NavItem>
                    <NavItem className="px-3">
                        <Link to="/student" className="nav-link">
                            Students
                        </Link>
                    </NavItem>
                    <NavItem className="px-3">
                        <NavLink to="/research/thesis" className="nav-link">
                            Research
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav direction="down">
                        <DropdownToggle nav>
                            <i className="fa fa-user fa-2x" />
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem header tag="div" className="text-center">
                                <strong>Account</strong>
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-bell-o" /> Updates<Badge color="info">42</Badge>
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-envelope-o" /> Messages<Badge color="success">42</Badge>
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-tasks" /> Tasks<Badge color="danger">42</Badge>
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-comments" /> Comments<Badge color="warning">42</Badge>
                            </DropdownItem>
                            <DropdownItem header tag="div" className="text-center">
                                <strong>Settings</strong>
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-user" /> Profile
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-wrench" /> Settings
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-usd" /> Payments<Badge color="secondary">42</Badge>
                            </DropdownItem>
                            <DropdownItem>
                                <i className="fa fa-file" /> Projects<Badge color="primary">42</Badge>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <i className="fa fa-shield" /> Lock Account
                            </DropdownItem>
                            <DropdownItem onClick={e => this.props.onLogout(e)}>
                                <i className="fa fa-lock" /> Logout
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <AppAsideToggler className="d-md-down-none" />
            </>
        )
    }
}

export default DefaultHeader
