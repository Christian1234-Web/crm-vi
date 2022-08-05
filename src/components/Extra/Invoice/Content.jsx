import React, { useState } from "react";
import Fullscreen from "react-full-screen";

import Copyright from "../../ui/Footer/Copyright";
import PageContainer from "../../UIElements/Containers";

const content = ({ path }) => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}

      <div className="content ">
        <nav
          className="navbar navbar-default bg-contrast-lower sm-padding-10 full-width p-t-0 p-b-0"
          role="navigation"
        >
          <div className="container-fluid full-width">
            <div className="navbar-header text-center">
              <button
                aria-label=""
                type="button"
                className="navbar-toggle collapsed btn btn-link no-padding"
                data-toggle="collapse"
                data-target="#sub-nav"
              >
                <i className="pg pg-more v-align-middle"></i>
              </button>
            </div>

            <div
              className={
                path.includes("/executive")
                  ? "collapse navbar-collapse container"
                  : "collapse navbar-collapse"
              }
              id="sub-nav"
            >
              <div className="row">
                <div className="col-sm-4">
                  <ul className="navbar-nav col-sm-12 col-md-12  col-lg-5 ">
                    <li
                      className={`nav-item dropdown ${
                        toggleDropDown ? "show" : ""
                      }`}
                    >
                      <a
                        className="nav-link dropdown-toggle d-flex align-items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          setToggleDropDown((prevState) => !prevState);
                        }}
                        href="javascript:void(0);"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={`${toggleDropDown ? "true" : "false"}`}
                      >
                        <i className="pg-icon m-r-10">page</i> Squarespace
                      </a>
                      <div
                        className={`dropdown-menu ${
                          toggleDropDown ? "show" : ""
                        }`}
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" href="javascript:void(0);">
                          Action
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Another action{" "}
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Something else here
                        </a>
                        <div className="divider"></div>
                        <a className="dropdown-item" href="javascript:void(0);">
                          Separated link
                        </a>
                        <div className="divider"></div>
                        <a className="dropdown-item" href="javascript:void(0);">
                          One more separated link
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item">
                      <a href="javascript:void(0);">Open</a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="javascript:void(0);"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="Print"
                      >
                        <i className="pg-icon">printer</i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="javascript:void(0);"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="Download"
                      >
                        <i className="pg-icon">download</i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <ul className="navbar-nav d-flex flex-row justify-content-sm-end">
                    <li className="nav-item">
                      <a href="javascript:void(0);" className="p-r-10">
                        <img
                          width="25"
                          height="25"
                          alt=""
                          className="icon-pdf"
                          data-src-retina="/assets/img/invoice/pdf2x.png"
                          data-src={
                            process.env.PUBLIC_URL +
                            "/assets/img/invoice/pdf.png"
                          }
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/invoice/pdf.png"
                          }
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className="p-r-10">
                        <img
                          width="25"
                          height="25"
                          alt=""
                          className="icon-image"
                          data-src-retina="/assets/img/invoice/image2x.png"
                          data-src={
                            process.env.PUBLIC_URL +
                            "/assets/img/invoice/image.png"
                          }
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/invoice/image.png"
                          }
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className="p-r-10">
                        <img
                          width="25"
                          height="25"
                          alt=""
                          className="icon-doc"
                          data-src-retina="/assets/img/invoice/doc2x.png"
                          data-src={
                            process.env.PUBLIC_URL +
                            "/assets/img/invoice/doc.png"
                          }
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/invoice/doc.png"
                          }
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="javascript:void(0);" className="p-r-10">
                        <i
                          className="pg-icon"
                          onClick={(e) => {
                            e.preventDefault();
                            setFullScreen(true);
                          }}
                        >
                          expand
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Fullscreen
          enabled={fullScreen}
          onChange={(isFull) => {
            setFullScreen({ isFull });
          }}
        >
          <PageContainer
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "container"
                : " "
            }
          >
            <div className="card card-default m-t-20">
              <div className="card-body">
                <div className="invoice padding-50 sm-padding-10">
                  <div>
                    <div className="pull-left">
                      <img
                        width="235"
                        height="47"
                        alt=""
                        className="invoice-logo"
                        data-src-retina="/assets/img/invoice/squarespace2x.png"
                        data-src={
                          process.env.PUBLIC_URL +
                          "/assets/img/invoice/squarespace.png"
                        }
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/invoice/squarespace.png"
                        }
                      />
                      <address className="m-t-10">
                        Apple Enterprise Sales
                        <br />
                        (877) 412-7753.
                        <br />
                      </address>
                    </div>
                    <div className="pull-right sm-m-t-20">
                      <h2 className="font-montserrat all-caps hint-text">
                        Invoice
                      </h2>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <br />
                  <br />
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-9 col-sm-height sm-no-padding">
                        <p className="small no-margin">Invoice to</p>
                        <h5 className="semi-bold m-t-0">Darren Forthway</h5>
                        <address>
                          <strong>Pages Incoperated.</strong>
                          <br />
                          page.inc
                          <br />
                          1600 Amphitheatre Pkwy, Mountain View,
                          <br />
                          CA 94043, United States
                        </address>
                      </div>
                      <div className="col-lg-3 sm-no-padding sm-p-b-20 d-flex align-items-end justify-content-between">
                        <div>
                          <div className="font-montserrat bold all-caps">
                            Invoice No :
                          </div>
                          <div className="font-montserrat bold all-caps">
                            Invoice date :
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        <div className="text-right">
                          <div className="">0047</div>
                          <div className="">29/09/14</div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive table-invoice">
                    <table className="table m-t-50">
                      <thead>
                        <tr>
                          <th className="">Task Description</th>
                          <th className="text-center">Rate</th>
                          <th className="text-center">Hours</th>
                          <th className="text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="">
                            <p className="text-black">Character Illustration</p>
                            <p className="small hint-text">
                              Character Design projects from the latest top
                              online portfolios on Behance.
                            </p>
                          </td>
                          <td className="text-center">$65.00</td>
                          <td className="text-center">84</td>
                          <td className="text-right">$5,376.00</td>
                        </tr>
                        <tr>
                          <td className="">
                            <p className="text-black">
                              Cross Heart Charity Branding
                            </p>
                            <p className="small hint-text">
                              Attempt to attach higher credibility to a new
                              product by associating it with a well established
                              company name
                            </p>
                          </td>
                          <td className="text-center">$89.00</td>
                          <td className="text-center">100</td>
                          <td className="text-right">$8,900.00</td>
                        </tr>
                        <tr>
                          <td className="">
                            <p className="text-black">iOs App</p>
                            <p className="small hint-text">
                              A video game franchise Inspired primarily by a
                              sketch of stylized wingless - Including Branding /
                              Graphics / Motion Picture &amp; Videos
                            </p>
                          </td>
                          <td className="text-center">$100.00</td>
                          <td className="text-center">500</td>
                          <td className="text-right">$50,000.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div>
                    <img
                      width="150"
                      height="58"
                      alt=""
                      className="invoice-signature"
                      data-src-retina="/assets/img/invoice/signature2x.png"
                      data-src={
                        process.env.PUBLIC_URL +
                        "/assets/img/invoice/signature.png"
                      }
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/invoice/signature2x.png"
                      }
                    />
                    <p>Designer’s Identity</p>
                  </div>
                  <br />
                  <br />
                  <div className="p-l-15 p-r-15">
                    <div className="row b-a b-grey">
                      <div className="col-md-2 p-l-15 sm-p-t-15 clearfix sm-p-b-15 d-flex flex-column justify-content-center">
                        <h5 className="font-montserrat all-caps small no-margin hint-text bold">
                          Advance
                        </h5>
                        <h3 className="no-margin">$21,000.00</h3>
                      </div>
                      <div className="col-md-5 clearfix sm-p-b-15 d-flex flex-column justify-content-center">
                        <h5 className="font-montserrat all-caps small no-margin hint-text bold">
                          Discount (10%)
                        </h5>
                        <h3 className="no-margin">$645.00</h3>
                      </div>
                      <div className="col-md-5 text-right bg-contrast-higher col-sm-height padding-15 d-flex flex-column justify-content-center align-items-end">
                        <h5 className="font-montserrat all-caps small no-margin hint-text text-white bold">
                          Total
                        </h5>
                        <h1 className="no-margin text-white">$64,276.00</h1>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <p className="small hint-text">
                    Services will be invoiced in accordance with the Service
                    Description. You must pay all undisputed invoices in full
                    within 30 days of the invoice date, unless otherwise
                    specified under the Special Terms and Conditions. All
                    payments must reference the invoice number. Unless otherwise
                    specified, all invoices shall be paid in the currency of the
                    invoice
                  </p>
                  <p className="small hint-text">
                    Insight retains the right to decline to extend credit and to
                    require that the applicable purchase price be paid prior to
                    performance of Services based on changes in insight's credit
                    policies or your financial condition and/or payment record.
                    Insight reserves the right to charge interest of 1.5% per
                    month or the maximum allowable by applicable law, whichever
                    is less, for any undisputed past due invoices. You are
                    responsible for all costs of collection, including
                    reasonable attorneys' fees, for any payment default on
                    undisputed invoices. In addition, Insight may terminate all
                    further work if payment is not received in a timely manner.
                  </p>
                  <br />
                  <hr />
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
                      alt="logo"
                      data-src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
                      data-src-retina="/assets/img/logo_2x.png"
                      width="78"
                      height="22"
                    />
                    <span className="m-l-40 text-black sm-pull-right">
                      +34 346 4546 445
                    </span>
                    <span className="m-l-40 text-black sm-pull-right">
                      support@revox.io
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </Fullscreen>
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
