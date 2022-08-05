import React , { useEffect} from 'react'

//import ui components
import Col from '../../Col/Component';
import Row from '../../Row/Component';

import Rickshaw from 'rickshaw';
import d3 from 'd3';

const Component = () => {

    useEffect(() => {
        let parentDiv = document.getElementById('webserver_rickshaw').getBoundingClientRect();
        let seriesData = [
            [],
            [],
            []
        ];
        let random = new Rickshaw.Fixtures.RandomData(50);
        for (let i = 0; i < 50; i++) {
            random.addData(seriesData);
        }
        let graph = new Rickshaw.Graph({
            element: document.querySelector("#webserver_rickshaw"), 
            width: parentDiv.width, 
            height: parentDiv.height, 
            renderer: 'area',
            padding: {
                top: 0.5,
                bottom: 1
            },
            series: [{
                name: 'DB Server',
                color: '#99EAE3',
                data: seriesData[0]
            },
            {
                name: 'Web Server',
                color: '#E6E6E6',
                data: seriesData[1]
            }]
        });

        new Rickshaw.Graph.Axis.Y({
            graph: graph,
            orientation: 'right',
            tickFormat: function(y) {
                return y / 10;
            },
            element: document.querySelector('.widget-14-chart_y_axis'),
        });

        let legend = new Rickshaw.Graph.Legend({
            graph: graph,
            element: document.querySelector('.widget-14-chart-legend')

        });

        new Rickshaw.Graph.Behavior.Series.Toggle({
            graph: graph,
            legend: legend
        });

        new Rickshaw.Graph.HoverDetail({
            graph: graph
        });

        setInterval(function() {
            random.removeData(seriesData);
            random.addData(seriesData);
            graph.update();
        }, 1000);

        d3.selectAll('.widget-14-chart_y_axis .tick.major line').attr('x2', '7');
        d3.selectAll('.widget-14-chart_y_axis .tick.major text').attr('x', '12');
      
        graph.render();
        graph.configure({width: parentDiv.width, height: parentDiv.height});
    })
    
    return (
        <div className="widget-14 panel no-border  no-margin widget-loader-circle">
            <div className="container-xs-height full-height">
            <div className="row-xs-height">
                <div className="col-xs-height">
                <div className="panel-heading">
                    <div className="panel-title">Server load
                    </div>
                    <div className="panel-controls">
                    <ul>
                        <li><a href="javascript:void(0);" className="portlet-refresh text-black" data-toggle="refresh"><i
                                className="portlet-icon portlet-icon-refresh"></i></a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="row-xs-height">
                <div className="col-xs-height">
                <div className="p-l-20 p-r-20">
                    <p>Server: www.revox.io</p>
                    <Row>
                        <Col lg="3" md="12">
                            <h4 className="bold no-margin">5.2GB</h4>
                            <p className="small no-margin">Total usage</p>
                        </Col>
                        <Col lg="3" md="6">
                            <h5 className=" no-margin p-t-5">227.34KB</h5>
                            <p className="small no-margin">Currently</p>
                        </Col>
                        <Col lg="3" md="6">
                            <h5 className=" no-margin p-t-5">117.65MB</h5>
                            <p className="small no-margin">Average</p>
                        </Col>
                        <Col lg="3" className=" visible-xlg">
                            <div className="widget-14-chart-legend bg-transparent text-black no-padding pull-right"></div>
                            <div className="clearfix"></div>
                        </Col>
                    </Row>
                </div>
                </div>
            </div>
            <div className="row-xs-height">
                <div className="col-xs-height relative bg-master-lightest">
                <div className="widget-14-chart_y_axis"></div>
                <div className=" rickshaw-chart top-left top-right bottom-left bottom-right" id="webserver_rickshaw"></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Component
