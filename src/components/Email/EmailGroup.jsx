import React from 'react'
import EmailList from './EmailList';

const EmailGroup = ({emailGroups, onReadEmail, onSlide, emailListPosition}) => {
    return (
        emailGroups.map((group, index) => 
            <EmailList group={group} groupIndex={index} key={index} 
                onReadEmail={onReadEmail} onSlide={onSlide} 
                emailListPosition={emailListPosition}
            />
        )
    )
}

export default EmailGroup
