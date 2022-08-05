import React, { useState } from 'react'

const WYSIWYGItem = (props) => {
    const [button, setButton] = useState(false)
    return (
        <li>
            <a
            style={button ? {background: '#f9f1ea'} : {background: '#fffaf6'}}
            key={props.cmd}
            onMouseDown={evt => {
                evt.preventDefault(); 
                document.execCommand(props.cmd, false, props.arg);
                setButton(!button)
            }}
            ><i className={`${props.className}`}></i></a>
        </li>
    )
}

export default WYSIWYGItem