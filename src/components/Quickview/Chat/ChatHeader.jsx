import React from 'react'

import PropTypes from 'prop-types';

const ChatHeader = (props) => {
    return (
        <div className="navbar navbar-default">
            <div className="navbar-inner">
                { /* BEGIN Header Controler */ }
                <a href="javascript:void(0);" className="action p-l-10 link text-color" data-navigate="view" 
                    data-view-port="#chat" data-view-animation="push-parrallax"
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="pg-icon">add</i>
                </a>
                { /* END Header Controler */ }
                <div className="view-heading">
                {props.list}
                <div className="fs-11">{props.show}</div>
                </div>
                { /* BEGIN Header Controler */ }
                <a href="javascript:void(0);" className="action p-r-10 pull-right link text-color">
                    <i className="pg-icon">more_horizontal</i>
                </a>
                { /* END Header Controler */ }
            </div>
        </div>
    )
}

ChatHeader.propTypes = {
    list: PropTypes.string,
    show: PropTypes.string
}

export default ChatHeader
