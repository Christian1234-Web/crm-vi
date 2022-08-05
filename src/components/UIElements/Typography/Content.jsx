import React, { useState } from "react";

import PageContainer from "../Containers";
import PageScroll from "../PageScroll";

import Title from "../Title";
import Paragraph from "../Paragraph";
import Highlight from "../HighlightedText";
import Bold from "../BoldText";
import Address from "../Address";
import QuoteText from "../QuoteText";
import Copyright from "../../ui/Footer/Copyright";

const content = ({ path }) => {
  const [activeTab, setActiveTab] = useState([true, false, false]);

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content sm-gutter">
        {/* START BREADCRUMB IF CASUAL LAYOUT*/}
        {path.includes("/casual") && (
          <div className="bg-white">
            <div className="container">
              <ol className="breadcrumb breadcrumb-alt">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">UI Elements</a>
                </li>
                <li className="breadcrumb-item active">Typography</li>
              </ol>
            </div>
          </div>
        )}
        {/* END BREADCRUMB */}
        {/* START CONTAINER FLUID */}
        <div className="jumbotron page-cover bg-contrast-higher m-b-0">
          <PageContainer
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "p-l-10 p-r-0 container"
                : "p-l-0 p-r-0 "
            }
          >
            <PageScroll className="inner">
              <div className="container-md-height m-b-20 m-t-40">
                <div className="row m-lg-0">
                  <div className="col-xl-7 col-lg-6 ">
                    {/*START card */}
                    <div className="full-height">
                      <div className="card-body text-center justify-content-center align-items-center d-flex full-height">
                        <h1 className="text-white large-demo-text">Inter</h1>
                      </div>
                    </div>
                    {/*END card */}
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    {/*START card */}
                    <div className="card card-transparent">
                      <div className="card-header ">
                        <div className="card-title">Getting started</div>
                      </div>
                      <div className="card-body">
                        <h3 className="text-white">The type system.</h3>
                        <Paragraph>
                          The most advanced type system in a dashboard UI
                          framework. Specially designed for user interfaces with
                          focus on high legibility of small-to-medium sized text
                          on computer screens.
                        </Paragraph>
                        <a
                          className="btn btn-default m-t-10 m-b-10"
                          href="https://rsms.me/inter/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Inter font Project
                        </a>
                        <br />
                        <div>
                          <div className="inline">
                            <Paragraph
                              size="small"
                              className="m-t-5 hint-text text-white"
                            >
                              Have an Improvement or a suggestion?
                              <br />
                              goto request box
                            </Paragraph>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*END card */}
                  </div>
                </div>
              </div>
            </PageScroll>
          </PageContainer>
        </div>
        {/*END JUMBOTRON */}
        {/*START CONTAINER FLUID */}
        <PageContainer className="bg-white ">
          <div
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "row m-b-40 mx-auto container"
                : "row m-b-40"
            }
          >
            <div className="col-lg-4">
              {/*START card */}
              <div className="card card-transparent">
                <div className="card-header  m-t-30">
                  <div className="card-title">Typefaces</div>
                </div>
                <div className="card-body">
                  <h3>
                    Consistent across all browsers and all operating systems.
                    Packed with modern features. Works best for dashboard
                    designs.
                  </h3>
                  <Paragraph>
                    Pages Type system consist of three(3) font variables.
                    Specifically Base font family - Which can be used for text
                    sizes that are above 12px. Interface font family - text that
                    are 12px and below. Secondary font family - Used for font
                    pairing with base font.
                  </Paragraph>
                  <br />
                </div>
              </div>
              {/*END card */}
            </div>
            <div className="col-lg-8">
              {/*START card */}
              <div className="card card-borderless col-xl-9 col-lg-11 no-padding m-t-30">
                <ul
                  className="nav nav-tabs nav-tabs-simple d-none d-md-flex d-lg-flex d-xl-flex"
                  role="tablist"
                  data-init-reponsive-tabs="dropdownfx"
                >
                  <li
                    className="nav-item"
                    onClick={() => setActiveTab([true, false, false])}
                  >
                    <a
                      className={` ${activeTab[0] ? "active" : ""}`}
                      data-toggle="tab"
                      role="tab"
                      data-target="#tab2hellowWorld"
                      href="javascript:void(0);"
                      aria-selected={`${activeTab[0] ? "true" : "false"}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      Base font family
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setActiveTab([false, true, false])}
                  >
                    <a
                      className={` ${activeTab[1] ? "active" : ""}`}
                      href="javascript:void(0);"
                      data-toggle="tab"
                      role="tab"
                      data-target="#tab2FollowUs"
                      aria-selected={`${activeTab[1] ? "true" : "false"}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      Interface font family
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setActiveTab([false, false, true])}
                  >
                    <a
                      className={` ${activeTab[2]} ? ' active' : ''`}
                      href="javascript:void(0);"
                      data-toggle="tab"
                      role="tab"
                      data-target="#tab2Inspire"
                      aria-selected={`${activeTab[2] ? "true" : "false"}`}
                      onClick={(e) => e.preventDefault()}
                    >
                      Secondary font family
                    </a>
                  </li>
                </ul>
                <div className="nav-tab-dropdown cs-wrapper full-width d-lg-none d-xl-none d-md-none">
                  <div
                    className="cs-select cs-skin-slide full-width"
                    tabIndex="0"
                  >
                    {/* <span className="cs-placeholder">Base font family</span> */}
                    <div className="cs-options">
                      <ul>
                        <li data-option="" data-value="#tab2hellowWorld">
                          <span>Base font family</span>
                        </li>
                        <li data-option="" data-value="#tab2FollowUs">
                          <span>Interface font family</span>
                        </li>
                        <li data-option="" data-value="#tab2Inspire">
                          <span>Secondary font family</span>
                        </li>
                      </ul>
                    </div>
                    <select
                      className="cs-select cs-skin-slide full-width"
                      data-init-plugin="cs-select"
                    >
                      <option value="#tab2hellowWorld">Base font family</option>
                      <option value="#tab2FollowUs">
                        Interface font family
                      </option>
                      <option value="#tab2Inspire">
                        Secondary font family
                      </option>
                    </select>
                    <div className="cs-backdrop"></div>
                  </div>
                </div>
                <div className="tab-content tab-content b-l b-r b-b b-grey rounded-sm">
                  <div
                    className={`tab-pane ${activeTab[0] ? "active" : ""}`}
                    id="tab2hellowWorld"
                  >
                    <Paragraph className="p-t-10">
                      Used for paragraphs and fonts that are above 12px
                    </Paragraph>
                    <h2>Inter-font-family</h2>
                    <Paragraph>
                      Meet Inter - a consistent, hinted, Screen optimized font
                      family guided by optical balance and packed with modern
                      font features that work widely across all types of
                      Operating Systems and browsers.
                    </Paragraph>
                    <pre className="m-t-30 fs-14">
                      "Inter UI", -apple-system, BlinkMacSystemFont, "Segoe UI",
                      "Roboto", <br />
                      "Oxygen", "Ubuntu", "Cantarell","Fira Sans", "Droid Sans",
                      "Helvetica Neue",sans-serif;
                    </pre>
                    <Paragraph className="m-t-40">
                      Inter is licensed under the SIL Open Font License. In
                      simple terms Its open source and free to use.
                    </Paragraph>
                  </div>
                  <div
                    className={`tab-pane ${activeTab[1] ? "active" : ""}`}
                    id="tab2FollowUs"
                  >
                    <Paragraph className="p-t-10">
                      Used for paragraphs and fonts that are below 14px
                    </Paragraph>
                    <h2>Inter-font-family</h2>
                    <Paragraph>
                      Meet Inter - a consistent, hinted, Screen optimized font
                      family guided by optical balance and packed with modern
                      font features that work widely across all types of
                      Operating Systems and browsers.
                    </Paragraph>
                    <pre className="m-t-30 fs-14">
                      "Inter UI", -apple-system, BlinkMacSystemFont, "Segoe UI",{" "}
                      <br />
                      "Roboto", "Oxygen", "Ubuntu", "Cantarell","Fira Sans",
                      "Droid Sans", "Helvetica Neue",sans-serif;
                    </pre>
                    <Paragraph className="m-t-40">
                      Inter is licensed under the SIL Open Font License. In
                      simple terms Its open source and free to use.
                    </Paragraph>
                  </div>
                  <div
                    className={`tab-pane ${activeTab[2] ? "active" : ""}`}
                    id="tab2Inspire"
                  >
                    <Paragraph className="p-t-10">
                      Used for overlines and as a font pair to break the scan.
                    </Paragraph>
                    <h2>Montserrat-font-family</h2>
                    <Paragraph>
                      Meet Montserrat - a Beautiful Geometric Font designed by
                      Julieta Ulanovsky released and shared with the world
                      through Google Fonts. It looks great in all caps with a
                      long letterspacing.
                    </Paragraph>
                    <pre className="m-t-30 fs-14">
                      "montserrat", -apple-system, BlinkMacSystemFont, "Segoe
                      UI", <br />
                      "Roboto", "Oxygen", "Ubuntu", "Cantarell","Fira Sans",
                      "Droid Sans", "Helvetica Neue",sans-serif;
                    </pre>
                    <Paragraph className="m-t-40">
                      Montserrat is licensed under the SIL Open Font License. In
                      simple terms Its open source and free to use.
                    </Paragraph>
                  </div>
                </div>
              </div>
              {/*END card */}
            </div>
          </div>
          <div
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "row b-t b-grey m-t-40 p-t-40 p-b-40 m-b-30 container mx-auto"
                : "row b-t b-grey m-t-40 p-t-40 p-b-40 m-b-30"
            }
          >
            <div className="col-md-4">
              {/*START card */}
              <div className="card card-transparent">
                <div className="card-body">
                  <h2>Type Scale</h2>
                  <Paragraph>
                    Pages type scale includes a range of contrasting styles that
                    support the needs of your product and its content.
                  </Paragraph>
                  <Paragraph>
                    The type scale is a combination of 8 styles that are
                    supported by the type system. It contains reusable
                    categories of text, each with an intended application and
                    meaning.
                  </Paragraph>
                </div>
              </div>
              {/*END card */}
            </div>
            <div className="col-md-7">
              <div className="card card-transparent">
                <div className="card-body">
                  <div className="b-b b-grey m-t-20">
                    <Paragraph className="p-b-15">
                      Typography Scale - 1.125
                    </Paragraph>
                    <Title level="1" className="m-b-20">
                      The quick brown fox jumps over the lazy dog
                    </Title>
                    <div className="d-flex justify-content-between m-b-5">
                      <Paragraph>h1</Paragraph>
                      <Paragraph>
                        44px/50px Letter-spacing: -0.0141279em
                      </Paragraph>
                    </div>
                  </div>
                  <div className="b-b b-grey m-t-20">
                    <Title level="2" className="m-b-20">
                      The quick brown fox jumps over the lazy dog
                    </Title>
                    <div className="d-flex justify-content-between m-b-5">
                      <Paragraph>h2</Paragraph>
                      <Paragraph>30px/38px Letter-spacing: -0.021em;</Paragraph>
                    </div>
                  </div>
                  <div className="b-b b-grey m-t-20">
                    <Title level="3" className="m-b-20">
                      Forsaking monastic tradition, twelve jovial friars gave up
                      their vocation for a questionable existence on the flying
                      trapeze. Bawds jog, flick quartz, vex nymph.
                    </Title>
                    <div className="d-flex justify-content-between m-b-5">
                      <Paragraph>h3</Paragraph>
                      <Paragraph>
                        27px/35px Letter-spacing: -0.0114923em
                      </Paragraph>
                    </div>
                  </div>
                  <div className="b-b b-grey m-t-20">
                    <Title level="4" className="m-b-20">
                      Forsaking monastic tradition, twelve jovial friars gave up
                      their vocation for a questionable existence on the flying
                      trapeze. Bawds jog, flick quartz, vex nymph.
                    </Title>
                    <div className="d-flex justify-content-between m-b-5">
                      <Paragraph>h4</Paragraph>
                      <Paragraph>
                        22px/32px Letter-spacing: -0.00865734em
                      </Paragraph>
                    </div>
                  </div>

                  <div className="b-b b-grey m-t-20">
                    <Title level="5" className="m-b-20">
                      Forsaking monastic tradition, twelve jovial friars gave up
                      their vocation for a questionable existence on the flying
                      trapeze. Bawds jog, flick quartz, vex nymph.
                    </Title>
                    <div className="d-flex justify-content-between m-b-5">
                      <Paragraph>h5</Paragraph>
                      <Paragraph>
                        18px/26px Letter-spacing: -0.00630069em
                      </Paragraph>
                    </div>
                  </div>

                  <div className="b-b b-grey m-t-20">
                    <Paragraph className="m-b-20">
                      We quickly seized the black axle and just saved it from
                      going past him. No kidding, Lorenzo called off his trip to
                      visit Mexico City just because they told him the
                      conquistadores were extinct. We promptly judged antique
                      onyx buckles for the next prize.
                    </Paragraph>
                    <div className="d-flex justify-content-between m-b-5">
                      <Paragraph>paragraph</Paragraph>
                      <Paragraph>44px/52px</Paragraph>
                    </div>
                  </div>

                  <div className="b-b b-grey m-t-20">
                    <Paragraph className="m-b-20 overline">
                      We quickly seized the black axle and just saved it from
                      going past him. No kidding, Lorenzo called off his trip to
                      visit Mexico City just because they told him the
                      conquistadores were extinct. We promptly judged antique
                      onyx buckles for the next prize.
                    </Paragraph>
                    <div className="d-flex justify-content-between m-b-5">
                      <Paragraph>overline</Paragraph>
                      <Paragraph>11px/inherit Letter-spacing: 0.06em</Paragraph>
                    </div>
                  </div>

                  <div className="b-b b-grey m-t-20 m-b-40">
                    <Paragraph type="small-text" className="m-b-20">
                      We quickly seized the black axle and just saved it from
                      going past him. No kidding, Lorenzo called off his trip to
                      visit Mexico City just because they told him the
                      conquistadores were extinct. We promptly judged antique
                      onyx buckles for the next prize.
                    </Paragraph>
                    <div className="d-flex justify-content-between m-b-5">
                      <Paragraph>small-text</Paragraph>
                      <Paragraph>
                        12px/18px Letter-spacing: 0.00849077em
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
        {/*END CONTAINER FLUID */}
        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : ""
          }
        >
          <div className="row">
            <div className="col-xl-5 col-lg-3">
              {/*START card */}
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Paint the world</div>
                </div>
                <div className="card-body">
                  <Paragraph>
                    Color can be a wonderful tool for making your dashboard less
                    stressful and more calming and it can have a significant
                    impact on your mood and well-being, We made it with you in
                    mind
                  </Paragraph>
                </div>
              </div>
              {/*END card */}
            </div>
            <div className="col-xl-7 col-lg-9">
              {/*START card */}
              <div className="card card-transparent">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3 m-b-15">
                      <Paragraph className="text-heading-color">
                        Heading color
                      </Paragraph>
                      <div className="bg-contrast-higher b-a b-grey">
                        <div className="bg-white m-t-45 padding-10">
                          <div className="hint-text clearfix">
                            <Paragraph
                              className="no-margin v-align-middle pull-left"
                              type="small"
                            >
                              .text-black
                            </Paragraph>
                            <Paragraph
                              className="no-margin v-align-middle pull-right text-right"
                              type="small"
                            >
                              #2c2c2c
                            </Paragraph>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 m-b-15">
                      <Paragraph>Body text</Paragraph>
                      <div className="bg-contrast-high b-a b-grey">
                        <div className="bg-white m-t-45 padding-10">
                          <div className="clearfix hint-text">
                            <Paragraph
                              className="no-margin v-align-middle pull-left"
                              type="small"
                            >
                              Default
                            </Paragraph>
                            <Paragraph
                              className="no-margin v-align-middle pull-right text-right"
                              type="small"
                            >
                              #626262
                            </Paragraph>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 m-b-15">
                      <Paragraph>Hinted text</Paragraph>
                      <div className="b-a b-grey demo-bg-hinted">
                        <div className="bg-white m-t-45 padding-10">
                          <div className="clearfix hint-text">
                            <Paragraph
                              className="no-margin v-align-middle pull-left"
                              type="small"
                            >
                              .hint-text
                            </Paragraph>
                            <Paragraph
                              className="no-margin v-align-middle pull-right text-right"
                              type="small"
                            >
                              #2c2c2c
                            </Paragraph>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 m-b-15">
                      <Paragraph className="text-heading-color">
                        Primary color
                      </Paragraph>
                      <div className="bg-primary b-a b-grey">
                        <div className="bg-white m-t-45 padding-10">
                          <div className="clearfix text-black hint-text">
                            <Paragraph
                              className="no-margin v-align-middle pull-left"
                              type="small"
                            >
                              .text-primary
                            </Paragraph>
                            <Paragraph
                              className="no-margin v-align-middle pull-right text-right"
                              type="small"
                            >
                              #62549a
                            </Paragraph>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 m-b-15">
                      <Paragraph>Success color</Paragraph>
                      <div className="bg-success b-a b-grey">
                        <div className="bg-white m-t-45 padding-10">
                          <div className="clearfix hint-text">
                            <Paragraph
                              className="no-margin v-align-middle pull-left"
                              type="small"
                            >
                              .text-success
                            </Paragraph>
                            <Paragraph
                              className="no-margin v-align-middle pull-right text-right"
                              type="small"
                            >
                              #4aa9e9
                            </Paragraph>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 m-b-15">
                      <Paragraph>Complete color</Paragraph>
                      <div className="bg-complete b-a b-grey">
                        <div className="bg-white m-t-45 padding-10">
                          <div className="clearfix hint-text">
                            <Paragraph
                              className="no-margin v-align-middle pull-left"
                              type="small"
                            >
                              .text-complete
                            </Paragraph>
                            <Paragraph
                              className="no-margin v-align-middle pull-right text-right"
                              type="small"
                            >
                              #23b9a9
                            </Paragraph>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 m-b-15">
                      <Paragraph headingcolor="true">Danger color</Paragraph>
                      <div className="bg-danger b-a b-grey">
                        <div className="bg-white m-t-45 padding-10">
                          <div className="clearfix hint-text">
                            <Paragraph
                              className="no-margin v-align-middle pull-left"
                              type="small"
                            >
                              .text-danger
                            </Paragraph>
                            <Paragraph
                              className="no-margin v-align-middle pull-right text-right"
                              type="small"
                            >
                              #ce4e4d
                            </Paragraph>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 m-b-15">
                      <Paragraph>Warning color</Paragraph>
                      <div className="bg-warning b-a b-grey">
                        <div className="bg-white m-t-45 padding-10">
                          <div className="clearfix hint-text">
                            <Paragraph
                              className="no-margin v-align-middle pull-left"
                              type="small"
                            >
                              .text-warning
                            </Paragraph>
                            <Paragraph
                              className="no-margin v-align-middle pull-right text-right"
                              type="small"
                            >
                              #eac459
                            </Paragraph>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*END card */}
            </div>
          </div>
        </PageContainer>
        {/*END CONTAINER FLUID */}
        {/*START CONTAINER FLUID */}
        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : ""
          }
        >
          <div className="row">
            <div className="col-md-6">
              {/*START card */}
              <div className="card card-default">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4">
                      <Paragraph className="sm-p-t-20 bold">
                        Highlighted Text
                      </Paragraph>
                      <Paragraph>
                        For highlighting a run of text due to its relevance in
                        another context
                      </Paragraph>
                    </div>
                    <div className="col-lg-2 p-t-20">
                      <code>&lt;mark&gt;</code>
                    </div>
                    <div className="col-lg-6 p-t-20">
                      it is more then
                      <Highlight>ONE nation/nationality</Highlight> as its fall
                      name is The United Kingdom of Great Britain and North
                      Ireland..
                    </div>
                  </div>
                </div>
              </div>
              {/*END card */}
            </div>
            <div className="col-md-6">
              {/*START card */}
              <div className="card card-default">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4">
                      <Paragraph className="sm-p-t-20 bold">
                        Bold Text
                      </Paragraph>
                      <Paragraph>
                        For emphasizing a snippet of text with a heavier
                        font-weight.
                      </Paragraph>
                    </div>
                    <div className="col-lg-2 p-t-20">
                      <code>&lt;strong&gt;</code>
                      <br />
                      <code>.bold</code>
                    </div>
                    <div className="col-lg-6 p-t-20">
                      it is more then <Bold>ONE nation/nationality</Bold> as its
                      fall name is The United Kingdom of Great Britain and North
                      Ireland..
                    </div>
                  </div>
                </div>
              </div>
              {/*END card */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/*START card */}
              <div className="card card-default">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4">
                      <Paragraph className="sm-p-t-20 bold">
                        Ordered List
                      </Paragraph>
                      <Paragraph>
                        For highlighting a run of text due to its relevance in
                        another context
                      </Paragraph>
                    </div>
                    <div className="col-lg-2 p-t-20">
                      <code>&lt;ol&gt;&lt;/ol&gt;</code>
                    </div>
                    <div className="col-lg-6 p-t-20">
                      <ol className="bold">
                        <li>
                          <span className="normal">
                            Lorem ipsum dolor sit amet
                          </span>
                        </li>
                        <li>
                          <span className="normal">
                            Consectetur adipiscing elit
                          </span>
                        </li>
                        <li>
                          <span className="normal">
                            Integer molestie lorem at massa
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/*END card */}
            </div>
            <div className="col-md-6">
              {/*START card */}
              <div className="card card-default">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4">
                      <Paragraph className="sm-p-t-20 bold">
                        Un-Ordered List
                      </Paragraph>
                      <Paragraph>
                        For highlighting a run of text due to its relevance in
                        another context
                      </Paragraph>
                    </div>
                    <div className="col-lg-2 p-t-20">
                      <code>&lt;ul&gt;&lt;/ul&gt;</code>
                    </div>
                    <div className="col-lg-6 p-t-20">
                      <ul className="lg-icon">
                        <li>
                          <span>Life isn’t about getting and having...</span>
                        </li>
                        <li>
                          <span>Strive not to be a success... </span>
                        </li>
                        <li>
                          <span>Whatever the mind of man can... </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*END card */}
            </div>
          </div>
        </PageContainer>
        {/*END CONTAINER FLUID */}
        {/*START CONTAINER FLUID */}
        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : ""
          }
        >
          <div className="row">
            <div className="col-md-6">
              {/*START card */}
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Address Block</div>
                </div>
                <div className="card-body">
                  <Paragraph>
                    For quotes in your document &amp; client reviews
                  </Paragraph>
                  <QuoteText
                    className="margin-top-20"
                    author="Aristotle Onassis"
                  >
                    <Paragraph>
                      It is during our darkest moments that we must focus to see
                      the light.
                    </Paragraph>
                  </QuoteText>
                  <QuoteText className="pull-right" author="Helen Keller">
                    <Paragraph>
                      The best and most beautiful things in the world cannot be
                      seen or even touched.
                    </Paragraph>
                  </QuoteText>
                  <div className="clearfix"></div>
                </div>
              </div>
              {/*END card */}
            </div>
            <div className="col-md-6">
              {/*START card */}
              <div className="card card-transparent">
                <div className="card-header ">
                  <div className="card-title">Address Block</div>
                </div>
                <div className="card-body">
                  <Address className="margin-bottom-20 margin-top-10">
                    <Bold>Revox, Inc.</Bold>
                    <br />
                    795 Folsom Ave, Suite 600
                    <br />
                    San Francisco, CA 94107
                    <br />
                    <abbr title="Phone">P:</abbr>(123) 456-7890
                  </Address>
                  <Address>
                    <Bold>David Nester</Bold>
                    <br />
                    <a href="mailto:#">david.nester@revox.io</a>
                  </Address>
                </div>
              </div>
              {/*END card */}
            </div>
          </div>
        </PageContainer>
        {/*END CONTAINER FLUID */}

        {/* END CONTAINER FLUID */}
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
