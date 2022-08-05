import React from "react";

const Component = (props) => {
  return (
    <div className="container-fluid relative">
      {/* LEFT SIDE */}
      <div className="pull-left full-height visible-sm visible-xs">
        {/* START ACTION BAR */}
        <div className="header-inner">
          <a
            href="javascript:void(0);"
            className="btn-link toggle-sidebar visible-sm-inline-block visible-xs-inline-block padding-5"
            data-toggle="sidebar"
          >
            <span className="icon-set menu-hambuger"></span>
          </a>
        </div>
        {/* END ACTION BAR */}
      </div>
      <div className="pull-center hidden-md hidden-lg">
        <div className="header-inner">
          <div className="brand inline">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
              alt="logo"
              data-src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
              data-src-retina={
                process.env.PUBLIC_URL + "/assets/img/logo_2x.png"
              }
            />
          </div>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="pull-right full-height visible-sm visible-xs">
        {/* START ACTION BAR */}
        <div className="header-inner">
          <a
            href="javascript:void(0);"
            className="btn-link visible-sm-inline-block visible-xs-inline-block"
            data-toggle="quickview"
            data-toggle-element="#quickview"
          >
            <span className="icon-set menu-hambuger-plus"></span>
          </a>
        </div>
        {/* END ACTION BAR */}
      </div>
    </div>
  );
};

export default Component;
