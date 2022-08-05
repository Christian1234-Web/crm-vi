import React from 'react'

//import ui components
import Col from '../../Col/Component';
import Row from '../../Row/Component';

import Skycons from 'react-skycons';

const Component = () => {
    return (
        <div className="widget-17 panel  no-border no-margin widget-loader-circle">
            <div className="panel-heading">
            <div className="panel-title">
                <i className="pg-map"></i> California, USA
                <span className="caret"></span>
            </div>
            <div className="panel-controls">
                <ul>
                <li className="">
                    <div className="dropdown">
                    <a data-target="#" href="javascript:void(0);" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
                        <i className="portlet-icon portlet-icon-settings"></i>
                    </a>
                    <ul className="dropdown-menu pull-right" role="menu">
                        <li><a href="javascript:void(0);">AAPL</a>
                        </li>
                        <li><a href="javascript:void(0);">YHOO</a>
                        </li>
                        <li><a href="javascript:void(0);">GOOG</a>
                        </li>
                    </ul>
                    </div>
                </li>
                <li>
                    <a data-toggle="refresh" className="portlet-refresh text-black" href="javascript:void(0);"><i
                        className="portlet-icon portlet-icon-refresh"></i></a>
                </li>
                </ul>
            </div>
            </div>
            <div className="panel-body">
            <div className="p-l-5">
                <Row>
                    <Col md="12" className=" col-xlg-6">
                        <div className="row m-t-20">
                            <div className="col-md-5">
                                <h4 className="no-margin">Monday</h4>
                                <p className="small hint-text">9th August 2014</p>
                            </div>
                            <div className="col-md-7">
                                <div className="pull-left">
                                <p className="small hint-text no-margin">Currently</p>
                                <h4 className="text-danger bold no-margin">32°
                                    <span className="small">/ 30C</span>
                                </h4>
                                </div>
                                <div className="pull-right">
                                {/* <canvas height="64" width="64" className="clear-day"></canvas> */}
                                <Skycons style={{height: '60px', width: 'auto'}} color='black' icon='CLEAR_DAY' autoplay={true}/>
                                </div>
                            </div>
                        </div>
                        <h5>Feels like
                        <span className="semi-bold"> rainy</span>
                    </h5>
                        <p>Weather information</p>
                        <div className="widget-17-weather">
                            <Row>
                                <div className="col-xs-6 p-r-10">
                                    <Row>
                                        <Col md="12">
                                            <p className="pull-left">Wind</p>
                                            <p className="pull-right bold">11km/h</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                        <p className="pull-left">Sunrise</p>
                                        <p className="pull-right bold">05:20</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                        <p className="pull-left">Humidity</p>
                                        <p className="pull-right bold">20%</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                        <p className="pull-left">Precipitation</p>
                                        <p className="pull-right bold">60%</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="col-xs-6 p-l-10">
                                    <Row>
                                        <Col md="12">
                                            <p className="pull-left">Sunset</p>
                                            <p className="pull-right bold">21:05</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <p className="pull-left">Visibility</p>
                                            <p className="pull-right bold">21km</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Row>
                        </div>
                        <div className="row m-t-10 timeslot">
                            <div className="col-xs-2 p-t-10 text-center">
                                <p className="small">13:30</p>
                                <Skycons color='black' icon="PARTLY_CLOUDY_DAY"/>
                                <p className="text-danger bold">30°C</p>
                            </div>
                            <div className="col-xs-2 p-t-10 text-center">
                                <p className="small">14:00</p>
                                <Skycons color='black' icon="CLOUDY"/>
                                {/* <canvas height="25" width="25" className="cloudy"></canvas> */}
                                <p className="text-danger bold">30°C</p>
                            </div>
                            <div className="col-xs-2 p-t-10 text-center">
                                <p className="small">14:30</p>
                                <Skycons color='black' icon="RAIN"/>
                                {/* <canvas height="25" width="25" className="rain"></canvas> */}
                                <p className="text-danger bold">30°C</p>
                            </div>
                            <div className="col-xs-2 p-t-10 text-center">
                                <p className="small">15:00</p>
                                <Skycons color='black' icon="SLEET"/>
                                {/* <canvas height="25" width="25" className="sleet"></canvas> */}
                                <p className="text-danger bold">30°C</p>
                            </div>
                            <div className="col-xs-2 p-t-10 text-center">
                                <p className="small">15:30</p>
                                <Skycons color='black' icon="SNOW"/>
                                {/* <canvas height="25" width="25" className="snow"></canvas> */}
                                <p className="text-danger bold">30°C</p>
                            </div>
                            <div className="col-xs-2 p-t-10 text-center">
                                <p className="small">16:00</p>
                                <Skycons color='black' icon="WIND"/>
                                {/* <canvas height="25" width="25" className="wind"></canvas> */}
                                <p className="text-danger bold">30°C</p>
                            </div>
                        </div>
                    </Col>
                    <div className="col-xlg-6 visible-xlg">
                        <Row>
                            <div className="forecast-day col-md-6 text-center m-t-10 ">
                                <div className="bg-master-lighter p-b-10 p-t-10">
                                    <h4 className="p-t-10 no-margin">Tuesday</h4>
                                    <p className="small hint-text m-b-20">11th Augest 2014</p>
                                    <Skycons color='black' style={{height: '64px', width: 'auto'}} icon="RAIN"/>
                                    {/* <canvas className="rain" width="64" height="64"></canvas> */}
                                    <h5 className="text-danger">32°</h5>
                                    <p>Feels like
                                        <span className="bold">sunny</span>
                                    </p>
                                    <p className="small">Wind
                                        <span className="bold p-l-20">11km/h</span>
                                    </p>
                                    <div className="m-t-20 block">
                                        <div className="padding-10">
                                            <div className="row">
                                                <div className="col-md-6 text-center">
                                                    <p className="small">Noon</p>
                                                    <Skycons color='black' style={{height: '25px', width: 'auto'}} icon="SLEET"/>
                                                    {/* <canvas className="sleet" width="25" height="25"></canvas> */}
                                                    <p className="text-danger bold">30°C</p>
                                                </div>
                                                <div className="col-md-6 text-center">
                                                    <p className="small">Night</p>
                                                    <Skycons color='black' style={{height: '25px', width: 'auto'}} icon="WIND"/>
                                                    {/* <canvas className="wind" width="25" height="25"></canvas> */}
                                                    <p className="text-danger bold">30°C</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 text-center m-t-10 ">
                                <div className="bg-master-lighter p-b-10 p-t-10">
                                    <h4 className="p-t-10 no-margin">Wednesday</h4>
                                    <p className="small hint-text m-b-20">11th Augest 2014</p>
                                    <Skycons color='black' style={{height: '64px', width: 'auto'}} icon="RAIN"/>
                                    {/* <canvas className="rain" width="64" height="64"></canvas> */}
                                    <h5 className="text-danger">32°</h5>
                                    <p>Feels like
                                        <span className="bold">sunny</span>
                                    </p>
                                    <p className="small">Wind
                                        <span className="bold p-l-20">11km/h</span>
                                    </p>
                                    <div className="m-t-20 block">
                                        <div className="padding-10">
                                            <Row>
                                                <div className="col-md-6 text-center">
                                                    <p className="small">Noon</p>
                                                    <Skycons color='black' style={{height: '25px', width: 'auto'}} icon="SLEET"/>
                                                    {/* <canvas className="sleet" width="25" height="25"></canvas> */}
                                                    <p className="text-danger bold">30°C</p>
                                                </div>
                                                <div className="col-md-6 text-center">
                                                    <p className="small">Night</p>
                                                    <Skycons color='black' style={{height: '25px', width: 'auto'}} icon="WIND"/>
                                                    {/* <canvas className="wind" width="25" height="25"></canvas> */}
                                                    <p className="text-danger bold">30°C</p>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Row>
            </div>
            </div>
        </div>
    )
}

export default Component
