import React from 'react'

import Button from '../../Button';

const ButtonBlocks = () => {
    return (
        <div className="card card-default">
            <div className="card-header ">
                <div className="card-title">Button Blocks</div>
            </div>
            <div className="card-body">
                <p>
                    Extended button blocks with icons. Add class <code>btn-block</code> and <code>btn-icon-left</code> or
                    <code>btn-icon-right</code>for direction
                </p>
                <Button arialabel="" type="default" block="true" size="lg" iconposition="right" >
                    <span>Button Block</span>
                    <i className="pg-icon md-18">arrow_right</i>
                </Button>
                <Button arialabel="" type="primary" block="true" size="lg" iconposition="left" >
                    <i className="pg-icon md-18">arrow_left</i>
                    <span>Button Block with an icon</span>
                </Button>
            </div>
        </div>
    )
}

export default ButtonBlocks
