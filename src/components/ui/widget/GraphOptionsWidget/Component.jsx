import React from 'react'

//import ui components
import Col from '../../Col/Component';
import Row from '../../Row/Component';

const Component = () => {
    return (
        <div className="widget-16 panel no-border  no-margin widget-loader-circle">
            <div className="panel-heading">
            <div className="panel-title">Page Options
            </div>
            <div className="panel-controls">
                <ul>
                <li><a href="javascript:void(0);" className="portlet-refresh text-black" data-toggle="refresh"><i
                    className="portlet-icon portlet-icon-refresh"></i></a>
                </li>
                </ul>
            </div>
            </div>
            <div className="widget-16-header padding-20">
            <span className="icon-thumbnail bg-master-light pull-left text-master">ws</span>
            <div className="pull-left">
                <p className="hint-text all-caps font-montserrat  small no-margin overflow-ellipsis ">Pages name
                </p>
                <h5 className="no-margin overflow-ellipsis ">Webarch Sales Analysis</h5>
            </div>
            <div className="clearfix"></div>
            </div>
            <div className="p-l-25 p-r-45 p-t-25 p-b-25">
            <div className="row">
                <Col md="4">
                    <p className="hint-text all-caps font-montserrat small no-margin ">Views</p>
                    <p className="all-caps font-montserrat  no-margin text-success ">14,256</p>
                </Col>
                <Col md="4" className=" text-center">
                    <p className="hint-text all-caps font-montserrat small no-margin ">Today</p>
                    <p className="all-caps font-montserrat  no-margin text-warning ">24</p>
                </Col>
                <Col md="4" className=" text-right">
                    <p className="hint-text all-caps font-montserrat small no-margin ">Week</p>
                    <p className="all-caps font-montserrat  no-margin text-success ">56</p>
                </Col>
            </div>
            </div>
            <div className="relative no-overflow">
            <div className="widget-16-chart line-chart" data-line-color="success" data-points="true" data-point-color="white" data-stroke-width="2">
                <svg></svg>
            </div>
            </div>
            <div className="b-b b-t b-grey p-l-20 p-r-20 p-b-10 p-t-10">
            <p className="pull-left">Post is Public</p>
            <div className="pull-right">
                <input type="checkbox" data-init-plugin="switchery" />
            </div>
            <div className="clearfix"></div>
            </div>
            <div className="b-b b-grey p-l-20 p-r-20 p-b-10 p-t-10">
            <p className="pull-left">Maintenance mode</p>
            <div className="pull-right">
                <input type="checkbox" onChange={() => {}} data-init-plugin="switchery" checked="checked" />
            </div>
            <div className="clearfix"></div>
            </div>
            <div className="p-l-20 p-r-20 p-t-10 p-b-10 ">
            <p className="pull-left no-margin hint-text">Super secret options</p>
            <a href="javascript:void(0);" className="pull-right"><i className="fa fa-arrow-circle-o-down text-success fs-16"></i></a>
            <div className="clearfix"></div>
            </div>
        </div>
    )
}

export default Component
