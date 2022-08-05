import React from 'react'

import Proptypes from 'prop-types';

import AlertGroupHeader from './AlertGroupHeader';
import AlertGroupItem from './AlertGroupItem';

import './style.css';

const Content = (props) => {
    return (
        <div className="list-view-group-container alert-list-con">
            { /* BEGIN List Group Header*/ }
            <AlertGroupHeader title={props.title} />
            { /* END List Group Header*/ }
            <ul>
                { /* BEGIN List Group Item*/ }
                <AlertGroupItem 
                    mainText="David Nester Birthday"
                    textRightWarning="Today"
                    textRightMaster="All Day"
                />
                { /* END List Group Item*/ }
                { /* BEGIN List Group Item*/ }
                <AlertGroupItem 
                    mainText="Meeting at 2.30"
                    textRightWarning="Today"
                />
                { /* END List Group Item*/ }
            </ul>
        </div>
    )
}

Content.propTypes = {
    title: Proptypes.string
}

export default Content
