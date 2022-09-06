import React, { useState, useEffect, useCallback } from 'react'

import Header from './Header';
import ConvInput from './ConvInput';
import MessageText from './MessageText';
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';

const Component = (props) => {
    console.log('nnnnnn===', props.contact)

    const [loading, setLoading] = useState(true);


const fetchMessages = useCallback(
	async () => {
		  try {
			const rs = await axios.get(
			  `https://deda-crm-backend.herokuapp.com/whatsapp/messages/get?isSent=true&isDelivered=true&recipient=${props.contact.phone}&page=1&limit=50`
			);
			const { result, ...meta } = rs.data;
            console.log('malik', rs)
			
		  } catch (err) {
			console.log("fetch Messages err", err);
			setLoading(false);
		  }
		},
		[props.contact]
	  );

	  useEffect(() => {
		if (loading) {
            fetchMessages();
		}
	  }, [fetchMessages, loading]);

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
            <Header click={props.click} name={props.contact?.contactName}/>
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
