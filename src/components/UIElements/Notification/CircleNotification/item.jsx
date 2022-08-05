import React from "react";

const item = ({ type, desc }) => {
  return (
    <div className="pgn push-on-sidebar-open pgn-circle">
      <div className={`alert alert-${type}`}>
        <div>
          <div className="pgn-thumbnail">
            <div>
              <img
                width="40"
                height="40"
                style={{ display: "inline-block" }}
                src={
                  process.env.PUBLIC_URL + "/assets/img/profiles/avatar2x.jpg"
                }
                data-src={
                  process.env.PUBLIC_URL + "/assets/img/profiles/avatar.jpg"
                }
                data-src-retina="assets/img/profiles/avatar2x.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="pgn-message">
            <div>
              <p className="bold">John Doe</p>
              <p>{desc}</p>
            </div>
          </div>
        </div>
        <button type="button" className="close" data-dismiss="alert">
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
};

export default item;
