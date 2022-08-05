import React from 'react'

import PropTypes from 'prop-types';

const WithLinkAlertGroupItem = (props) => {
    return (
        <li className="alert-list">
            { /* BEGIN Alert Item Set Animation using data-view-animation */ }
            <a href="javascript:void(0);" className="p-t-10 p-b-10 align-items-center" 
                data-navigate="view" data-view-port="#chat" 
                data-view-animation="push-parrallax"
                onClick={(e) => e.preventDefault()}
            >
                <p className="">
                    <span className={`${props.indicatorClass} fs-10`}><i className="pg-icon">circle_fill</i></span>
                </p>
                <p className="col overflow-ellipsis fs-12 p-l-10">
                    <span className="text-color link">{props.linkText}<br /></span>
                    <span className="text-color">{`"${props.masterText}"`}</span>
                </p>
            </a>
            { /* END Alert Item*/ }
        </li>
    )
}

WithLinkAlertGroupItem.propTypes = {
    indicatorClass: PropTypes.string,
    linkText: PropTypes.string,
    masterText: PropTypes.string
}

export default WithLinkAlertGroupItem

