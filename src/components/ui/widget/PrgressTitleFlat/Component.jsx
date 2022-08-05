import React from 'react'

const Component = () => {
    return (
        <div className="widget-9 panel no-border bg-primary no-margin widget-loader-bar">
            <div className="container-xs-height full-height">
                <div className="row-xs-height">
                    <div className="col-xs-height col-top">
                    <div className="panel-heading  top-left top-right">
                        <div className="panel-title text-black">
                        <span className="font-montserrat fs-11 all-caps">Weekly Sales <i
                                className="fa fa-chevron-right"></i>
                                            </span>
                        </div>
                        <div className="panel-controls">
                        <ul>
                            <li><a href="javascript:void(0);" className="portlet-refresh text-black" data-toggle="refresh"><i
                                className="portlet-icon portlet-icon-refresh"></i></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row-xs-height">
                    <div className="col-xs-height col-top">
                    <div className="p-l-20 p-t-15">
                        <h3 className="no-margin p-b-5 text-white">$23,000</h3>
                        <a href="javascript:void(0);" className="btn-circle-arrow text-white"><i
                        className="pg-arrow_minimize"></i>
                </a>
                        <span className="small hint-text">65% lower than last month</span>
                    </div>
                    </div>
                </div>
                <div className="row-xs-height">
                    <div className="col-xs-height col-bottom">
                    <div className="progress progress-small m-b-20">
                        { /* START BOOTSTRAP PROGRESS (http://getbootstrap.com/components/#progress) */ }
                        <div className="progress-bar progress-bar-white" style={{"width":"45%"}}></div>
                        { /* END BOOTSTRAP PROGRESS */ }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component
