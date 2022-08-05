import React from 'react'

//import ui components
import Col from '../../Col/Component';
import Row from '../../Row/Component';

const Component = () => {
    return (
        <div className="widget-10 panel no-border bg-white no-margin widget-loader-bar">
            <div className="panel-heading top-left top-right ">
                <div className="panel-title text-black hint-text">
                    <span className="font-montserrat fs-11 all-caps">Weekly Sales <i className="fa fa-chevron-right"></i>
                                </span>
                </div>
                <div className="panel-controls">
                    <ul>
                    <li><a data-toggle="refresh" className="portlet-refresh text-black" href="javascript:void(0);"><i
                    className="portlet-icon portlet-icon-refresh"></i></a>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="panel-body p-t-40">
                <Row>
                    <Col sm="12">
                        <h4 className="no-margin p-b-5 text-danger semi-bold">APPL 2.032</h4>
                        <div className="pull-left small">
                            <span>WMHC</span>
                            <span className=" text-success font-montserrat">
                                <i className="fa fa-caret-up m-l-10"></i> 9%
                            </span>
                        </div>
                        <div className="pull-left m-l-20 small">
                            <span>HCRS</span>
                            <span className=" text-danger font-montserrat">
                                <i className="fa fa-caret-up m-l-10"></i> 21%
                            </span>
                        </div>
                        <div className="clearfix"></div>
                    </Col>
                </Row>
                <div className="p-t-10 full-width">
                    <a href="javascript:void(0);" className="btn-circle-arrow b-grey"><i
                className="pg-arrow_minimize text-danger"></i></a>
                    <span className="hint-text small">Show more</span>
                </div>
            </div>
        </div>
    )
}

export default Component
