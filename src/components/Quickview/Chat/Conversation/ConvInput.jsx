import axios from 'axios';
import React, { useCallback, useState } from 'react'
import { API_URI, TOKEN_COOKIE, USER_NAME } from '../../../../services/constants';
import SSRStorage from '../../../../services/storage';
import io  from 'socket.io-client';
import { useEffect } from 'react';

const connectionOptions = {
    "force new connection": true,
    "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
    "timeout": 10000, //before connect_error and connect_timeout are emitted.
    "transports": ["websocket"]
  };

const socket = io.connect(`${API_URI}/chat`, connectionOptions)


const ConvInput = (props) => {
    const [inputValue, setInputValue] = useState(null)
	const [loading, setLoading] = useState(true);

    const storage = new SSRStorage();

    

    const sendMessage = useCallback(
        async () => {
            const token = await  storage.getItem(TOKEN_COOKIE);
            const user = await  storage.getItem(USER_NAME);
    
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const payload = {
            "message": `${inputValue}`,
            "recipient": `${props.recipient}`,
            "userId": user.id
        }
              try {
			socket.emit("send_chat", payload);
              } catch (err) {
                console.log("send message err", err);
                setLoading(false);
              }
            },
            [inputValue, props.recipient]
          );

        //   useEffect(() => {
        //     socket.on('receive_chat', payload => {
        //       console.log('amamamamamam', payload)
        //     });
        //   }, []);

    return (
        <div className="b-t b-grey bg-white clearfix p-l-10 p-r-10">
            <div className="row">
                <div className="col-1 p-t-15">
                <a href="javascript:void(0);" className="link text-color"><i className="pg-icon">add</i></a>
                </div>
                <div className="col-8 no-padding">
                <input 
                    type="text" 
                    className="form-control chat-input"  
                    placeholder="Say something"
                    onKeyPress={(event) => event.key === 'Enter' ? props.onSubmit(inputValue): null} 
                    onKeyUp={(event) => event.key === 'Enter' ? event.target.value = "" : null}
                    onChange={(event) => setInputValue(event.target.value)}
                    value={inputValue}
                    />
                </div>
                <div className="col-2 link text-color m-l-10 m-t-15 p-l-10 b-l b-grey col-top" >
                <a href="javascript:void(0);" className="link text-color" onClick={() => {
                    props.onSubmit(inputValue)
                    sendMessage()
                    setInputValue('')
                }
                }><i className="pg-icon">chevron_right</i></a>
                </div>
            </div>
        </div>
    )
}

export default ConvInput
