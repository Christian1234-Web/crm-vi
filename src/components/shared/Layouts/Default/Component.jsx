import React from 'react'

import Sidebar from '../../../Theme-Condensed/Sidebar';
import Quickview from '../../../Quickview';
import Search from '../../../Search';
import Header from '../../../ui/Header';
import SidebarCorporate from '../../../Theme-Corporate/SidebarCorporate';
import SidebarSimple from '../../../Theme-Simple/SidebarSimple';

const Component = ({location, children, inboxHeader}) => {
    let path = location.pathname;
    return (
        <React.Fragment>
           {path.includes('simple') ? <SidebarSimple location={location} /> : path.includes('corporate') ? <SidebarCorporate location={location} /> : <Sidebar location={location} />}
            <Header location={location} inboxHeader={inboxHeader}/>
                {children}
            <Quickview/>
            <Search/>
        </React.Fragment>
    )
}

export default Component
