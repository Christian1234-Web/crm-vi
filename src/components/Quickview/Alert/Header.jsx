import React from 'react'

const Header = (props) => {
    return (
        <div className="navbar navbar-default navbar-sm">
            <div className="navbar-inner">
                { /* BEGIN Header Controler */ }
                <a href="javascript:void(0);" className="action p-l-10 link text-color" data-navigate="view" 
                    data-view-port="#chat" data-view-animation="push-parrallax"
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="pg-icon">more_horizontal</i>
                </a>
                { /* END Header Controler */ }
                <div className="view-heading">
                {props.text}
                </div>
                { /* BEGIN Header Controler */ }
                <a href="javascript:void(0);" className="action p-r-10 pull-right link text-color">
                    <i className="pg-icon">search</i>
                </a>
                { /* END Header Controler */ }
            </div>
        </div>
    )
}

export default Header
