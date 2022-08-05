import React, { useState } from "react";
import Nestable from "react-nestable";

import CollapseIcon from "./CollapseIcon";
import PageContainer from "../../UIElements/Containers";
import PageBreadcrumb from "../../UIElements/Breadcrumb";
import PageScroll from "../../UIElements/PageScroll";
import Copyright from "../../ui/Footer/Copyright";

import "./style.css";

const content = ({ path }) => {
  const [itemsOne] = useState([
    { id: 0, text: "Item 1" },
    {
      id: 1,
      text: "Item 2",
      children: [
        { id: 2, text: "Item 3" },
        { id: 3, text: "Item 4" },
        { id: 4, text: "Item 5" },
      ],
    },
  ]);

  const [itemsTwo] = useState([
    { id: 5, text: "Item 13" },
    { id: 6, text: "Item 14" },
    {
      id: 7,
      text: "Item 15",
      children: [
        { id: 8, text: "Item 16" },
        { id: 9, text: "Item 17" },
        { id: 10, text: "Item 18" },
      ],
    },
  ]);

  const [itemsThree] = useState([
    { id: 11, text: "Item 1" },
    {
      id: 12,
      text: "Item 2",
      children: [
        { id: 13, text: "Item 3" },
        { id: 14, text: "Item 4" },
        {
          id: 15,
          text: "Item 5",
          children: [
            { id: 16, text: "Item 6" },
            { id: 17, text: "Item 7" },
            { id: 18, text: "Item 8" },
          ],
        },
        { id: 19, text: "Item 9" },
        { id: 20, text: "Item 10" },
      ],
    },
    { id: 21, text: "Item 11" },
    { id: 22, text: "Item 12" },
  ]);

  const [itemsFour] = useState([
    { id: 23, text: "Item 13" },
    { id: 24, text: "Item 14" },
    {
      id: 25,
      text: "Item 15",
      children: [
        { id: 26, text: "Item 16" },
        { id: 27, text: "Item 17" },
        { id: 28, text: "Item 18" },
      ],
    },
  ]);

  const styles = {
    position: "relative",
    cursor: "pointer",
  };

  const dragHandlerStyle = {
    position: "relative",
    cursor: "pointer",
  };

  const renderItem = ({ item, collapseIcon, handler }) => {
    return (
      <div style={styles}>
        {handler}
        {collapseIcon}
        {item.text}
      </div>
    );
  };

  const renderDragHandlerItem = ({ item, collapseIcon, handler }) => {
    return (
      <div style={dragHandlerStyle}>
        {handler}
        {collapseIcon}
        {item.text}
      </div>
    );
  };

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content ">
        <div className="jumbotron" data-pages="parallax">
          <PageContainer
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "container p-l-10"
                : " "
            }
          >
            <PageScroll>
              <PageBreadcrumb>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">UI Elements</a>
                </li>
                <li className="breadcrumb-item active">Nestables</li>
              </PageBreadcrumb>
              <div className="row m-t-15">
                <div className="col-xl-7 col-lg-6 ">
                  <div className="full-height">
                    <div className="card-body text-center p-l-20 p-t-0">
                      <img
                        className="image-responsive-height demo-mw-600"
                        src={
                          process.env.PUBLIC_URL + "/assets/img/demo/nest.png"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 ">
                  <div className="card card-transparent">
                    <div className="card-body p-l-20 p-t-0">
                      <h3 style={{ marginTop: 0 }}>Nestables</h3>
                      <p>
                        This is powered by the react-nestable plugin, we have
                        customized it to suit the design scheme and color
                        palette.
                      </p>
                      <br />
                      <div className="col-md-12 no-padding">
                        <a
                          href="https://www.npmjs.com/package/react-nestable"
                          target="_blank"
                          className="btn btn-complete"
                        >
                          See Plugin
                        </a>
                        <p className="small hinted-text inline p-l-10 no-margin col-middle">
                          https://www.npmjs.com/package/react-nestable
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PageScroll>
          </PageContainer>
        </div>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <div className="row">
            <div className="col-md-6">
              <div className="card card-transparent nestable-card">
                <div className="card-header ">
                  <div className="card-title">Basic Nestables</div>
                </div>
                <div className="card-body p-l-20 p-t-0">
                  <p>
                    Netables and also draggable using touch devices, you can
                    simply create on by with an Ordered list, further reading
                    please refer documentation
                  </p>
                  <div className="dd" id="basic_example">
                    <Nestable
                      className={"nestable-one"}
                      items={itemsOne}
                      renderItem={renderItem}
                      renderCollapseIcon={({ isCollapsed }) => (
                        <CollapseIcon isCollapsed={isCollapsed} />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-transparent nestable-card">
                <div className="card-header ">
                  <div className="card-title">Drag Handler</div>
                </div>
                <div className="card-body p-l-20 p-t-0">
                  <p>
                    This configuration allows you to add a handler at the left
                    so you only allowed to move it from the handler
                  </p>
                  <div className="dd" id="drag_handler_example">
                    <Nestable
                      className={"nestable-two"}
                      items={itemsTwo}
                      renderItem={renderDragHandlerItem}
                      renderCollapseIcon={({ isCollapsed }) => (
                        <CollapseIcon isCollapsed={isCollapsed} />
                      )}
                      handler={<span className="grippy" />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-default nestable-card">
            <div className="card-header ">
              <div className="card-title">Play ground</div>
            </div>
            <div className="card-body p-l-20 ">
              <p>
                Here is a useful sortable list that can be grouped and sorted by
                simply dragging and dropping even on a touch device
                <br />
                <br />
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="dd p-l-20" id="nestable">
                    <Nestable
                      className={"nestable-three"}
                      items={itemsThree}
                      renderItem={renderItem}
                      renderCollapseIcon={({ isCollapsed }) => (
                        <CollapseIcon isCollapsed={isCollapsed} />
                      )}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dd p-l-20" id="nestable2">
                    <Nestable
                      className={"nestable-four"}
                      items={itemsFour}
                      renderItem={renderItem}
                      renderCollapseIcon={({ isCollapsed }) => (
                        <CollapseIcon isCollapsed={isCollapsed} />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
      {/* START COPYRIGHT */}
      <Copyright
        year={"2014"}
        brand={"REVOX"}
        reserved={"All rights reserved."}
        terms={"Terms of use"}
        policy={"Privacy Policy"}
      />
      {/* END COPYRIGHT */}
      {/* END PAGE CONTENT */}
    </div>
  );
};

export default content;
