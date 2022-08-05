import React from 'react'

const Component = () => {
    return (
        <div className="widget-2 panel no-border bg-primary widget widget-loader-circle-lg no-margin">
            <div className="panel-heading">
                <div className="panel-controls">
                <ul>
                    <li><a href="javascript:void(0);" className="portlet-refresh" data-toggle="refresh"><i
                className="portlet-icon portlet-icon-refresh-lg-white"></i></a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="panel-body">
                <div className="pull-bottom bottom-left bottom-right padding-25">
                <span className="label font-montserrat fs-11">NEWS</span>
                <br/>
                <h3 className="text-white">So much more to see at a glance.</h3>
                <p className="text-white hint-text hidden-md">Learn More at Project Pages</p>
                </div>
            </div>
        </div>
    )
}

export default Component
