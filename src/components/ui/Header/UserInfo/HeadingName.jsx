import React from 'react'

const HeadingName = (props) => {
    return (
        <div className="pull-left p-r-10 p-t-10 fs-16 font-heading">
            <span className="semi-bold">{props.first_name}</span> 
            <span className="text-master"> {props.last_name}</span>
        </div>
    )
}

export default HeadingName
