import React from 'react'

const Reactions = ({type, comment, reaction}) => {
    return (
        <ul className={`${type}`}>
            <li>
                <a href="javascript:void(0);" className="d-flex align-items-center">
                    {comment.count} <i className="pg-icon">{comment.icon}</i>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" className="d-flex align-items-center">
                {reaction.count} <i className="pg-icon">{reaction.icon}</i>
                </a>
            </li>
        </ul>
    )
}

export default Reactions
