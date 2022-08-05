import React from 'react'

import Item from './item';

const BarNotifyModule = ({notifications, position, style}) => {
    return (
        <div className="pgn-wrapper" data-position={position} style={style}>
            {notifications.map((value, index) => {
                return <Item key={index} type={value.type} desc={value.desc}/>
            })}
        </div>
    )
}

export default BarNotifyModule