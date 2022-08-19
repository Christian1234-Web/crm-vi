import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiCart, mdiTruck, mdiCreditCardOutline, mdiCheck } from "@mdi/js";
import { ValidatorForm } from "react-form-validator-core";
import WithoutMsgValidation from "../FormLayouts/WithoutMsgValidation";
import SelectValidation from "./SelectValidation";
import { ProgressTwo } from "../../UIElements/ProgressAndActivity/Content";
import Copyright from "../../ui/Footer/Copyright";
import PageContainer from "../../UIElements/Containers";
import StageSelect from "./StageSelect";

import Countries from "../Elements/countries";
import { CountryCodes, MonthWithCodes, Years } from "./Codes";
import axios from 'axios';
import "./style.css";

const content = ({ path }) => {
  const [tabs, setTabs] = useState([true, false, false, false]);

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const [countries] = useState(Countries);
  const [monthWithCodes] = useState(MonthWithCodes);
  const [years] = useState(Years);

  const [shippingName, setShippingName] = useState("");
  const [shippingEmail, setShippingEmail] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingState, setShippingState] = useState("");
  const [countryText, setCountryText] = useState(Countries[235]);
  const [countryCode, setCountryCode] = useState(CountryCodes[1]);
  const [formState, setFormState] = useState(true);

  const [paymentFormState, setPaymentFormState] = useState(true);

  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const [item1Close, setItem1Close] = useState(false);
  const [item2Close, setItem2Close] = useState(false);

  // bundle state
  const [bundleName, setBundleName] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [bundleUnitPrice, setBundleUnitPrice] = useState("");
  const [waiting, setWaiting] = useState(false);
  const [count, setCount] = useState(0);

  const [selectedBundle, setSelectedBundle] = useState(null);
  const [bundleArr] = useState([]);

  const total_Price = bundleArr.reduce((accumulator, current) => accumulator + current.price * 1, 0)
  const sub_total_Price = bundleArr.reduce((accumulator, current) => accumulator + current.price + 1, 0)


  let countryOptionsList = () => {
    return (
      <React.Fragment>
        <option value="">Select Country</option>
        {countries.map((value, index) => {
          return (
            <option value={value} key={index}>
              {value}
            </option>
          );
        })}
      </React.Fragment>
    );
  };

  let countryCodesList = () => {
    return (
      <React.Fragment>
        <option value="">Select Code</option>
        {CountryCodes.map((value, index) => {
          return (
            <option value={value} key={index}>
              {value}
            </option>
          );
        })}
      </React.Fragment>
    );
  };

  let paymentMonths = () => {
    return (
      <React.Fragment>
        <option value="">Select</option>
        {monthWithCodes.map((value, index) => {
          return (
            <option value={value} key={index}>
              {value}
            </option>
          );
        })}
      </React.Fragment>
    );
  };

  let paymentYears = () => {
    return (
      <React.Fragment>
        <option value="">Select</option>
        {years.map((value, index) => {
          return (
            <option value={value} key={index}>
              {value}
            </option>
          );
        })}
      </React.Fragment>
    );
  };

  let handleFormSubmit = () => {
    //Call this function on form submit with no errors
  };



  // console.log(new Intl.NumberFormat().format(2500));


  const fetchSpecificBundle = async amountInputed => {
    if (amountInputed) {
      const url = `https://deda-crm-backend.herokuapp.com/unit/amount/calc?units=${amountInputed}`;
      try {
        const rs = (await axios(url)).data;
        setSelectedBundle(rs.bundle);
        setBundleName(rs.bundle.name);
        setBundleUnitPrice(rs.bundle.amount);
        setTotalPrice(rs.result);
        setWaiting(false);

      } catch (err) {
        console.log("fetch patients err", err);
      }
    };
  }


  const handleChange = (e) => {
    if (Number(e) >= 5000) {
      setWaiting(true);
      fetchSpecificBundle(Number(e));
    }
  };


  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content ">
        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container p-l-0"
              : " "
          }
        >
          <div id="rootwizard" className="m-t-50">
            <ul
              className="nav nav-tabs nav-tabs-linetriangle nav-tabs-separator nav-stack-sm d-none d-md-flex d-lg-flex d-xl-flex"
              role="tablist"
              data-init-reponsive-tabs="dropdownfx"
            >
              <li
                className="nav-item"
                onClick={() => setTabs([true, false, false, false])}
              >
                <a
                  className={`d-flex align-items-center ${tabs[0] ? "active" : ""
                    }`}
                  data-toggle="tab"
                  href="javascript:void(0);"
                  onClick={(e) => e.preventDefault()}
                  data-target="#tab1"
                  role="tab"
                  aria-selected={tabs[0] ? "true" : "false"}
                >
                  {/* <i className="material-icons fs-14 tab-icon">shopping_cart</i>  */}
                  <Icon path={mdiCart} style={{ width: 14, marginRight: 3 }} />
                  <span>&nbsp;</span>
                  <span>Your cart</span>
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setTabs([false, true, false, false])}
              >
                <a
                  className={`d-flex align-items-center ${tabs[1] ? "active" : ""
                    }`}
                  data-toggle="tab"
                  href="javascript:void(0);"
                  onClick={(e) => e.preventDefault()}
                  data-target="#tab2"
                  role="tab"
                  aria-selected={tabs[1] ? "true" : "false"}
                >
                  <Icon path={mdiTruck} style={{ width: 14, marginRight: 3 }} />
                  <span>&nbsp;</span>
                  <span>Shipping information</span>
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setTabs([false, false, true, false])}
              >
                <a
                  className={`d-flex align-items-center ${tabs[2] ? "active" : ""
                    }`}
                  data-toggle="tab"
                  href="javascript:void(0);"
                  onClick={(e) => e.preventDefault()}
                  data-target="#tab3"
                  role="tab"
                  aria-selected={tabs[2] ? "true" : "false"}
                >
                  <Icon
                    path={mdiCreditCardOutline}
                    style={{ width: 14, marginRight: 3 }}
                  />
                  <span>&nbsp;</span>
                  <span>Payment details</span>
                </a>
              </li>
              <li
                className="nav-item"
                onClick={() => setTabs([false, false, false, true])}
              >
                <a
                  className={`d-flex align-items-center ${tabs[3] ? "active" : ""
                    }`}
                  data-toggle="tab"
                  href="javascript:void(0);"
                  onClick={(e) => e.preventDefault()}
                  data-target="#tab4"
                  role="tab"
                  aria-selected={tabs[3] ? "true" : "false"}
                >
                  <Icon path={mdiCheck} style={{ width: 14, marginRight: 3 }} />
                  <span>&nbsp;</span>
                  <span>Summary</span>
                </a>
              </li>
            </ul>
            <div className="nav-tab-dropdown cs-wrapper full-width d-lg-none d-xl-none d-md-none">
              <StageSelect onSelectTabs={setTabs} />
            </div>

            <div className="tab-content">
              <div
                className={
                  tabs[0]
                    ? "tab-pane padding-20 sm-no-padding slide-left active"
                    : "tab-pane padding-20 sm-no-padding slide-left"
                }
                id="tab1"
              >
                <div className="row row-same-height">
                  <div className="col-md-6 b-r b-dashed b-grey sm-b-b">
                    <div className="padding-30 sm-padding-5 sm-m-t-15 m-t-50">
                      {/* <span className="hidden-block"> */}
                      <Icon path={mdiCart} size="2em" />
                      {/* </span> */}
                      <h2>Units Purchase Calculator!</h2>
                      <p>
                        <span class="text-success">TIP: </span>
                        Patrela provides a complete help desk experience with a fully customizable
                        knowledge base that’s available 24/7, even if your team isn’t.
                      </p>
                      <p className="small hint-text text-success">
                        Type in the amount of units you wish to purchase and find the cost.
                      </p>
                      <div>
                        <div className="d-flex justify-content-center align-items-center">
                          <table className="table table-condensed table-hover">
                            <thead style={{ background: '#f4f4f4' }}>
                              <tr>
                                <td className="font-montserrat all-caps fs-12 w-25">
                                  VOLUME
                                </td>
                                <td className="font-montserrat all-caps fs-12" style={{ width: '60%', paddingLeft: '20px' }}>BUNDLE</td>
                                <td className="text-right  b-r b-dashed b-grey w-25">
                                  <span className="hint-text small"> PRICE</span>
                                </td>
                                <td className="text-right w-25">
                                  <span className="hint-text small">UNIT</span>
                                </td>

                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td
                                  contenteditable="true" style={{ outline: 'none' }}
                                  onInput={(e) => handleChange(e.currentTarget.textContent)}
                                  className="font-montserrat all-caps fs-12 w-25">
                                  0
                                </td>
                                <td className="hidden-lg">
                                  <span className="hint-text all-caps small">
                                    {waiting ? <ProgressTwo /> : bundleName}
                                  </span>
                                </td>
                                <td className="text-right  b-r b-dashed b-grey">
                                  <span className="hint-text small ">
                                    {waiting ? <ProgressTwo /> : totalPrice}
                                  </span>
                                </td>
                                <td className="text-right" >
                                  <span className="hint-text small d-flex justify-content-between"
                                  >
                                    <div>
                                      {waiting ? (
                                        <div>
                                          <ProgressTwo />

                                        </div>
                                      ) : (
                                        bundleUnitPrice

                                      )}
                                    </div>
                                    <i className="pg-icon pull-right" style={{ cursor: 'pointer' }} onClick={() => {
                                      let x = bundleArr.find(x => x.price === selectedBundle.price);
                                      if (!x) {
                                        bundleArr.push({ ...selectedBundle, price: totalPrice });
                                      }
                                      setCount(count + 1);
                                    }}>add</i>
                                  </span>
                                </td>

                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="padding-30 sm-padding-5">
                      <table className="table table-condensed">
                        <tbody>

                          {bundleArr.map((e, i) => (
                            <tr key={e.id} className={item1Close ? `d-none` : ``}>
                              <td className="col-lg-5 col-md-6 col-sm-6 ">
                                <a
                                  href="javascript:void(0);"
                                  className="remove-item"
                                  onClick={() => {
                                    // let items = [...data];
                                    bundleArr.splice(i, 1);
                                    setCount(count - 1);

                                  }}
                                >
                                  <i className="pg-icon">close</i>
                                </a>
                                <span className="m-l-10 font-montserrat fs-11 all-caps">
                                  {e.name}
                                </span>
                                {/* <span className="m-l-10 ">Dashboard UI Pack</span> */}
                              </td>
                              <td className="col-lg-3 col-md-3 col-sm-3 text-right">
                                <span>Qty {e.unitQuantity}</span>
                              </td>
                              <td className=" col-lg-6 col-md-5 col-sm-2 text-right">
                                <h4 className="text-primary no-margin font-montserrat" style={{ fontSize: '20px' }}>
                                  ₦{new Intl.NumberFormat().format(parseInt(e.price))}.00
                                </h4>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <h5>Discount</h5>
                      <div className="row">
                        <div className="col-lg-7 col-md-6">
                          <p className="no-margin">
                            Use the quick bulk buy and get 20% off .{" "}
                          </p>
                          <p className="small hint-text">
                            If you're looking to buy above 800,000 units, please send us an
                            email at.{" "}
                            <a href="javascript:void(0);">hello@patrela.com</a>
                          </p>
                        </div>
                        <div className="col-lg-5 col-md-6">
                          <div
                            className="btn-group btn-group-toggle"
                            data-toggle="buttons"
                          >

                            <label className="btn btn-default">
                              <input type="radio" name="options" id="option2" />{" "}
                              <span className="fs-16"
                                onClick={() => {
                                  // let x = bundleArr.find(x => x.price === selectedBundle.price);
                                  // if (!x) {
                                    let ob60 = { amount: 7, id: 7, name: 'Business Premium', unitQuantity: 15000, price: 420000 }
                                    bundleArr.push(ob60);
                                  // }
                                  setCount(count + 1);
                                }}
                              > 60,000 <span className="small hint-text text-success">units</span></span>
                            </label>
                            <label className="btn btn-default">
                              <input type="radio" name="options" id="option3" />{" "}
                              <span className="fs-16"
                                onClick={() => {
                                  // let x = bundleArr.find(x => x.price === x.price);
                                  // if (!x) {
                                  let ob80 = { amount: 7, id: 7, name: 'Business Premium', unitQuantity: 15000, price: 560000 };
                                  bundleArr.push(ob80);
                                  // }
                                  setCount(count + 1);
                                }}
                              > 80,000 <span className="small hint-text text-success">units</span></span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="row b-a b-grey no-margin">
                        <div className="col-md-5 p-l-10 sm-padding-15 align-items-center d-flex">
                          <div>
                            <h5 className="font-montserrat all-caps small no-margin hint-text bold">
                              SubTotal
                            </h5>
                            <p className="no-margin"> ₦{new Intl.NumberFormat().format(parseInt(total_Price))}.00</p>
                          </div>
                        </div>
                        <div className="col-md-3 col-middle sm-padding-15 align-items-center d-flex">
                          <div>
                            <h5 className="font-montserrat all-caps small no-margin hint-text bold">
                              Tax
                            </h5>
                            <p className="no-margin"> ₦0.00</p>
                          </div>
                        </div>
                        <div className="col-md-4 text-right bg-primary padding-10">
                          <h5 className="font-montserrat all-caps small no-margin hint-text text-white bold">
                            Total
                          </h5>
                          <h4 className="no-margin text-white"> ₦{new Intl.NumberFormat().format(parseInt(sub_total_Price))}.00</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  tabs[1]
                    ? "tab-pane slide-left padding-20 sm-no-padding active"
                    : "tab-pane slide-left padding-20 sm-no-padding"
                }
                id="tab2"
              >
                <div className="row row-same-height">
                  <div className="col-md-5 b-r b-dashed b-grey ">
                    <div className="padding-30 sm-padding-5 sm-m-t-15 m-t-50">
                      <h2>Your Information is safe with us!</h2>
                      <p>
                        We respect your privacy and protect it with strong
                        encryption, plus strict policies . Two-step
                        verification, which we encourage all our customers to
                        use.
                      </p>
                      <p className="small hint-text">
                        {/* Below is a sample page for your cart , Created using
                        pages design UI Elementes */}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="padding-30 sm-padding-5">
                      <ValidatorForm
                        instantValidate={true}
                        ref={(r) => setFormState(r)}
                        onSubmit={handleFormSubmit}
                      >
                        <p>Name and Email Address</p>
                        <div className="form-group-attached">
                          <div className="row clearfix">
                            <div className="col-sm-6">
                              <WithoutMsgValidation
                                onChange={(e) =>
                                  setShippingName(e.target.value)
                                }
                                name="firstName"
                                value={shippingName}
                                validators={["required"]}
                                errorMessages={["This field is required"]}
                                className={"form-control"}
                                label={"First Name"}
                                require="true"
                              />
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group form-group-default">
                                <label>Last name</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <WithoutMsgValidation
                            onChange={(e) => setShippingEmail(e.target.value)}
                            name="email"
                            value={shippingEmail}
                            validators={["required", "isEmail"]}
                            errorMessages={["This field is required"]}
                            className={"form-control"}
                            label={"Email"}
                            require="true"
                          />
                        </div>
                        <br />
                        <p>Billing Address</p>
                        <div className="form-group-attached">
                          <WithoutMsgValidation
                            onChange={(e) => setShippingAddress(e.target.value)}
                            name="address"
                            value={shippingAddress}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className={"form-control"}
                            label={"Address"}
                            require="true"
                          />
                          <div className="row clearfix">
                            <div className="col-sm-6">
                              <SelectValidation
                                name="countries"
                                id="countriesId"
                                style={{
                                  border: "0px",
                                  width: "100%",
                                  marginLeft: "-3px",
                                }}
                                options={countryOptionsList()}
                                value={countryText}
                                onChange={(e) => setCountryText(e.target.value)}
                                validators={["required"]}
                                errorMessages={["This field is required"]}
                                label={"Countries"}
                                require="true"
                              />
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group form-group-default">
                                <label>City</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="row clearfix">
                            <div className="col-sm-9">
                              <WithoutMsgValidation
                                onChange={(e) =>
                                  setShippingState(e.target.value)
                                }
                                name="state"
                                value={shippingState}
                                validators={["required"]}
                                errorMessages={["This field is required"]}
                                className={"form-control"}
                                label={"State/Province"}
                                require="true"
                              />
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group form-group-default">
                                <label>Zip code</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="row clearfix">
                            <div className="col-sm-5">
                              <SelectValidation
                                name="codes"
                                id="codesId"
                                style={{
                                  border: "0px",
                                  width: "100%",
                                  marginLeft: "-3px",
                                }}
                                options={countryCodesList()}
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                validators={["required"]}
                                errorMessages={["This field is required"]}
                                label={"Code"}
                                require="true"
                              />
                            </div>
                            <div className="col-sm-7">
                              <div className="form-group form-group-default">
                                <label>Project</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </ValidatorForm>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  tabs[2]
                    ? "tab-pane slide-left padding-20 sm-no-padding active"
                    : "tab-pane slide-left padding-20 sm-no-padding"
                }
                id="tab3"
              >
                <div className="row row-same-height">
                  <div className="col-md-5 b-r b-dashed b-grey ">
                    <div className="padding-30 sm-padding-5 sm-m-t-15 m-t-50">
                      <h2>We Secured Your Line</h2>
                      <p>
                        Below is a tabular preview of your cart ,
                        Please preview and proceed to make payment using our secure channel.
                      </p>
                      <p className="small hint-text text-success">
                        TIP: Customers will be able to find what they’re looking
                        for and instantly receive suggestions as they type.
                      </p>
                      <table className="table table-condensed">
                        <tbody>
                          {bundleArr.map((e, i) => (
                            <tr key={e.id} className={item1Close ? `d-none` : ``}>
                              <td className="col-lg-6 col-md-6 col-sm-7 ">

                                <span className="m-l-10 font-montserrat fs-11 all-caps">
                                  {e.name}
                                </span>
                                {/* <span className="m-l-10 ">Dashboard UI Pack</span> */}
                              </td>
                              <td className=" col-lg-4 col-md-4 col-sm-4 text-right">
                                <span>Qty {e.unitQuantity}</span>
                              </td>
                              <td className=" col-lg-6 col-md-4 col-sm-2 text-right">
                                <h4 className="text-primary no-margin font-montserrat" style={{ fontSize: '20px' }}>
                                  ₦{new Intl.NumberFormat().format(parseInt(e.price))}.00
                                </h4>
                              </td>
                            </tr>
                          ))}

                          <tr>
                            <td colSpan="3" className=" col-md-3 text-right">
                              <h4 className="text-primary no-margin font-montserrat ">
                                ₦{new Intl.NumberFormat().format(parseInt(total_Price))}.00
                              </h4>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="small">
                        Invoice are issued on the date of despatch. Payment
                        terms: Pre-orders: within 10 days of invoice date with
                        4% discount, from the 11th to the 30th day net.
                        Re-orders: non-reduced stock items are payable net after
                        20 days.{" "}
                      </p>
                      <p className="small">
                        By pressing Pay Now You will Agree to the Payment{" "}
                        <a href="javascript:void(0);">Terms &amp; Conditions</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="padding-30 sm-padding-5">
                      <ul className="list-unstyled list-inline m-l-30">
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="p-r-30 text-black"
                          >
                            Credit card
                          </a>
                        </li>
                        <li style={{ padding: "0px 10px" }}>
                          <a
                            href="javascript:void(0);"
                            className="p-r-30 text-black  hint-text"
                          >
                            PayPal
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            className="p-r-30 text-black  hint-text"
                          >
                            Wire transfer
                          </a>
                        </li>
                      </ul>
                      <ValidatorForm
                        instantValidate={true}
                        ref={(r) => setPaymentFormState(r)}
                        onSubmit={handleFormSubmit}
                      >
                        <div className="bg-contrast-low padding-30 b-rad-lg">
                          <h2 className="pull-left no-margin">Credit Card</h2>
                          <ul className="list-unstyled pull-right list-inline no-margin">
                            <li>
                              <a href="javascript:void(0);">
                                <img
                                  width="51"
                                  height="32"
                                  data-src-retina={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/form-wizard/visa2x.png"
                                  }
                                  data-src={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/form-wizard/visa.png"
                                  }
                                  className="brand"
                                  alt="logo"
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/form-wizard/visa.png"
                                  }
                                />
                              </a>
                            </li>
                            <li style={{ padding: "0px 9px" }}>
                              <a
                                href="javascript:void(0);"
                                className="hint-text"
                              >
                                <img
                                  width="51"
                                  height="32"
                                  data-src-retina={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/form-wizard/amex2x.png"
                                  }
                                  data-src={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/form-wizard/amex.png"
                                  }
                                  className="brand"
                                  alt="logo"
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/form-wizard/amex.png"
                                  }
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                className="hint-text"
                              >
                                <img
                                  width="51"
                                  height="32"
                                  data-src-retina="assets/img/form-wizard/mastercard2x.png"
                                  data-src={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/form-wizard/mastercard.png"
                                  }
                                  className="brand"
                                  alt="logo"
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/img/form-wizard/mastercard.png"
                                  }
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="clearfix"></div>
                          <div className="m-t-25">
                            <WithoutMsgValidation
                              onChange={(e) =>
                                setCardHolderName(e.target.value)
                              }
                              name="cardHolderName"
                              value={cardHolderName}
                              validators={["required"]}
                              errorMessages={["This field is required"]}
                              placeholder="Name on the card"
                              className="form-control"
                              label={"Card holder's name"}
                              require="true"
                            />
                          </div>

                          <WithoutMsgValidation
                            onChange={(e) => setCardNumber(e.target.value)}
                            name="cardHolderNumber"
                            value={cardNumber}
                            validators={["required", "isNumber", "isPositive"]}
                            errorMessages={["This field is required"]}
                            className={"form-control"}
                            placeholder="8888-8888-8888-8888"
                            label={"Card number"}
                            require="true"
                          />
                          <div className="row">
                            <div className="col-md-4 col-sm-6">
                              <label>Expiration</label>
                              <br />
                              <SelectValidation
                                name="expireMonth"
                                id="expireMonthId"
                                style={{
                                  border: "0px",
                                  width: "100%",
                                  marginLeft: "-3px",
                                }}
                                options={paymentMonths()}
                                value={selectedMonth}
                                onChange={(e) =>
                                  setSelectedMonth(e.target.value)
                                }
                                validators={["required"]}
                                errorMessages={["This field is required"]}
                                label={"Month"}
                                require="true"
                              />
                            </div>
                            <div
                              className="col-md-4 col-sm-6"
                              style={{ alignSelf: "flex-end" }}
                            >
                              <SelectValidation
                                name="expireYear"
                                id="expireYearId"
                                style={{
                                  border: "0px",
                                  width: "100%",
                                  marginLeft: "-3px",
                                }}
                                options={paymentYears()}
                                value={selectedYear}
                                onChange={(e) =>
                                  setSelectedYear(e.target.value)
                                }
                                validators={["required"]}
                                errorMessages={["This field is required"]}
                                label={"Year"}
                                require="true"
                              />
                            </div>
                            <div className="col-md-2 col-sm-6 offset-md-2">
                              <div className="form-group required">
                                <label>CVC Code</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="000"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </ValidatorForm>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  tabs[3]
                    ? "tab-pane slide-left padding-20 sm-no-padding active"
                    : "tab-pane slide-left padding-20 sm-no-padding"
                }
                id="tab4"
              >
                <h1>Thank you.</h1>
              </div>
              <div className="padding-20 sm-padding-5 sm-m-b-20 sm-m-t-20 bg-white clearfix">
                <ul className="pager wizard no-style">
                  <li
                    className={`next ${tabs[3] ? "disabled" : ""}`}
                    style={tabs[3] ? { display: "none" } : {}}
                  >
                    <button
                      aria-label=""
                      onClick={() => {
                        if (tabs[0]) {
                          setTabs((prevState) => {
                            if (prevState[0])
                              return [false, true, false, false];
                            if (prevState[1]) {
                              return [false, false, true, false];
                            }
                            if (prevState[2])
                              return [false, false, false, true];
                          });
                        }
                        if (tabs[1]) {
                          return formState
                            .isFormValid(false)
                            .then((formValidState) => {
                              setTabs((prevState) => {
                                if (prevState[0])
                                  return [false, true, false, false];
                                if (prevState[1]) {
                                  return formValidState
                                    ? [false, false, true, false]
                                    : [false, true, false, false];
                                }
                                if (prevState[2])
                                  return [false, false, false, true];
                              });
                            });
                        }
                        if (tabs[2]) {
                          return paymentFormState
                            .isFormValid(false)
                            .then((formValidState) => {
                              setTabs((prevState) => {
                                if (prevState[0])
                                  return [false, true, false, false];
                                if (prevState[1]) {
                                  return [false, false, true, false];
                                }
                                if (prevState[2])
                                  return formValidState
                                    ? [false, false, false, true]
                                    : [false, false, true, false];
                              });
                            });
                        }
                      }}
                      className="btn btn-primary btn-cons btn-animated from-left pull-right"
                      type="button"
                    >
                      <span>Next</span>
                      <span className="hidden-block">
                        {tabs[0] ? <Icon path={mdiTruck} size="1em" /> : null}
                        {tabs[1] ? (
                          <Icon path={mdiCreditCardOutline} size="1em" />
                        ) : null}
                        {tabs[2] ? <Icon path={mdiCheck} size="1em" /> : null}
                      </span>
                    </button>
                  </li>
                  <li
                    className={
                      tabs[3] ? `next finish list items` : `next finish d-none`
                    }
                  >
                    <button
                      aria-label=""
                      onClick={() => setTabs([true, false, false, false])}
                      className="btn btn-primary btn-cons btn-animated from-left pull-right"
                      type="button"
                    >
                      <span>Finish</span>
                      <span className="hidden-block">
                        <Icon path={mdiCheck} size="1em" />
                      </span>
                    </button>
                  </li>
                  <li
                    className={`${tabs[0] ? "previous first hidden disabled" : ""
                      } ${tabs[1] ? "previous first hidden" : ""} ${tabs[2] ? "previous first hidden" : ""
                      } ${tabs[3] ? "previous first hidden" : ""}`}
                  >
                    <button
                      aria-label=""
                      onClick={() => setTabs([true, false, false, false])}
                      className="btn btn-default btn-cons from-left pull-right"
                      type="button"
                    >
                      <span>First</span>
                      <span
                        className="hidden-block"
                        style={{ display: "none" }}
                      >
                        <Icon path={mdiTruck} size="1em" />
                      </span>
                    </button>
                  </li>
                  <li
                    className={`${tabs[0] ? "previous disabled" : ""} ${tabs[1] ? "previous" : ""
                      } ${tabs[2] ? "previous" : ""}`}
                  >
                    <button
                      aria-label=""
                      onClick={() =>
                        setTabs((prevState) => {
                          if (prevState[0]) return [true, false, false, false];
                          if (prevState[1]) return [true, false, false, false];
                          if (prevState[2]) return [false, true, false, false];
                          if (prevState[3]) return [false, false, true, false];
                        })
                      }
                      className={`btn btn-default btn-cons from-left pull-right ${tabs[1] || tabs[2] || tabs[3] ? "btn-animated" : ""
                        }`}
                      type="button"
                    >
                      <span>Previous</span>
                      {tabs[0] ? (
                        <span
                          className="hidden-block"
                          style={{ display: "none" }}
                        >
                          <Icon path={mdiTruck} size="1em" />
                        </span>
                      ) : null}
                      {tabs[1] ? (
                        <span className="hidden-block">
                          <Icon path={mdiCart} size="1em" />
                        </span>
                      ) : null}
                      {tabs[2] ? (
                        <span className="hidden-block">
                          <Icon path={mdiTruck} size="1em" />
                        </span>
                      ) : null}
                      {tabs[3] ? (
                        <span className="hidden-block">
                          <Icon path={mdiCreditCardOutline} size="1em" />
                        </span>
                      ) : null}
                    </button>
                  </li>
                </ul>
              </div>
              <div className="wizard-footer padding-20 bg-contrast-low">
                <p className="small hint-text pull-left no-margin">
                  The Top Content Is Soley Created using pages UI Elements such
                  as Invoice, Tabs, Form Layouts etc. and are prior for
                  representation Purpose Only.
                </p>
                <div className="pull-right">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
                    alt="logo"
                    data-src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
                    data-src-retina="assets/img/logo_2x.png"
                    width="78"
                    height="22"
                  />
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>

      {/* START COPYRIGHT */}
      <Copyright
        year={"2014"}
        brand={"CENTIO"}
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
