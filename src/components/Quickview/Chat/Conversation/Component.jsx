import React, { useState, useEffect, useCallback, useRef, useReducer } from 'react'

import Header from './Header';
import ConvInput from './ConvInput';
import MessageText from './MessageText';
import PerfectScrollbar from 'react-perfect-scrollbar';
import axios from 'axios';
import { API_URI, USER_NAME } from '../../../../services/constants';
import SSRStorage from '../../../../services/storage';
import io from 'socket.io-client';

const connectionOptions = {
    "force new connection": true,
    "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
    "timeout": 10000, //before connect_error and connect_timeout are emitted.
    "transports": ["websocket"]
};

const socket = io.connect(`${API_URI}/chat`, connectionOptions)

const Component = (props) => {
    const storage = new SSRStorage();

    const [loading, setLoading] = useState(true);
    const [senderMessage, setSenderMessage] = useState(null);
    const [chatMessages, setChatMessages] = useState([]);

    // console.log('nnnnnn===', props.contact)

    const [chat, setChat] = useState([])

    const socketRef = useRef()

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(
        () => {
            socketRef.current = io.connect(`${API_URI}/chat`, connectionOptions)
            socketRef.current.on("receive_chat", (data) => {
                // setChat([ ...chat, { name, message } ])
                console.log('New approach', data)
                console.log('New approach222222', data.recipient === props.contact?.phone)
                if (data.recipient === props.contact?.phone) {
                    console.log('New hhshvsfvajh', data)
                    if (data.in) {
                        setChatMessages([...chatMessages, data])
                    }
                    console.log('help ooo', senderMessage)
                    if (data.isSent) {
                        setChatMessages([...chatMessages, senderMessage])
                    }
                    forceUpdate()
                }
            })
            return () => socketRef.current.disconnect()
        },
        [chatMessages]
    )

    //    useEffect(() => {a
    //         socket.on('receive_chat', data => {
    //             if(data){
    //                 setChatMessages([...chatMessages, ...data]);
    //                 console.log('receive_chat main', data)
    //                 setFresh(!fresh)
    //             }
    //         //   if(props.contact?.phone.includes(payload.recipient)){
    //         //     setChatMessages([...chatMessages, ...data])
    //         //   }
    //         });
    //       }, [fresh]);

    const fetchMessages = useCallback(
        async () => {
            const user = await  storage.getItem(USER_NAME);
		  try {
			const rs = await axios.get(
			  `https://deda-crm-backend.herokuapp.com/whatsapp/messages/get?recipient=${props.contact?.phone}&page=1&limit=500&userId=${user?.id}`
			);
			const { result, ...meta } = rs.data;
            // console.log('malik', result)
            setChatMessages(result.reverse())
			
		  } catch (err) {
			console.log("fetch Messages err", err);
			setLoading(false);
		  }
		},
		[props.contact?.phone]
	  );

	  useEffect(() => {
		if (loading) {
            fetchMessages();
        }
    }, [fetchMessages, loading]);

    const initialValues = [
        <MessageText from="self" message="Hello there" key={"key1"} />
    ]

    const filteredMessage = chatMessages?.map(message => ({
        'message': message?.message,
        'from': message?.in ? 'other' : 'self'
    }))

    useEffect(() => {

    }, []);

    // console.log('display Me', filteredMessage)
    // console.log('My number', chatMessages.length)

    const messages = [
        {
            'message': 'Hellosssssss',
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
    updateConv = filteredMessage?.map((value, index) => {
        return <MessageText from={value.from} message={value.message} key={index} />
    })

    const [chatConvs, setChatConvs] = useState('');
    const [liveConvs, setLiveConvs] = useState([]);

    const handleSetLiveChat = (data) => {
        setLiveConvs([...liveConvs, data]);
    }

    useEffect(() => {
        setChatConvs([...updateConv]);
    }, []);

    return (
        <div className="view chat-view bg-white clearfix">
            { /* BEGIN Header  */}
            <Header click={props.click} name={props.contact?.contactName} />
            { /* END Header  */}
            { /* BEGIN Conversation  */}
            <PerfectScrollbar className="chat-inner" id="my-conversation">

                {chatConvs}
                {/* {chatConvs} */}
                {filteredMessage?.map((value, index) => {
                    return <MessageText from={value.from} message={value.message} key={index} />
                })}

            </PerfectScrollbar>
            { /* END Conversation  */}
            { /* BEGIN Chat Input  */}
            <ConvInput onSubmit={handleSetLiveChat} recipient={props?.contact?.whatsappNum} setSenderMessage={setSenderMessage} />
            { /* END Chat Input  */}
        </div>
    )
}

export default Component
