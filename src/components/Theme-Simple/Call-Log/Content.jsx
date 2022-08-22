import React, { useState } from "react";

// import footer component
import Copyright from "../../ui/Footer/Copyright/Component";
import DataTable from "../../Tables/DataTable";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory from "react-bootstrap-table2-editor";

import { tableOneColumns, tableTwoColumns, tableThreeColumns ,tableThreeColumnsCbox} from "../../Tables/Data/Column";
import { tableOneData, tableTwoData, tableThreeData } from "../../Tables/Data/data";
//import ui widgets component
import ToolkitProvider, {
  CSVExport,
  Search,
} from "react-bootstrap-table2-toolkit";

import PageBreadcrumb from "../../UIElements/Breadcrumb";
import BootstrapTable from "react-bootstrap-table-next";
import Modal from "react-bootstrap/Modal";


import "./style.css";
import "../../Tables/style.scss";
import StickUpModal from "./StickUpModal";


import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";



const Content = () => {


  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const progress = (
    <React.Fragment>
      <div
        className="card-progress"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", display: "block" }}
      ></div>
    </React.Fragment>
  );

  const [dataThree] = useState(tableThreeData);
  const [columnsThree] = useState(tableThreeColumnsCbox);

  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [notesInput, setNotesInput] = useState("");

  const { ExportCSVButton } = CSVExport;
  const { SearchBar } = Search;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleShowTwo = () => setModalTwo(true);
  const handleCloseTwo = () => setModalTwo(false);
  const [sel_file, setSel_file] = useState('')

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} entries
    </span>
  );


  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <StickUpModal
        visible={show}
        width={'600'}
        effect="fadeInUp"
      >
        <div className="modal-content-wrapper">
          <div className="modal-content">
            <div className="modal-top">

              <div className="pull-right" style={{ cursor: 'pointer' }} onClick={() => handleClose()}>
                <i className="pg-icon" >close</i>
              </div>
              <h5>
                New <span className="semi-bold">App</span>
              </h5>
              <p className="p-b-10">
                Create a new app using this form, make sure you fill them all
              </p>
            </div>
            <div className="modal-body">
              <form role="form">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group form-group-default">
                      <label>Project</label>
                      <input
                        id="appName"
                        type="text"
                        className="form-control"
                        value={nameInput}
                        onChange={(event) => setNameInput(event.target.value)}
                        placeholder="Enter name of  project"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group form-group-default">
                      <label>First Name</label>
                      <input
                        id="appPrice"
                        type="text"
                        className="form-control"
                        value={priceInput}
                        onChange={(event) => setPriceInput(event.target.value)}
                        placeholder="Enter first name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group form-group-default">
                      <label>Last Name</label>
                      <input
                        id="appNotes"
                        type="text"
                        className="form-control"
                        value={notesInput}
                        onChange={(event) => setNotesInput(event.target.value)}
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group form-group-default">
                      <label>Password</label>
                      <input
                        id="appDescription"
                        type="password"
                        className="form-control"
                        value={descriptionInput}
                        onChange={(event) =>
                          setDescriptionInput(event.target.value)
                        }
                        placeholder="Enter password"
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
                  <div className="col-sm-12">
                    <div className="form-group form-group-default">
                      <label>Disabled</label>
                      <input
                        id="appDescription"
                        type="text"
                        className="form-control"
                        value={descriptionInput}
                        onChange={(event) =>
                          setDescriptionInput(event.target.value)
                        }
                        placeholder="Tell us more about it"
                        disabled
                      />
                    </div>
                  </div>
                </div>

              </form>
              <div className="row">
                <div className="col-md-8">
                  <div className="p-t-20 clearfix p-l-10 p-r-10">
                    <div className="pull-left">
                      <p className="bold font-montserrat text-uppercase">
                        TOTAL
                      </p>
                    </div>
                    <div className="pull-right">
                      <p className="bold font-montserrat text-uppercase">
                        $20.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 m-t-10 sm-m-t-10">
                  <button
                    aria-label=""
                    type="button"
                    className="btn btn-primary btn-block m-t-5"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StickUpModal>
      <StickUpModal
        visible={modalTwo}
        width={'600'}
        effect="fadeInUp"
      >
        <div className="modal-content-wrapper">
          <div className="modal-content">
            <div className="modal-top">

              <div className="pull-right" style={{ cursor: 'pointer' }} onClick={() => handleCloseTwo()}>
                <i className="pg-icon" >close</i>
              </div>
              <h5>
                New <span className="semi-bold">Ticket</span>
              </h5>
              <p className="p-b-10">
                We need ticket information inorder to process your ticket
              </p>
            </div>
            <div className="modal-body">
              <form role="form">
                <div className="form-group-attached">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group form-group-default">
                        <label>Company Name</label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="form-group form-group-default">
                        <label>Card Number</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group form-group-default">
                        <label>Card Holder</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-md-8">
                  <div className="p-t-20 clearfix p-l-10 p-r-10">
                    <div className="pull-left">
                      <p className="bold font-montserrat text-uppercase">
                        TOTAL
                      </p>
                    </div>
                    <div className="pull-right">
                      <p className="bold font-montserrat text-uppercase">
                        $20.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 m-t-10 sm-m-t-10">
                  <button
                    aria-label=""
                    type="button"
                    className="btn btn-primary btn-block m-t-5"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StickUpModal>

      <div className="content sm-gutter">
        <div className="sm-padding-10">

          <PageBreadcrumb className='jumbotron mb-4'>
            <li className="breadcrumb-item">
              <a href="javascript:void(0);">Home</a>
            </li>
            <li className="breadcrumb-item active">Call Logs</li>
          </PageBreadcrumb>
        
          <div className="row">

          
          </div>
        </div>
      </div>

      <Copyright
        year={"2014"}
        brand={"REVOX"}
        reserved={"All rights reserved."}
        terms={"Terms of use"}
        policy={"Privacy Policy"}
      />
      {/* END COPYRIGHT */}
    </div>
  );
};

export default Content;
