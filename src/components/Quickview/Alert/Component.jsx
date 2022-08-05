import React from 'react'

import Header from './Header';
import Content from './Content';
import ContentWithLinks from './ContentWithLink';

const Component = () => {
    return (
        <div className="view-port clearfix" id="alerts">
            { /* BEGIN Alerts View */ }
            <div className="view bg-white">
                { /* BEGIN View Header */ }
                <Header text="Notications"/>
                { /* END View Header */ }
                { /* BEGIN Alert List */ }
                <div data-init-list-view="ioslist" className="list-view boreded no-top-border">
                    { /* BEGIN List Group */ }
                    <Content title="Calendar"/>
                    { /* END List Group */ }
                    { /* BEGIN List Group */ }
                    <ContentWithLinks 
                        title="Social"
                        indicatorClass="text-complete"
                        linkText="Jame Smith commented on your status"
                        masterText="Perfection Simplified - Company Revox"/>
                    { /* END List Group */ }
                    { /* BEGIN List Group */ }
                    <ContentWithLinks 
                        title="Sever Status"
                        indicatorClass="text-danger"
                        linkText="12:13AM GTM, 10230, ID:WR174s"
                        masterText="Server Load Exceeded. Take action"/>
                    { /* END List Group */ }
                </div>
                { /* END Alert List */ }
            </div>
            { /* EEND Alerts View */ }
        </div>
    )
}

export default Component
