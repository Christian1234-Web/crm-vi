import React from 'react'

import PropTypes from 'prop-types';
import Moment from 'react-moment';

const NoteListItem = (props) => {
    return (
        <li>
            <div className="left">
                { /* BEGIN Note Action */ }
                <div className="checkbox check-warning" 
                    style={props.shouldTrash ? {display: 'inline-block', marginRight: '5px'} : {display: 'none', float: 'left'}}>
                    <input id={props.inputId}  type="checkbox"  onChange={() => props.checkItem(props.inputId)}/>
                    <label htmlFor={props.inputId} ></label>
                </div>
                { /* END Note Action */ }
                { /* BEGIN Note Preview Text */ }
                <p onClick={() => props.editNoteNav(props.inputId)} className="note-preview">{props.textContent}</p>
                { /* BEGIN Note Preview Text */ }
            </div>
            { /* BEGIN Note Details */ }
            <div onClick={() => props.editNoteNav(props.inputId)} className="right pull-right">
                { /* BEGIN Note Date */ }
                <span className="date">
                    <Moment format="DD/MM/YY">
                        {props.date}
                    </Moment>
                </span>
                <a href="javascript:void(0);" data-navigate="view" data-view-port="#note-views" data-view-animation="push"><i className="fa fa-chevron-right"></i></a>
                { /* END Note Date */ }
            </div>
            { /* END Note Details */ }
        </li>
    )
}

NoteListItem.propTypes = {
    inputId: PropTypes.string,
    content: PropTypes.string
}

export default NoteListItem