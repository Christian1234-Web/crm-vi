import React from 'react'

import Sidebar from '../../../Theme-Condensed/Sidebar';
import SidebarSimple from '../../../Theme-Simple/SidebarSimple';
import Quickview from '../../../Quickview';
import Search from '../../../Search';
import SearchSimple from '../../../Theme-Simple/Search';
import SidebarCorporate from '../../../Theme-Corporate/SidebarCorporate'
const Component = ({ location, children }) => {

    let path = location.pathname
    return (
        <React.Fragment>
            <div className="container">
                {path.includes('simple') ? <SidebarSimple location={location} /> : path.includes('corporate') ? <SidebarCorporate location={location} /> : <Sidebar location={location} />}
                {children}
            </div>
            <Quickview />
            {path.includes('simple') ? <SearchSimple /> : <Search />}

        </React.Fragment>
    )
}

export default Component
