import React from 'react'

const Header = (props) => {
    return (
        <div className="navbar navbar-default">
            <div className="navbar-inner">
                <a href="javascript:void(0);" className="link text-color action p-l-10 p-r-10" 
                    data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax"
                    onClick={(e) => {
                        e.preventDefault()
                        props.click(false)
                    }}
                >
                    <i className="pg-icon">chevron_left</i>
                </a>
                <div className="view-heading">
                    John Smith
                    <div className="fs-11 hint-text">Online</div>
                </div>
                <a href="javascript:void(0);" className="link text-color action p-r-10 pull-right ">
                    <i className="pg-icon">more_horizontal</i>
                </a>
            </div>
        </div>
    )
}

export default Header
