import React from 'react'
import EmailList from './EmailList';

const EmailGroup = ({ emailGroups, onReadEmail, onSlide, emailListPosition }) => {
    console.log('hello');
    return (
        <>
            <EmailList group={emailGroups} groupIndex={0}
                onReadEmail={onReadEmail} onSlide={onSlide}
                emailListPosition={emailListPosition}
                timeSent={`group`}
            />
        </>
    )
}

export default EmailGroup
