import React from "react";

const Component = (props) => {
  return (
    /* START CONTAINER FLUID */
    <div className="container-fluid container-fixed-lg footer">
      <div className="copyright sm-text-center">
        <p className="small no-margin pull-left sm-pull-reset">
          <span className="hint-text">Copyright &copy; {props.year} </span>
          <span className="font-montserrat">{props.brand}</span>.
          <span className="hint-text">{props.reserved} </span>
          <span className="sm-block">
            <a href="javascript:void(0);" className="m-l-10 m-r-10">
              {props.terms}
            </a>{" "}
            |{" "}
            <a href="javascript:void(0);" className="m-l-10">
              {props.policy}
            </a>
          </span>
        </p>
        <p className="small no-margin pull-right sm-pull-reset">
          <a href="javascript:void(0);">Hand-crafted</a>{" "}
          <span className="hint-text">&amp; Made with Love ®</span>
        </p>
        <div className="clearfix"></div>
      </div>
    </div>
    /* END CONTAINER FLUID */
  );
};

export default Component;
