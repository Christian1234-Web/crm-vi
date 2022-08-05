import React from "react";

import "./style.css";

const OverLayer = ({ title, price, author, ...props }) => {
  return (
    <div className="overlayer bottom-left full-width over-layer-height">
      <div className="overlayer-wrapper item-info ">
        <div className="gradient-grey p-l-20 p-r-20 p-t-20 p-b-5">
          <div className="">
            <p className="pull-left bold text-white fs-14 p-t-10">{title}</p>
            <h5 className="pull-right semi-bold text-white font-montserrat bold">
              {price}
            </h5>
            <div className="clearfix"></div>
          </div>
          <div className="m-t-10">
            <div className="thumbnail-wrapper d32 circular m-t-5">
              <img
                width="40"
                height="40"
                src={process.env.PUBLIC_URL + "/assets/img/profiles/avatar.jpg"}
                data-src={
                  process.env.PUBLIC_URL + "/assets/img/profiles/avatar.jpg"
                }
                data-src-retina="/assets/img/profiles/avatar2x.jpg"
                alt=""
              />
            </div>
            <div className="inline m-l-10">
              <p className="no-margin text-white fs-12">{author}</p>
              <p className="rating">
                <i className="fa fa-star rated"></i>
                <i className="fa fa-star rated"></i>
                <i className="fa fa-star rated"></i>
                <i className="fa fa-star rated"></i>
                <i className="fa fa-star"></i>
              </p>
            </div>
            <div className="pull-right m-t-10">
              <button
                aria-label=""
                className="btn btn-white btn-xs btn-mini bold fs-14"
                type="button"
              >
                +
              </button>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverLayer;
