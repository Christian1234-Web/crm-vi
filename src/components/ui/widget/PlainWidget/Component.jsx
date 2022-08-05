import React from 'react'

const Component = () => {
    return (
        <div className="panel no-border bg-master widget widget-6 widget-loader-circle-lg no-margin">
            <div className="panel-heading">
                <div className="panel-controls">
                <ul>
                    <li><a data-toggle="refresh" className="portlet-refresh" href="javascript:void(0);"><i className="portlet-icon portlet-icon-refresh-lg-white"></i></a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="panel-body">
                <div className="pull-bottom bottom-left bottom-right padding-25">
                <h1 className="text-white semi-bold">30&#176;</h1>
                <span className="label font-montserrat fs-11">TODAY</span>
                <p className="text-white m-t-20">Feels like rainy</p>
                <p className="text-white hint-text m-t-30">November 2014, 5 Thusday </p>
                </div>
            </div>
        </div>
    )
}

export default Component
