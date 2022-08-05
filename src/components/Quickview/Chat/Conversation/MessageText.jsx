import React from "react";

const FromMe = (props) => {
  return (
    <div className="message clearfix">
      {props.from === "other" ? (
        <React.Fragment>
          <div className="profile-img-wrapper m-t-5 inline">
            <img
              className="col-top"
              width="30"
              height="30"
              src={
                process.env.PUBLIC_URL + "/assets/img/profiles/avatar_small.jpg"
              }
              alt=""
              data-src={
                process.env.PUBLIC_URL + "/assets/img/profiles/avatar_small.jpg"
              }
              data-src-retina="assets/img/profiles/avatar_small2x.jpg"
            />
          </div>
          <div className="chat-bubble from-them">{props.message}</div>
        </React.Fragment>
      ) : (
        <div className="chat-bubble from-me">{props.message}</div>
      )}
    </div>
  );
};

export default FromMe;
