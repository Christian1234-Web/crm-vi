import React from 'react'

import Button from '../../Button';

const NuttonColor = () => {
    return (
        <div className="row">
            <div className="col-sm-12">
            {/* START card */}
                <div className="card card-transparent">
                    <div className="card-header ">
                        <div className="card-title">Button Color</div>
                    </div>
                    <div className="card-body">
                        <div className="row ">
                            <div className="col-lg-6">
                                <h4>Distinct. Consistent. Intentional. Colorful.</h4>
                                <p>An app can show more than one button in a layout at a time, so a high-emphasis button can be
                                    accompanied by medium- and low-emphasis buttons that perform less important actions. Color can help you
                                    achieve this efficiently.</p>
                                <br/>
                            </div>
                        </div>
                        <div className="row m-t-20">
                            <div className="col-lg-3">
                                <div className="card card-default">
                                    <div className="card-body padding-10">
                                        <div className="d-flex">
                                            <div className="">
                                                <img src="" alt=""/>
                                            </div>
                                            <div>
                                                <p className="m-t-0 bold m-b-5">Pages Color Matrix</p>
                                                <p className="m-b-5">See how pages color system adapts different states and...</p>
                                                <a href="javascript:void(0);" className="m-b-5 fs-12">Related Link</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <p>Primary Button</p>
                                <Button type="primary">Primary</Button>
                                <br/>
                                <p className="small hint-text m-t-15 col-lg-8 no-padding">
                                    Refer to class <code>btn-primary</code> to get "Primary" button styles
                                </p>
                            </div>
                            <div className="col-lg-3">
                                <p>Complete Button</p>
                                <Button type="complete">Complete</Button>
                                <br/>
                                <p className="small hint-text m-t-15 col-lg-8 no-padding">
                                    Refer to class <code>btn-complete</code> to get "Complete" button styles.
                                </p>
                            </div>
                            <div className="col-lg-3">
                                <p>Success Button</p>
                                <Button type="success">Success</Button>
                                <br/>
                                <p className="small hint-text m-t-15 col-lg-8 no-padding">
                                    Refer to class <code>btn-success</code> to get "Success" button styles.
                                </p>
                            </div>
                        </div>
                        <div className="row m-b-35">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-3">
                                <p>Danger Button</p>
                                <Button aria-label="" type="danger">Danger</Button>
                                <br/>
                                <p className="small hint-text m-t-15 col-lg-8 no-padding">
                                    Refer to class <code>btn-danger</code> to get "Danger" button styles.
                                </p>
                            </div>
                            <div className="col-lg-3">
                                <p>Warning Button</p>
                                <Button aria-label="" type="warning">Warning</Button>
                                <br/>
                                <p className="small hint-text m-t-15 col-lg-8 no-padding">
                                    Refer to class <code>btn-warning</code> to get "Warning" button styles
                                </p>
                            </div>
                            <div className="col-lg-3">
                                <p>White Button</p>
                                <Button aria-label="" type="default">Default</Button>
                                <br/>
                                <p className="small hint-text m-t-15 col-lg-8 no-padding">
                                    Refer to class <code>btn-default</code> to get "Default" button styles
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END card */}
            </div>
        </div>
    )
}

export default NuttonColor
