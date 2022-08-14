import React, { useEffect, useState, useContext,useCallback } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar';

import Nav from "./Nav";
import EmailBody from "./EmailBody";
import EmailGroup from "./EmailGroup";
import { Store } from "../../context/store";
import "./style.css";
import allMessages from "./messages.json";
import { request } from "../../services/utilities";
import { TOKEN_COOKIE ,USER_NAME} from "../../services/constants";
import SSRStorage from '../../services/storage';
const storage = new SSRStorage(); 


const content = ({ toggleHeaderPopup }) => {
  const store = useContext(Store);
  let [, setTotal_sms] = store.total_sms;
  const [selectEmail, setSelectEmail] = useState(null);
  const [slideWidth, setSlideWidth] = useState("0px");
  const [sms_messages, setSms_messages] = useState([]);


  const fetchAllSmsMessages = useCallback(async () => {
   const user = await storage.getItem(USER_NAME);

    const url = `message/all?userId=${user.id}&page=1&limit=10`;
    try {
      const rs = await request(url, 'GET', true);
      console.log(rs);
      setSms_messages(rs.result);
      setTotal_sms(rs.result.length);
    }
    catch (err) {
      console.log(err)
    }
  }, []);

  useEffect(() => {
    fetchAllSmsMessages();
  }, [fetchAllSmsMessages])

  return (
    <div className="page-content-wrapper full-height">
      <div className="content full-height">
        {/* Start Secondary side bar nav */}
        <Nav messages={sms_messages} to="compose_email" toggleHeaderPopup={toggleHeaderPopup} />
        {/* End Secondary side bar nav */}
        {/* Start email list content */}
        <div className="inner-content email-layout full-height split-view">
          <Row className="email-content full-height">
            <Col
              xs={12}
              md={"auto"}
              className="no-padding-right full-height"
              style={
                window.screen.width < 768
                  ? { width: "372px", position: "relative" }
                  : { width: "372px" }
              }
            >
              <PerfectScrollbar
                className="list-view-group-container no-padding full-height"
                id="email-group-div-id"
                style={
                  window.screen.width < 768
                    ? {
                      left: slideWidth,
                      transition: "left 1s ease",
                      zIndex: "2",
                      position: "inherit",
                      top: "0px !important",
                    }
                    : { left: "0px" }
                }
              >
                {/* Start Email list */}
                <EmailGroup
                  emailGroups={sms_messages}
                  onReadEmail={setSelectEmail}
                  onSlide={setSlideWidth}
                  emailListPosition={slideWidth}
                />
                {/* <EmailGroup
                  emailGroups={allMessages.emails}
                  onReadEmail={setSelectEmail}
                  onSlide={setSlideWidth}
                  emailListPosition={slideWidth}
                /> */}

                {/* End Email list */}
              </PerfectScrollbar>
              {/* Start small screen email body */}
              <div className="email-body-small-screen full-height">
                <EmailBody
                  viewedEmail={selectEmail}
                  emailGroups={sms_messages}
                  onSlide={setSlideWidth}
                />
              </div>
              {/* End small screen email body */}
            </Col>
            {/* Split email detail view */}
            <Col className="no-padding-left email-body-large-screen full-height">
              {/* Start Email body */}
              <EmailBody
                viewedEmail={selectEmail}
                emailGroups={sms_messages}
              />
              {/* End Email body */}
            </Col>
          </Row>
          {/* START COMPOSE BUTTON FOR TABS */}
          <div className="compose-wrapper d-md-none">
            <Link
              to="compose_email"
              className="compose-email text-info pull-right m-r-15 m-t-15"
            >
              <i className="pg-icon">edit</i>
            </Link>
          </div>
          {/* END COMPOSE BUTTON */}
        </div>
      </div>
      {/* End email list content */}
    </div>
  );
};

export default content;
