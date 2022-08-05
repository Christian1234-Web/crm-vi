import React from 'react'

const ChatItemContent = (props) => {
    return (
        <li className="chat-user-list clearfix" onClick={() => props.click(true)}>
            <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="javascript:void(0);">
            <span className="col-xs-height col-middle">
            <span className="thumbnail-wrapper d32 circular bg-success">
                <img width="34" height="34" alt="" data-src-retina={props.imageExt} data-src={props.image} src={props.imageExt} className="col-top"/>
            </span>
            </span>
            <p className="p-l-10 col-xs-height col-middle col-xs-12">
                <span className="text-color">{props.name}</span>
                <span className="block text-color hint-text fs-12">{props.message}</span>
            </p>
            </a>
        </li>
    )
}

export default ChatItemContent
