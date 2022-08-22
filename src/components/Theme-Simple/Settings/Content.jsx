import React, { useState } from "react";

// import footer component
import Copyright from "../../ui/Footer/Copyright/Component";

//import ui widgets component

// import MapWidget from "../../ui/widget/MapWidget/Component";
import plusSVG from "../../../assets/img/plus.svg";
import StickUpModal from "./StickUpModal";

import PageBreadcrumb from "../../UIElements/Breadcrumb";
// import "react-responsive-modal/styles.css";
// import "./css/FullWindowModalStyle.css";

import "./style.css";
import { TabContent, TabPane } from "reactstrap";

const Content = () => {
  const progress = (
    <React.Fragment>
      <div
        className="card-progress"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", display: "block" }}
      ></div>
    </React.Fragment>
  );

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    setActiveTab(tab);
  };

  const [refreshOne, setRefreshOne] = useState(false);
  const [refreshTwo, setRefreshTwo] = useState(false);
  const [refreshThree, setRefreshThree] = useState(false);
  const [refreshFour, setRefreshFour] = useState(false);
  const [refreshFive, setRefreshFive] = useState(false);
  const [refreshSix, setRefreshSix] = useState(false);
  const [refreshSeven, setRefreshSeven] = useState(false);
  const [refreshEight, setRefreshEight] = useState(false);
  const [refreshNine, setRefreshNine] = useState(false);
  const [refreshTen, setRefreshTen] = useState(false);
  const [refreshEleven, setRefreshEleven] = useState(false);
  const [refreshTwelve, setRefreshTwelve] = useState(false);
  const [refreshThirteen, setRefreshThirteen] = useState(false);

  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content sm-gutter">
        <div className="sm-padding-10">
          <PageBreadcrumb className="jumbotron mb-4">
            <li className="breadcrumb-item">
              <a href="javascript:void(0);">Home</a>
            </li>
            <li className="breadcrumb-item active">Settings</li>
          </PageBreadcrumb>
          {/* Start */}
          <div className="container-fluid full-height no-padding">
            <div className="row full-height no-margin">
              <div className="col-md-3 b-grey sm-b-b full-height">
                <div className="bg-white full-height">
                  <div
                    className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
                    //  style="/* width: 380px; */"
                  >
                    <div className="list-group list-group-flush border-bottom scrollarea">
                      <a
                        href="#"
                        className={`list-group-item list-group-item-action py-3 lh-tight ${
                          activeTab === "1" ? "active" : ""
                        }`}
                        aria-selected={`${
                          activeTab === "1" ? "true" : "false"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggle("1");
                        }}
                      >
                        <div className="d-flex w-100 align-items-center justify-content-between">
                          <strong className="mb-1">Users</strong>
                          <small>Wed</small>
                        </div>
                      </a>
                      <a
                        href="#"
                        className={`list-group-item list-group-item-action py-3 lh-tight ${
                          activeTab === "2" ? "active" : ""
                        }`}
                        aria-selected={`${
                          activeTab === "2" ? "true" : "false"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggle("2");
                        }}
                      >
                        <div className="d-flex w-100 align-items-center justify-content-between">
                          <strong className="mb-1">
                            List group item heading
                          </strong>
                          <small className="text-muted">Tues</small>
                        </div>
                      </a>
                      <a
                        href="#"
                        className={`list-group-item list-group-item-action py-3 lh-tight ${
                          activeTab === "3" ? "active" : ""
                        }`}
                        aria-selected={`${
                          activeTab === "3" ? "true" : "false"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggle("3");
                        }}
                      >
                        <div className="d-flex w-100 align-items-center justify-content-between">
                          <strong className="mb-1">
                            List group item heading
                          </strong>
                          <small className="text-muted">Mon</small>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <TabContent activeTab={activeTab}>
                  <TabPane className="no-padding" tabId="1">
                    <div class="container-fixed-lg  ">
                      <div class="card card-transparent">
                        <div class="card-header ">
                          <div class="card-title">Table with Dynamic Rows</div>
                          <div class="pull-right">
                            <div class="col-xs-12">
                              <button
                                aria-label=""
                                id="show-modal"
                                class="btn btn-primary btn-cons"
                              >
                                <i class="pg-icon">add</i> Add row
                              </button>
                            </div>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <div class="card-body p-0">
                          <div class="react-bootstrap-table">
                            <table class="table table-hover table-sm">
                              <thead>
                                <tr>
                                  <th
                                    tabindex="0"
                                    aria-label="APP NAME sortable"
                                    class="sortable"
                                    style={{backgroundColor: "rgba(240, 240, 240, 0.45)"}}
                                  >
                                    APP NAME<span class="order-4"></span>
                                  </th>
                                  <th
                                    tabindex="0"
                                    title="DESCRIPTION"
                                    aria-label="DESCRIPTION sortable"
                                    class="sortable"
                                    style={{backgroundColor: "rgba(240, 240, 240, 0.45)"}}
                                  >
                                    DESCRIPTION<span class="order-4"></span>
                                  </th>
                                  <th
                                    tabindex="0"
                                    title="DESCRIPTION"
                                    aria-label="DESCRIPTION sortable"
                                    class="sortable"
                                    style={{backgroundColor: "rgba(240, 240, 240, 0.45)"}}
                                  >
                                    DESCRIPTION<span class="order-4"></span>
                                  </th>
                                  <th
                                    tabindex="0"
                                    title="PRICE"
                                    aria-label="PRICE sortable"
                                    class="sortable"
                                    style={{backgroundColor: "rgba(240, 240, 240, 0.45)"}}
                                  >
                                    PRICE<span class="order-4"></span>
                                  </th>
                                  <th
                                    tabindex="0"
                                    title="NOTES"
                                    style={{backgroundColor: "rgba(240, 240, 240, 0.45)"}}
                                  >
                                    NOTES
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Angry Birds</td>
                                  <td>Description goes here</td>
                                  <td>Description goes here</td>
                                  <td>FREE</td>
                                  <td>
                                    <i class="pg-icon m-1">refresh</i>
                                    <i class="pg-icon m-1">user</i>
                                    <i class="pg-icon m-1">disable</i>
                                    <i class="pg-icon m-1">edit</i>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Facebook</td>
                                  <td>Description goes here</td>
                                  <td>Description goes here</td>
                                  <td>FREE</td>
                                  <td>
                                    <i class="pg-icon m-1">refresh</i>
                                    <i class="pg-icon m-1">user</i>
                                    <i class="pg-icon m-1">disable</i>
                                    <i class="pg-icon m-1">edit</i>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Foursquare</td>
                                  <td>Description goes here</td>
                                  <td>Description goes here</td>
                                  <td>FREE</td>
                                  <td>
                                    <i class="pg-icon m-1">refresh</i>
                                    <i class="pg-icon m-1">user</i>
                                    <i class="pg-icon m-1">disable</i>
                                    <i class="pg-icon m-1">edit</i>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Hyperlapse</td>
                                  <td>Description goes here</td>
                                  <td>Description goes here</td>
                                  <td>FREE</td>
                                  <td>
                                    <i class="pg-icon m-1">refresh</i>
                                    <i class="pg-icon m-1">user</i>
                                    <i class="pg-icon m-1">disable</i>
                                    <i class="pg-icon m-1">edit</i>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Twitter</td>
                                  <td>Description goes here</td>
                                  <td>Description goes here</td>
                                  <td>FREE</td>
                                  <td>
                                    <i class="pg-icon m-1">refresh</i>
                                    <i class="pg-icon m-1">user</i>
                                    <i class="pg-icon m-1">disable</i>
                                    <i class="pg-icon m-1">edit</i>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="row react-bootstrap-table-pagination">
                            <div class="col-md-6 col-xs-6 col-sm-6 col-lg-6">
                              <span class="react-bootstrap-table-pagination-total">
                                Showing 1 to 5 of 5 entries
                              </span>
                            </div>
                            <div class="react-bootstrap-table-pagination-list col-md-6 col-xs-6 col-sm-6 col-lg-6">
                              <ul class="pagination react-bootstrap-table-page-btns-ul">
                                <li class="active page-item" title="1">
                                  <a href="#" class="page-link">
                                    1
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane className="no-padding" tabId="2">
                    {/* <Alerts /> */}bbbbbbbbb
                  </TabPane>
                  <TabPane className="no-padding" tabId="3">
                    {/* <Chat /> */}cccccccc
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>

          {/* End */}
        </div>
      </div>
      {/* END PAGE CONTENT */}
      {/* START COPYRIGHT */}
      <Copyright
        year={"2014"}
        brand={"ANEWIT"}
        reserved={"All rights reserved."}
        terms={"Terms of use"}
        policy={"Privacy Policy"}
      />
      {/* END COPYRIGHT */}
    </div>
  );
};

export default Content;
