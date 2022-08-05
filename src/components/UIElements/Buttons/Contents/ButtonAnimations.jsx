import React from 'react'

import Button from '../../Button';

const ButtonAnimations = () => {
    return (
        <div className="card card-default">
            <div className="card-header ">
                <div className="card-title">Button Animations</div>
            </div>
            <div className="card-body">
                <p>A button can animate to show hidden content</p>
                <p className="small">
                    The button will be automatically sized according to the visible content size. Make sure there
                    is enough room for the hidden content to show<br/><code>btn-animated</code> and direction as 
                    <code>from-left</code> or <code>from-top</code>
                </p>
                <div className="m-t-15">
                    <Button arialabel="" type="primary" animatedfrom="left" >
                        <span>Follow us</span>
                        <span className="hidden-block">
                            <i className="pg-icon">mail</i>
                        </span>
                    </Button>
                    <Button arialabel="" type="primary" animatedfrom="top" >
                        <span>Download</span>
                        <span className="hidden-block">
                            <i className="pg-icon">cloud</i>
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ButtonAnimations
