import React from 'react'

import PropTypes from 'prop-types';

const AlertGroupItem = (props) => {
    return (
        <li className="alert-list">
            { /* BEGIN Alert Item Set Animation using data-view-animation */ }
            <a href="javascript:void(0);" className="align-items-center" data-navigate="view" 
                data-view-port="#chat" data-view-animation="push-parrallax"
                onClick={(e) => e.preventDefault()}
            >
                <p className="">
                    <span className="text-warning fs-10"><i className="pg-icon">circle_fill</i></span>
                </p>
                <p className="p-l-10 overflow-ellipsis fs-12">
                    <span className="text-color">{props.mainText}</span>
                </p>
                <p className="p-r-10 ml-auto fs-12 text-right">
                    <span className="text-warning">{props.textRightWarning} <br/></span>
                    {props.textRightMaster !== undefined 
                    ? <span className="text-color">{props.textRightMaster}</span> 
                    : null}
                </p>
            </a>
            { /* END Alert Item*/ }
        </li>
    )
}

AlertGroupItem.propTypes = {
    mainText: PropTypes.string,
    textRightWarning: PropTypes.string,
    textRightMaster: PropTypes.string
}

export default AlertGroupItem

