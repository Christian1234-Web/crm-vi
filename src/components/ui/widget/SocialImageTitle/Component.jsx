import React from "react";

const Component = () => {
  return (
    <div className="widget-18 panel no-border  no-margin ">
      <div className="padding-15">
        <div className="item-header clearfix">
          <div className="thumbnail-wrapper d32 circular">
            <img
              width="40"
              height="40"
              src={process.env.PUBLIC_URL + "/assets/img/profiles/3x.jpg"}
              data-src={process.env.PUBLIC_URL + "/assets/img/profiles/3.jpg"}
              data-src-retina="assets/img/profiles/3x.jpg"
              alt=""
            />
          </div>
          <div className="inline m-l-10">
            <p className="no-margin">
              <strong>Anne Simons</strong>
            </p>
            <p className="no-margin hint-text">
              Shared a link
              <span className="location semi-bold">
                <i className="fa fa-map-marker"></i> NY center
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <ul className="buttons pull-top top-right list-inline p-r-10 p-t-10">
          <li>
            <a className="text-white" href="javascript:void(0);">
              <i className="fa fa-expand"></i>
            </a>
          </li>
          <li>
            <a className="text-white" href="javascript:void(0);">
              <i className="fa fa-heart-o"></i>
            </a>
          </li>
        </ul>
        <div className="widget-18-post bg-black no-overflow"></div>
      </div>
      <div className="padding-15">
        <div className="hint-text pull-left">few seconds ago</div>
        <ul className="list-inline pull-right no-margin">
          <li>
            <a className="text-master hint-text" href="javascript:void(0);">
              5,345 <i className="fa fa-comment-o"></i>
            </a>
          </li>
          <li>
            <a className="text-master hint-text" href="javascript:void(0);">
              23K <i className="fa fa-heart-o"></i>
            </a>
          </li>
        </ul>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default Component;
