import React from 'react'

import PropTypes from 'prop-types';

import AlertGroupHeader from './AlertGroupHeader';
import WithLinkAlertGroupItem from './WithLinkAlertGroupItem';

import './style.css';

const Content = (props) => {
    return (
        <div className="list-view-group-container alert-list-con">
            { /* BEGIN List Group Header*/ }
            <AlertGroupHeader title={props.title} />
            { /* END List Group Header*/ }
            <ul>
                { /* BEGIN List Group Item*/ }
                <WithLinkAlertGroupItem 
                    indicatorClass={props.indicatorClass}
                    linkText={props.linkText}
                    masterText={props.masterText}
                />
                { /* END List Group Item*/ }
                { /* BEGIN List Group Item*/ }
                <WithLinkAlertGroupItem 
                    indicatorClass={props.indicatorClass}
                    linkText={props.linkText}
                    masterText={props.masterText}
                />
                { /* END List Group Item*/ }
            </ul>
        </div>
    )
}

Content.propTypes = {
    title: PropTypes.string,
    indicatorClass: PropTypes.string,
    linkText: PropTypes.string,
    masterText: PropTypes.string
}

export default Content
