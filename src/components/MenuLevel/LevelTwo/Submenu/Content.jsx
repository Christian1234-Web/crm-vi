import React from 'react'

import Copyright from '../../../ui/Footer/Copyright';

const content = () => {
    return (
        <div className="page-content-wrapper ">
            { /* START PAGE CONTENT */ }
            <div className="content sm-gutter">
                { /* START CONTAINER FLUID */ }
                <div className="container-fluid padding-25 sm-padding-10">
				<br /><br /><br /><br /><br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br /><br /><br /><br /><br />
				<br /><br /><br /><br /><br /><br /><br /><br /><br />
				<br /><br />
                </div>
                { /* END CONTAINER FLUID */ }
            </div>
            { /* START COPYRIGHT */ }
            <Copyright 
                year={"2014"}
                brand={"REVOX"}
                reserved={"All rights reserved."}
                terms={"Terms of use"}
                policy={"Privacy Policy"}
            />
            { /* END COPYRIGHT */ }
        { /* END PAGE CONTENT */ }
        </div>
    )
}

export default content
