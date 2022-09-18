import axios from 'axios';
import React, { useCallback, useState } from 'react'
import { TOKEN_COOKIE, USER_NAME } from '../../../../services/constants';
import SSRStorage from '../../../../services/storage';

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
                const rs = await axios.post(
                  `https://deda-crm-backend.herokuapp.com/whatsapp/messages/send`, payload, config
                );
                const { result, ...meta } = rs.data;
                console.log('happy', rs)
                
              } catch (err) {
                console.log("send message err", err);
                setLoading(false);
              }
            },
            [inputValue, props.recipient]
          );
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
