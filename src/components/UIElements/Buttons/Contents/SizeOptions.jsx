import React from 'react'

import Button from '../../Button/UtilsButton';

const SizeOptions = () => {
    return (
        <div className="card card-default">
            <div className="card-header ">
                <div className="card-title">Size Options</div>
            </div>
            <div className="card-body">
                <h5 className="">Fancy larger or smaller buttons?<br/>We made it all Perfect.</h5>
                <p>Size Might vary from smaller screen to a larger screen. We made few sizes that are pixel perfect and
                    responsive</p>
                <br/>
                <div className="row">
                    <div className="col-lg-6">
                        <p>Size variation</p>
                        <p className="small">
                            Fancy larger or smaller buttons? Add .btn-lg .btn-sm .btn-xs for additional sizes.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <div className="pull-right sm-pull-left">
                            <Button type="default" size="lg" moresize="larger" utilclass="m-t-10">Large Button</Button>
                            <br/>
                            <Button type="default" utilclass="m-t-10">Default Button</Button>
                            <br/>
                            <Button type="default" size="sm" utilclass="m-t-10">Small Button</Button>
                            <br/>
                            <Button type="default" size="xs" utilclass="m-t-10">Tiny</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SizeOptions
