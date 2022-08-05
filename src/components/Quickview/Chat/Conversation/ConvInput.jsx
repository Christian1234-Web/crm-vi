import React, { useState } from 'react'

const ConvInput = (props) => {
    const [inputValue, setInputValue] = useState(null)
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
                    onChange={(event) => setInputValue(event.target.value)}/>
                </div>
                <div className="col-2 link text-color m-l-10 m-t-15 p-l-10 b-l b-grey col-top">
                <a href="javascript:void(0);" className="link text-color"><i className="pg-icon">camera</i></a>
                </div>
            </div>
        </div>
    )
}

export default ConvInput
