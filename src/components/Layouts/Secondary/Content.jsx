import React from 'react'

import Nav from './Nav';

import './style.css';

const content = () => {
    return (
        <div className="page-content-wrapper full-height">
            <div className="content full-height">
                <Nav to="compose_email" />
                <div className="inner-content full-height "></div>
            </div>
        </div>
    )
}

export default content
