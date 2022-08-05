import React, { useState } from "react";
import ReactQuill from "react-quill";

import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";
import { Typeahead, Highlighter } from "react-bootstrap-typeahead";
import InputMask from "react-input-mask";
import DatePickerAlias from "react-datepicker";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DatePicker, { Calendar, utils } from "react-modern-calendar-datepicker";
import FlatPickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";

import PageScroll from "../../UIElements/PageScroll";
import Breadcrumb from "../../UIElements/Breadcrumb";
import PageContainer from "../../UIElements/Containers";
import Copyright from "../../ui/Footer/Copyright";
import GroupSelect from "./GroupSelect";
import FileUpload from "./FileUpload";
import Button from "../../UIElements/Button";
import AnimatedSelect from "./AnimatedSelect";
import TypeHeadSelect from "./TypeHeadSelect";
import TypeHeadMultiSelect from "./TypeHeadMultiSelect";

import Input from "./Input";
import Label from "./Label";
import InputWithLabel from "./InputWithLabel";

import "react-quill/dist/quill.snow.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

import Countries from "./countries";
import disabledDays from "./disabledDays";
import Options from "./options";
import AdvancedOptions from "./AdvancedSelect";
import { cityTags, emailTags, randomWordTags } from "./tags";

import "./styles.scss";

const content = ({ path }) => {
  const [defaultTextFields, setDefaultTextFields] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [defaultControlSize, setDefaultControlSize] = useState([
    false,
    false,
    false,
  ]);
  const [typeheadTextFields, setTypeHeadTextFields] = useState([
    false,
    false,
    false,
  ]);
  const [emailInput, setEmailInput] = useState(false);

  const [quil, setQuil] = useState("Hello Quill");
  const [quilModules] = useState({
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  });
  const [quilFormats] = useState([
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "size",
    "heading",
    "color",
    "background",
    "font",
    "align",
    "link",
    "image",
  ]);

  const [simpleDateOne, setSimpleDateOne] = useState(null);
  const [simpleDateTwo, setSimpleDateTwo] = useState(null);

  const [rangeDateOne, setRangeDateOne] = useState(null);
  const [rangeDateTwo, setRangeDateTwo] = useState(null);

  const [startDateRange, setStartDateRange] = useState(new Date());
  let endDate = new Date();
  endDate.setDate(endDate.getDate() + 30);
  const [endDateRange, setEndDateRange] = useState(endDate);
  const [startTime, setStartTime] = useState(new Date());
  const [startDateAdvance, setStartDateAdvance] = useState(null);
  const [value, setValue] = useState("10:00");

  const [selected, setSelected] = useState([]);
  const [selectedTwo, setSelectedTwo] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const [options] = useState(Options);
  const [countries] = useState(Countries);

  const [advancedOptions] = useState(AdvancedOptions);

  const [project, setProject] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassoword] = useState("");
  const [email, setEmail] = useState("");
  const [medium, setMedium] = useState("");

  const [props] = useState({});
  const _renderMenuItemChildren = (option, props, index) => {
    return [
      <Highlighter key="name" search={props.text}>
        {option.name}
      </Highlighter>,
      <div key="population">
        <small>Population: {option.population.toLocaleString()}</small>
      </div>,
    ];
  };
  props.renderMenuItemChildren = _renderMenuItemChildren;

  const [checkBoxOne, setCheckBoxOne] = useState(true);
  const [checkBoxThree, setCheckBoxThree] = useState(true);
  const [shapeAlternativeTwo, setShapeAlternativeTwo] = useState(true);
  const [switchOne, setSwitchOne] = useState(true);
  const [radioBtnGroup, setRadioBtnGroup] = useState([true, false, false]);
  const [statesDefault, setStatesDefault] = useState(true);

  var checkbox = document.getElementById("checkboxIndeterminate");
  if (checkbox) {
    checkbox.indeterminate = true;
  }
  const statesIntermediate = true;
  function setStatesIntermediate() {
    statesIntermediate = !statesIntermediate;
    checkbox.indeterminate = false;
  }

  const dropDownOptions = ["Web-Safe", "Helvetica", "SegeoUI"];
  const defaultOption = dropDownOptions[0];

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content ">
        <div className="jumbotron" data-pages="parallax">
          <PageContainer
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "container p-l-10 p-r-10"
                : "sm-p-l-0 sm-p-r-0 "
            }
          >
            <PageScroll>
              <Breadcrumb>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">Home</a>
                </li>
                <li className="breadcrumb-item active">Form Elements</li>
              </Breadcrumb>
              <div className="row row m-b-40">
                <div className="col-xl-7 col-lg-6 ">
                  <div className="">
                    <div className="card-body text-center">
                      <img
                        className="image-responsive-height demo-mw-600"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/demo/form_hero.gif"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 ">
                  <div className="card card-transparent">
                    <div className="card-body">
                      <p className="overline">Form Elements</p>
                      <h3>
                        Forms are one of the most used components in a
                        dashboard. we made it fun to work with.
                      </h3>
                      <p>
                        Keeping with our policy of shifting from the traditional
                        to modern, we have introduced a couple of Contemporary
                        form elements to boost and create an exceptional
                        Experience
                      </p>
                      <br />
                      <div>
                        <div className="m-t-20">
                          <p className="">
                            Have an Improvement? or a suggestion?
                            <br />
                            <a
                              href="javascript:void(0);"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Goto request box
                            </a>
                          </p>
                        </div>
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
            <div className="col-8">
              <h3>Choosing the right text field</h3>
              <p className="m-b-30">
                Pages are equipped with two types of text-field designs, made
                specifically to improve usability and create a uniquely exciting
                experience. Both types of text fields provide the same
                functionality, so the type of text field you use can depend on
                style alone. Use these two if it works best with your app’s
                visual style or Best accommodates the goals of your UI.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card card-default">
                <div className="card-header ">
                  <div className="card-title">Option #one</div>
                </div>
                <div className="card-body">
                  <h4>Pages default text-field design</h4>
                  <p className="m-t-10 m-b-20 mw-80">
                    Pages Form Elements reshaped the conventional text-fields in
                    aim to improve usability and create a fun, unique and
                    exciting experience.
                  </p>
                  <form className="" role="form">
                    <div
                      className={`form-group form-group-default required ${
                        defaultTextFields[0] ? "focused" : ""
                      }`}
                      onClick={() =>
                        setDefaultTextFields([true, false, false, false, false])
                      }
                    >
                      <InputWithLabel
                        onChange={(e) => setProject(e.target.value)}
                        value={project}
                        type="email"
                        label="Project"
                        required=""
                        className={`form-control ${
                          defaultTextFields[1] ? "focus-visible" : ""
                        }`}
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className={`form-group form-group-default required ${
                            defaultTextFields[1] ? "focused" : ""
                          }`}
                          onClick={() =>
                            setDefaultTextFields([
                              false,
                              true,
                              false,
                              false,
                              false,
                            ])
                          }
                        >
                          <InputWithLabel
                            label="First name"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            type="text"
                            className={`form-control ${
                              defaultTextFields[1] ? "focus-visible" : ""
                            }`}
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className={`form-group form-group-default ${
                            defaultTextFields[2] ? "focused" : ""
                          }`}
                          onClick={() =>
                            setDefaultTextFields([
                              false,
                              false,
                              true,
                              false,
                              false,
                            ])
                          }
                        >
                          <InputWithLabel
                            label="Last name"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`form-group form-group-default required ${
                        defaultTextFields[3] ? "focused" : ""
                      }`}
                      onClick={() =>
                        setDefaultTextFields([false, false, false, true, false])
                      }
                    >
                      <InputWithLabel
                        label="Password"
                        onChange={(e) => setPassoword(e.target.value)}
                        value={password}
                        type="password"
                        className={`form-control ${
                          defaultTextFields[3] ? "focus-visible" : ""
                        }`}
                        required=""
                      />
                    </div>
                    <div
                      className={`form-group  form-group-default required ${
                        defaultTextFields[4] ? "focused" : ""
                      }`}
                      onClick={() =>
                        setDefaultTextFields([false, false, false, false, true])
                      }
                    >
                      <InputWithLabel
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        className={`form-control ${
                          defaultTextFields[4] ? "focus-visible" : ""
                        }`}
                        placeholder="ex: some@example.com"
                        required=""
                      />
                    </div>
                    <div className="form-group form-group-default disabled">
                      <InputWithLabel
                        label="Disabled"
                        onChange={() => {}}
                        type="email"
                        className="form-control"
                        value="You can put anything here"
                        disabled={true}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              onClick={() =>
                setDefaultTextFields([false, false, false, false, false])
              }
            >
              <div className="card card-default">
                <div className="card-header ">
                  <div className="card-title">Option #two</div>
                </div>
                <div className="card-body">
                  <h4>Traditional text-field design.</h4>
                  <p className="m-t-10 m-b-20 mw-80">
                    We understand that sometimes conventions shouldn't be
                    removed completely. People are already used to them. Use
                    these text-fields whenever it is necessary.
                  </p>
                  <form role="form">
                    <div className="form-group">
                      <Label>Your name</Label>
                      <Input
                        type="email"
                        className="form-control"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <Label>Password</Label>
                      <Input
                        type="password"
                        className="form-control"
                        required=""
                      />
                      <span className="help">
                        Requires a minimum of 12 characters.
                      </span>
                    </div>
                    <div className="form-group">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        className="form-control"
                        placeholder="ex: some@example.com"
                        required=""
                      />
                      <span className="help">
                        This will not be shown publicly
                      </span>
                    </div>
                    <div className="form-group">
                      <Label>Placeholder</Label>
                      <Input
                        type="email"
                        className="form-control"
                        placeholder="ex: some@example.com"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <Label>Disabled</Label>
                      <Input
                        type="email"
                        className="form-control"
                        onChange={() => {}}
                        value="You can put anything here"
                        disabled={true}
                      />
                    </div>
                  </form>
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
              <div className="card card-default">
                <div className="card-header ">
                  <div className="card-title">Size options</div>
                  <div className="tools"></div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h5>Pages default control sizes</h5>
                      <p>
                        Input form element sizes on default pages design, These
                        are highly customizable. You can either chose the
                        default or you can select Standard input elements
                      </p>
                      <form role="form">
                        <div
                          className={`form-group form-group-default ${
                            defaultControlSize[0] ? "focused" : ""
                          }`}
                          onClick={() =>
                            setDefaultControlSize([true, false, false])
                          }
                        >
                          <Label className="label-lg">Large</Label>
                          <Input
                            type="text"
                            placeholder=".input-lg"
                            className={`form-control input-lg ${
                              defaultControlSize[0] ? "focus-visible" : ""
                            }`}
                          />
                        </div>
                        <div
                          className={`form-group form-group-default ${
                            defaultControlSize[1] ? "focused" : ""
                          }`}
                          onClick={() =>
                            setDefaultControlSize([false, true, false])
                          }
                        >
                          <InputWithLabel
                            label="Medium"
                            onChange={(e) => setMedium(e.target.value)}
                            value={medium}
                            type="text"
                            placeholder="Default input"
                            className={`form-control ${
                              defaultControlSize[1] ? "focus-visible" : ""
                            }`}
                          />
                        </div>
                        <div
                          className={`form-group form-group-default ${
                            defaultControlSize[2] ? "focused" : ""
                          }`}
                          onClick={() =>
                            setDefaultControlSize([false, false, true])
                          }
                        >
                          <Label className="label-sm">Small</Label>
                          <Input
                            type="text"
                            placeholder=".input-sm"
                            className={`form-control input-sm ${
                              defaultControlSize[2] ? "focus-visible" : ""
                            }`}
                          />
                        </div>
                      </form>
                    </div>
                    <div
                      className="col-md-6"
                      onClick={() =>
                        setDefaultControlSize([false, false, false])
                      }
                    >
                      <h5>Standard control sizes</h5>
                      <form role="form">
                        <div className="form-group">
                          <Label>Large</Label>
                          <Input
                            type="text"
                            placeholder=".input-lg"
                            className="form-control input-lg"
                          />
                        </div>
                        <div className="form-group">
                          <Label>Medium</Label>
                          <Input
                            type="text"
                            placeholder="Default input"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <Label>Small</Label>
                          <Input
                            type="text"
                            placeholder=".input-sm"
                            className="form-control input-sm"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4"
              onClick={() => setDefaultControlSize([false, false, false])}
            >
              <div className="card card-default">
                <div className="card-header ">
                  <div className="card-title">Form Options</div>
                  <div className="tools"></div>
                </div>
                <div className="card-body">
                  <h5>Form addons</h5>
                  <p>
                    Adding on top of existing browser controls, Bootstrap
                    includes other useful form components. Add text or buttons
                    before or after any text-based input. Addons supports all
                    background color classes
                  </p>
                  <br />
                  <div className="form-group input-group transparent">
                    {/* TODO : prepend icon */}
                    {/* <div className="input-group-prepend">
                                            <span className="input-group-text transparent">
                                                <i className="pg-icon">inbox</i>
                                            </span>
                                        </div> */}
                    <span className="input-group-text input-group-prepend">
                      <i className="pg-icon">calendar</i>
                    </span>
                    <input
                      type="text"
                      placeholder="email@pages.io"
                      className="form-control"
                    />
                  </div>
                  <div
                    className="form-group input-group"
                    onClick={() => setEmailInput(false)}
                  >
                    <input
                      type="text"
                      placeholder="#000000"
                      className="form-control"
                    />
                    {/* TODO : append icon */}

                    <span className="input-group-text input-group-append primary">
                      <i className="pg-icon">paint_bucket</i>
                    </span>
                  </div>
                  <form role="form">
                    <div
                      className={`form-group form-group-default input-group ${
                        emailInput ? "focused" : ""
                      }`}
                    >
                      <div
                        className="form-input-group "
                        onClick={() => setEmailInput(true)}
                      >
                        <InputWithLabel
                          label="Project"
                          onChange={(e) => setProject(e.target.value)}
                          value={project}
                          type="email"
                          placeholder="email address"
                          className="form-control"
                        />
                      </div>
                      <div className="input-group-append-line">
                        <span className="input-group-text ">pages.io</span>
                      </div>
                    </div>
                  </form>
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
          <div
            className="card card-default"
            onClick={() => setEmailInput(false)}
          >
            <div className="card-header ">
              <div className="card-title">Checkbox and radio button</div>
              <div className="tools"></div>
            </div>
            <div className="card-body">
              <div className="row m-b-15">
                <div className="col-lg-4">
                  <h5>Checkboxes </h5>
                  <p className="m-b-20">
                    Pages checkboxes use a light-weighted image sequence for
                    smoother animation with better performance. All checkboxes
                    and radio buttons use native Bootstrap classes.
                  </p>
                  <div className="form-check">
                    <Input
                      type="checkbox"
                      id="defaultCheck"
                      onClick={() => setCheckBoxOne((prevState) => !prevState)}
                      checked={checkBoxOne}
                      onChange={() => {}}
                    />
                    <Label htmlFor="defaultCheck">Default checkbox</Label>
                  </div>
                  <div className="form-check complete">
                    <Input type="checkbox" id="checkColorOpt1" />
                    <Label htmlFor="checkColorOpt1">
                      I agree to the terms and conditions
                    </Label>
                  </div>
                  <div className="form-check primary">
                    <Input
                      type="checkbox"
                      id="checkColorOpt2"
                      onClick={() =>
                        setCheckBoxThree((prevState) => !prevState)
                      }
                      checked={checkBoxThree}
                      onChange={() => {}}
                    />
                    <Label htmlFor="checkColorOpt2">Mark as read</Label>
                  </div>
                  <p className="m-t-15 small">
                    Checkboxes, switches and radio buttons support all colors in
                    Pages. Simply add the required color class. For example{" "}
                    <code className="code-sm">.primary</code>
                  </p>
                </div>
                <div className="col-lg-4">
                  <h5>Shape alternative</h5>
                  <p className="m-b-20">
                    Bored with traditional boxed shape check boxes? Here is a
                    circle one simply add the class
                    <code>.checkbox-circle</code>to change it
                  </p>
                  <div className="form-check checkbox-circle danger">
                    <Input type="checkbox" id="checkcircleColorOpt1" />
                    <Label htmlFor="checkcircleColorOpt1">
                      Delete all personal settings
                    </Label>
                  </div>
                  <div className="form-check checkbox-circle complete">
                    <Input
                      type="checkbox"
                      id="checkcircleColorOpt2"
                      onClick={() =>
                        setShapeAlternativeTwo((prevState) => !prevState)
                      }
                      checked={shapeAlternativeTwo}
                      onChange={() => {}}
                    />
                    <Label htmlFor="checkcircleColorOpt2">
                      Keep me signed in
                    </Label>
                  </div>
                  <p className="m-t-25 small m-b-10">
                    You can change the position of any checkbox, switch or radio
                    button by simply adding{" "}
                    <code className="code-sm">.right</code> class
                  </p>
                </div>
                <div className="col-lg-4">
                  <h5>States</h5>
                  <p className="m-b-20">
                    Checkboxes support the disabled attribute and{" "}
                    <code>:indeterminate</code> pseudo class which is set
                    manually via JavaScript since there is no available HTML
                    attribute for specifying it
                  </p>
                  <div className="form-check form-check-inline complete">
                    <Input
                      type="checkbox"
                      id="checkboxIndeterminate"
                      onClick={() => setStatesIntermediate()}
                      onChange={() => {}}
                    />
                    <Label htmlFor="checkboxIndeterminate">Indeterminate</Label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Input
                      type="checkbox"
                      id="disableCheck"
                      onChange={() => {}}
                      checked
                      disabled
                    />
                    <Label htmlFor="disableCheck">Disabled checkbox</Label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <h5>Switch</h5>
                  <p className="m-b-20">
                    Convert a checkbox into a switch by simply adding{" "}
                    <code>.switch</code>. Switches also support the disabled
                    attribute.
                  </p>
                  <div>
                    <div className="form-check form-check-inline switch">
                      <Input
                        type="checkbox"
                        id="pagesSwitch"
                        onClick={() => setSwitchOne((prevState) => !prevState)}
                        checked={switchOne}
                        onChange={() => {}}
                      />
                      <Label htmlFor="pagesSwitch">Default switch</Label>
                    </div>
                    <div className="form-check form-check-inline switch">
                      <Input type="checkbox" id="switchDisabled" disabled />
                      <Label htmlFor="switchDisabled"> disabled </Label>
                    </div>
                  </div>
                  <div>
                    <div className="form-check form-check-inline switch switch-lg complete">
                      <Input type="checkbox" id="switch-lg" />
                      <Label htmlFor="switch-lg">Auto-brightness</Label>
                    </div>
                    <div className="form-check form-check-inline switch switch-lg success">
                      <Input type="checkbox" id="switchColorOpt" />
                      <Label htmlFor="switchColorOpt">wifi </Label>
                    </div>
                  </div>
                  <p className="small m-t-15">
                    Add <code className="code-sm">switch-lg</code> to render a
                    lager switch size. Switch elements render all colors in
                    checkboxes
                  </p>
                </div>
                <div className="col-lg-4">
                  <h5>Radio buttons</h5>
                  <p className="m-b-20">
                    Pure CSS radio button with a cool animation. These are
                    available in all primary colors in bootstrap
                  </p>
                  <div className="form-check">
                    <Input
                      type="radio"
                      name="texture"
                      id="defaultradio"
                      value="Default"
                      onClick={() => setRadioBtnGroup([true, false, false])}
                      checked={radioBtnGroup[0]}
                      onChange={() => {}}
                    />
                    <Label htmlFor="defaultradio">Default</Label>
                  </div>
                  <div className="form-check complete">
                    <Input
                      type="radio"
                      name="texture"
                      id="radio1"
                      value="Medium"
                      onClick={() => setRadioBtnGroup([false, true, false])}
                      checked={radioBtnGroup[1]}
                      onChange={() => {}}
                    />
                    <Label htmlFor="radio1">Medium textures</Label>
                  </div>
                  <div className="form-check primary">
                    <Input
                      type="radio"
                      name="texture"
                      id="radio2"
                      value="Verbose"
                      onClick={() => setRadioBtnGroup([false, false, true])}
                      checked={radioBtnGroup[2]}
                      onChange={() => {}}
                    />
                    <Label htmlFor="radio2">Verbose channel</Label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h5>States</h5>
                  <p>
                    Use of different color opacity helps to distinguish between
                    different states such as disable
                  </p>
                  <br />
                  <div className="form-check form-check-inline complete">
                    <Input
                      type="radio"
                      name="state"
                      id="radioInline"
                      value="Default"
                      onClick={() =>
                        setStatesDefault((prevState) => !prevState)
                      }
                      checked={statesDefault}
                      onChange={() => {}}
                    />
                    <Label htmlFor="radioInline">Default</Label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Input
                      type="radio"
                      name="state"
                      id="radioDisabled"
                      onChange={() => {}}
                      value="disabled"
                      disabled
                    />
                    <Label htmlFor="radioDisabled">Disabled</Label>
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
          <div className="card card-default">
            <div className="card-header ">
              <div className="card-title">Dropdown Controls</div>
              <div className="tools"></div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <p>
                    We've simplified our dropdown buttons by getting rid of the
                    dedicated dropdown associated with them, this looks cleaner
                    and also available in all different colors
                  </p>
                  <br />
                  {/* <AnimatedSelect /> */}
                  <div
                    onClick={() => setTypeHeadTextFields([false, false, false])}
                  >
                    <Dropdown
                      options={dropDownOptions}
                      value={defaultOption}
                      className="dropdown dropdown-default"
                    />
                  </div>
                  <br />
                  <br />
                  <p className="small">
                    The button will be automatically sized according to the
                    visible content size. Make sure there is enough room for the
                    hidden content to show
                  </p>
                </div>
                <div className="col-md-4">
                  <h5>Simple dropdowns</h5>
                  <p>
                    These are highly customizable dropdowns that come with a
                    search option for user to search
                  </p>
                  <div
                    onClick={() => setTypeHeadTextFields([false, false, false])}
                  >
                    <GroupSelect />
                  </div>
                  <br />
                  <form className="" role="form">
                    <div
                      className={`form-group form-group-default typehead typehead-select ${
                        typeheadTextFields[0] ? "focused" : ""
                      }`}
                      onClick={() =>
                        setTypeHeadTextFields([true, false, false])
                      }
                      id="sample-three"
                    >
                      <Label>Project</Label>
                      <TypeHeadSelect />
                    </div>
                  </form>
                </div>
                <div className="col-md-4">
                  <h5>Multi select</h5>
                  <p>
                    Fancy multi-select option box. Customized for any preference
                  </p>
                  <br />
                  <div
                    onClick={() => setTypeHeadTextFields([false, false, false])}
                  >
                    <AnimatedSelect />
                  </div>
                  <br />
                  <form className="" role="form">
                    <div
                      className={`form-group form-group-default typehead typehead-select ${
                        typeheadTextFields[1] ? "focused" : ""
                      }`}
                      onClick={() =>
                        setTypeHeadTextFields([false, true, false])
                      }
                      id="sample-three"
                    >
                      <Label>Project</Label>
                      <TypeHeadMultiSelect />
                    </div>
                  </form>
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
          <div className="card card-default">
            <div className="card-header ">
              <div className="card-title">Typehead</div>
              <div className="tools"></div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <p>
                    You the following input will give a suggestion as you type,
                    you can fetch your list from an external data source.
                  </p>
                  <br />
                  <div
                    className="form-group"
                    onClick={() => setTypeHeadTextFields([false, false, false])}
                  >
                    <Typeahead
                      id="basic-typeahead-one"
                      labelKey="name"
                      onChange={setSelected}
                      options={options}
                      placeholder="Choose a state..."
                      selected={selected}
                    />
                  </div>
                  <br />
                  <br />
                  <p className="small">
                    A useful feature in this typehead is autofill as you type
                  </p>
                </div>
                <div className="col-md-4">
                  <h5>Supporting Different Styles</h5>
                  <p>
                    Supports both attached form layouts and also traditional
                    input text fields
                  </p>
                  <div
                    className="form-group"
                    onClick={() => setTypeHeadTextFields([false, false, false])}
                  >
                    <Typeahead
                      id="basic-typeahead-one"
                      labelKey="name"
                      onChange={setSelectedTwo}
                      options={options}
                      placeholder="States of USA"
                      selected={selectedTwo}
                    />
                  </div>
                  <form className="" role="form">
                    <div
                      className={`form-group form-group-default typehead typehead-select required ${
                        typeheadTextFields[2] ? "focused" : ""
                      }`}
                      onClick={() =>
                        setTypeHeadTextFields([false, false, true])
                      }
                      id="sample-three"
                    >
                      <Label>Countries</Label>
                      <Typeahead
                        id="basic-typeahead-two"
                        labelKey="name"
                        className="countries-input"
                        onChange={setSelectedCountries}
                        options={countries}
                        placeholder="Countries"
                        selected={selectedCountries}
                      />
                    </div>
                  </form>
                </div>
                <div
                  className="col-md-4"
                  onClick={() => setTypeHeadTextFields([false, false, false])}
                >
                  <h5>Advanced Options</h5>
                  <p>
                    Want to customize how the data is displayed? you can do that
                    too with tyephead custom templates
                  </p>
                  <br />
                  <Typeahead
                    {...props}
                    id="rendering-example"
                    labelKey="name"
                    options={advancedOptions}
                    placeholder="Choose a state..."
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
          <div className="card card-default">
            <div className="card-header ">
              <div className="card-title">Date Controls</div>
              <div className="tools"></div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4">
                  <h5>
                    Simple Date
                    <span className="semi-bold">Picker</span>
                  </h5>
                  <p>
                    The Date picker is powered by boostrap date picker, this is
                    customized in a way that it suites our theme and design,
                    Have a look!
                  </p>
                  <div
                    className="input-group date col-md-8 p-l-0"
                    style={{ width: "75%", zIndex: 17 }}
                  >
                    <DatePicker
                      onChange={(value) => setSimpleDateOne(value)}
                      value={simpleDateOne}
                      inputPlaceholder=" "
                      shouldHighlightWeekends
                      calendarPopperPosition="bottom"
                      inputClassName="DatePicker-Input"
                    />
                    <span className="input-group-text input-date-icon">
                      <i className="pg-icon">calendar</i>
                    </span>
                  </div>
                  <br />
                  <label className="check-in-label">Check In</label>
                  <div
                    className="input-group date input-date col-md-8 p-l-0"
                    style={{ width: "75%", zIndex: 15 }}
                  >
                    <DatePicker
                      onChange={(value) => setSimpleDateTwo(value)}
                      value={simpleDateTwo}
                      inputName="Check In"
                      inputPlaceholder="Pick a date"
                      shouldHighlightWeekends
                      calendarPopperPosition="bottom"
                      inputClassName="DatePicker-Input-Typehead"
                    />
                    <span className="input-group-text date-icon">
                      <i className="pg-icon">calendar</i>
                    </span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h5>
                    Date
                    <span className="semi-bold"> Range</span>
                  </h5>
                  <p>
                    Date range can be set by the same plugin, this is use full
                    when taking two dates at a time
                  </p>
                  <br />
                  <div
                    className="input-daterange input-group"
                    id="datepicker-range"
                    style={{ zIndex: 11 }}
                  >
                    <DatePicker
                      onChange={(value) => setRangeDateOne(value)}
                      value={rangeDateOne}
                      inputPlaceholder=" "
                      calendarPopperPosition="bottom"
                      //   maximumDate={rangeDateTwo}
                      shouldHighlightWeekends
                    />
                    <div className="input-group-addon"> to </div>
                    <DatePicker
                      onChange={(value) => setRangeDateTwo(value)}
                      value={rangeDateTwo}
                      inputPlaceholder=" "
                      calendarPopperPosition="bottom"
                      //   minimumDate={rangeDateOne}
                      shouldHighlightWeekends
                    />
                  </div>
                  <br />
                  <DateRangePicker
                    startDate={startDateRange}
                    endDate={endDateRange}
                    showTimeSelect
                    onApply={(event, picker) => {
                      setStartDateRange(picker.startDate._d);
                      setEndDateRange(picker.endDate._d);
                    }}
                  >
                    <div className="input-group">
                      <span className="input-group-text input-date-icon-pre">
                        <i className="pg-icon">calendar</i>
                      </span>
                      <input
                        type="text"
                        name="reservation"
                        id="daterangepicker"
                        onChange={() => {}}
                        className="form-control"
                        value={`${moment(startDateRange).format(
                          "MM/DD/YYYY h:mm A"
                        )} - ${moment(endDateRange).format(
                          "MM/DD/YYYY h:mm A"
                        )}`}
                      />
                    </div>
                  </DateRangePicker>
                  <br />
                  <br />
                  <div className="row date-range-time-picker">
                    <FlatPickr
                      value={startTime}
                      data-enable-time
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: "H:i",
                      }}
                    />
                    {/* <DatePickerAlias
                      selected={startTime}
                      className="form-control time-picker"
                      onChange={(date) => setStartTime(date)}
                      //   showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={1}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    /> */}
                    <span className="input-group-text input-time-icon">
                      <i className="pg-icon">time</i>
                    </span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h5>
                    Advance
                    <span className="semi-bold"> Settings</span>
                  </h5>
                  <p>
                    Some advance setting that you can do with this calender like
                    to start from years a disable sections of dates
                  </p>
                  <br />
                  {/* <DatePickerAlias
										selected={startDateAdvance}
										onChange={(date) => setStartDateAdvance(date)}
										minDate={moment().toDate()}
										placeholderText="Select a date"
									/> */}
                  <Calendar
                    value={startDateAdvance}
                    onChange={(date) => setStartDateAdvance(date)}
                    shouldHighlightWeekends
                    // minimumDate={utils().getToday()}
                    disabledDays={disabledDays}
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
          <div className="card card-default">
            <div className="card-header ">
              <div className="card-title">Input helpers</div>
              <div className="tools"></div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <h5>Input masks</h5>
                  <p>
                    These assure the user will never enter invalid phone no,
                    email or anything that has a pattern even without
                    validations
                  </p>
                  <br />
                  <div className="form-group">
                    <label>Date</label>
                    <br />
                    <InputMask mask="99/99/9999">
                      {() => (
                        <input type="text" id="date" className="form-control" />
                      )}
                    </InputMask>
                    <span className="help">e.g. "25/12/2020"</span>
                  </div>
                  <div className="form-group">
                    <label>Telephone</label>
                    <InputMask mask="(999) 999-9999">
                      {() => (
                        <input
                          type="text"
                          id="phone"
                          className="form-control"
                        />
                      )}
                    </InputMask>
                    <span className="help">e.g. "(324) 234-3243"</span>
                  </div>
                  <div className="form-group">
                    <label>Custom</label>
                    <InputMask mask="99-9999999">
                      {() => (
                        <input type="text" id="tin" className="form-control" />
                      )}
                    </InputMask>
                    <span className="help">e.g. "23-4324324"</span>
                  </div>
                  <div className="form-group">
                    <label>Social Security Number</label>
                    <InputMask mask="999-99-9999">
                      {() => (
                        <input
                          type="text"
                          id="ssn"
                          className="form-control"
                          placeholder="You can put anything here"
                        />
                      )}
                    </InputMask>
                    <span className="help">e.g. "432-43-2432"</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h5>Input autonumeric</h5>
                  <p>
                    Do you forget small things? here is something that helps to
                    automatically placed forgotten dollar signs, decimal places
                    and even comma separates and many more!
                  </p>
                  <br />
                  <div className="form-group">
                    <label>Decimal place and comma separator</label>
                    <InputMask mask="99,999.99">
                      {() => (
                        <input
                          type="text"
                          data-a-dec="."
                          data-a-sep=","
                          className="autonumeric form-control"
                        />
                      )}
                    </InputMask>
                    <span className="help">e.g. "53,000.00"</span>
                  </div>
                  <div className="form-group">
                    <label>Weird way but works</label>
                    <InputMask mask="99.999,99">
                      {() => (
                        <input
                          type="text"
                          data-a-dec=","
                          data-a-sep="."
                          className="autonumeric form-control"
                        />
                      )}
                    </InputMask>
                    <span className="help">e.g. "45.000,00"</span>
                  </div>
                  <div className="form-group">
                    <label>Dollar prefix</label>
                    <InputMask mask="$99.99">
                      {() => (
                        <input
                          type="text"
                          data-a-sign="$ "
                          className="autonumeric form-control"
                        />
                      )}
                    </InputMask>
                    <span className="help">e.g. "$45.50"</span>
                  </div>
                  <div className="form-group">
                    <label>Range</label>
                    <InputMask mask="9999" maskChar={null}>
                      {() => (
                        <input
                          type="text"
                          data-v-min="0"
                          data-v-max="9999"
                          className="autonumeric form-control"
                        />
                      )}
                    </InputMask>
                    <span className="help">e.g. "0 - 9,999"</span>
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
          <div className="card card-default">
            <div className="card-header ">
              <div className="card-title">WYSIWYG editors</div>
              <div className="tools"></div>
            </div>
            <div className="card-body no-scroll card-toolbar">
              <h5>Quill Editor</h5>
              <div className="quill-wrapper">
                <ReactQuill
                  value={quil}
                  modules={quilModules}
                  formats={quilFormats}
                  theme="snow"
                  onChange={(value) => setQuil(value)}
                />
              </div>
            </div>
          </div>
        </PageContainer>

        <div
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container-fluid  container-fixed-lg m-t-20 container"
              : " container-fluid  container-fixed-lg m-t-20"
          }
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="card card-default">
                <div className="card-header ">
                  <div className="card-title">Tag Input</div>
                  <div className="tools"></div>
                </div>
                <div className="card-body">
                  <p>
                    Do you use tags to organize content on your site? This
                    plugin will turn your boring tag list into a magical input
                    that turns each tag into a style-able object with its own
                    delete link.
                  </p>
                  <br />
                  <Typeahead
                    allowNew
                    id="custom-selections-example-one"
                    defaultSelected={cityTags}
                    multiple
                    newSelectionPrefix="Add a new item: "
                    options={[]}
                    placeholder="Type anything..."
                  />
                  <br />
                  <Typeahead
                    allowNew
                    id="custom-selections-example-two"
                    defaultSelected={emailTags}
                    multiple
                    newSelectionPrefix="Add a new item: "
                    options={[]}
                    placeholder="Type anything..."
                  />
                  <br />
                  <Typeahead
                    allowNew
                    id="custom-selections-example-three"
                    defaultSelected={randomWordTags}
                    multiple
                    newSelectionPrefix="Add a new item: "
                    options={[]}
                    placeholder="Type anything..."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card card-default">
                <div className="card-header ">
                  <div className="card-title">Drag n' drop uploader</div>
                </div>
                <div className="card-body no-scroll no-padding">
                  <FileUpload />
                </div>
              </div>
            </div>
          </div>
        </div>
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
