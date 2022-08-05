import React from 'react'

import ChatItem from './ChatItemContent';

const ChatGroupItems = (props) => {
    return (
        <React.Fragment>
            <div className="list-view-group-header text-uppercase" style={{position: "sticky"}}>{props.header}</div>
            <ul>
                {props.chats.map((chat, index) => {
                    return (
                        <ChatItem 
                            key={index}
                            name={chat.name}
                            image={chat.image}
                            imageExt={chat.imageExt}
                            message={chat.message}
                            click={chat.click}
                        />
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

export default ChatGroupItems
