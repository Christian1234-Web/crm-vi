import React from "react";

import Breadcrumb from "../../Breadcrumb";
import PageContainer from "../../Containers";
import PageScroll from "../../PageScroll";

const JumbotronCom = ({ path }) => {
  return (
    <div className="jumbotron bg-white m-b-0">
      <PageContainer
        className={
          path.includes("/executive") || path.includes("/casual")
            ? "container"
            : " "
        }
      >
        <PageScroll className="inner">
          {/* START BREADCRUMB */}
          <Breadcrumb>
            <li className="breadcrumb-item">
              <a href="javascript:void(0);" onClick={(e) => e.preventDefault()}>
                UI Elements
              </a>
            </li>
            <li className="breadcrumb-item active">Buttons</li>
          </Breadcrumb>
          {/* END BREADCRUMB */}
          <div className="container-md-height m-b-20">
            <div className="row m-lg-0">
              <div className="col-xl-7 col-lg-6 bg-white">
                {/* START card */}
                <div className="full-height">
                  <div className="card-body text-center">
                    <img
                      className="image-responsive-height demo-mw-500"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/demo/buttons_hero.gif"
                      }
                      alt=""
                    />
                  </div>
                </div>
                {/* END card */}
              </div>
              <div className="col-xl-5 col-lg-6">
                {/* START card */}
                <div className="card card-transparent">
                  <div className="card-body mw-80">
                    <h3>Buttons made uniquely for dashboards and app UI.</h3>
                    <p className="fs-16">
                      Use these buttons and instantly get an app or os like
                      feeling on your project.
                    </p>
                    <div>
                      <div className="m-t-20">
                        <p className="">
                          Have an Improvement? or a suggestion?
                          <br />
                          <a
                            href="javascript:void(0);"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Goto requestbox
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END card */}
              </div>
            </div>
          </div>
        </PageScroll>
      </PageContainer>
    </div>
  );
};

export default JumbotronCom;
