import React from 'react'

//import ui components
import Row from '../../Row/Component';
import Col from '../../Col/Component';

const Component = () => {
    return (
        <div className="widget-8 panel no-border bg-success no-margin widget-loader-bar">
            <div className="container-xs-height full-height">
                <div className="row-xs-height">
                    <div className="col-xs-height col-top">
                    <div className="panel-heading top-left top-right">
                        <div className="panel-title text-black hint-text">
                        <span className="font-montserrat fs-11 all-caps">Weekly Sales <i
                                className="fa fa-chevron-right"></i>
                                            </span>
                        </div>
                        <div className="panel-controls">
                        <ul>
                            <li>
                            <a data-toggle="refresh" className="portlet-refresh text-black" href="javascript:void(0);"><i
                                    className="portlet-icon portlet-icon-refresh"></i></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row-xs-height ">
                    <div className="col-xs-height col-top relative">
                    <Row>
                        <Col sm="6">
                            <div className="p-l-20">
                                <h3 className="no-margin p-b-5 text-white">$14,000</h3>
                                <p className="small hint-text m-t-5">
                                <span className="label  font-montserrat m-r-5">60%</span>Higher
                                </p>
                            </div>
                        </Col>
                        <Col sm="6">
                        </Col>
                    </Row>
                    <div className='widget-8-chart line-chart' data-line-color="black" data-points="true" data-point-color="success" data-stroke-width="2">
                        <svg></svg>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component
