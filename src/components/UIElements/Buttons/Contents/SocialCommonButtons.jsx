import React from 'react'
import { Row, Col } from 'reactstrap';

import Button from '../../Button/UtilsButton';

const SocialCommonButtons = () => {
    return (
        <Row>
            {/* START card */}
            <Col xs="12" sm="12" md="12" lg="6">
                {/* START card */}
                <div className="card card-default">
                    <div className="card-header ">
                        <div className="card-title">Common Icon Buttons</div>
                    </div>
                    <div className="card-body">
                        <p>Buttons can be filled with an extra component like an icon. You can place it either on the left or the
                            right whichever you want with different color options</p>
                        <br/>
                        {/* primary Button with icon left */}
                        <Button type="primary" utilclass="m-r-5 m-b-10" iconposition="left">
                            <i className="pg-icon">tick</i>
                            <span className="">Submit</span>
                        </Button>
                        {/* Success Button with icon left */}
                        <Button type="success" utilclass="m-r-5 m-b-10" iconposition="left">
                            <i className="pg-icon">paint_bucket</i>
                            <span className="">Style</span>
                        </Button>
                        {/* info Button with icon left */}
                        <Button type="info" utilclass="m-r-5 m-b-10" iconposition="left">
                            <i className="pg-icon">edit</i>
                            <span className="">Edit</span>
                        </Button>
                        {/* danger Button with icon left */}
                        <Button type="danger" utilclass="m-r-5 m-b-10" iconposition="left">
                            <i className="pg-icon">trash</i>
                            Delete
                        </Button>
                        {/* default Button with icon left */}
                        <Button type="default" utilclass="m-r-5 m-b-10" iconposition="left">
                            <i className="pg-icon">heart</i>
                            Like
                        </Button>

                        <br/>
                        {/* primary large Button with icon left */}
                        <Button type="primary" size="lg" utilclass="m-r-5 m-b-10" iconposition="left">
                            <i className="pg-icon">tick</i>
                            <span className="">Submit</span>
                        </Button>
                        {/* Success large Button with icon left */}
                        <Button type="success" size="lg" utilclass="m-r-5 m-b-10" iconposition="left">
                            <i className="pg-icon">paint_bucket</i>
                            <span className="">Style</span>
                        </Button>
                        {/* info large Button with icon left */}
                        <Button type="info" size="lg" utilclass="m-r-5 m-b-10" iconposition="left">
                            <i className="pg-icon">edit</i>
                            <span className="">Edit</span>
                        </Button>
                        {/* danger large Button with icon left */}
                        <Button type="danger" size="lg" utilclass="m-r-5 m-b-10" iconposition="left">
                            <i className="pg-icon">trash</i>
                            Delete
                        </Button>
                        {/* default large Button with icon left */}
                        <Button type="default" size="lg" utilclass="m-r-5 m-b-10" iconposition="left">
                            <i className="pg-icon">heart</i> 
                            Like
                        </Button>
                    </div>
                </div>
                {/* END card */}
            </Col>
            <Col xs="12" sm="12" md="12" lg="6">
                {/* START card */}
                <div className="card card-default">
                    <div className="card-header ">
                        <div className="card-title">Social Icon Buttons</div>
                    </div>
                    <div className="card-body">
                        <p>Fancy social icons? here are some of pre-made icons and buttons that are done which can come in handy</p>
                        <br/>
                        <Button type="info" size="lg" block="true">
                            <i className="pg-icon">facebook</i>
                            <span>Login with Facebook</span>
                        </Button>
                        <Button type="primary" size="lg" block="true">
                            <i className="pg-icon">twitter</i>
                            <span>Login with Twitter</span>
                        </Button>
                        <Button type="danger" size="lg" block="true">
                            <i className="pg-icon">google_plus</i>
                            <span>Login with Google+</span>
                        </Button>
                    </div>
                </div>
                {/* END card */}
            </Col>
        </Row>
    )
}

export default SocialCommonButtons
