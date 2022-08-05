import React, { useState, useEffect } from 'react'

import Header from './Header';
import ConvInput from './ConvInput';
import MessageText from './MessageText';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Component = (props) => {

    const initialValues = [
        <MessageText from="self" message="Hello there" key={"key1"} />
    ]

    const messages = [
        {
            'message': 'Hello',
            'from': 'other'
        }, 
        {
            'message': 'Did you check out Pages framework ?',
            'from': 'self'
        },
        {
            'message': 'Its an awesome chat',
            'from': 'other'
        },
        {
            'message': 'Yea',
            'from': 'self'
        }
    ]

    let updateConv = [];
    updateConv = messages.map((value, index) => {
        return <MessageText from={value.from} message={value.message} key={index}/>
    })

    const [chatConvs, setChatConvs] = useState(initialValues);
    const [liveConvs, setLiveConvs] = useState([]);

    const handleSetLiveChat = (data) => {
        setLiveConvs([...liveConvs, data]);
    }

    useEffect(() => {
        setChatConvs([...initialValues, ...updateConv]);
    }, []);

    return (
        <div className="view chat-view bg-white clearfix">
            { /* BEGIN Header  */ }
            <Header click={props.click}/>
            { /* END Header  */ }
            { /* BEGIN Conversation  */ }
            <PerfectScrollbar className="chat-inner" id="my-conversation">
                {chatConvs}
                {liveConvs.map((value, index) => {
                    return <MessageText from="self" message={value} key={index} />
                })}
            </PerfectScrollbar>
            { /* END Conversation  */ }
            { /* BEGIN Chat Input  */ }
            <ConvInput onSubmit={handleSetLiveChat} />
            { /* END Chat Input  */ }
        </div>
    )
}

export default Component
