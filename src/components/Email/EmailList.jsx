import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import striptags from "striptags";

import "./style.css";

const EmailList = ({
  group,
  groupIndex,
  onReadEmail,
  onSlide,
  emailListPosition,
  timeSent
}) => {
  const [selectEmailStyling, setSelectEmailStyling] = useState(null);
  const arr = ["David Nester", "Jane Smith"];
  useEffect(() => {
    //DOM manipulation is a side-effect, can be done in the useEffect hook
    //Get the active element after onClick
    const elements = document.getElementsByClassName(
      "item padding-10 p-l-15 mail-list-item-style active"
    );
    //Remove active status and background color of previous active li if exist
    if (selectEmailStyling !== null && elements.length > 0) {
      elements[0].style.backgroundColor = "white";
      elements[0].classList.remove("active");
    }
    //Apply active status and background color
    if (
      selectEmailStyling !== null &&
      selectEmailStyling === document.getElementById(selectEmailStyling).id
    ) {
      document.getElementById(selectEmailStyling).classList.add("active");
      document.getElementById(selectEmailStyling).style.backgroundColor =
        "#fffde1";
    }
  }, [selectEmailStyling]);


  const emailItem = group.map((listValue, listIndex) => {
    return (
      <>
        {/* <div className="sticky-date">
          <span className="email-group-header-date">{`${new Date(listValue.createdAt).toLocaleTimeString()}`} </span>
        </div> */}
        <li
          key={`${groupIndex}-${listIndex}`}
          className={`item padding-10 p-l-15 mail-list-item-style`}
          id={listValue.id}
          data-email-id={`${groupIndex}-${listIndex}`}
          onClick={() => {
            onReadEmail({
              id: listValue.id,
              groupIndex: groupIndex,
              listIndex: listIndex,
            });
            setSelectEmailStyling(listValue.id);
            onSlide("-100%");
          }}
        >
          <Row>
            <Col xs={2} md={2}>
              <div className="thumbnail-wrapper d32 circular flex-shrink-0">
                <img
                  width="40"
                  height="40"
                  alt=""
                  data-src-retina={`/assets/img/profiles/b2x.jpg`}
                  data-src={`/assets/img/profiles/b.jpg`}
                  src={process.env.PUBLIC_URL + `/assets/img/profiles/b2x.jpg`}
                />

              </div>
            </Col>
            <Col xs={5} md={10}>
              <Row>
                <Col xs={7} md={7} className="no-padding">
                  <p className="recipients no-margin">{arr.toString()}</p>
                </Col>
                <Col xs={5} md={5}>
                  <div className="datetime email-list-date-class">
                    {new Date(listValue.createdAt).toLocaleTimeString()}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} className="no-padding">
                  <p className="subject no-margin">
                    {listValue.from.slice(0, 37)}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} className="no-padding">
                  <p className="body no-margin" style={{ color: "#9F9F9F" }}>
                    {striptags(listValue.body).slice(0, 35)}...
                  </p>
                </Col>
              </Row>
              <div className="clearfix"></div>
            </Col>
          </Row>
        </li>
      </>
    )
  });

  return (
    <React.Fragment>
      <div className="sticky-date">
        <span className="email-group-header-date">{group.length === 0 ? '' : new Date(group[0].createdAt).toDateString()} </span>
        {/* <span className="email-group-header-date"> 2 Aug</span> */}
      </div>
      <ul className="no-padding mail-list-ul">{emailItem}</ul>
    </React.Fragment>
  );
};

export default EmailList;
