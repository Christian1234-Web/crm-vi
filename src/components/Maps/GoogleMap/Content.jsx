import React from "react";

import MapContainer from "./MapContainer";
import Copyright from "../../ui/Footer/Copyright";

const content = ({ path }) => {
  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content full-width full-height overlay-footer">
        <div className="map-controls">
          <div className="pull-left">
            <div
              className="btn-group-vertical"
              data-toggle="buttons-radio"
            ></div>
          </div>
        </div>
        <div className="map-container full-width full-height">
          <div
            id="google-map"
            className="full-width full-height"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <MapContainer />
          </div>
        </div>
      </div>

      {/* END PAGE CONTENT */}
    </div>
  );
};

export default content;
