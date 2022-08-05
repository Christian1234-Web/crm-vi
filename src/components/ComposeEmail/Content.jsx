import React from 'react'

import Nav from '../Layouts/Secondary/Nav';
import QuillEditor from '../Email/QuillEditor';

import "../Email/style.css";
import "./style.css";

const Content = ({toggleHeaderPopup}) => {
    return (
        <div className="page-content-wrapper full-height">
            <div className="content full-height">
                {/* Start Secondary side bar nav */}
                <Nav to="compose_email" toggleHeaderPopup={toggleHeaderPopup} />
                {/* End Secondary side bar nav */}
                {/* Start email-coompose content */}
                <div className="inner-content full-height-vh d-md-flex justify-content-center align-items-center">
                    <div className="email-composer container-fluid">
                        <div className="row">
                            <div className="col-md-12 no-padding">
                                <form id="form-project" role="form" autoComplete="off">
                                    <div className="form-group-attached">
                                        <div className="row clearfix">
                                            <div className="col-md-6">
                                                <div className="form-group form-group-default">
                                                    <label>to:</label>
                                                    <input name="to" data-role="tagsinput" className="form-control tagsinput" type="text" value="John Smith" onChange={() => {}}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group form-group-default">
                                                    <label>cc:</label>
                                                    <input type="text" className="form-control" name="cc" placeholder="Add Carbon Copy"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group form-group-default">
                                            <label>Subject</label>
                                            <input type="text" className="form-control" name="subject"/>
                                        </div>
                                    </div>
                                </form>
                                <QuillEditor />
                            </div>
                        </div>
                        <div className="row p-b-10 p-t-10">
                            <div className="col-md-11 d-md-flex d-lg-flex d-xl-flex d-block align-items-start">
                                <div className="form-check d-flex m-t-5">
                                    <input id="sendCC" type="checkbox" value="1" onChange={() => {}}/>
                                    <label className="d-none d-lg-block small-text" htmlFor="sendCC">Send a Carbon Copy to my Primary email address.</label>
                                    <label className="d-md-none small-text" htmlFor="sendCC">Send me a CC</label>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <button aria-label="" className="btn btn-complete btn-lg pull-right btn-icon-left"><i className="pg-icon">send</i>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End email-coompose content */}
            </div>
        </div>
    )
}

export default Content
