import React from 'react'

//import ui components
import Col from '../../Col/Component';
import Row from '../../Row/Component';

const Component = () => {
    return (
        <div className="widget-1 panel no-border bg-complete no-margin widget-loader-circle-lg">
            <div className="panel-heading top-right ">
                <div className="panel-controls">
                <ul>
                    <li><a data-toggle="refresh" className="portlet-refresh text-black" href="javascript:void(0);"><i
                    className="portlet-icon portlet-icon-refresh-lg-master"></i></a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="panel-body">
                <div className="pull-bottom bottom-left bottom-right ">
                <span className="label font-montserrat fs-11">NEWS</span>
                <br/>
                <h2 className="text-white">Click anywhere to get Quick Search</h2>
                <p className="text-white hint-text">Learn More at Project Pages</p>
                <Row className=" stock-rates m-t-15">
                    <div className="company col-xs-4">
                        <div>
                            <p className="font-montserrat text-success no-margin fs-16">
                            <i className="fa fa-caret-up"></i> +0.95%
                            <span className="font-arial text-white fs-12 hint-text m-l-5">546.45</span>
                            </p>
                            <p className="bold text-white no-margin fs-11 font-montserrat lh-normal">
                            AAPL
                            </p>
                        </div>
                    </div>
                    <div className="company col-xs-4">
                    <div>
                        <p className="font-montserrat text-danger no-margin fs-16">
                        <i className="fa fa-caret-up"></i> -0.34%
                        <span className="font-arial text-white fs-12 hint-text m-l-5">345.34</span>
                        </p>
                        <p className="bold text-white no-margin fs-11 font-montserrat lh-normal">
                        YAHW
                        </p>
                    </div>
                    </div>
                    <div className="company col-xs-4">
                    <div className="pull-right">
                        <p className="font-montserrat text-success no-margin fs-16">
                        <i className="fa fa-caret-up"></i> +0.95%
                        <span className="font-arial text-white fs-12 hint-text m-l-5">278.87</span>
                        </p>
                        <p className="bold text-white no-margin fs-11 font-montserrat lh-normal">
                        PAGES
                        </p>
                    </div>
                    </div>
                </Row>
                </div>
            </div>
        </div>
    )
}

export default Component
