import React from 'react'

const UserSettings = () => {
    return (
        <ul className="dropdown-menu profile-dropdown" role="menu">
            <li>
                <a href="javascript:void(0);"><i className="pg-settings_small"></i> Settings</a>
            </li>
            <li>
                <a href="javascript:void(0);"><i className="pg-outdent"></i> Feedback</a>
            </li>
            <li>
                <a href="javascript:void(0);"><i className="pg-signals"></i> Help</a>
            </li>
            <li className="bg-master-lighter">
                <a href="javascript:void(0);" className="clearfix">
                    <span className="pull-left">Logout</span>
                    <span className="pull-right"><i className="pg-power"></i></span>
                </a>
            </li>
        </ul>
    )
}

export default UserSettings
