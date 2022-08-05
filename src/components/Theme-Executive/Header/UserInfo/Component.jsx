import React from 'react'

import HeadingName from './HeadingName';
import ProfileToggler from './ProfileToggler';
import UserSettings from './UserSettings';

const Component = () => {
    return (
        <div className="visible-lg visible-md m-t-10">
            <HeadingName first_name="David" last_name="Nest" />
            <div className="dropdown pull-right">
                <ProfileToggler />
                <UserSettings />
            </div>
        </div>
    )
}

export default Component
