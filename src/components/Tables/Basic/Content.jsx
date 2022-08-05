import React, { useState } from "react";

import { tableOneColumns, tableTwoColumns, tableThreeColumns } from "./Column";
import { tableOneData, tableTwoData, tableThreeData } from "./data";
import DataTable from "../DataTable";
import PageBreadcrumb from "../../UIElements/Breadcrumb";
import PageContainer from "../../UIElements/Containers";
import PageScroll from "../../UIElements/PageScroll";
import Copyright from "../../ui/Footer/Copyright";

import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import "../style.scss";

const content = ({ path }) => {
  const [dataOne] = useState(tableOneData);
  const [columnsOne] = useState(tableOneColumns);

  const [dataTwo] = useState(tableTwoData);
  const [columnsTwo] = useState(tableTwoColumns);

  const [dataThree] = useState(tableThreeData);
  const [columnsThree] = useState(tableThreeColumns);

  const [tableFour, setTableFour] = useState([false, false, false, false]);

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content ">
        <div className="jumbotron" data-pages="parallax">
          <PageContainer
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "sm-p-l-0 sm-p-r-0 container p-l-10"
                : " sm-p-l-0 sm-p-r-0"
            }
          >
            <PageScroll>
              <PageBreadcrumb>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li className="breadcrumb-item active">Basic Tables</li>
              </PageBreadcrumb>
              <div className="row">
                <div className="col-xl-7 col-lg-6 ">
                  <div className="full-height">
                    <div className="card-body text-center">
                      <img
                        className="image-responsive-height demo-mw-600"
                        src={
                          process.env.PUBLIC_URL + "/assets/img/demo/tables.jpg"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 ">
                  <div className="card card-transparent">
                    <div className="card-header ">
                      <div className="card-title">Getting started</div>
                    </div>
                    <div className="card-body">
                      <h3>It only takes a glance.</h3>
                      <p>
                        Simplicity and user-friendliness define our stylized
                        Tables, with the layout enabling an observer to grasp
                        the basic information at a glance.{" "}
                      </p>
                      <br />
                      <button
                        aria-label=""
                        className="btn btn-primary btn-cons"
                      >
                        More
                      </button>
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
              ? "bg-white container"
              : " bg-white"
          }
        >
          <div className="card card-transparent">
            <div className="card-header ">
              <div className="card-title">Pages Default Tables Style</div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <div
                  id="basicTable_wrapper"
                  className="dataTables_wrapper no-footer"
                >
                  <DataTable
                    keyField="title"
                    bootstrap4
                    data={dataOne}
                    columns={columnsOne}
                    hover={true}
                    bordered={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </PageContainer>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Pages Striped Tables</div>
                  <div className="tools"></div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <div
                      id="stripedTable_wrapper"
                      className="dataTables_wrapper no-footer"
                    >
                      <DataTable
                        keyField="title"
                        bootstrap4
                        data={dataTwo}
                        striped={true}
                        condensed={true}
                        columns={columnsTwo}
                        hover={true}
                        bordered={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Pages condensed Table</div>
                  <div className="tools"></div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <div
                      id="condensedTable_wrapper"
                      className="dataTables_wrapper no-footer"
                    >
                      <DataTable
                        keyField="title"
                        bootstrap4
                        data={dataThree}
                        columns={columnsThree}
                        hover={true}
                        bordered={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </PageContainer>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <div className="row">
            <div className="col-lg-8">
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Pages detailed view table</div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <div
                      id="detailedTable_wrapper"
                      className="dataTables_wrapper no-footer"
                    >
                      <table
                        className="table table-hover table-condensed table-detailed dataTable no-footer"
                        id="detailedTable"
                        role="grid"
                      >
                        <thead>
                          <tr role="row">
                            <th
                              style={{ width: "25%" }}
                              className="sorting_disabled"
                              rowSpan="1"
                              colSpan="1"
                            >
                              Title
                            </th>
                            <th
                              style={{ width: "166px" }}
                              className="sorting_disabled"
                              rowSpan="1"
                              colSpan="1"
                            >
                              Status
                            </th>
                            <th
                              style={{ width: "166px" }}
                              className="sorting_disabled"
                              rowSpan="1"
                              colSpan="1"
                            >
                              Price
                            </th>
                            <th
                              style={{ width: "165px" }}
                              className="sorting_disabled"
                              rowSpan="1"
                              colSpan="1"
                            >
                              Last Update
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            role="row"
                            className={`odd ${tableFour[0] ? "shown" : ""}`}
                            onClick={() =>
                              setTableFour((prevState) => {
                                let [, ...rest] = prevState;
                                return [!prevState[0], ...rest];
                              })
                            }
                          >
                            <td className="v-align-middle semi-bold">
                              Revolution Begins
                            </td>
                            <td className="v-align-middle">Active</td>
                            <td className="v-align-middle semi-bold">
                              40,000 USD
                            </td>
                            <td className="v-align-middle">April 13, 2014</td>
                          </tr>
                          <tr
                            className="row-details"
                            style={tableFour[0] ? {} : { display: "none" }}
                          >
                            <td colSpan="4">
                              <table className="table table-inline">
                                <tbody>
                                  <tr>
                                    <td>
                                      Learn from real test data{" "}
                                      <span className="label label-important">
                                        ALERT!
                                      </span>
                                    </td>
                                    <td>USD 1000</td>
                                  </tr>
                                  <tr>
                                    <td>PSDs included</td>
                                    <td>USD 3000</td>
                                  </tr>
                                  <tr>
                                    <td>Extra info</td>
                                    <td>USD 2400</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr
                            role="row"
                            className={`even ${tableFour[1] ? "shown" : ""}`}
                            onClick={() =>
                              setTableFour((prevState) => {
                                return [false, !prevState[1], false, false];
                              })
                            }
                          >
                            <td className="v-align-middle semi-bold">
                              Revolution Begins
                            </td>
                            <td className="v-align-middle">Active</td>
                            <td className="v-align-middle semi-bold">
                              70,000 USD
                            </td>
                            <td className="v-align-middle">April 13, 2014</td>
                          </tr>
                          <tr
                            className="row-details"
                            style={tableFour[1] ? {} : { display: "none" }}
                          >
                            <td colSpan="4">
                              <table className="table table-inline">
                                <tbody>
                                  <tr>
                                    <td>
                                      Learn from real test data{" "}
                                      <span className="label label-important">
                                        ALERT!
                                      </span>
                                    </td>
                                    <td>USD 1000</td>
                                  </tr>
                                  <tr>
                                    <td>PSDs included</td>
                                    <td>USD 3000</td>
                                  </tr>
                                  <tr>
                                    <td>Extra info</td>
                                    <td>USD 2400</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr
                            role="row"
                            className={`odd ${tableFour[2] ? "shown" : ""}`}
                            onClick={() =>
                              setTableFour((prevState) => {
                                return [false, false, !prevState[2], false];
                              })
                            }
                          >
                            <td className="v-align-middle semi-bold">
                              Revolution Begins
                            </td>
                            <td className="v-align-middle">Active</td>
                            <td className="v-align-middle semi-bold">
                              20,000 USD
                            </td>
                            <td className="v-align-middle">April 13, 2014</td>
                          </tr>
                          <tr
                            className="row-details"
                            style={tableFour[2] ? {} : { display: "none" }}
                          >
                            <td colSpan="4">
                              <table className="table table-inline">
                                <tbody>
                                  <tr>
                                    <td>
                                      Learn from real test data{" "}
                                      <span className="label label-important">
                                        ALERT!
                                      </span>
                                    </td>
                                    <td>USD 1000</td>
                                  </tr>
                                  <tr>
                                    <td>PSDs included</td>
                                    <td>USD 3000</td>
                                  </tr>
                                  <tr>
                                    <td>Extra info</td>
                                    <td>USD 2400</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr
                            role="row"
                            className={`even ${tableFour[3] ? "shown" : ""}`}
                            onClick={() =>
                              setTableFour((prevState) => {
                                return [false, false, false, !prevState[3]];
                              })
                            }
                          >
                            <td className="v-align-middle semi-bold">
                              Revolution Begins
                            </td>
                            <td className="v-align-middle">Active</td>
                            <td className="v-align-middle semi-bold">
                              90,000 USD
                            </td>
                            <td className="v-align-middle">April 13, 2014</td>
                          </tr>
                          <tr
                            className="row-details"
                            style={tableFour[3] ? {} : { display: "none" }}
                          >
                            <td colSpan="4">
                              <table className="table table-inline">
                                <tbody>
                                  <tr>
                                    <td>
                                      Learn from real test data{" "}
                                      <span className="label label-important">
                                        ALERT!
                                      </span>
                                    </td>
                                    <td>USD 1000</td>
                                  </tr>
                                  <tr>
                                    <td>PSDs included</td>
                                    <td>USD 3000</td>
                                  </tr>
                                  <tr>
                                    <td>Extra info</td>
                                    <td>USD 2400</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
