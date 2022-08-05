import React, { useState } from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  CSVExport,
  Search,
} from "react-bootstrap-table2-toolkit";
import cellEditFactory from "react-bootstrap-table2-editor";
import Modal from "react-bootstrap/Modal";
import BootstrapTable from "react-bootstrap-table-next";

import { tableTwoData, tableThreeData, tableOneData } from "./data";
import { tableThreeColumns, tableTwoColumns, tableOneColumns } from "./Column";
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
  const [dataTwo, setDataTwo] = useState(tableTwoData);
  const [dataThree] = useState(tableThreeData);

  const [columnsOne] = useState(tableOneColumns);
  const [columnsTwo] = useState(tableTwoColumns);
  const [columnsThree] = useState(tableThreeColumns);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [notesInput, setNotesInput] = useState("");

  const { ExportCSVButton } = CSVExport;
  const { SearchBar } = Search;

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} entries
    </span>
  );

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content ">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <h4 className="p-b-5">
              <span className="semi-bold">New</span> App
            </h4>
          </Modal.Header>
          <Modal.Body>
            <p className="small-text">
              Create a new app using this form, make sure you fill them all
            </p>
            <form role="form">
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group form-group-default">
                    <label>name</label>
                    <input
                      id="appName"
                      type="text"
                      className="form-control"
                      value={nameInput}
                      onChange={(event) => setNameInput(event.target.value)}
                      placeholder="Name of your app"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group form-group-default">
                    <label>Description</label>
                    <input
                      id="appDescription"
                      type="text"
                      className="form-control"
                      value={descriptionInput}
                      onChange={(event) =>
                        setDescriptionInput(event.target.value)
                      }
                      placeholder="Tell us more about it"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group form-group-default">
                    <label>Price</label>
                    <input
                      id="appPrice"
                      type="text"
                      className="form-control"
                      value={priceInput}
                      onChange={(event) => setPriceInput(event.target.value)}
                      placeholder="your price"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group form-group-default">
                    <label>Notes</label>
                    <input
                      id="appNotes"
                      type="text"
                      className="form-control"
                      value={notesInput}
                      onChange={(event) => setNotesInput(event.target.value)}
                      placeholder="a note"
                    />
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              aria-label=""
              id="add-app"
              type="button"
              className="btn btn-primary  btn-cons"
              onClick={() => {
                setDataTwo((prevState) => [
                  {
                    appName: nameInput,
                    description: descriptionInput,
                    price: priceInput,
                    notes: notesInput,
                  },
                  ...prevState,
                ]);
                handleClose();
                setNameInput("");
                setDescriptionInput("");
                setPriceInput("");
                setNotesInput("");
              }}
            >
              Add
            </button>
            <button
              aria-label=""
              type="button"
              className="btn btn-cons"
              data-dismiss="modal"
              onClick={() => {
                handleClose();
                setNameInput("");
                setDescriptionInput("");
                setPriceInput("");
                setNotesInput("");
              }}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>

        <div className="jumbotron" data-pages="parallax">
          <PageContainer
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "container p-l-10 sm-p-r-0"
                : "sm-p-l-0 sm-p-r-0 "
            }
          >
            <PageScroll>
              <PageBreadcrumb>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li className="breadcrumb-item active">Data Tables</li>
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
                      <h3>Easier than finding a needle in the haystack.</h3>
                      <p>
                        Sharing the same stylized design layout, these tables
                        allow for the effective compilation and organization of
                        data with easy access and maneuverability for users.{" "}
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
              ? "container bg-white"
              : "bg-white "
          }
        >
          <div className="card card-transparent">
            <div className="card-header ">
              <div className="card-title">Pages Default Tables Style</div>
              <div className="clearfix"></div>
            </div>
            <div className="card-body">
              <ToolkitProvider
                keyField="title"
                bootstrap4
                data={dataOne}
                columns={columnsOne}
                search
              >
                {(props) => (
                  <React.Fragment>
                    <SearchBar
                      {...props.searchProps}
                      style={{
                        width: "20%",
                        float: "right",
                        marginBottom: "5px",
                      }}
                    />
                    <DataTable
                      {...props.baseProps}
                      striped={false}
                      hover={true}
                      bordered={false}
                      condensed={true}
                      scroll={false}
                      pagination={paginationFactory({
                        hideSizePerPage: true,
                        hidePageListOnlyOnePage: true,
                        showTotal: true,
                        paginationTotalRenderer: customTotal,
                      })}
                    />
                  </React.Fragment>
                )}
              </ToolkitProvider>
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
          <div className="card card-transparent">
            <div className="card-header ">
              <div className="card-title">Table with Dynamic Rows</div>
              <div className="pull-right">
                <div className="col-xs-12">
                  <button
                    aria-label=""
                    id="show-modal"
                    className="btn btn-primary btn-cons"
                    onClick={() => handleShow()}
                  >
                    <i className="pg-icon">add</i> Add row
                  </button>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="card-body">
              <ToolkitProvider
                keyField="appName"
                bootstrap4
                data={dataTwo}
                columns={columnsTwo}
              >
                {(props) => (
                  <React.Fragment>
                    <DataTable
                      {...props.baseProps}
                      hover={true}
                      bordered={false}
                      condensed={true}
                      key={"key2"}
                      pagination={paginationFactory({
                        hideSizePerPage: true,
                        hidePageListOnlyOnePage: false,
                        showTotal: true,
                        paginationTotalRenderer: customTotal,
                      })}
                      cellEdit={cellEditFactory({
                        mode: "click",
                        blurToSave: true,
                      })}
                    />
                  </React.Fragment>
                )}
              </ToolkitProvider>
            </div>
          </div>
        </PageContainer>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "bg-white container"
              : " "
          }
        >
          <div className="card card-transparent">
            <div className="card-header  d-flex justify-content-between">
              <div className="card-title">Table with export options</div>
              <div className="export-options-container">
                <div className="exportOptions">
                  <div className="DTTT btn-group"></div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <ToolkitProvider
                keyField="renderingEngine"
                data={dataThree}
                columns={columnsThree}
                exportCSV={{
                  fileName: "table-data.csv",
                  separator: "|",
                  ignoreHeader: false,
                  noAutoBOM: false,
                }}
              >
                {(props) => (
                  <React.Fragment>
                    <ExportCSVButton {...props.csvProps}>
                      Export CSV
                    </ExportCSVButton>
                    <BootstrapTable
                      {...props.baseProps}
                      hover={true}
                      bootstrap4
                      bordered={false}
                      condensed={true}
                      striped={true}
                      pagination={paginationFactory()}
                      cellEdit={cellEditFactory({
                        mode: "click",
                        blurToSave: true,
                      })}
                    />
                  </React.Fragment>
                )}
              </ToolkitProvider>
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
