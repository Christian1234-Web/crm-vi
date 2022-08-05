import React, { useEffect } from 'react'

//import ui components
import Col from '../../Col/Component';
import Row from '../../Row/Component';

import Rickshaw from 'rickshaw';

const Component = () => {

    useEffect(() => {

        let parentDiv = document.getElementById('stackBar-RickShow').getBoundingClientRect();
        let colors = {
            complete_light: '#6DC0F9',
            master_light: '#F0F0F0'
        }
        let seriesData = [
            [],
            []
        ];
        let random = new Rickshaw.Fixtures.RandomData(40);
        for (let i = 0; i < 40; i++) {
            random.addData(seriesData);
        }

        let graph = new Rickshaw.Graph({
            renderer: 'bar',
            element: document.querySelector('#stackBar-RickShow'),
            height: 200,
            padding: {
                top: 0.5
            },
            series: [{
                data: seriesData[0],
                color: colors.complete_light,
                name: "New users"
            }, {
                data: seriesData[1],
                color: colors.master_light,
                name: "Returning users"

            }]

        });

        new Rickshaw.Graph.HoverDetail({
            graph: graph,
            formatter: function(series, x, y) {
                let date = '<span className="date">' + new Date(x * 1000).toUTCString() + '</span>';
                let swatch = '<span className="detail_swatch" style="background-color: ' + series.color + '"></span>';
                let content = swatch + series.name + ": " + parseInt(y) + '<br>' + date;
                return content;
            }
        });

        graph.render();
        graph.configure({
            width: parentDiv.width, 
        });
    })

    return (
        <div className="widget-15 panel panel-condensed  no-margin no-border widget-loader-circle">
            <div className="panel-heading">
            <div className="panel-controls">
                <ul>
                <li><a href="javascript:void(0);" className="portlet-collapse" data-toggle="collapse"><i
                    className="portlet-icon portlet-icon-collapse"></i></a>
                </li>
                <li><a href="javascript:void(0);" className="portlet-refresh text-black" data-toggle="refresh"><i
                    className="portlet-icon portlet-icon-refresh"></i></a>
                </li>
                </ul>
            </div>
            </div>
            <div className="panel-body no-padding">
            <ul className="nav nav-tabs nav-tabs-simple">
                <li className="active">
                <a href="#widget-15-tab-1" className="p-t-5">
                APPL<br/>
                22.23<br/>
                <span className="text-success">+60.223%</span>
            </a>
                </li>
                <li><a href="#widget-15-tab-2" className="p-t-5">
            FB<br/>
            45.97<br/>
            <span className="text-danger">-06.56%</span>
        </a>
                </li>
                <li><a href="#widget-15-tab-3" className="p-t-5">
            GOOG<br/>
            22.23<br/>
            <span className="text-success">+60.223%</span>
        </a>
                </li>
            </ul>
            <div className="tab-content p-l-20 p-r-20">
                <div className="tab-pane no-padding active" id="widget-15-tab-1">
                <div className="full-width">
                    <div className="full-width">
                    <div className="widget-15-chart rickshaw-chart" id="stackBar-RickShow"></div>
                    </div>
                </div>
                </div>
                <div className="tab-pane no-padding" id="widget-15-tab-2">
                </div>
                <div className="tab-pane" id="widget-15-tab-3">
                </div>
            </div>
            <div className="p-t-20 p-l-20 p-r-20 p-b-30">
                <Row>
                    <Col md="9">
                        <p className="fs-16 text-black">Apple’s Motivation - Innovation
                        <br/>distinguishes between A leader and a follower.
                        </p>
                        <p className="small hint-text">VIA Apple Store (Consumer and Education Individuals)
                        <br/>(800) MY-APPLE (800-692-7753)
                        </p>
                    </Col>
                    <Col md="3" className=" text-right">
                        <p className="font-montserrat bold text-success m-r-20 fs-16">+0.94</p>
                        <p className="font-montserrat bold text-danger m-r-20 fs-16">-0.63</p>
                    </Col>
                </Row>
            </div>
            </div>
        </div>
    )
}

export default Component
