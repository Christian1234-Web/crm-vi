import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const Nav = ({ messages, to, toggleHeaderPopup }) => {
    // console.log(toggleHeaderPopup);
    const [isMobileMode, setIsMobileMode] = useState(false);
   

    useEffect(() => {
        const { innerWidth: width } = window
        width < 1025 ? setIsMobileMode(true) : setIsMobileMode(false);
        // window.addEventListener("resize", (e) => {
        //     if(e.target.outerWidth < 1025) setIsMobileMode(true)
        //     else setIsMobileMode(false)
        // });
        // return () => window.removeEventListener("resize", null);
    }, [toggleHeaderPopup]);

    return (
        <nav className="secondary-sidebar"
            style={(isMobileMode ? ((toggleHeaderPopup && isMobileMode) ? { "display": "block" } : { "display": "none" }) : { "display": "block" })}
        >
            <div className=" m-b-20 m-l-30 m-r-10 d-sm-none d-md-block d-lg-block d-xl-block">
                <Link to={to} className="btn btn-complete btn-block">Compose</Link>
            </div>
            <p className="menu-title">BROWSE</p>
            <ul className="main-menu">
                <li className="active">
                    <Link to="email">
                        <span className="title"><i className="pg-icon">inbox</i> Sent</span>
                        <span className="badge pull-right">{messages.length}</span>
                    </Link>
                </li>
                {/* <li className="">
                    <a href="javascript:void(0);">
                        <span className="title"><i className="pg-icon">inbox_all</i> All mail</span>
                    </a>
                    <ul id="email-secondary-sidebar-id" className="sub-menu no-padding">
                        <li>
                            <a href="javascript:void(0);">
                                <span className="title">Important</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <span className="title">Labeled</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <span className="title"><i className="pg-icon">sent</i> Sent</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <span className="title"><i className="pg-icon">spam</i> Spam</span>
                        <span className="badge pull-right">10</span>
                    </a>
                </li> */}
            </ul>
            {/* <p className="menu-title m-t-20 all-caps">Quick view</p>
            <ul id="email-quick-view-secondary-sidebar-id" className="sub-menu no-padding">
                <li>
                    <a href="javascript:void(0);">
                        <span className="title">Documents</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <span className="title">Flagged</span>
                        <span className="badge pull-right">5</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);">
                        <span className="title">Images</span>
                    </a>
                </li>
            </ul> */}
        </nav>
    )
}

export default Nav