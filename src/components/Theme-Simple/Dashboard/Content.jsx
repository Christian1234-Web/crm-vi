import React, { useCallback, useEffect, useState } from "react";

// import footer component
import Copyright from "../../ui/Footer/Copyright/Component";
import { ValidatorForm } from "react-form-validator-core";
//import ui widgets component
import InputWithLabel from "../../Landing/InputWithLabel";
import cellEditFactory from "react-bootstrap-table2-editor";
import Alert from "../../UIElements/Alert";
import FlipBarNotifyModule from "../../UIElements/Notification/FlipBarNotification/FlipBarNotifyModule";
import WithoutMsgValidation from "../../Forms/FormLayouts/WithoutMsgValidation";
import ProgressCircle from '../../UIElements/ProgressCircle/index'

import TextValidator from "./FormValidation";
import { Link } from "react-router-dom";
import PageBreadcrumb from "../../UIElements/Breadcrumb";
import StickUpModal from "../Contact/StickUpModal";
import "./style.css";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
// import { tableThreeData } from "../../Tables/Data/data";
import { tableThreeColumns } from "../../Tables/Data/Column";
import DataTable from "../../Tables/DataTable";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import { ProgressTwo } from "../../UIElements/ProgressAndActivity/Content";
import plusSVG from "../../../assets/img/plus.svg";
import { TOKEN_COOKIE, USER_NAME } from "../../../services/constants";
import SSRStorage from "../../../services/storage";
import { setIn } from "formik";
import { request } from "../../../services/utilities";
import SlideUpModal from "../Contact/SlideUpModal";
import moment from "moment";
import format from "format-number";
import Dropdown from "react-dropdown";
import { tabSelectOne } from "../../UIElements/TabsAndAccordion/dropdownData";
import { Input, Label } from "reactstrap";

const storage = new SSRStorage();
const tableThreeData = [
  {
    renderingEngine: "Geckokkkss",
    browser: "Firefox 1.0",
    platforms: "Win 98+ / OSX.2+",
    engineVersion: "1.7",
    actions: "trashFormatter",
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
  const [simpleTabs, setSimpleTabs] = useState([true, false, false]);
  const [tableFour, setTableFour] = useState([false, false, false, false]);

  const [slideUpVisible, setSlideUpVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [refreshOne, setRefreshOne] = useState(false);
  const [projectUrl, setProjectUrl] = useState("");
  const [projectName, setProjectName] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [website, setWebsite] = useState("");
  const [classs, setClasss] = useState("");
  const [show, setShow] = useState(false);
  const [dataThree] = useState(tableThreeData);
  const [columnsThree] = useState(tableThreeColumns);
  const [refreshEight, setRefreshEight] = useState(false);
  const [checkedOption, setCheckedOption] = useState(true);
  const [stickUpVisible, setStickUpVisible] = useState(false);
  const [showRenewModal, setShowRenewModal] = useState(false);
  const [visibility, setVisibility] = useState(null);
  const [stickUpModalSize, setStickUpModalSize] = useState([
    false,
    true,
    false,
  ]);
  const [stickUpWidth, setStickUpWidth] = useState("lg");
  useEffect(() => {
    if (stickUpModalSize[0]) setStickUpWidth("lg");
    if (stickUpModalSize[1]) setStickUpWidth("md");
    if (stickUpModalSize[2]) setStickUpWidth("sm");
  }, [stickUpModalSize]);

  const [optionsStrike, setOptionsStrike] = useState([]);
  const [strike, setStrike] = useState("");
  const [accountUser, setAccountUser] = useState(null);
  const [nameOfOrganization, setNameOfOrganization] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [address, setAddress] = useState("");
  const [getToken, setGetToken] = useState("");
  const [displayInput, setDisplayInput] = useState(false);
  const [voucherText, setVoucherText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [displayErrorText, setDisplayErrorText] = useState(false);
  const [label, setLabel] = useState('');
  const [subscriptionDollarRate, setSubscriptionDollarRate] = useState('');

  // console.log(firstName, lastName, phoneNumber, whatsappNumber, address, nameOfOrganization )

  const [project, setProject] = useState("");
  const [investor, setInvestor] = useState("");
  const [deadline, setDeadline] = useState("");
  const [radioBtnGroup, setRadioBtnGroup] = useState([true, false, false]);

  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [loading_todo, setLoading_todo] = useState(false);
  const [error_todo, setError_todo] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [bundles, setBundles] = useState([]);
  const [todos, setTodos] = useState(null);
  const [meta, setMeta] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [search, setSearch] = useState("");
  const [filtering, setFiltering] = useState(false);
  const [specificBundle, setSpecificBundle] = useState(null);
  const [amount, setAmount] = useState(1);
  const [bundleName, setBundleName] = useState("");
  const [bundleUnitPrice, setBundleUnitPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [waiting, setWaiting] = useState(false);
  const [refreshSix, setRefreshSix] = useState(false);
  const [todo, setTodo] = useState(false);
  const [userObject, setUserObject] = useState(null);
  const [userTransactions, setUserTransactions] = useState(null);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const flipBarNotifyArray = [
    { type: "success", desc: "Your Todo has been created" },
  ];

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleCloseTodo = () => setTodo(false);
  const handleShowTodo = () => setTodo(true);

  const [slideUpModalSize, setSlideUpModalSize] = useState(false);
  const [slideUpWidth, setSlideUpWidth] = useState("500");
  useEffect(() => {
    if (slideUpModalSize[0]) setSlideUpWidth("600");
    if (slideUpModalSize[1]) setSlideUpWidth("500");
    if (slideUpModalSize[2]) setSlideUpWidth("300");
  }, [slideUpModalSize]);

  const fetchBundleList = useCallback(async (page) => {
    try {
      const user = await storage.getItem(USER_NAME);
      const token = await storage.getItem(TOKEN_COOKIE);
      setUsername(user.username);
      setGetToken(token);
      setVisibility(user.isUpdated);
      setAccountUser(user);
      const rs = await axios.get(
        `https://deda-crm-backend.herokuapp.com/unit/all`
      );
      const { result, ...meta } = rs.data;
      setBundles(result.reverse());
      setMeta(meta);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.log("fetch bundle err", err);
    }
  }, []);

  const fetchTodo = useCallback(async () => {
    const date = new Date().toLocaleDateString();
    const url = `todo?page=1&limit=10&term=&date=${date}`;
    try {
      const rs = await request(url, "GET", true);
      setTodos(rs.result);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchUser = useCallback(async () => {
    const user = await storage.getItem(USER_NAME);
    const url = `user/findone/${user.id}`;
    try {
      const rs = await request(url, "GET", true);
      setUserObject(rs?.result);
      if (rs.success === true) {
        const now_date = new Date().getTime();
        const expired_date_time = new Date(rs.result.planExpiry).getTime();

        const distance = expired_date_time - now_date;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        days < 0 ? setSlideUpVisible(true) : null;
        setUserDetails(days);
      }
    } catch (err) {
      console.log(rs);
    }
  }, []);

  const saveTodo = async () => {
    setLoading_todo(true);
    const user = await storage.getItem(USER_NAME);
    const data = [
      { date: deadline, description: startDate, subject: investor },
    ];
    const url = `todo/add?userId=${user.id}`;
    // console.log(data);
    try {
      const rs = await request(url, "POST", true, data);
      setLoading_todo(false);
      // console.log(rs);
      if (rs.success === false) {
        setError_todo(true);
        fetchTodo();
      } else {
        handleCloseTodo();
        setError_todo(false);
      }
    } catch (err) {
      setLoading_todo(false);
      setError_todo(true);
      console.log(err);
    }
  };

  let handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleUserRegistration = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setLoader(true);
        const user = await storage.getItem(USER_NAME);
        const rs = await axios.patch(
          `https://deda-crm-backend.herokuapp.com/user/prompt/update/${user.id}`,
          {
            surname: firstName,
            otherNames: lastName,
            phone: phoneNumber,
            whatsappNum: whatsappNumber,
            address: address,
            company: nameOfOrganization,
          }
        );

        if (rs.data.success) {
          setVisibility(true);
          setUsername(`${firstName}`);
        }
        setLoader(false);
        // const { result, ...meta } = rs.data;
        // setMeta(meta);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (err) {
        console.log("User form submit error", err);
        setLoading(false);
      }
    },
    [
      firstName,
      lastName,
      phoneNumber,
      whatsappNumber,
      nameOfOrganization,
      address,
    ]
  );

  const handleStrike = (e, i) => {
    if (e.target.checked) {
      setStrike("");
      optionsStrike[i] = strike;
      setOptionsStrike(optionsStrike);
    } else {
      setStrike("strikethrough");
      optionsStrike[i] = strike;
      setOptionsStrike(optionsStrike);
    }
  };

  const renewSub = async () => {
    console.log('u click me')
    const user = await storage.getItem(USER_NAME);
    const data = { userId: user.id, paymentMethod: "paypal" };
    const url = `payment/default/pay`;
    try {
      const rs = await request(url, "PATCH", true, data);
      console.log(rs)

      if (rs.success === true) {
        location.href = rs.link;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const payWithVoucher = async () => {
    console.log("paying with voucher");
    const user = await storage.getItem(USER_NAME);
    const url = `payment/voucher/use`;
    const payload = {
      token: Number(voucherText),
      user_id: user.id,
    };
    try {
      const rs = await request(url, "POST", true, payload);
      if(!rs.success){
        setErrorText(rs.message)
        setLabel('important')
        setDisplayErrorText(true)
      }

      if(rs.success){
        setErrorText(rs.message)
        setLabel('info')
        setDisplayErrorText(true)
        setTimeout(() => {
          setSlideUpVisible(false)
        }, 2000);
      }
    } catch (error) {
      console.log("Pay with Voucher error", error);
    }
  };

  const fetchSpecificBundle = useCallback(
    async (amountInputed) => {
      try {
        const rs = await axios.get(
          `https://deda-crm-backend.herokuapp.com/unit/amount/calc?units=${amountInputed}`
        );
        const { result, ...meta } = rs.data;
        setBundleName(rs.data.bundle.name);
        setBundleUnitPrice(rs.data.bundle.amount);
        setTotalPrice(rs.data.result);
      } catch (err) {
        console.log("fetch specific bundle err", err);
      }
    },
    [endDate, search, startDate]
  );

  const fetchUserTransactions = useCallback(async () => {
    try {
      const user = await storage.getItem(USER_NAME);

      const rs = await axios.get(
        `https://deda-crm-backend.herokuapp.com/payment/filter?page=1&limit=10&userId=${user.id}`
      );
      const { result, ...meta } = rs.data;
      setUserTransactions(result);
    } catch (err) {
      console.log("fetch user transactions err", err);
    }
  }, []);
  
  const fetchDefaultPlan = async () => {
    let url = ``;
    try {
      const rs = await request(url, 'GET', true);
    } catch (err) {
      console.log(err);
    }
  }

  const fetchDollarRate = useCallback(async () => {
    try {
      const user = await storage.getItem(USER_NAME);

      const rs = await axios.get(
        `https://deda-crm-backend.herokuapp.com/plan/3?dollar=1`
      );
      const { result } = rs.data;
      setSubscriptionDollarRate(result.amount)
    } catch (err) {
      console.log("fetch dollar rate error", err);
    }
  }, []);

  const handleChange = (e) => {
    if (Number(e) < 5000) {
      setWaiting(true);
    } else {
      setWaiting(false);
      fetchSpecificBundle(Number(e));
    }
  };
  // const checkInput = (i) => {
  // console.log(i);
  // let input = document.querySelectorAll('.strike_line');
  // let todo = document.querySelectorAll('.subject_');
  // if (input[i].checked === true) {
  //   let x = todo[i].classList.add('strikethrough');
  // } else {
  //   let x = todo[i].classList.remove('strikethrough');
  // }
  // console.log(todo[i]);
  // }
  // const [flipBarNotifyArray, setFlipBarNotifyArray] = useState([]);
  useEffect(() => {
    if (loading) {
      fetchUser();
      fetchBundleList();
      fetchTodo();
      fetchUserTransactions();
      fetchDollarRate()
    }
  }, [fetchBundleList, fetchTodo, fetchUserTransactions, loading]);

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} entries
    </span>
  );

  return (
    <div className="page-content-wrapper ">
      {/* RENEWAL MODAL */}
      <StickUpModal
        visible={slideUpVisible}
        className="stickUpModalClass"
        width={"600"}
      >
        <div className="modal-content-wrapper">
          <div className="modal-content">
            <div className="modal-top">
              <button
                aria-label=""
                type="button"
                className="close"
                // onClick={() => setSlideUpVisible(false)}
                data-dismiss="modal"
                aria-hidden="true"
              >
                {/* <i className="pg-icon">close</i> */}
              </button>
              <h5>
                Your subscription is expired, Please renew.
                {/* <span className="semi-bold">Information</span> */}
              </h5>
              <p className="p-b-10">
                {/* We need payment in order to process your messaging orders */}
              </p>
            </div>
            <div className="modal-body">
              <form role="form">
                <div className="form-group-attached">
                  <div className="row">
                    <div className="form-check col-lg-6 complete">
                      <Input
                        type="radio"
                        name="texture"
                        id="radio1"
                        value="Medium"
                        onClick={() => {
                          setRadioBtnGroup([false, true, false]);
                          setDisplayInput(false);
                        }}
                        checked={radioBtnGroup[1]}
                        onChange={() => {}}
                      />
                      <Label htmlFor="radio1">Pay with Card</Label>
                    </div>
                    <div className="form-check col-lg-6 primary">
                      <Input
                        type="radio"
                        name="texture"
                        id="radio2"
                        value="Verbose"
                        onClick={() => {
                          setRadioBtnGroup([false, false, true]);
                          setDisplayInput(true);
                        }}
                        checked={radioBtnGroup[2]}
                        onChange={() => {}}
                      />
                      <Label htmlFor="radio2">Pay with Voucher</Label>
                    </div>

                    {/* <div className="col-md-12">
                          <div className="form-group form-group-default">
                            <label>Company Name</label>
                            <input type="email" className="form-control" />
                          </div>
                        </div> */}
                  </div>
                  {displayInput && (
                    <div className="row">
                      <div className="form-check col-lg-12 complete">
                        <Input
                          type="text"
                          name="texture"
                          id="radio1"
                          // value="Medium"
                          // onClick={() => setRadioBtnGroup([false, true, false])}
                          // checked={radioBtnGroup[1]}
                          onChange={(e) => setVoucherText(e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  <div className="row">
                    {/* <div className="col-md-8">
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
                    </div> */}
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
                        ${subscriptionDollarRate}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 m-t-10 sm-m-t-10">
                  {displayInput ? (
                    <button
                      aria-label=""
                      type="button"
                      className="btn btn-primary btn-block m-t-5"
                      onClick={() => payWithVoucher()}
                    >
                      Pay Now 
                    </button>
                  ) : (
                    <button
                      aria-label=""
                      type="button"
                      className="btn btn-primary btn-block m-t-5"
                      onClick={() => renewSub()}
                    >
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
              {displayErrorText && (
                <span className={`label label-${label}`}>{errorText}</span>
              )}
                    {/* <span className="label label-info">SUCCESS</span> */}
                
            </div>
          </div>
        </div>
      </StickUpModal>

      {/* REGISTRATION MODAL */}
      <StickUpModal
        visible={!visibility}
        className="stickUpModalClass"
        width={"600"}
      >
        <div className="modal-content-wrapper">
          <div className="modal-content">
            <div className="modal-top">
              <div
                className="pull-right"
                style={{ cursor: "pointer" }}
                onClick={() => setStickUpVisible(false)}
              >
                <i className="pg-icon">close</i>
              </div>
            </div>
            <div className="modal-body">
              <div>
                <ValidatorForm
                  instantValidate={true}
                  onSubmit={(e) => handleFormSubmit(e)}
                >
                  <h3 className="mw-80">Complete Your Profile</h3>
                  <p className="m-b-25">
                    Find your people. Engage your customers. Build your brand.
                    We will continue to bridge the gap between you and your
                    clients. Please learn how you can help us improve your
                    experience. hello@anewit.com
                  </p>

                  <div className="form-group-attached">
                    <div className="row clearfix">
                      <div className="col-md-6">
                        <div className="form-group form-group-default">
                          <WithoutMsgValidation
                            name="startDate"
                            type="text"
                            value={accountUser?.username}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className={"form-control date"}
                            label={"username"}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-group-default">
                          <WithoutMsgValidation
                            name="startDate"
                            type="text"
                            value={accountUser?.email}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className={"form-control date"}
                            label={"email"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group form-group-default">
                      <InputWithLabel
                        label="Name of Organization"
                        onChange={(e) => setNameOfOrganization(e.target.value)}
                        value={nameOfOrganization}
                        type="text"
                        className="form-control "
                        icon="fa-info"
                        required=""
                      />
                    </div>
                    <div className="row clearfix">
                      <div className="col-md-6">
                        <div className="form-group form-group-default">
                          <InputWithLabel
                            onChange={(e) => setFirstName(e.target.value)}
                            name="startDate"
                            type="text"
                            value={firstName}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className={"form-control date"}
                            label={"First Name"}
                            require="true"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-group-default">
                          <InputWithLabel
                            label="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            type="text"
                            id="end-date"
                            name="endDate"
                            className="form-control date "
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-group-default">
                          <InputWithLabel
                            label="Phone Number"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                            type="text"
                            id="end-date"
                            name="endDate"
                            className="form-control date "
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-group-default">
                          <InputWithLabel
                            label="Whatsapp Number"
                            onChange={(e) => setWhatsappNumber(e.target.value)}
                            value={whatsappNumber}
                            type="text"
                            id="end-date"
                            name="endDate"
                            className="form-control date "
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group form-group-default">
                      <InputWithLabel
                        label="Address"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        type="text"
                        className="form-control "
                        required=""
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-8">
                      <div className="form-check primary m-t-0">
                        <input type="checkbox" value="1" id="checkbox-agree" />
                        <label htmlFor="checkbox-agree">
                          I hereby certify that the information above is true
                          and accurate
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <button
                        aria-label=""
                        className="btn btn-primary pull-right"
                        type="submit"
                        onClick={(e) => handleUserRegistration(e)}
                      >
                        {loader ? <ProgressTwo /> : "Update Profile"}
                      </button>
                    </div>
                  </div>
                </ValidatorForm>
              </div>
            </div>
          </div>
        </div>
      </StickUpModal>

      {/* START PAGE CONTENT */}

      {/* Renew Package */}
      <StickUpModal
        visible={showRenewModal}
        width={"600"}
        effect="fadeInUp"
        className="stickUpModalClass"
      >
        <div className="modal-content-wrapper">
          <div className="modal-content">
            <div className="modal-top">
              <div
                className="pull-right"
                style={{ cursor: "pointer" }}
                onClick={() => setShowRenewModal(false)}
              >
                <i className="pg-icon">close</i>
              </div>
            </div>
            <div className="modal-body">
              <div>
                <div className="col-lg-12">
                  <div className="card card-borderless">
                    <ul
                      className="nav nav-tabs nav-tabs-simple d-none d-md-flex d-lg-flex d-xl-flex"
                      role="tablist"
                      data-init-reponsive-tabs="dropdownfx"
                    >
                      <li
                        className="nav-item"
                        onClick={() => setSimpleTabs([true, false, false])}
                      >
                        <a
                          className={simpleTabs[0] ? "active" : ""}
                          data-toggle="tab"
                          role="tab"
                          data-target="#tab2hellowWorld"
                          aria-selected={simpleTabs[0] ? "true" : ""}
                          href="javascript:void(0);"
                          onClick={(e) => e.preventDefault()}
                        >
                          Pay with Card
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => setSimpleTabs([false, true, false])}
                      >
                        <a
                          className={simpleTabs[1] ? "active" : ""}
                          href="javascript:void(0);"
                          data-toggle="tab"
                          role="tab"
                          data-target="#tab2FollowUs"
                          aria-selected={simpleTabs[1] ? "true" : ""}
                          onClick={(e) => e.preventDefault()}
                        >
                          Pay with Voucher
                        </a>
                      </li>
                    </ul>
                    <div className="nav-tab-dropdown cs-wrapper full-width d-lg-none d-xl-none d-md-none">
                      <Dropdown
                        options={tabSelectOne}
                        defaultValue={tabSelectOne[0]}
                        className="dropdown dropdown-default tabs-dropdown"
                        onChange={(value) => {
                          if (value.value === "0") {
                            return setSimpleTabs([true, false, false]);
                          }
                          if (value.value === "1") {
                            return setSimpleTabs([false, true, false]);
                          }
                          if (value.value === "2") {
                            return setSimpleTabs([false, false, true]);
                          }
                        }}
                      />
                    </div>
                    <div className="tab-content">
                      <div
                        className={`tab-pane ${simpleTabs[0] ? "active" : ""}`}
                        id="tab2hellowWorld"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card card-transparent">
                              <div
                                className="card-body"
                                style={{ padding: "0px" }}
                              >
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
                                        <tr role="row">
                                          <td className="v-align-middle semi-bold">
                                            Revolution Begins
                                          </td>
                                          <td className="v-align-middle">
                                            Active
                                          </td>
                                          <td className="v-align-middle semi-bold">
                                            70,000 USD
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div className="row b-a b-grey no-margin">
                                <div className="col-md-5 p-l-10 sm-padding-15 align-items-center d-flex">
                                  <div>
                                    <h5 className="font-montserrat all-caps small no-margin hint-text bold">
                                      SubTotal
                                    </h5>
                                    <p className="no-margin"> ???20.00</p>
                                  </div>
                                </div>
                                <div className="col-md-3 col-middle sm-padding-15 align-items-center d-flex">
                                  <div>
                                    <h5 className="font-montserrat all-caps small no-margin hint-text bold">
                                      Tax
                                    </h5>
                                    <p className="no-margin"> ???0.00</p>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right bg-primary padding-10">
                                  <h5 className="font-montserrat all-caps small no-margin hint-text text-white bold">
                                    Total
                                  </h5>
                                  <h4 className="no-margin text-white">
                                    {" "}
                                    ???0.00
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          aria-label=""
                          type="button"
                          className="btn btn-default btn-cons pull-right mt-2"
                          onClick={() => renewSub()}
                        // onClick={() => console.log('salam')}
                        >
                          Pay
                        </button>
                      </div>
                      <div
                        className={`tab-pane ${simpleTabs[1] ? "active" : ""}`}
                        id="tab2FollowUs"
                        style={{ padding: "0px" }}
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card card-transparent">
                              <div
                                className="card-body"
                                style={{ padding: "0px" }}
                              >
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
                                        <tr role="row">
                                          <td className="v-align-middle semi-bold">
                                            Revolution Begins
                                          </td>
                                          <td className="v-align-middle">
                                            Active
                                          </td>
                                          <td className="v-align-middle semi-bold">
                                            70,000 USD
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div className="row b-a b-grey no-margin">
                                <div className="col-md-5 p-l-10 sm-padding-15 align-items-center d-flex">
                                  <div>
                                    <h5 className="font-montserrat all-caps small no-margin hint-text bold">
                                      SubTotal
                                    </h5>
                                    <p className="no-margin"> ???20.00</p>
                                  </div>
                                </div>
                                <div className="col-md-3 col-middle sm-padding-15 align-items-center d-flex">
                                  <div>
                                    <h5 className="font-montserrat all-caps small no-margin hint-text bold">
                                      Tax
                                    </h5>
                                    <p className="no-margin"> ???0.00</p>
                                  </div>
                                </div>
                                <div className="col-md-4 text-right bg-primary padding-10">
                                  <h5 className="font-montserrat all-caps small no-margin hint-text text-white bold">
                                    Total
                                  </h5>
                                  <h4 className="no-margin text-white">
                                    {" "}
                                    ???0.00
                                  </h4>
                                </div>
                              </div>

                              <div class="row mt-5">
                                <div class="col-10">
                                  <div class="form-check primary m-t-0">
                                    <input
                                      type="text"
                                      id="voucher"
                                      // value="AHHAKJADIUADKJDNKHB"
                                      placeholder="Input Voucher Here"
                                    />
                                  </div>
                                </div>
                                <div class="col-2 p-2">
                                  <button
                                    aria-label=""
                                    class="btn btn-primary "
                                    type="submit"
                                  >
                                    Pay
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <button
                          aria-label=""
                          type="button"
                          className="btn btn-success btn-cons"
                        >
                          Success
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StickUpModal>

      <StickUpModal
        visible={show}
        width={"600"}
        effect="fadeInUp"
        className="stickUpModalClass"
      >
        <div className="modal-content-wrapper">
          <div className="modal-content">
            <div className="modal-top">
              <div
                className="pull-right"
                style={{ cursor: "pointer" }}
                onClick={() => handleClose()}
              >
                <i className="pg-icon">close</i>
              </div>
            </div>
            <div className="modal-body">
              <div>
                <ValidatorForm
                  instantValidate={true}
                  onSubmit={handleFormSubmit}
                >
                  <h3 className="mw-80">Complete Your Profile</h3>
                  <p className="mw-80 m-b-25">
                    Find your people. Engage your customers. Build your brand.
                    We will continue to bridge the gap between you and your
                    clients. Please learn how you can help us improve your
                    experience. hello@anweit.com
                  </p>

                  <div className="form-group-attached">
                    <div className="form-group form-group-default">
                      <InputWithLabel
                        label="Investor"
                        onChange={(e) => setInvestor(e.target.value)}
                        value={investor}
                        type="text"
                        className="form-control "
                        icon="fa-info"
                        required=""
                      />
                    </div>
                    <div className="row clearfix">
                      <div className="col-md-6">
                        <div className="form-group form-group-default">
                          <WithoutMsgValidation
                            onChange={(e) => setStartingDate(e.target.value)}
                            name="startDate"
                            type="text"
                            value={startingDate}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className={"form-control date"}
                            label={"Starting date"}
                            require="true"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-group-default">
                          <InputWithLabel
                            label="Deadline"
                            onChange={(e) => setDeadline(e.target.value)}
                            value={deadline}
                            type="text"
                            id="end-date"
                            name="endDate"
                            className="form-control date "
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group form-group-default">
                          <WithoutMsgValidation
                            onChange={(e) => setWebsite(e.target.value)}
                            name="Website"
                            value={website}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className={"form-control"}
                            label={"Website"}
                            require="true"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-group-default form-check-group d-flex align-items-center">
                          <div className="form-check switch switch-lg success full-width right m-b-0">
                            <input type="checkbox" id="switchSample" />
                            <label htmlFor="switchSample">Availability</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group form-group-default input-group">
                          <div className="form-input-group">
                            <label>Budget</label>
                            <input
                              type="text"
                              className="form-control usd"
                              required=""
                              aria-required="true"
                            />
                          </div>
                          <div className="input-group-append ">
                            <span className="input-group-text">USD</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group form-group-default input-group">
                          <div className="form-input-group">
                            <label>Profit</label>
                            <input type="text" className="form-control usd" />
                          </div>
                          <div className="input-group-append ">
                            <span className="input-group-text">USD</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group form-group-default input-group">
                          <div className="form-input-group">
                            <label>Revenue</label>
                            <input type="text" className="form-control usd" />
                          </div>
                          <div className="input-group-append ">
                            <span className="input-group-text">USD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-8">
                      <div className="form-check primary m-t-0">
                        <input type="checkbox" value="1" id="checkbox-agree" />
                        <label htmlFor="checkbox-agree">
                          I hereby certify that the information above is true
                          and accurate
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <button
                        aria-label=""
                        className="btn btn-primary pull-right"
                        type="submit"
                      >
                        Create Droplet
                      </button>
                    </div>
                  </div>
                </ValidatorForm>
              </div>
            </div>
          </div>
        </div>
      </StickUpModal>

      {error_todo === false ? (
        <FlipBarNotifyModule
          notifications={flipBarNotifyArray}
          position={"top-right"}
          style={{ top: "59px" }}
        />
      ) : (
        ""
      )}

      <StickUpModal visible={todo} width={"600"} effect="fadeInUp">
        <div className="modal-content-wrapper">
          <div className="modal-content">
            <div className="modal-top">
              <div
                className="pull-right"
                style={{ cursor: "pointer" }}
                onClick={() => handleCloseTodo()}
              >
                <i className="pg-icon">close</i>
              </div>
            </div>
            <div className="modal-body">
              {loading_todo ? (
                <div className="pull-right">
                  <ProgressTwo />
                </div>
              ) : (
                ""
              )}

              <div>
                <ValidatorForm instantValidate={true} onSubmit={saveTodo}>
                  {error_todo === true ? (
                    <Alert type="danger">
                      <strong>Error: </strong>Failed to save todo please try
                      again later
                      <button
                        aria-label=""
                        className="close"
                        data-dismiss="alert"
                      ></button>
                    </Alert>
                  ) : (
                    ""
                  )}
                  <h3 className="mw-80">Todo</h3>

                  <div className="">
                    <div className="row">
                      <div className="col-md-6">
                        <TextValidator
                          onChange={(e) => setInvestor(e.target.value)}
                          name="subject"
                          value={investor}
                          type="text"
                          validators={["required", "maxStringLength:22"]}
                          errorMessages={[
                            "This field is required",
                            "Maximum of 22 characters",
                          ]}
                          className={"form-control"}
                          label={"Subject"}
                          placeholder="Maximum of 22 characters"
                        />
                      </div>
                      <div className="col-md-6">
                        <TextValidator
                          onChange={(e) => setDeadline(e.target.value)}
                          name="date"
                          value={deadline}
                          type="date"
                          validators={["required"]}
                          errorMessages={["This field is required"]}
                          className={"form-control"}
                          label={"Date"}
                          placeholder="Maximum of 22 characters"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <TextValidator
                          onChange={(e) => setStartDate(e.target.value)}
                          name="description"
                          value={startDate}
                          type="text"
                          validators={["required", "maxStringLength:22"]}
                          errorMessages={[
                            "This field is required",
                            "Maximum of 22 characters",
                          ]}
                          className={"form-control"}
                          label={"Description"}
                          placeholder="Maximum of 22 characters"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-8">
                      {/* <div className="form-check primary m-t-0">
                        <input type="checkbox" id="checkbox-agree" />
                        <label htmlFor="checkbox-agree">
                          I hereby certify that the information above is true
                          and accurate
                        </label>
                      </div> */}
                    </div>
                    <div className="col-4">
                      <button
                        aria-label=""
                        className="btn btn-primary pull-right"
                        type="submit"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </ValidatorForm>
              </div>
            </div>
          </div>
        </div>
      </StickUpModal>

      <div className="content sm-gutter">
        <div className="sm-padding-10">
          <div className="row">
            <div className="col-lg-9 m-b-10">
              <PageBreadcrumb className="jumbotron mb-4">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </PageBreadcrumb>

              <div className="m-b-20">
                <div className="row m-0">
                  <div className="col-xl-6 col-lg-6">
                    <div className="card card-transparent">
                      <div className="card-header ">
                        <div className="card-title">Getting started</div>
                      </div>
                      <div className="card-body">
                        <h1>
                          Bonjour!{" "}
                          <span class="text-success text-capitalize">
                            {accountUser?.surname == null
                              ? username
                              : accountUser.surname}
                          </span>
                        </h1>
                        <p>
                          Find your people. Engage your customers. Build your
                          brand. We will continue to bridge the gap between you
                          and your clients. Please learn how you can help us
                          improve your experience.{" "}
                          <span className="text-success">
                            {" "}
                            hello@anewit.com
                          </span>
                        </p>
                        <br />

                        {/* <div>
                          <div className="profile-img-wrapper m-t-5 inline">
                            <img
                              width="35"
                              height="35"
                              src="/dashboard/latest/react/simple/assets/img/profiles/avatar_small.jpg"
                              alt="Avatar"
                              data-src="/dashboard/latest/react/simple/assets/img/profiles/avatar_small.jpg"
                              data-src-retina="assets/img/profiles/avatar_small2x.jpg"
                            />
                            <div className="chat-status available"></div>
                          </div>
                          <div className="inline m-l-10">
                            <p className="small hint-text m-t-5">
                              VIA senior product manage
                              <br /> for UI/UX at REVOX
                            </p>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                    <div className="d-flex justify-content-center align-items-center">
                      <table className="table table-condensed table-hover">
                        <thead>
                          <tr>
                            <td className="font-montserrat all-caps fs-12 w-50">
                              BUNDLE
                            </td>
                            <td className="text-right hidden-lg"></td>
                            <td className="text-right b-r b-dashed b-grey w-25">
                              <span className="hint-text small">
                                MIN VOLUME
                              </span>
                            </td>
                            <td className="w-15">
                              <span className="font-montserrat fs-12 w-50">
                                UNIT
                              </span>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          {bundles.map((bundle) => (
                            <tr key={bundle.id}>
                              <td className="font-montserrat all-caps fs-12 w-50">
                                {bundle.name}
                              </td>
                              <td className="text-right hidden-lg"></td>
                              <td className="text-right b-r b-dashed b-grey w-25">
                                <span className="hint-text small">
                                  {bundle.unitQuantity}
                                </span>
                              </td>
                              <td className="w-25">
                                <span className="font-montserrat fs-18">
                                  {bundle.amount}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                      <table className="table table-condensed table-hover">
                        <thead>
                          <tr>
                            <td className="font-montserrat all-caps fs-12 w-25">
                              VOLUME
                            </td>
                            <td
                              className="font-montserrat all-caps fs-12"
                              style={{ width: "38%" }}
                            >
                              BUNDLE
                            </td>
                            <td className="text-right b-r b-dashed b-grey w-25">
                              <span className="hint-text small"> PRICE</span>
                            </td>
                            <td className="text-right">
                              <span className="hint-text small">UNIT</span>
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              contenteditable="true"
                              style={{ outline: "none" }}
                              onInput={(e) =>
                                handleChange(e.currentTarget.textContent)
                              }
                              className="font-montserrat all-caps fs-12 w-25"
                            >
                              0
                            </td>
                            <td className="hidden-lg" style={{ width: "37%" }}>
                              <span className="hint-text all-caps small">
                                {waiting ? <ProgressTwo /> : bundleName}
                              </span>
                            </td>
                            <td className="text-right b-r b-dashed b-grey w-25">
                              <span className="hint-text small">
                                {waiting ? <ProgressTwo /> : totalPrice}
                              </span>
                            </td>
                            <td className="text-right b-r b-dashed b-grey">
                              <span className="hint-text small">
                                {waiting ? (
                                  <div>
                                    <ProgressTwo />
                                  </div>
                                ) : (
                                  bundleUnitPrice
                                )}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-2 widget-11 widget-11-3 card no-border  widget-loader-bar">
                <div className="card-header">
                  <div className="card-title">recent transactions</div>
                  <div className="card-controls">
                    <ul>
                      <li>
                        <a
                          data-toggle="refresh"
                          className={`card-refresh ${refreshOne ? "refreshing" : ""
                            }`}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setRefreshOne(true);
                            setTimeout(() => {
                              setRefreshOne(false);
                            }, 2000);
                          }}
                        >
                          <i
                            className={`card-icon card-icon-refresh ${refreshOne ? "fade" : ""
                              }`}
                          ></i>
                          <i
                            className={`card-icon-refresh-lg-white-animated ${refreshOne ? "active" : ""
                              }`}
                            style={{
                              position: "absolute",
                              top: "14px",
                              right: "20px",
                            }}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="auto-overflow">
                  <table className="table table-condensed table-hover">
                    <tbody>
                      {userTransactions?.map((transaction, index) => (
                        <tr key={index}>
                          <td className="" style={{ overflow: "visible" }}>
                            PAYMENT FOR{" "}
                            {transaction.description
                              .toUpperCase()
                              .split("_")
                              .join(" ")}
                          </td>
                          <td className="text-right">
                            <span className="hint-text small">
                              {moment(transaction.createdAt).format("DD-MM-YY")}
                            </span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">
                              {transaction.description
                                .toUpperCase()
                                .split("_")
                                .join(" ")}
                            </span>
                          </td>
                          <td className="b-r b-dashed b-grey text-right">
                            <span className="font-montserrat fs-18">
                              {format({ prefix: "???" })(transaction.amount, {
                                noSeparator: false,
                              })}
                            </span>
                          </td>
                          <td className="text-left">
                            <span className="hint-text small">
                              <i className="pg-icon m-20">printer</i>
                            </span>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td className=" fs-12">BUSINESS PLAN PURCHASE</td>
                        <td className="text-right">
                          <span className="hint-text small">18-08-2022</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">14000 UNITS</span>
                        </td>
                        <td className="b-r b-dashed b-grey text-right">
                          <span className="font-montserrat fs-18">
                            ???98,000.00
                          </span>
                        </td>
                        <td className="text-left">
                          <span className="hint-text small">
                            <i className="pg-icon m-20">printer</i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">MONTH SERVICE RENEWAL</td>
                        <td className="text-right">
                          <span className="hint-text small">18-08-2022</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">AUGUST</span>
                        </td>
                        <td className="b-r b-dashed b-grey text-right">
                          <span className="font-montserrat fs-18">
                            ???25,000.00
                          </span>
                        </td>
                        <td className="text-left">
                          <span className="hint-text small">
                            <i className="pg-icon m-20">printer</i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">MONTH SERVICE RENEWAL</td>
                        <td className="text-right">
                          <span className="hint-text small">09-07-2022</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">JULY</span>
                        </td>
                        <td className="b-r b-dashed b-grey text-right">
                          <span className="font-montserrat fs-18">
                            ???25,000.00
                          </span>
                        </td>
                        <td className="text-left">
                          <span className="hint-text small">
                            <i className="pg-icon m-20">printer</i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">BUSINESS PLAN PURCHASE</td>
                        <td className="text-right">
                          <span className="hint-text small">09-07-2022</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">17000 UNITS</span>
                        </td>
                        <td className="b-r b-dashed b-grey text-right">
                          <span className="font-montserrat fs-18">
                            ???154,000.00
                          </span>
                        </td>
                        <td className="text-left">
                          <span className="hint-text small">
                            <i className="pg-icon m-20">printer</i>
                          </span>
                        </td>
                      </tr>
                      {/* <tr>
                        <td className=" fs-12">BUSINESS PLAN PURCHASE</td>
                        <td className="text-right">
                          <span className="hint-text small">04-05-2022</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">22000 UNITS</span>
                        </td>
                        <td className="b-r b-dashed b-grey text-right">
                          <span className="font-montserrat fs-18 ">???210,000.00</span>
                        </td>
                        <td className="text-left">
                          <span className="hint-text small"><i className="pg-icon m-20">printer</i></span>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>

                <div className="p-t-15 p-b-15 p-l-20 p-r-20">
                  <p className="small no-margin">
                    <a href="#" className="btn-circle-arrow b-grey">
                      <i className="pg-icon">chevron_down</i>
                    </a>
                    <span className="hint-text ">
                      Show more
                      <a href="javascript:void(0);"> Transactions </a>
                    </span>
                  </p>
                </div>
                {refreshOne ? progress : null}
              </div>
            </div>

            <div className="col-lg-3">
              <div className="row">
                <div className="col-md-12 m-b-10">
                  <div className="widget-8 card  bg-success no-margin widget-loader-bar">
                    <div className="container-xs-height full-height">
                      <div className="row-xs-height">
                        <div className="col-xs-height col-top">
                          <div className="card-header  top-left top-right">
                            <div className="card-title">
                              <span className="font-montserrat fs-11 all-caps">
                                Units Balance{" "}
                              </span>
                            </div>
                            <div className="card-controls">
                              <ul>
                                <li>
                                  <a
                                    data-toggle="refresh"
                                    className={`card-refresh ${refreshSix ? "refreshing" : ""
                                      }`}
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setRefreshSix(true);
                                      setTimeout(() => {
                                        setRefreshSix(false);
                                      }, 2000);
                                    }}
                                  >
                                    <i
                                      className={`card-icon card-icon-refresh ${refreshSix ? "fade" : ""
                                        }`}
                                    ></i>
                                    <i
                                      className={`card-icon-refresh-lg-white-animated ${refreshSix ? "active" : ""
                                        }`}
                                      style={{
                                        position: "absolute",
                                        top: "14px",
                                        right: "20px",
                                      }}
                                    ></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-xs-height ">
                        <div className="col-xs-height col-top relative">
                          <div className="row full-height">
                            <div className="col-sm-9">
                              <div className="p-l-20 full-height d-flex flex-column justify-content-between">
                                <div className="d-flex align-items-center">
                                  <h3 className="no-margin p-b-5">
                                    {userObject?.unitBalance}
                                  </h3>
                                  <Link
                                    className="small ml-2"
                                    to="/simple/form_wizard"
                                    style={{
                                      textDecoration: "none",
                                      color: "#fff",
                                    }}
                                  >
                                    Buy Units
                                  </Link>
                                </div>

                                <p className="small m-t-5 m-b-20">
                                  <span className="label label-white hint-text font-montserrat m-r-5">
                                    {userDetails < 0 ? "0" : userDetails} days
                                    remaining
                                  </span>
                                  {/* <span className="fs-12"> */}
                                  <Link
                                    to="#"
                                    onClick={() => setShowRenewModal(true)}
                                    style={{
                                      textDecoration: "none",
                                      color: "inherit",
                                      cursor: "pointer",
                                    }}
                                  >
                                    Renew
                                  </Link>

                                  {/* </span> */}
                                </p>
                              </div>
                            </div>
                            <div className="col-sm-6"></div>
                          </div>
                          <div
                            className="widget-8-chart line-chart"
                            data-line-color="white"
                            data-points="true"
                            data-point-color="success"
                            data-stroke-width="2"
                          >
                            {/* START SVG HERE */}
                            <svg>
                              <g
                                className="nvd3 nv-wrap nv-lineChart"
                                transform="translate(-10,10)"
                              >
                                <g>
                                  <rect
                                    width="181"
                                    height="103"
                                    style={{ opacity: "0" }}
                                  ></rect>
                                  <g className="nv-x nv-axis"></g>
                                  <g className="nv-y nv-axis"></g>
                                  <g className="nv-linesWrap">
                                    <g
                                      className="nvd3 nv-wrap nv-line"
                                      transform="translate(0,0)"
                                    >
                                      <defs>
                                        <clipPath id="nv-edge-clip-10456">
                                          <rect width="181" height="103"></rect>
                                        </clipPath>
                                      </defs>
                                      <g clipPath="">
                                        <g className="nv-groups">
                                          <g
                                            className="nv-group nv-series-0"
                                            style={{
                                              strokeOpacity: "1",
                                              fillOpacity: "0.5",
                                              fill: "rgb(0, 0, 0)",
                                              stroke: "rgb(0, 0, 0)",
                                            }}
                                          >
                                            <path
                                              className="nv-line"
                                              d="M0,103L30.16666666666667,75.53333333333333L60.33333333333334,34.33333333333334L90.5,27.46666666666667L120.66666666666669,0L150.83333333333334,13.733333333333334L181,68.66666666666667"
                                            ></path>
                                          </g>
                                        </g>
                                        <g
                                          className="nv-scatterWrap"
                                          clipPath=""
                                        >
                                          <g
                                            className="nvd3 nv-wrap nv-scatter nv-chart-10456"
                                            transform="translate(0,0)"
                                          >
                                            <defs>
                                              <clipPath id="nv-edge-clip-10456">
                                                <rect
                                                  width="181"
                                                  height="103"
                                                ></rect>
                                              </clipPath>
                                            </defs>
                                            <g clipPath="">
                                              <g className="nv-groups">
                                                <g
                                                  className="nv-group nv-series-0"
                                                  style={{
                                                    strokeOpacity: "1",
                                                    fillOpacity: "0.5",
                                                    stroke: "rgb(0, 0, 0)",
                                                    fill: "rgb(0, 0, 0)",
                                                  }}
                                                >
                                                  <circle
                                                    cx="0"
                                                    cy="103"
                                                    r="3"
                                                    className="nv-point nv-point-0"
                                                    style={{
                                                      strokeWidth: "2px",
                                                    }}
                                                  ></circle>
                                                  <circle
                                                    cx="30.16666666666667"
                                                    cy="75.53333333333333"
                                                    r="3"
                                                    className="nv-point nv-point-1"
                                                    style={{
                                                      strokeWidth: "2px",
                                                    }}
                                                  ></circle>
                                                  <circle
                                                    cx="60.33333333333334"
                                                    cy="34.33333333333334"
                                                    r="3"
                                                    className="nv-point nv-point-2"
                                                    style={{
                                                      strokeWidth: "2px",
                                                    }}
                                                  ></circle>
                                                  <circle
                                                    cx="90.5"
                                                    cy="27.46666666666667"
                                                    r="3"
                                                    className="nv-point nv-point-3"
                                                    style={{
                                                      strokeWidth: "2px",
                                                    }}
                                                  ></circle>
                                                  <circle
                                                    cx="120.66666666666669"
                                                    cy="0"
                                                    r="3"
                                                    className="nv-point nv-point-4"
                                                    style={{
                                                      strokeWidth: "2px",
                                                    }}
                                                  ></circle>
                                                  <circle
                                                    cx="150.83333333333334"
                                                    cy="13.733333333333334"
                                                    r="3"
                                                    className="nv-point nv-point-5"
                                                    style={{
                                                      strokeWidth: "2px",
                                                    }}
                                                  ></circle>
                                                  <circle
                                                    cx="181"
                                                    cy="68.66666666666667"
                                                    r="3"
                                                    className="nv-point nv-point-6"
                                                    style={{
                                                      strokeWidth: "2px",
                                                    }}
                                                  ></circle>
                                                </g>
                                              </g>
                                              <g className="nv-point-paths"></g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g className="nv-legendWrap"></g>
                                  <g className="nv-interactive"></g>
                                </g>
                              </g>
                            </svg>
                            {/* END SVG HERE */}
                          </div>
                        </div>
                      </div>
                      {refreshSix ? progress : null}
                    </div>
                  </div>
                </div>
              </div>

              <div class=" card   no-margin widget-loader-circle todolist-widget pending-projects-widget">
                <div
                  class="card-header"
                  style={{ background: "black", color: "#fff" }}
                >
                  <div class="card-title">
                    <span class="d-flex align-items-center font-montserrat all-caps">
                      Your Organizer <i class="pg-icon">chevron_right</i>
                    </span>
                  </div>
                  <div class="card-controls">
                    <ul>
                      <li>
                        <a data-toggle="refresh" class="card-refresh " href="#">
                          <i class="card-icon card-icon-refresh "></i>
                          <i
                            class="card-icon-refresh-lg-white-animated "
                            style={{
                              position: "absolute",
                              top: "14px",
                              right: "20px",
                            }}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <ul
                    className="nav nav-tabs nav-tabs-simple m-b-20 "
                    role="tablist"
                    data-init-reponsive-tabs="collapse"
                  >
                    <li className="nav-item">
                      <a
                        href="#pending"
                        className="active"
                        data-toggle="tab"
                        role="tab"
                        aria-expanded="true"
                      >
                        Todo's
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#completed"
                        data-toggle="tab"
                        role="tab"
                        aria-expanded="false"
                      >
                        Completed
                      </a>
                    </li>
                  </ul>
                  <div
                    className="tab-content no-padding"
                    style={{ padding: "0px" }}
                  >
                    <div
                      className="tab-pane active"
                      id="pending"
                      style={{ padding: "0px" }}
                    >
                      <div
                        className=" card no-border no-margin widget-loader-circle todolist-widget align-self-stretch"
                        style={{ boxShadow: "none" }}
                      >
                        <ul className="list-unstyled p-l-20 p-r-20 p-t-10 m-b-20">
                          <li>
                            <h5 className="pull-left normal no-margin">
                              {d.getDate()}th {months[d.getMonth()]}{" "}
                              {d.getFullYear()}
                            </h5>
                          </li>
                          <div className="clearfix"></div>
                        </ul>
                        <div className="task-list p-t-0 p-r-20 p-b-20 p-l-20 clearfix flex-1">
                          {/* completed */}
                          {todos &&
                            todos.map((e, i) => {
                              return (
                                <div key={e.id} className="task clearfix row">
                                  <div className="task-list-title col-10 justify-content-between">
                                    <a
                                      href="#"
                                      // className={`text-color subject_  capitalize`}

                                      className={`text-color ${optionsStrike[i]}`}
                                      data-task="name"
                                    >
                                      {e.subject}
                                    </a>
                                    <i className="fs-14 pg-close hidden"></i>
                                  </div>
                                  {/* <input type='checkbox' onClick={() => checkInput(i) }  className="strike_line"
                                /> */}
                                  <div
                                    className="form-check checkbox-circle no-margin text-center col-2 d-flex justify-content-center align-items-center"
                                  // onClick={() => checkInput(i)}
                                  >
                                    <input
                                      type="checkbox"
                                      value="1"
                                      id={`todocheck${i}`}
                                      data-toggler="task"
                                      className="form-check checkbox-circle"
                                      onClick={(e) => handleStrike(e, i)}
                                    // onClick={() => setClasss('strikethrough')}
                                    />
                                    <label
                                      htmlFor={`todocheck${i}`}
                                      className=" no-margin no-padding absolute"
                                    ></label>
                                  </div>
                                </div>
                              );
                            })}
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
                                  placeholder="What do you need to remember?"
                                />
                              </div>
                            </div>
                            <div
                              className="col-2 text-center"
                              onClick={handleShowTodo}
                            >
                              <Link to="#" className="block m-t-15">
                                <img src={plusSVG} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block m-t-30">
                        See all projects
                      </a>
                    </div>
                    <div className="tab-pane" id="completed">
                      <div className="p-t-10">
                        <div className="d-flex">
                          <span className="icon-thumbnail bg-contrast-higher pull-left ">
                            ws
                          </span>
                          <div className="flex-1 full-width overflow-ellipsis">
                            <p className="hint-text all-caps font-montserrat fs-11 no-margin overflow-ellipsis ">
                              Apple Corp
                            </p>
                            <h5 className="no-margin overflow-ellipsis ">
                              Marketing Campaign for revox
                            </h5>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        <div className="m-t-15">
                          <p className="hint-text  small pull-left no-margin">
                            45% completed from total
                          </p>
                          <a href="#" className="pull-right ">
                            <i className="pg-icon">more_horizontal</i>
                          </a>
                          <div className="clearfix"></div>
                        </div>
                        <div className="progress progress-small m-b-15 m-t-10">
                          <div
                            className="progress-bar progress-bar-info"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="p-t-15">
                        <div className="d-flex">
                          <span className="icon-thumbnail bg-primary-light pull-left ">
                            cr
                          </span>
                          <div className="flex-1 full-width overflow-ellipsis">
                            <p className="hint-text all-caps font-montserrat fs-11 no-margin overflow-ellipsis ">
                              Yahoo Inc
                            </p>
                            <h5 className="no-margin overflow-ellipsis ">
                              Corporate rebranding
                            </h5>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        <div className="m-t-15">
                          <p className="hint-text  small pull-left no-margin">
                            20% completed from total
                          </p>
                          <a href="#" className="pull-right ">
                            <i className="pg-icon">more_horizontal</i>
                          </a>
                          <div className="clearfix"></div>
                        </div>
                        <div className="progress progress-small m-b-15 m-t-10">
                          <div
                            className="progress-bar progress-bar-warning"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block m-t-30">
                        See all projects
                      </a>
                    </div>
                  </div>
                  {refreshEight ? progress : null}
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
