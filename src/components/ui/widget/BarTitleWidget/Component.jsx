import React , { useEffect } from 'react'

import Rickshaw from 'rickshaw';

const Component = () => {

    useEffect(() => {

        let parentDiv = document.getElementById('rickshaw-bargraph-container').getBoundingClientRect();
        let colors = {
            fill_colour: '#F55753',
            remain_color: '#E6E6E6'
        }
        let seriesData = [
            [],
            []
        ];
        let random = new Rickshaw.Fixtures.RandomData(7);
        for (let i = 0; i < 7; i++) {
            random.addData(seriesData);
        }

        let graph = new Rickshaw.Graph({
            element: document.querySelector('#rickshaw-bargraph'),
            renderer: 'bar',
            series: [{
                data: [{
                    x: 0,
                    y: 10
                }, {
                    x: 1,
                    y: 8
                }, {
                    x: 2,
                    y: 5
                }, {
                    x: 3,
                    y: 9
                }, {
                    x: 4,
                    y: 5
                }, {
                    x: 5,
                    y: 8
                }, {
                    x: 6,
                    y: 10
                }],
                color: colors.fill_colour
            }, {
                data: [{
                    x: 0,
                    y: 0
                }, {
                    x: 1,
                    y: 2
                }, {
                    x: 2,
                    y: 5
                }, {
                    x: 3,
                    y: 1
                }, {
                    x: 4,
                    y: 5
                }, {
                    x: 5,
                    y: 2
                }, {
                    x: 6,
                    y: 0
                }],
                color: colors.remain_color
            }]

        });

        let MonthBarsRenderer = Rickshaw.Class.create(Rickshaw.Graph.Renderer.Bar, {
            barWidth: () => { return 7 }
        });

        graph.setRenderer(MonthBarsRenderer);
        graph.render();
        graph.configure({
            width: parentDiv.width, 
            height: parentDiv.height
        });

        // const handleResize = () => {
        //     return graph.configure({
        //         width: document.getElementById('rickshaw-bargraph').getBoundingClientRect().width, 
        //         height: document.getElementById('rickshaw-bargraph').getBoundingClientRect().height
        //     })
        // }
        // window.addEventListener('resize', handleResize);
        // return () => {
        //     window.removeEventListener('resize', handleResize);
        // };
    })

    return (
        <div className="widget-5 panel no-border  widget-loader-bar">
            <div className="panel-heading pull-top top-right">
                <div className="panel-controls">
                <ul>
                    <li><a data-toggle="refresh" className="portlet-refresh text-black" href="javascript:void(0);"><i
                className="portlet-icon portlet-icon-refresh"></i></a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="container-xs-height full-height">
                <div className="row row-xs-height">
                    <div className="col-xs-5 col-xs-height col-middle relative">
                        <div className="padding-15 top-left bottom-left">
                        <h5 className="hint-text no-margin p-l-10">France, Florence</h5>
                        <p className=" bold font-montserrat p-l-10">2,345,789
                            <br/>USD</p>
                        <p className=" hint-text visible-xlg p-l-10">Today's sales</p>
                        </div>
                    </div>
                    <div className="col-xs-7 col-xs-height col-bottom relative widget-5-chart-container" id="rickshaw-bargraph-container">
                        <div className="widget-5-chart" id="rickshaw-bargraph"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component
