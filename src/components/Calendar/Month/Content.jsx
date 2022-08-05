import React from 'react'

import Copyright from '../../ui/Footer/Copyright';
// import './assets/js/calendar.js'
// // import './assets/plugins/modernizr.custom.js'
// import './assets/plugins/interactjs/interact.min.js';
// import './assets/plugins/jquery/jquery-3.2.1.min.js'
// import './assets/plugins/jquery-scrollbar/jquery.scrollbar.min.js'
// import './assets/plugins/moment/moment-with-locales.min.js'

// import './js/pages.calendar.js'



const content = () => {
    return (
        <div className="page-content-wrapper ">
            { /* START PAGE CONTENT */}
            <div className="content sm-gutter">
                { /* START CONTAINER FLUID */}
                {/* <div className="container-fluid padding-25 sm-padding-10">
                    
                </div> */}
                <div className="page-container bg-white full-height">

                    <div className="pull-up overlayer d-lg-none d-xl-none">
                        <div className="p-l-10 p-t-15">
                            <a href="#" className="btn-link text-color toggle-sidebar d-lg-none pg-icon" data-toggle="sidebar">
                                menu
                            </a>
                        </div>
                    </div>
                    <div className="top-right overlayer d-lg-none d-xl-none">
                        <div className="p-r-15 p-t-15">
                            <a href="#" className="header-icon btn-link m-l-5 sm-no-margin d-inline-block" data-toggle="quickview" data-toggle-element="#quickview">
                                <i className="pg-icon">menu_add</i>
                            </a>
                        </div>
                    </div>
                    <div className="page-content-wrapper full-height">
                        <div className="content full-height">
                            <div id="myCalendar" className="full-height"></div>

                            <div className="quickview-wrapper calendar-event" id="calendar-event">
                                <div className="view-port clearfix" id="eventFormController">
                                    <div className="view bg-white">
                                        <div className="scrollable">
                                            <div className="p-l-15 p-r-20 p-t-20">
                                                <a className="pg-icon text-color link pull-right" data-toggle="quickview" data-toggle-element="#calendar-event" href="#">close</a>
                                                <h4 className="m-b-5 m-t-0" id="event-date">&amp;</h4>
                                                <div className="d-flex m-b-20 fs-14">
                                                    <i className="pg-icon m-r-5">time</i>
                                                    <span className="m-r-5" id="lblfromTime"></span> <span className="hint-text">to</span>
                                                    <span className="m-l-5" id="lbltoTime"></span>
                                                </div>
                                            </div>
                                            <div className="p-t-15">
                                                <input id="eventIndex" name="eventIndex" type="hidden" />
                                                <div className="form-group-attached">
                                                    <div className="form-group form-group-default ">
                                                        <label>Title</label>
                                                        <input type="text" className="form-control" id="txtEventName" name=""
                                                            placeholder="event name" />
                                                    </div>
                                                    <div className="row clearfix">
                                                        <div className="col-sm-9">
                                                            <div className="form-group form-group-default">
                                                                <label>Location</label>
                                                                <input type="text" className="form-control" id="txtEventLocation" placeholder="name of place"
                                                                    name="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-group form-group-default">
                                                                <label>Code</label>
                                                                <input type="text" className="form-control" id="txtEventCode" name="lastName" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row clearfix">
                                                        <div className="form-group form-group-default">
                                                            <label>Note</label>
                                                            <textarea className="form-control" placeholder="description" id="txtEventDesc"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="row clearfix cursor">
                                                        <div className="form-group form-group-default" data-navigate="view" data-view-port="#eventFormController" data-view-animation="push-parrallax">
                                                            <label>Alerts</label>
                                                            <div className="p-t-10">
                                                                <span className="pull-right p-r-10 p-b-5"><i className="pg-icon">chevron_right</i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-l-15 p-r-15 p-t-20 d-flex">
                                                <button aria-label="" id="eventSave" className="btn btn-complete btn-block">Save Event</button>
                                                <button aria-label="" id="eventDelete" className="btn btn-default m-l-10"><i className="pg-icon">trash</i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="view bg-white">
                                        <div className="navbar navbar-default navbar-sm">
                                            <div className="navbar-inner">
                                                <a href="javascript:;" className="action p-l-10 link text-color" data-navigate="view" data-view-port="#eventFormController" data-view-animation="push-parrallax">
                                                    <i className="pg-icon">chevron_left</i>
                                                </a>
                                                <div className="view-heading">
                                                    <span className="font-montserrat text-uppercase fs-13">Alerts</span>
                                                </div>
                                                <a href="#" className="action p-r-10 pull-right link text-color">
                                                    <i className="pg-icon">search</i>
                                                </a>
                                            </div>
                                        </div>
                                        <p className="p-l-30 p-r-30 p-t-30"> This is a Demo</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div id="quickview" className="quickview-wrapper" data-pages="quickview">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="">
                            <a href="#quickview-notes" data-target="#quickview-notes" data-toggle="tab" role="tab">Notes</a>
                        </li>
                        <li>
                            <a href="#quickview-alerts" data-target="#quickview-alerts" data-toggle="tab" role="tab">Alerts</a>
                        </li>
                        <li className="">
                            <a className="active" href="#quickview-chat" data-toggle="tab" role="tab">Chat</a>
                        </li>
                    </ul>
                    <a className="btn-icon-link invert quickview-toggle" data-toggle-element="#quickview" data-toggle="quickview"><i className="pg-icon">close</i></a>
                    <div className="tab-content">
                        <div className="tab-pane no-padding" id="quickview-notes">
                            <div className="view-port clearfix quickview-notes" id="note-views">
                                <div className="view list" id="quick-note-list">
                                    <div className="toolbar clearfix">
                                        <ul className="pull-right ">
                                            <li>
                                                <a href="#" className="delete-note-link"><i className="pg-icon">trash_alt</i></a>
                                            </li>
                                            <li>
                                                <a href="#" className="new-note-link" data-navigate="view" data-view-port="#note-views" data-view-animation="push"><i className="pg-icon">add</i></a>
                                            </li>
                                        </ul>
                                        <button aria-label="" className="btn-remove-notes btn btn-xs btn-block hide"><i className="pg-icon">close</i>Delete</button>
                                    </div>
                                    <ul>
                                        <li data-noteid="1" className="d-flex justify-space-between">
                                            <div className="left">
                                                <div className="form-check warning no-margin">
                                                    <input id="qncheckbox1" type="checkbox" value="1" />
                                                    <label for="qncheckbox1"></label>
                                                </div>

                                                <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                            </div>
                                            <div className="d-flex right justify-content-end">
                                                <span className="date">12/12/20</span>
                                                <a href="#" className="d-flex align-items-center" data-navigate="view" data-view-port="#note-views" data-view-animation="push">
                                                    <i className="pg-icon">chevron_right</i>
                                                </a>
                                            </div>
                                        </li>

                                        <li data-noteid="2" className="d-flex justify-space-between">
                                            <div className="left">

                                                <div className="form-check warning no-margin">
                                                    <input id="qncheckbox2" type="checkbox" value="1" />
                                                    <label for="qncheckbox2"></label>
                                                </div>

                                                <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                            </div>
                                            <div className="d-flex right justify-content-end">
                                                <span className="date">12/12/20</span>
                                                <a href="#" className="d-flex align-items-center" data-navigate="view" data-view-port="#note-views" data-view-animation="push"><i className="pg-icon">chevron_right</i></a>
                                            </div>
                                        </li>

                                        <li data-noteid="2" className="d-flex justify-space-between">
                                            <div className="left">
                                                <div className="form-check warning no-margin">
                                                    <input id="qncheckbox3" type="checkbox" value="1" />
                                                    <label for="qncheckbox3"></label>
                                                </div>

                                                <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                            </div>
                                            <div className="d-flex right justify-content-end">
                                                <span className="date">12/12/20</span>
                                                <a href="#" className="d-flex align-items-center" data-navigate="view" data-view-port="#note-views" data-view-animation="push"><i className="pg-icon">chevron_right</i></a>
                                            </div>
                                        </li>

                                        <li data-noteid="3" className="d-flex justify-space-between">
                                            <div className="left">
                                                <div className="form-check warning no-margin">
                                                    <input id="qncheckbox4" type="checkbox" value="1" />
                                                    <label for="qncheckbox4"></label>
                                                </div>

                                                <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                            </div>
                                            <div className="d-flex right justify-content-end">
                                                <span className="date">12/12/20</span>
                                                <a href="#" className="d-flex align-items-center" data-navigate="view" data-view-port="#note-views" data-view-animation="push"><i className="pg-icon">chevron_right</i></a>
                                            </div>
                                        </li>

                                        <li data-noteid="4" className="d-flex justify-space-between">
                                            <div className="left">
                                                <div className="form-check warning no-margin">
                                                    <input id="qncheckbox5" type="checkbox" value="1" />
                                                    <label for="qncheckbox5"></label>
                                                </div>

                                                <p className="note-preview">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                            </div>
                                            <div className="d-flex right justify-content-end">
                                                <span className="date">12/12/20</span>
                                                <a href="#" className="d-flex align-items-center" data-navigate="view" data-view-port="#note-views" data-view-animation="push"><i className="pg-icon">chevron_right</i></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="view note" id="quick-note">
                                    <div>
                                        <ul className="toolbar">
                                            <li><a href="#" className="close-note-link"><i className="pg-icon">chevron_left</i></a>
                                            </li>
                                            <li><a href="#" data-action="Bold" className="fs-12"><i className="pg-icon">format_bold</i></a>
                                            </li>
                                            <li><a href="#" data-action="Italic" className="fs-12"><i className="pg-icon">format_italics</i></a>
                                            </li>
                                            <li><a href="#" className="fs-12"><i className="pg-icon">link</i></a>
                                            </li>
                                        </ul>
                                        <div className="body">
                                            <div>
                                                <div className="top">
                                                    <span>21st april 2020 2:13am</span>
                                                </div>
                                                <div className="content">
                                                    <div className="quick-note-editor full-width full-height js-input" contenteditable="true"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane no-padding" id="quickview-alerts">
                            <div className="view-port clearfix" id="alerts">
                                <div className="view bg-white">
                                    <div className="navbar navbar-default navbar-sm">
                                        <div className="navbar-inner">
                                            <a href="javascript:;" className="action p-l-10 link text-color" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                                                <i className="pg-icon">more_horizontal</i>
                                            </a>
                                            <div className="view-heading">
                                                Notications
                                            </div>
                                            <a href="#" className="action p-r-10 pull-right link text-color">
                                                <i className="pg-icon">search</i>
                                            </a>
                                        </div>
                                    </div>

                                    <div data-init-list-view="ioslist" className="list-view boreded no-top-border">
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">
                                                Calendar
                                            </div>
                                            <ul>
                                                <li className="alert-list">
                                                    <a href="javascript:;" className="align-items-center" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                                                        <p className="">
                                                            <span className="text-warning fs-10"><i className="pg-icon">circle_fill</i></span>
                                                        </p>
                                                        <p className="p-l-10 overflow-ellipsis fs-12">
                                                            <span className="text-color">David Nester Birthday</span>
                                                        </p>
                                                        <p className="p-r-10 ml-auto fs-12 text-right">
                                                            <span className="text-warning">Today <br /></span>
                                                            <span className="text-color">All Day</span>
                                                        </p>
                                                    </a>

                                                </li>

                                                <li className="alert-list">
                                                    =                                                    <a href="#" className="align-items-center" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                                                        <p className="">
                                                            <span className="text-warning fs-10"><i className="pg-icon">circle_fill</i></span>
                                                        </p>
                                                        <p className="p-l-10 overflow-ellipsis fs-12">
                                                            <span className="text-color">Meeting at 2:30</span>
                                                        </p>
                                                        <p className="p-r-10 ml-auto fs-12 text-right">
                                                            <span className="text-warning">Today</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">
                                                Social
                                            </div>
                                            <ul>
                                                <li className="alert-list">
                                                    <a href="javascript:;" className="p-t-10 p-b-10 align-items-center" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                                                        <p className="">
                                                            <span className="text-complete fs-10"><i className="pg-icon">circle_fill</i></span>
                                                        </p>
                                                        <p className="col overflow-ellipsis fs-12 p-l-10">
                                                            <span className="text-color link">Jame Smith commented on your status<br /></span>
                                                            <span className="text-color">“Perfection Simplified - Company Revox"</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="alert-list">
                                                    <a href="javascript:;" className="p-t-10 p-b-10 align-items-center" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                                                        <p className="">
                                                            <span className="text-complete fs-10"><i className="pg-icon">circle_fill</i></span>
                                                        </p>
                                                        <p className="col overflow-ellipsis fs-12 p-l-10">
                                                            <span className="text-color link">Jame Smith commented on your status<br /></span>
                                                            <span className="text-color">“Perfection Simplified - Company Revox"</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">
                                                Sever Status
                                            </div>
                                            <ul>
                                                <li className="alert-list">
                                                    <a href="#" className="p-t-10 p-b-10 align-items-center" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                                                        <p className="">
                                                            <span className="text-danger fs-10"><i className="pg-icon">circle_fill</i></span>
                                                        </p>
                                                        <p className="col overflow-ellipsis fs-12 p-l-10">
                                                            <span className="text-color link">12:13AM GTM, 10230, ID:WR174s<br /></span>
                                                            <span className="text-color">Server Load Exceeted. Take action</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane active no-padding" id="quickview-chat">
                            <div className="view-port clearfix" id="chat">
                                <div className="view bg-white">
                                    <div className="navbar navbar-default">
                                        <div className="navbar-inner">
                                            <a href="javascript:;" className="action p-l-10 link text-color" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                                                <i className="pg-icon">add</i>
                                            </a>
                                            <div className="view-heading">
                                                Chat List
                                                <div className="fs-11">Show All</div>
                                            </div>
                                            <a href="#" className="action p-r-10 pull-right link text-color">
                                                <i className="pg-icon">more_horizontal</i>
                                            </a>
                                        </div>
                                    </div>
                                    <div data-init-list-view="ioslist" className="list-view boreded no-top-border">
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">
                                                a</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/1x.jpg"
                                                                data-src="assets/img/profiles/1.jpg" src="assets/img/profiles/1x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">ava flores</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">b</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/2x.jpg"
                                                                data-src="assets/img/profiles/2.jpg" src="assets/img/profiles/2x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">bella mccoy</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/3x.jpg"
                                                                data-src="assets/img/profiles/3.jpg" src="assets/img/profiles/3x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">bob stephens</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">c</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/4x.jpg"
                                                                data-src="assets/img/profiles/4.jpg" src="assets/img/profiles/4x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">carole roberts</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt=""
                                                                data-src-retina="assets/img/profiles/5x.jpg" data-src="assets/img/profiles/5.jpg"
                                                                src="assets/img/profiles/5x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">christopher perez</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">d</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/6x.jpg"
                                                                data-src="assets/img/profiles/6.jpg" src="assets/img/profiles/6x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">danielle fletcher</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/7x.jpg"
                                                                data-src="assets/img/profiles/7.jpg" src="assets/img/profiles/7x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">david sutton</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">e</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/8x.jpg"
                                                                data-src="assets/img/profiles/8.jpg" src="assets/img/profiles/8x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">earl hamilton</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/9x.jpg"
                                                                data-src="assets/img/profiles/9.jpg" src="assets/img/profiles/9x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">elaine lawrence</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/1x.jpg"
                                                                data-src="assets/img/profiles/1.jpg" src="assets/img/profiles/1x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">ellen grant</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/2x.jpg"
                                                                data-src="assets/img/profiles/2.jpg" src="assets/img/profiles/2x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">erik taylor</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/3x.jpg"
                                                                data-src="assets/img/profiles/3.jpg" src="assets/img/profiles/3x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">everett wagner</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">f</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/4x.jpg"
                                                                data-src="assets/img/profiles/4.jpg" src="assets/img/profiles/4x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">freddie gomez</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">g</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/5x.jpg"
                                                                data-src="assets/img/profiles/5.jpg" src="assets/img/profiles/5x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">glen jensen</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/6x.jpg"
                                                                data-src="assets/img/profiles/6.jpg" src="assets/img/profiles/6x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">gwendolyn walker</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">j</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/7x.jpg"
                                                                data-src="assets/img/profiles/7.jpg" src="assets/img/profiles/7x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">janet romero</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">k</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/8x.jpg"
                                                                data-src="assets/img/profiles/8.jpg" src="assets/img/profiles/8x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">kim martinez</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">l</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/9x.jpg"
                                                                data-src="assets/img/profiles/9.jpg" src="assets/img/profiles/9x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">lawrence white</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/1x.jpg"
                                                                data-src="assets/img/profiles/1.jpg" src="assets/img/profiles/1x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">leroy bell</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/2x.jpg"
                                                                data-src="assets/img/profiles/2.jpg" src="assets/img/profiles/2x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">letitia carr</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/3x.jpg"
                                                                data-src="assets/img/profiles/3.jpg" src="assets/img/profiles/3x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">lucy castro</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">m</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/4x.jpg"
                                                                data-src="assets/img/profiles/4.jpg" src="assets/img/profiles/4x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">mae hayes</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/5x.jpg"
                                                                data-src="assets/img/profiles/5.jpg" src="assets/img/profiles/5x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">marilyn owens</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/6x.jpg"
                                                                data-src="assets/img/profiles/6.jpg" src="assets/img/profiles/6x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">marlene cole</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/7x.jpg"
                                                                data-src="assets/img/profiles/7.jpg" src="assets/img/profiles/7x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">marsha warren</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/8x.jpg"
                                                                data-src="assets/img/profiles/8.jpg" src="assets/img/profiles/8x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">marsha dean</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/9x.jpg"
                                                                data-src="assets/img/profiles/9.jpg" src="assets/img/profiles/9x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">mia diaz</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">n</div>
                                            <ul>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/1x.jpg"
                                                                data-src="assets/img/profiles/1.jpg" src="assets/img/profiles/1x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">noah elliott</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">p</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/2x.jpg"
                                                                data-src="assets/img/profiles/2.jpg" src="assets/img/profiles/2x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">phyllis hamilton</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">r</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/3x.jpg"
                                                                data-src="assets/img/profiles/3.jpg" src="assets/img/profiles/3x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">raul rodriquez</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/4x.jpg"
                                                                data-src="assets/img/profiles/4.jpg" src="assets/img/profiles/4x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">rhonda barnett</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/5x.jpg"
                                                                data-src="assets/img/profiles/5.jpg" src="assets/img/profiles/5x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">roberta king</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">s</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/6x.jpg"
                                                                data-src="assets/img/profiles/6.jpg" src="assets/img/profiles/6x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">scott armstrong</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/7x.jpg"
                                                                data-src="assets/img/profiles/7.jpg" src="assets/img/profiles/7x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">sebastian austin</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/8x.jpg"
                                                                data-src="assets/img/profiles/8.jpg" src="assets/img/profiles/8x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">sofia davis</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">t</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/9x.jpg"
                                                                data-src="assets/img/profiles/9.jpg" src="assets/img/profiles/9x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">terrance young</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/1x.jpg"
                                                                data-src="assets/img/profiles/1.jpg" src="assets/img/profiles/1x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">theodore woods</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/2x.jpg"
                                                                data-src="assets/img/profiles/2.jpg" src="assets/img/profiles/2x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">todd wood</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>

                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/3x.jpg"
                                                                data-src="assets/img/profiles/3.jpg" src="assets/img/profiles/3x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">tommy jenkins</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="list-view-group-container">
                                            <div className="list-view-group-header text-uppercase">w</div>
                                            <ul>
                                                <li className="chat-user-list clearfix">
                                                    <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" className="" href="#">
                                                        <span className="thumbnail-wrapper d32 circular bg-success">
                                                            <img width="34" height="34" alt="" data-src-retina="assets/img/profiles/4x.jpg"
                                                                data-src="assets/img/profiles/4.jpg" src="assets/img/profiles/4x.jpg" className="col-top" />
                                                        </span>
                                                        <p className="p-l-10 ">
                                                            <span className="text-color">wilma hicks</span>
                                                            <span className="block text-color hint-text fs-12">Hello there</span>
                                                        </p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="view chat-view bg-white clearfix">
                                    <div className="navbar navbar-default">
                                        <div className="navbar-inner">
                                            <a href="javascript:;" className="link text-color action p-l-10 p-r-10" data-navigate="view" data-view-port="#chat" data-view-animation="push-parrallax">
                                                <i className="pg-icon">chevron_left</i>
                                            </a>
                                            <div className="view-heading">
                                                John Smith
                                                <div className="fs-11 hint-text">Online</div>
                                            </div>
                                            <a href="#" className="link text-color action p-r-10 pull-right ">
                                                <i className="pg-icon">more_horizontal</i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="chat-inner" id="my-conversation">
                                        <div className="message clearfix">
                                            <div className="chat-bubble from-me">
                                                Hello there
                                            </div>
                                        </div>

                                        <div className="message clearfix">
                                            <div className="profile-img-wrapper m-t-5 inline">
                                                <img className="col-top" width="30" height="30" src="assets/img/profiles/avatar_small.jpg" alt=""
                                                    data-src="assets/img/profiles/avatar_small.jpg" data-src-retina="assets/img/profiles/avatar_small2x.jpg" />
                                            </div>
                                            <div className="chat-bubble from-them">
                                                Hey
                                            </div>
                                        </div>

                                        <div className="message clearfix">
                                            <div className="chat-bubble from-me">
                                                Did you check out Pages framework ?
                                            </div>
                                        </div>

                                        <div className="message clearfix">
                                            <div className="chat-bubble from-me">
                                                Its an awesome chat
                                            </div>
                                        </div>

                                        <div className="message clearfix">
                                            <div className="profile-img-wrapper m-t-5 inline">
                                                <img className="col-top" width="30" height="30" src="assets/img/profiles/avatar_small.jpg"
                                                    alt="" data-src="assets/img/profiles/avatar_small.jpg"
                                                    data-src-retina="assets/img/profiles/avatar_small2x.jpg" />
                                            </div>
                                            <div className="chat-bubble from-them">
                                                Yea
                                            </div>
                                        </div>
                                    </div>

                                    <div className="b-t b-grey bg-white clearfix p-l-10 p-r-10">
                                        <div className="row">
                                            <div className="col-1 p-t-15">
                                                <a href="#" className="link text-color"><i className="pg-icon">add</i></a>
                                            </div>
                                            <div className="col-8 no-padding">
                                                <label className="d-none">Reply</label>
                                                <input type="text" className="form-control chat-input" data-chat-input=""
                                                    data-chat-conversation="#my-conversation" placeholder="Say something" />
                                            </div>
                                            <div className="col-2 link text-color m-l-10 m-t-15 p-l-10 b-l b-grey col-top">
                                                <a href="#" className="link text-color"><i className="pg-icon">camera</i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overlay hide" data-pages="search">
                    <div className="overlay-content has-results m-t-20">
                        <div className="container-fluid">
                            <img className="overlay-brand" src="assets/img/logo.png" alt="logo" data-src="assets/img/logo.png"
                                data-src-retina="assets/img/logo_2x.png" width="78" height="22" />

                            <a href="#" className="close-icon-light btn-link btn-rounded  overlay-close text-black">
                                <i className="pg-icon">close</i>
                            </a>
                        </div>
                        <div className="container-fluid">
                            <input id="overlay-search" className="no-border overlay-search bg-transparent" placeholder="Search..."
                                autocomplete="off" spellcheck="false" />
                            <br />
                            <div className="d-flex align-items-center">
                                <div className="form-check right m-b-0">
                                    <input id="checkboxn" type="checkbox" value="1" />
                                    <label for="checkboxn">Search within page</label>
                                </div>
                                <p className="fs-13 hint-text m-l-10 m-b-0">Press enter to search</p>
                            </div>
                        </div>
                        <div className="container-fluid p-t-20">
                            <span className="hint-text">
                                suggestions :
                            </span>
                            <span className="overlay-suggestions"></span>
                            <br />
                            <div className="search-results m-t-30">
                                <p className="bold">Pages Search Results: <span className="overlay-suggestions"></span></p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="d-flex m-t-15">
                                            <div className="thumbnail-wrapper d48 circular bg-success text-white ">
                                                <img width="36" height="36" src="assets/img/profiles/avatar.jpg"
                                                    data-src="assets/img/profiles/avatar.jpg"
                                                    data-src-retina="assets/img/profiles/avatar2x.jpg" alt="" />
                                            </div>
                                            <div className="p-l-10">
                                                <h5 className="no-margin "><span className="semi-bold result-name">ice cream</span> on pages</h5>
                                                <p className="small-text hint-text">via john smith</p>
                                            </div>
                                        </div>

                                        <div className="d-flex m-t-15">
                                            <div className="thumbnail-wrapper d48 circular bg-success text-white ">
                                                <div>T</div>
                                            </div>
                                            <div className="p-l-10">
                                                <h5 className="no-margin "><span className="semi-bold result-name">ice cream</span> related topics</h5>
                                                <p className="small-text hint-text">via pages</p>
                                            </div>
                                        </div>

                                        <div className="d-flex m-t-15">
                                            <div className="thumbnail-wrapper d48 circular bg-success text-white ">
                                                <div>M
                                                </div>
                                            </div>
                                            <div className="p-l-10">
                                                <h5 className="no-margin "><span className="semi-bold result-name">ice cream</span> music</h5>
                                                <p className="small-text hint-text">via pagesmix</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex m-t-15">
                                            <div className="thumbnail-wrapper d48 circular bg-info text-white d-flex align-items-center">
                                                <i className="pg-icon">facebook</i>
                                            </div>
                                            <div className="p-l-10">
                                                <h5 className="no-margin "><span className="semi-bold result-name">ice cream</span> on facebook</h5>
                                                <p className="small-text hint-text">via facebook</p>
                                            </div>
                                        </div>

                                        <div className="d-flex m-t-15">
                                            <div className="thumbnail-wrapper d48 circular bg-complete text-white d-flex align-items-center">
                                                <i className="pg-icon">twitter</i>
                                            </div>
                                            <div className="p-l-10">
                                                <h5 className="no-margin ">Tweats on<span className="semi-bold result-name"> ice cream</span></h5>
                                                <p className="small-text hint-text">via twitter</p>
                                            </div>
                                        </div>

                                        <div className="d-flex m-t-15">
                                            <div className="thumbnail-wrapper d48 circular text-white bg-danger d-flex align-items-center">
                                                <i className="pg-icon">google_plus</i>
                                            </div>
                                            <div className="p-l-10">
                                                <h5 className="no-margin ">Circles on<span className="semi-bold result-name"> ice cream</span></h5>
                                                <p className="small-text hint-text">via google plus</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { /* END CONTAINER FLUID */}
            </div>
            { /* START COPYRIGHT */}
            <Copyright
                year={"2014"}
                brand={"REVOX"}
                reserved={"All rights reserved."}
                terms={"Terms of use"}
                policy={"Privacy Policy"}
            />
            { /* END COPYRIGHT */}
            { /* END PAGE CONTENT */}
        </div>
    )
}

export default content
