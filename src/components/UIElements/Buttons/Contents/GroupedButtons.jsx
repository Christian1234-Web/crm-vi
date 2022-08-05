import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'; 

import Button from '../../Button';

const GroupedButtons = () => {

    const [sizeOptionDropDown, setSizeOptionDropDown] = useState(false);
    const [verticalDefaultDropDown, setVerticalDefaultDropDown] = useState(false);

    return (
        <Row>
            <Col xs="12" sm="12" md="12" lg="12" xl="4">
                {/* START card */}
                <div className="card card-transparent">
                    <div className="card-header ">
                        <div className="card-title">Single Button Group</div>
                        <div className="tools">
                            <a href="javascript:void(0);" className="collapse" onClick={(e)=>e.preventDefault()}></a>
                            <a href="#grid-config" data-toggle="modal" className="config"></a>
                            <a href="javascript:void(0);" className="reload" onClick={(e)=>e.preventDefault()}></a>
                            <a href="javascript:void(0);" className="remove" onClick={(e)=>e.preventDefault()}></a>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>Basic example of bootstrap button groups. Wrap a series of buttons with <code>btn</code> in
                            <code>btn-group</code>
                        </p>
                        <br/>
                        <div className="btn-group">
                            <Button type="success">Edit</Button>
                            <Button type="success">Help</Button>
                            <Button type="success">Create</Button>
                        </div>
                        <br/>
                        <br/>
                        <div className="btn-group btn-toolbar  col-6 no-padding">
                            <Button type="default" utilclass="flex-one-one">
                                <i className="pg-icon">text_align_left</i>
                            </Button>
                            <Button type="default" utilclass="flex-one-one">
                                <i className="pg-icon">text_align_center</i>
                            </Button>
                            <Button type="default" utilclass="flex-one-one">
                                <i className="pg-icon">text_align_right</i>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* END card */}
            </Col>
            <Col xs="12" sm="12" md="12" lg="6" xl="4">
                {/* START card */}
                <div className="card card-transparent">
                    <div className="card-header ">
                        <div className="card-title">Button toolbar</div>
                        <div className="tools">
                            <a href="javascript:void(0);" className="collapse" onClick={(e)=>e.preventDefault()}></a>
                            <a href="#grid-config" data-toggle="modal" className="config"></a>
                            <a href="javascript:void(0);" className="reload" onClick={(e)=>e.preventDefault()}></a>
                            <a href="javascript:void(0);" className="remove" onClick={(e)=>e.preventDefault()}></a>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>A button bar is a group of button groups, perfect for situations where you want groups of actions that
                            are all related to a similar element or page</p>
                        <br/>
                        <div className="btn-toolbar flex-wrap" role="toolbar">
                            <div className="btn-group sm-m-t-10">
                                <Button type="default">
                                    <i className="pg-icon">format_bold</i>
                                </Button>
                                <Button type="default" active="true">
                                    <i className="pg-icon">format_italics</i>
                                </Button>
                                <Button type="default">
                                    <i className="pg-icon">format_underline</i>
                                </Button>
                                <Button type="default">
                                    <i className="pg-icon">paint_bucket</i>
                                </Button>
                            </div>
                            <div className="btn-group sm-m-t-10">
                                <Button type="default">
                                    <i className="pg-icon">format_highlight</i>
                                </Button>
                                <Button type="default">
                                    <i className="pg-icon">format_clear</i>
                                </Button>
                                <Button type="default">
                                    <i className="pg-icon">format_strike_through</i>
                                </Button>
                            </div>
                            <div className="btn-group sm-m-t-10">
                                <Button type="default">
                                    <i className="pg-icon">mic</i>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END card */}
            </Col>
            <Col xs="12" sm="12" md="12" lg="6" xl="4">
                {/* START card */}
                <div className="card card-transparent">
                    <div className="card-header ">
                        <div className="card-title">Size Options</div>
                    </div>
                    <div className="card-body">
                        <p>Like buttons you can also use different sizes to button groups</p>
                        <br/>
                        <div className="bs-example">
                            <div className="btn-toolbar" role="toolbar">
                                <div className="btn-group btn-group-lg">
                                    <Button type="default">Left</Button>
                                    <Button type="default">Middle</Button>
                                    <Button type="default">Right</Button>
                                </div>
                            </div>
                            <div className="btn-toolbar m-t-10" role="toolbar">
                                <div className="btn-group">
                                    <Button type="default">Left</Button>
                                    <Button type="default">Middle</Button>
                                    <Button type="default">Right</Button>
                                </div>
                            </div>
                            <div className="btn-toolbar m-t-10" role="toolbar">
                                <div className="btn-group btn-group-sm">
                                    <Button type="default">Left</Button>
                                    <Button type="default">Middle</Button>
                                    <Button type="default">Right</Button>
                                </div>
                            </div>
                            <div className="btn-toolbar m-t-10" role="toolbar">
                                <div className="btn-group btn-group-xs">
                                    <Button type="default">Left</Button>
                                    <Button type="default">Middle</Button>
                                    <Button type="default">Right</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END card */}
            </Col>
            <Col xs="12" sm="12" md="12" lg="6" xl="4">
                {/* START card */}
                <div className="card card-transparent">
                    <div className="card-header ">
                        <div className="card-title">Size Options</div>
                    </div>
                    <div className="card-body">
                        <p>Go wild! mix it and make it intererting, add different groups with dropdowns</p>
                        <br/>
                        <div className="btn-group">
                            <Button type="default">Edit</Button>
                            <Button type="default">Preview</Button>
                            <div className={`btn-group dropdown dropdown-default ${sizeOptionDropDown ? 'show' : ''}`}>
                                <Button dropdowntoggle="true"
                                    data-toggle="dropdown" aria-haspopup="true" 
                                    aria-expanded={sizeOptionDropDown ? "true" : "false"}
                                    onClick={() => setSizeOptionDropDown(prevState => !prevState)}>
                                    San Francisco
                                </Button>
                                <div className={`dropdown-menu ${sizeOptionDropDown ? 'show' : ''}`} role="menu" 
                                    x-placement="bottom-start"
                                    style={sizeOptionDropDown 
                                        ? {width: '130px', willChange: 'transform', position: 'absolute', transform: 'translate3d(0px, 28px, 0px)', top: '0px', left: '0px'} 
                                        : {}}>
                                    <a className="dropdown-item" href="javascript:void(0);" onClick={(e)=>e.preventDefault()}>Sharp Grotesk</a>
                                    <a className="dropdown-item" href="javascript:void(0);" onClick={(e)=>e.preventDefault()}>Helvetica </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END card */}
            </Col>
            <Col xs="12" sm="12" md="12" lg="6" xl="4">
                {/* START card */}
                <div className="card card-transparent">
                    <div className="card-header ">
                        <div className="card-title">Vertical Button Group</div>
                    </div>
                    <div className="card-body">
                        <p>Want it in a different perspective? its customized to work both vertical and horizontal ways</p>
                        <br/>
                        <div className="btn-group btn-group-vertical">
                            <Button type="default">
                                <i className="pg-icon">text_align_left</i>
                            </Button>
                            <Button type="success">
                                <i className="pg-icon">text_align_center</i>
                            </Button>
                            <Button type="default">
                                <i className="pg-icon">text_align_right</i>
                            </Button>
                        </div>
                        <div className="btn-group-vertical">
                            <Button type="default">Button</Button>
                            <div className="">
                                <div className={`dropdown dropdown-default ${verticalDefaultDropDown ? 'show' : ''}`}>
                                    <Button dropdowntoggle="true" textalign="center"
                                        data-toggle="dropdown" aria-haspopup="true" 
                                        aria-expanded={verticalDefaultDropDown ? "true" : "false"}
                                        onClick={() => setVerticalDefaultDropDown(prevState => !prevState)}>
                                            Default
                                    </Button>
                                    <div className="dropdown-menu" role="menu"
                                        x-placement="bottom-start"
                                        style={verticalDefaultDropDown 
                                            ? {width: '85px', willChange: 'transform', position: 'absolute', transform: 'translate3d(0px, 28px, 0px)', top: '0px', left: '0px'} 
                                            : {}}>
                                        <a className="dropdown-item" href="javascript:void(0);" onClick={(e)=>e.preventDefault()}>Action</a>
                                        <a className="dropdown-item" href="javascript:void(0);" onClick={(e)=>e.preventDefault()}>Helvetica </a>
                                        <a className="dropdown-item" href="javascript:void(0);" onClick={(e)=>e.preventDefault()}>SegeoUI</a>
                                    </div>
                                </div>
                            </div>
                            <Button type="default">Button</Button>
                        </div>
                    </div>
                </div>
                {/* END card */}
            </Col>
            <Col xs="12" sm="12" md="12" lg="6" xl="4">
                {/* START card */}
                <div className="card card-transparent">
                    <div className="card-header ">
                        <div className="card-title">Vertical Button Group
                        </div>
                    </div>
                    <div className="card-body">
                        <p>Want it in a different perspective? its customized to work both vertical and horizontal ways</p>
                        <br/>
                        <div className="btn-group btn-toolbar">
                                <Button type="default" style={{flex: '1 1 auto'}}>
                                    <div className="p-t-5 p-b-5">
                                        <i className="pg-icon">heart</i>
                                        <div className="fs-11 font-montserrat text-uppercase">Favorites</div>
                                    </div>
                                </Button>
                                <Button type="default" style={{flex: '1 1 auto'}}>
                                    <div className="p-t-5 p-b-5">
                                        <i className="pg-icon">time</i>
                                        <div className="fs-11 font-montserrat text-uppercase">Recent</div>
                                    </div>
                                </Button>
                                <Button type="default" style={{flex: '1 1 auto'}}>
                                    <div className="p-t-5 p-b-5">
                                        <i className="pg-icon">users</i>
                                        <div className="fs-11 font-montserrat text-uppercase">Contacts</div>
                                    </div>
                                </Button>
                        </div>
                    </div>
                {/* END card */}
                </div>
            </Col>
        </Row>
    )
}

export default GroupedButtons
