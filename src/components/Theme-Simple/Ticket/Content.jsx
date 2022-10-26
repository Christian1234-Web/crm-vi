import React, { useCallback, useState } from "react";

// import footer component
import Copyright from "../../ui/Footer/Copyright/Component";
import Select, { components } from "react-select";

//import ui widgets component

// import MapWidget from "../../ui/widget/MapWidget/Component";
import plusSVG from "../../../assets/img/plus.svg";
import StickUpModal from "./StickUpModal";

import PageBreadcrumb from "../../UIElements/Breadcrumb";
// import "react-responsive-modal/styles.css";
// import "./css/FullWindowModalStyle.css";

import "./style.css";
import {
  alaskanOptions,
  colourOptions,
  timezonegroupedOptions,
} from "../../Forms/Elements/selectData";
import GroupSelect from "../../Forms/Elements/GroupSelect";
import { Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import SSRStorage from "../../../services/storage";
import { TOKEN_COOKIE, USER_NAME } from "../../../services/constants";
import axios from "axios";

const storage = new SSRStorage();

const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

const alaskaOptions = [
  { value: "AK", label: "Alaska" },
  { value: "HW", label: "Hawaii" },
];

const timeOptions = [
  {
    label: "Complain",
  },
  {
    label: "Enquiry",
  },
  {
    label: "Request",
  },
];

const categoryOptions = [
  {
    label: "Complain",
  },
  {
    label: "Enquiry",
  },
  {
    label: "Request",
  },
];

const Content = () => {
  const progress = (
    <React.Fragment>
      <div
        className="card-progress"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", display: "block" }}
      ></div>
    </React.Fragment>
  );

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

  const [typeheadTextFields, setTypeHeadTextFields] = useState([
    false,
    false,
    false,
  ]);

  const [usersToTag, setUsersToTag] = useState(null)

  const formatGroupLabel = (data) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
    </div>
  );

  const CaretDownIcon = () => {
    return <FontAwesomeIcon icon="caret-down" />;
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    );
  };

  const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  let focusColor = "1px solid #7252D3";
  function setFocusColor(theme) {
    focusColor = theme;
  }

  useEffect(() => {
    const fetchUserTag = async () => {
      try {
        const user = await storage.getItem(USER_NAME);
        const token = await storage.getItem(TOKEN_COOKIE);
        const company = await axios.get(
          `https://deda-crm-backend.herokuapp.com/user/findone/${user.id}`
        );

        if(company?.data.success){
            const rs = await axios.get(
          `https://deda-crm-backend.herokuapp.com/company/${company?.data?.result?.company?.id}`
        );
        setUsersToTag(rs?.data?.result.users.map(user => ({
          label: user.userName
        })))
        }
      } catch (err) {
        console.log("fetch bundle err", err);
      }
    }
    fetchUserTag()
  }, [])

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <StickUpModal visible={modalOne} width={"600"} effect="fadeInUp">
        <div className="modal-content-wrapper">
          <div className="modal-content">
            <div className="modal-top">
              <div
                className="pull-right"
                style={{ cursor: "pointer" }}
                onClick={() => setModalOne(false)}
              >
                <i className="pg-icon">close</i>
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
                        <label>Patient ID</label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <div className=" form-control ">
                        <label>Users to Tag</label>
                        {/* <input type="text" className="form-control" /> */}
                        <div
                          className="col-md-12 form-group"
                          style={{ padding: "0px" }}
                        >
                          <div
                            onClick={() =>
                              setTypeHeadTextFields([false, false, false])
                            }
                          >
                            {/* <GroupSelect /> */}
                            <Select
                              // defaultValue={alaskaOptions[0]}
                              options={usersToTag}
                              formatGroupLabel={formatGroupLabel}
                              components={{
                                DropdownIndicator,
                                IndicatorSeparator: () => null,
                              }}
                              styles={{
                                dropdownIndicator: (provided, state) => ({
                                  ...provided,
                                  transform:
                                    state.selectProps.menuIsOpen &&
                                    "rotate(180deg)",
                                  marginRight: "5px",
                                }),
                                control: (provided, state) => ({
                                  ...provided,
                                  borderRadius: "2px",
                                  borderWidth: "1px",
                                  border: state.isFocused
                                    ? focusColor
                                    : "default",
                                  "&:hover": {
                                    border: state.isFocused
                                      ? focusColor
                                      : "default",
                                  },
                                  boxShadow: "none",
                                  maxHeight: "35px",
                                  minHeight: "20px",
                                }),
                                groupHeading: (provided) => ({
                                  ...provided,
                                  color: "#212121",
                                  fontSize: "13px",
                                  fontWeight: "bold",
                                  textTransform: "none",
                                }),
                                option: (provided, state) => ({
                                  ...provided,
                                  marginLeft: "10px",
                                  width: "95%",
                                  color: "default",
                                  cursor: "pointer",
                                  "&:active": {
                                    backgroundColor: "rgba(33, 33, 33, 0.07)",
                                  },
                                  backgroundColor: state.isSelected
                                    ? "rgba(33, 33, 33, 0.07)"
                                    : "default",
                                  backgroundColor: state.isFocused
                                    ? "rgba(33, 33, 33, 0.07)"
                                    : "default",
                                  borderRadius: "3px",
                                }),
                                menu: (provided) => ({
                                  ...provided,
                                  marginTop: "1px",
                                  borderTopLeftRadius: "0px",
                                  borderTopRightRadius: "0px",
                                }),
                              }}
                            />
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-control">
                        <label>Category</label>
                        <div
                          className="col-md-12 form-group"
                          style={{ padding: "0px" }}
                        >
                          <div
                            onClick={() =>
                              setTypeHeadTextFields([false, false, false])
                            }
                          >
                            <Select
                              // defaultValue={alaskaOptions[0]}
                              options={categoryOptions}
                              formatGroupLabel={formatGroupLabel}
                              components={{
                                DropdownIndicator,
                                IndicatorSeparator: () => null,
                              }}
                              styles={{
                                dropdownIndicator: (provided, state) => ({
                                  ...provided,
                                  transform:
                                    state.selectProps.menuIsOpen &&
                                    "rotate(180deg)",
                                  marginRight: "5px",
                                }),
                                control: (provided, state) => ({
                                  ...provided,
                                  borderRadius: "2px",
                                  borderWidth: "1px",
                                  border: state.isFocused
                                    ? focusColor
                                    : "default",
                                  "&:hover": {
                                    border: state.isFocused
                                      ? focusColor
                                      : "default",
                                  },
                                  boxShadow: "none",
                                  maxHeight: "35px",
                                  minHeight: "20px",
                                }),
                                groupHeading: (provided) => ({
                                  ...provided,
                                  color: "#212121",
                                  fontSize: "13px",
                                  fontWeight: "bold",
                                  textTransform: "none",
                                }),
                                option: (provided, state) => ({
                                  ...provided,
                                  marginLeft: "10px",
                                  width: "95%",
                                  color: "default",
                                  cursor: "pointer",
                                  "&:active": {
                                    backgroundColor: "rgba(33, 33, 33, 0.07)",
                                  },
                                  backgroundColor: state.isSelected
                                    ? "rgba(33, 33, 33, 0.07)"
                                    : "default",
                                  backgroundColor: state.isFocused
                                    ? "rgba(33, 33, 33, 0.07)"
                                    : "default",
                                  borderRadius: "3px",
                                }),
                                menu: (provided) => ({
                                  ...provided,
                                  marginTop: "1px",
                                  borderTopLeftRadius: "0px",
                                  borderTopRightRadius: "0px",
                                }),
                              }}
                            />
                          </div>
                          <br />
                        </div>
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
                        
                      </p>
                    </div>
                    <div className="pull-right">
                      <p className="bold font-montserrat text-uppercase">
                        
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
                    Create Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StickUpModal>

      <StickUpModal visible={modalTwo} width={"600"} effect="fadeInUp">
        <div className="modal-content-wrapper">
          <div className="modal-content">
            <div className="modal-top">
              <div
                className="pull-right"
                style={{ cursor: "pointer" }}
                onClick={() => setModalTwo(false)}
              >
                <i className="pg-icon">close</i>
              </div>
              <h5>
                New <span className="semi-bold">Todo</span>
              </h5>
              <p className="p-b-10">
                We need todo information inorder to process your todo
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
          <PageBreadcrumb className="jumbotron mb-4">
            <li className="breadcrumb-item">
              <a href="javascript:void(0);">Home</a>
            </li>
            <li className="breadcrumb-item active">Ticket</li>
          </PageBreadcrumb>
          <div className="row p-2">
            <div className="col-lg-3">
              <div
                className="card social-card share  full-width no-margin no-border"
                data-social="item"
              >
                <div className="card-header">
                  <h5 className="text-primary pull-left fs-12 d-flex align-items-center">
                    Overdue <i className="pg-icon">circle_fill</i>
                  </h5>
                  <div className="pull-right small hint-text d-flex align-items-center">
                    5,345 <i className="pg-icon m-l-5">comment</i>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card social-card share  full-width no-margin no-border"
                data-social="item"
              >
                <div className="card-header">
                  <h5 className="text-primary pull-left fs-12 d-flex align-items-center">
                    Open <i className="pg-icon">circle_fill</i>
                  </h5>
                  <div className="pull-right small hint-text d-flex align-items-center">
                    5,345 <i className="pg-icon m-l-5">comment</i>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card social-card share  full-width no-margin no-border"
                data-social="item"
              >
                <div className="card-header">
                  <h5 className="text-primary pull-left fs-12 d-flex align-items-center">
                    On Hold <i className="pg-icon">circle_fill</i>
                  </h5>
                  <div className="pull-right small hint-text d-flex align-items-center">
                    5,345 <i className="pg-icon m-l-5">comment</i>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card social-card share  full-width no-margin no-border"
                data-social="item"
              >
                <div className="card-header">
                  <h5 className="text-primary pull-left fs-12 d-flex align-items-center">
                    Duw Today <i className="pg-icon">circle_fill</i>
                  </h5>
                  <div className="pull-right small hint-text d-flex align-items-center">
                    5,345 <i className="pg-icon m-l-5">comment</i>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-lg-9 m-b-10">
              <div className="mx-2 widget-11 widget-11-3 card no-border  widget-loader-bar">
                <div className="card-header">
                  <div className="card-title">Today's Table</div>
                  <button
                    aria-label=""
                    onClick={() => setModalOne(true)}
                    className="btn btn-default btn-rounded btn-icon pull-right"
                  >
                    <i className="pg-icon">add</i>
                  </button>
                  <div className="p-b-10 p-t-5">
                    <div className="pull-left">
                      <h3 className="text-primary no-margin">Tickets</h3>
                    </div>
                  </div>
                </div>

                <div className="auto-overflow">
                  <table className="table table-condensed table-hover">
                    <tbody>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">johnsmith</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18 text-primary">
                            $1000
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">johnsmith</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18 text-primary">
                            $1000
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-t-15 p-b-15 p-l-20 p-r-20">
                  <p className="small no-margin">
                    <a
                      href="javascript:void(0);"
                      className="btn-circle-arrow b-grey"
                    >
                      <i className="pg-icon">chevron_down</i>
                    </a>
                    <span className="hint-text ">
                      Show more details of{" "}
                      <a href="javascript:void(0);"> Revox pvt ltd </a>
                    </span>
                  </p>
                </div>
                {refreshOne ? progress : null}
              </div>
            </div>

            <div className="col-lg-3">
              <div className=" card no-border  no-margin widget-loader-circle todolist-widget align-self-stretch">
                <div className="card-header">
                  <div className="card-title">TODOLIST</div>
                  <div className="card-controls">
                    <ul>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className="portlet-refresh text-black"
                          data-toggle="refresh"
                        >
                          <i className="portlet-icon portlet-icon-refresh"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="list-unstyled p-l-20 p-r-20 p-t-10 m-b-20">
                  <li>
                    <h5 className="pull-left normal no-margin">
                      28th September
                    </h5>
                  </li>
                  <div className="clearfix"></div>
                </ul>
                <div className="task-list p-t-0 p-r-20 p-b-20 p-l-20 clearfix flex-1">
                  <div className="task clearfix row completed">
                    <div className="task-list-title col-10 justify-content-between">
                      <a
                        href="javascript:void(0);"
                        className="text-color strikethrough"
                        data-task="name"
                      >
                        Purchase Pages before 10am
                      </a>
                      <i className="fs-14 pg-close hidden"></i>
                    </div>
                    <div className="form-check checkbox-circle no-margin text-center col-2 d-flex justify-content-center align-items-center">
                      <input
                        type="checkbox"
                        value="1"
                        id="todocheckbox"
                        data-toggler="task"
                        className="hidden"
                        // onChange={() =>
                        //   setCheckedOption((prevState) => !prevState)
                        // }
                        // checked={checkedOption}
                      />
                      <label
                        htmlFor="todocheckbox"
                        className=" no-margin no-padding absolute"
                      ></label>
                    </div>
                  </div>

                  <div className="task clearfix row">
                    <div className="task-list-title col-10 justify-content-between">
                      <a
                        href="javascript:void(0);"
                        className="text-color"
                        data-task="name"
                      >
                        Meeting with CFO
                      </a>
                      <i className="fs-14 pg-close hidden"></i>
                    </div>
                    <div className="form-check checkbox-circle no-margin text-center col-2 d-flex justify-content-center align-items-center">
                      <input
                        type="checkbox"
                        value="1"
                        id="todocheck2"
                        data-toggler="task"
                        className="hidden"
                      />
                      <label
                        htmlFor="todocheck2"
                        className=" no-margin no-padding absolute"
                      ></label>
                    </div>
                  </div>

                  <div className="task clearfix row">
                    <div className="task-list-title col-10 justify-content-between">
                      <a
                        href="javascript:void(0);"
                        className="text-color"
                        data-task="name"
                      >
                        AGM Conference at 1pm
                      </a>
                      <i className="fs-14 pg-close hidden"></i>
                    </div>
                    <div className="form-check checkbox-circle no-margin text-center col-2 d-flex justify-content-center align-items-center">
                      <input
                        type="checkbox"
                        value="1"
                        id="todocheck3"
                        data-toggler="task"
                        className="hidden"
                      />
                      <label
                        htmlFor="todocheck3"
                        className=" no-margin no-padding absolute"
                      ></label>
                    </div>
                  </div>

                  <div className="task clearfix row">
                    <div className="task-list-title col-10 justify-content-between">
                      <a
                        href="javascript:void(0);"
                        className="text-color"
                        data-task="name"
                      >
                        Revise Annual Reports
                      </a>
                      <i className="fs-14 pg-close hidden"></i>
                    </div>
                    <div className="form-check checkbox-circle no-margin text-center col-2 d-flex justify-content-center align-items-center">
                      <input
                        type="checkbox"
                        value="1"
                        id="todocheck4"
                        data-toggler="task"
                        className="hidden"
                      />
                      <label
                        htmlFor="todocheck4"
                        className=" no-margin no-padding absolute"
                      ></label>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="bg-master-light padding-20 full-width ">
                  <div className="row">
                    <div className="col-10">
                      <p className="no-margin normal text-black">
                        Type Event Here
                      </p>
                      <div className="input-group transparent no-border full-width">
                        <input
                          className="form-control transparent p-l-0"
                          type="text"
                          placeholder="What do you need to remeber?"
                        />
                      </div>
                    </div>
                    <div
                      className="col-2 text-center"
                      onClick={() => setModalTwo(true)}
                    >
                      <a href="#" className="block m-t-15">
                        <img src={plusSVG} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
