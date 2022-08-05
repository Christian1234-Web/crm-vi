import React from 'react'
import { NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types'; 

const NavHeader = (props) => {
       
    return (
        <NavItem>
            <NavLink
                className={props.classes}
                onClick={() => { props.tabChange('1') }}
            >
                {props.text}
            </NavLink>
        </NavItem>
    )
}

NavHeader.defaultProps = {
    classes: ""
}

NavHeader.propTypes = {
    classes: PropTypes.string,
    tabChange: PropTypes.string,
    text: PropTypes.string
}

export default NavHeader
