import React, { useState } from 'react'
import { Row, Col } from 'reactstrap';

import Button from '../../Button';
import UtilsButton from '../../Button/UtilsButton';

import './style.css';

const DifferentStyleButtons = () => {

    const [downDirectionDropDown, setDownDirectionDropDown] = useState(false);
    const [upDirectionDropDown, setUpDirectionDropDown] = useState(false)

    return (
        <Row>
            <Col xs="12" sm="12" md="12" lg="6" xl="4">
                {/* START card */}
                <div className="card card-transparent">
                    <div className="card-header ">
                        <div className="card-title">Traditional Dropdowns
                        </div>
                    </div>
                    <div className="card-body">
                        <p>We've simplified our dropdown buttons by getting rid of the dedicated dropdown associated with them,
                            this looks more clean and also available in all different colors</p>
                        <br/>
                        <div className={`dropdown dropdown-default ${downDirectionDropDown ? 'show' : ''}`}>
                            <Button dropdowntoggle="true" textalign="center"
                                    data-toggle="dropdown" aria-haspopup="true" 
                                    aria-expanded={downDirectionDropDown ? "true" : "false"}
                                    onClick={() => setDownDirectionDropDown(prevState => !prevState)}>
                                Default
                            </Button>
                            <div className="dropdown-menu" role="menu"
                                style={downDirectionDropDown 
                                    ? {width: '85px', willChange: 'transform', position: 'absolute', transform: 'translate3d(0px, 28px, 0px)', top: '0px', left: '0px'} 
                                    : {}}>
                                <a className="dropdown-item" href="javascript:void(0);" onClick={(e)=>e.preventDefault()}>Action</a>
                                <a className="dropdown-item" href="javascript:void(0);" onClick={(e)=>e.preventDefault()}>Helvetica </a>
                                <a className="dropdown-item" href="javascript:void(0);" onClick={(e)=>e.preventDefault()}>SegeoUI</a>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className={`dropdown dropdown-default dropup ${upDirectionDropDown ? ' show' : ''}`}>
                            <Button dropdowntoggle="true" textalign="center dropup"
                                    data-toggle="dropdown" aria-haspopup="true" 
                                    aria-expanded={upDirectionDropDown ? "true" : "false"}
                                    onClick={() => setUpDirectionDropDown(prevState => !prevState)}>
                                Default
                            </Button>
                            <div className="dropdown-menu" role="menu"
                                style={upDirectionDropDown 
                                    ? {width: '85px', willChange: 'transform', position: 'absolute', transform: 'translate3d(0px, -89px, 0px)', top: '0px', left: '0px'} 
                                    : {}}>
                                <a className="dropdown-item" href="javascript:void(0);" onClick={(e)=>e.preventDefault()}>Action</a>
                                <a className="dropdown-item" href="javascript:void(0);" onClick={(e)=>e.preventDefault()}>Helvetica </a>
                                <a className="dropdown-item" href="javascript:void(0);" onClick={(e)=>e.preventDefault()}>SegeoUI</a>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <p className="small">The button will be automatically sized according to the visible content size. Make sure
                        there is enough room for the hidden content to show</p>
                    </div>
                </div>
                {/* END card */}
            </Col>
            <Col xs="12" sm="12" md="12" lg="6" xl="4">
                {/* START card */}
                <div className="card card-transparent">
                    <div className="card-header ">
                        <div className="card-title">Tags and chips
                        </div>
                    </div>
                    <div className="card-body">
                        <p>Tags and Chips are compact elements that represent an input, attribute, or action.</p>
                        <br/>
                        <UtilsButton aria-label="" type="tag" size="xs" utilclass="btn btn-tag btn-xs m-r-5">Photography</UtilsButton>
                        <UtilsButton aria-label="" utilclass="btn btn-tag btn-xs m-r-5">Art</UtilsButton>
                        <br/>
                        <br/>
                        <UtilsButton aria-label="" type="chip" size="xs" active="true" utilclass="m-r-5 m-b-10">
                            <i className="pg-icon">tick</i>
                            Tops
                        </UtilsButton>
                        <UtilsButton aria-label="" type="chip" size="xs" utilclass="m-r-5 m-b-10">
                            <i className="pg-icon">tick</i>
                            Bottoms
                        </UtilsButton>
                        <UtilsButton aria-label="" type="chip" size="xs" utilclass="m-b-10">
                            <i className="pg-icon">tick</i>
                            Shoes
                        </UtilsButton>
                        <br/>
                        <br/>
                        <UtilsButton aria-label="" type="chip" size="xs" utilclass="m-r-5 m-b-10">
                            <i className="pg-icon">tick</i>
                            Small
                        </UtilsButton>
                        <UtilsButton aria-label="" type="chip" active="true" utilclass="m-r-5 m-b-10">
                            <i className="pg-icon">tick</i>
                            Medium
                        </UtilsButton>
                        <UtilsButton aria-label="" type="chip" size="lg" utilclass="m-b-10">
                            <i className="pg-icon">tick</i>
                            Large
                        </UtilsButton>
                        <p className="small m-t-10">Chips allow users to enter information, make selections, filter content, or
                            trigger actions. While buttons are expected to appear consistently and with familiar calls to action,
                            chips should appear dynamically as a group of multiple interactive elements.</p>
                    </div>
                </div>
                {/* END card */}
            </Col>
            <Col xs="12" sm="12" md="12" lg="6" xl="4">
                {/* START card */}
                <div className="card card-transparent">
                    <div className="card-header ">
                        <div className="card-title">Rounded Buttons
                        </div>
                    </div>
                    <div className="card-body">
                        <p>A button can be circular:</p>
                        <br/>
                        <UtilsButton type="default" size="lg"  roundbutton="true" utilclass="m-r-20 m-b-10">Big rounded</UtilsButton>
                        <UtilsButton type="primary" size="lg" roundbutton="true" utilclass="m-r-20 m-b-10">Big rounded</UtilsButton>
                        <br/>
                        <UtilsButton type="default" roundbutton="true" utilclass="m-r-20 m-b-10">Rounded</UtilsButton>
                        <UtilsButton type="primary" roundbutton="true" utilclass="m-b-10">Rounded</UtilsButton>
                        <br/>
                        <UtilsButton type="default" size="sm" roundbutton="true" utilclass="m-r-20">Link me</UtilsButton>
                        <UtilsButton type="primary" size="sm" roundbutton="true">Link me</UtilsButton>
                        <br/>
                        <br/>
                        <p className="small">Circular buttons are a special type of promoted action. It Distinguish a different action
                            or a style.</p>
                    </div>
                </div>
                {/* END card */}
            </Col>
        </Row>
    )
}

export default DifferentStyleButtons
