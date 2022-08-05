import React, { useState } from "react";

// import footer component
import Copyright from "../../ui/Footer/Copyright/Component";
import DataTable from "../../Tables/DataTable";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory from "react-bootstrap-table2-editor";
import Select from 'react-select';
import { Modal } from "react-responsive-modal";

import { tableOneColumns, tableTwoColumns, tableThreeColumns, tableThreeColumnsCbox } from "../../Tables/Data/Column";
import { tableOneData, tableTwoData, tableThreeData } from "../../Tables/Data/data";
//import ui widgets component
import ToolkitProvider, {
  CSVExport,
  Search,
} from "react-bootstrap-table2-toolkit";
import PageBreadcrumb from "../../UIElements/Breadcrumb";
import BootstrapTable from "react-bootstrap-table-next";
import Email from './Email'

import "./style.css";
// import "./style_email.css";
import "../../Tables/style.scss";
import StickUpModal from "./StickUpModal";
import QuillEditor from './QuillEditor'

import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";



const Content = () => {


  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [modalThree, setModalThree] = useState(false);



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
  const [isWindowModalOpen, setIsWindowModalOpen] = useState(false);


  const { ExportCSVButton } = CSVExport;
  const { SearchBar } = Search;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleShowTwo = () => setModalTwo(true);
  const handleCloseTwo = () => setModalTwo(false);

  const handleShowThree = () => setModalThree(true);
  const handleCloseThree = () => setModalThree(false);
  const [sel_file, setSel_file] = useState('')

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} entries
    </span>
  );

  const groupOptions = [
    { id: 1, name: 'Ict' },
    { id: 2, name: 'Web' }
  ];
  return (
    <>
      <StickUpModal
        visible={isWindowModalOpen}
        width={'800'}
        effect="fadeInUp"
      >
        <div className="modal-content-wrapper">
          <div className="modal-content">
            <div className="modal-top">
              <button
                aria-label=""
                type="button"
                className="close"
                onClick={() => setIsWindowModalOpen(false)}
                data-dismiss="modal"
                aria-hidden="true"
              >
                <i className="pg-icon">close</i>
              </button>
              <h5>
                Compose <span className="semi-bold">SMS</span>
              </h5>

            </div>
            <div className="modal-body">
              <div className="row p-4">
                <div className="col-md-12 no-padding">
                  <form id="form-project" role="form" autoComplete="off">
                    <div className="form-group-attached">
                      <div className="row clearfix">
                        <div className="col-md-6">
                          <div className="form-group form-group-default">
                            <label>to:</label>
                            <input name="to" data-role="tagsinput" className="form-control tagsinput" type="text" value="John Smith" onChange={() => { }} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-group-default">
                            <label>cc:</label>
                            <input type="text" className="form-control" name="cc" placeholder="Add Carbon Copy" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group form-group-default">
                        <label>Subject</label>
                        <input type="text" className="form-control" name="subject" />
                      </div>
                    </div>
                  </form>
                  <QuillEditor />
                  <div className="row  pt-3">
                    <div className="col-md-11 d-md-flex d-lg-flex d-xl-flex d-block align-items-start">
                      <div className="form-check d-flex m-t-5">
                        <input id="sendCC" type="checkbox" value="1" onChange={() => { }} />
                        <label className="d-none d-lg-block small-text" htmlFor="sendCC">Send a Carbon Copy to my Primary email address.</label>
                        <label className="d-md-none small-text" htmlFor="sendCC">Send me a CC</label>
                      </div>
                    </div>
                    <div className="col-md-1">
                      <button aria-label="" className="btn btn-complete btn-lg pull-right btn-icon-left"><i className="pg-icon">send</i>Send</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </StickUpModal>
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
                  New <span className="semi-bold">Contact</span>
                </h5>

              </div>
              <div className="modal-body">
                <form role="form">
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
                    <div className="col-sm-6">
                      <div className="form-group form-group-default">
                        <label>Email</label>
                        <input
                          id="appDescription"
                          type="email"
                          className="form-control"
                          value={descriptionInput}
                          onChange={(event) =>
                            setDescriptionInput(event.target.value)
                          }
                          placeholder="Enter email"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group form-group-default">
                        <label>Phone Number</label>
                        <input
                          id="appPrice"
                          type="text"
                          className="form-control"
                          value={priceInput}
                          onChange={(event) => setPriceInput(event.target.value)}
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group form-group-default">
                        <label>Folder Number</label>
                        <input
                          id="appDescription"
                          type="text"
                          className="form-control"
                          value={descriptionInput}
                          onChange={(event) =>
                            setDescriptionInput(event.target.value)
                          }
                          placeholder="Enter folder number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pull-right col-md-4 m-t-10 sm-m-t-10">
                    <button
                      aria-label=""
                      type="button"
                      className="btn btn-primary btn-block m-t-5"
                    >
                      Save
                    </button>
                  </div>
                </form>

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
                  New <span className="semi-bold">Group</span>
                </h5>

              </div>
              <div className="modal-body">
                <form role="form">
                  <div className="form-group-attached">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group form-group-default">
                          <label>Group Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-md-12">
                    <div className="p-t-20 clearfix p-l-10 p-r-10">
                      <div className="pull-left">
                        {/* <button
                        aria-label=""
                        type="button"
                        className="btn btn-danger  m-t-5"
                        onClick={()=>handleCloseTwo()}
                      >
                        Cancel
                      </button> */}
                      </div>
                      <div className="pull-right">
                        <button
                          aria-label=""
                          type="button"
                          className="btn btn-primary  m-t-5"
                        >
                          Create Group
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </StickUpModal>

        <StickUpModal
          visible={modalThree}
          width={'600'}
          effect="fadeInUp"
        >
          <div className="modal-content-wrapper">
            <div className="modal-content">
              <div className="modal-top">

                <div className="pull-right" style={{ cursor: 'pointer' }} onClick={() => handleCloseThree()}>
                  <i className="pg-icon" >close</i>
                </div>
                <h5>
                  Add <span className="semi-bold">{`Contact(s)`}</span>
                </h5>

              </div>
              <div className="modal-body">
                <form role="form">
                  <div className="form-group-attached">
                    <div className="row">
                      <div className="col-xl-12">
                        <div>
                          <Select
                            options={groupOptions}
                            name="group"
                            placeholder="Select Group"
                            // getOptionValue={option => option.id}
                            getOptionLabel={option => option.name}

                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="">
                  <div className="p-t-20 clearfix p-l-10 p-r-10">
                    <div className="pull-right">
                      <button
                        aria-label=""
                        type="button"
                        className="btn btn-primary  m-t-5"
                      >
                        Add Contact
                      </button>
                    </div>
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
              <li className="breadcrumb-item active">Dashboard</li>
            </PageBreadcrumb>

            <div className="row">

              <div className="col-lg-3 m-b-10">

                <div className="view-port clearfix" style={{ height: '30%' }} id="chat">
                  <div className="view bg-white">
                    <div className="navbar navbar-default">
                      <div className="navbar-inner">
                        <a onClick={() => handleShowTwo()} style={{ cursor: 'pointer' }} className=" action p-l-10 link text-color">
                          <i className="pg-icon" id="btnFillSizeToggler2" data-target="#modalFillIn" data-toggle="modal">add</i>
                        </a>
                        <div class="view-heading">
                          Groups
                          <div className="fs-11"></div>
                        </div>
                        <a href="#" className="action p-r-10 pull-right link text-color">
                          <i className="pg-icon ">more_horizontal</i>
                        </a>
                      </div>
                    </div>
                    <div data-init-list-view="ioslist" className="list-view boreded no-top-border"><h2 className="list-view-fake-header">
                     3 Groups</h2>
                      <div className="scroll-wrapper list-view-wrapper"
                      // style={{position:'absolute'}}
                      >
                        <div className="list-view-wrapper scroll-content" data-ios="false"
                        // style="height: 254.425px; margin-bottom: 0px; margin-right: 0px; max-height: none;"
                        >
                          <div className="list-view-group-container"
                          >

                            <div className="list-view-group-header text-uppercase">
                              Transitions</div>
                            <ul>
                              <li className="chat-user-list clearfix">
                                <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" data-toggle-view="#subView1" className="" href="#">
                                  <p className="p-l-10 col-xs-height col-middle col-xs-12 text-color">
                                    Lavona Erpelding
                                  </p>
                                </a>
                              </li>

                              <li className="chat-user-list clearfix">
                                <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" data-toggle-view="#subView1" href="#">
                                  <p className="p-l-10 col-xs-height col-middle col-xs-12 text-color">
                                    Eugena Braig
                                  </p>
                                </a>
                              </li>

                              <li className="chat-user-list clearfix">
                                <a data-view-animation="push-parrallax" data-view-port="#chat" data-navigate="view" data-toggle-view="#subView1" href="#">
                                  <p className="p-l-10 col-xs-height col-middle col-xs-12 text-color">
                                    Aaron Shimmin
                                  </p>
                                </a>
                              </li>

                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="scroll-element scroll-x" >
                        <div className="scroll-element_outer">
                          <div className="scroll-element_size"></div>
                          <div className="scroll-element_track"></div>
                          <div className="scroll-bar"
                          // style="width: 95px;"
                          ></div>
                        </div></div><div class="scroll-element scroll-y">
                        <div className="scroll-element_outer">
                          <div className="scroll-element_size"></div>
                          <div className="scroll-element_track"></div>
                          <div className="scroll-bar"
                          // style="height: 96px;"
                          >
                          </div></div></div></div>
                  </div>
                </div>

              </div>

              <div className="col-lg-9">
                <div className="mx-2 widget-11 widget-11-3 card no-border  widget-loader-bar">
                  <div className="card card-transparent">
                    <div className="card-header  d-flex justify-content-between">
                      {/* <div className="card-title">Table with export options</div> */}
                      <SearchBar
                        // {...props.searchProps}
                        style={{
                          width: "100%",
                          float: "left",
                          marginBottom: "5px",
                        }}
                      />
                      <div className="pull-right">
                        <div className="col-xs-12">
                          <button aria-label="" className="btn btn-link" onClick={() => handleShow()} ><i className="pg-icon">add</i></button>
                          <button aria-label="" className="btn btn-link" onClick={() => setIsWindowModalOpen(true)}
                          ><i className="pg-icon">send</i></button>
                          <button aria-label="" className="btn btn-link" onClick={() => handleShowThree()}><i className="pg-icon">menu_level</i></button>
                          {/* <span class="pg-menu-level"></span> */}
                        </div>
                      </div>
                      {/* <div className="export-options-container">
                      <div className="exportOptions">
                        <div className="DTTT btn-group"></div>
                      </div>
                    </div> */}
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
                            {/* <ExportCSVButton {...props.csvProps}>
                                     Export CSV
                           </ExportCSVButton> */}
                            {/* <SearchBar
                            {...props.searchProps}
                            style={{
                              width: "20%",
                              float: "left",
                              marginBottom: "5px",
                            }}
                          /> */}
                            <BootstrapTable
                              {...props.baseProps}
                              hover={true}

                              bootstrap4
                              bordered={false}
                              condensed={true}
                              striped={true}

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
                </div>
              </div>
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
    </>

  );
};

export default Content;
