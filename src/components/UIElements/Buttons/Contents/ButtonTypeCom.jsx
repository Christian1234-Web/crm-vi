import React from "react";

import PageContainer from "../../Containers";
import Button from "../../Button";

const ButtonTypeCom = ({ path }) => {
  return (
    <div className="jumbotron bg-white ">
      <PageContainer
        className={
          path.includes("/executive") || path.includes("/casual")
            ? "container bg-white"
            : "bg-white"
        }
      >
        <div className="row">
          <div className="col-sm-12">
            {/* START card */}
            <div className="card card-transparent">
              <div className="card-header ">
                <div className="card-title">Types</div>
              </div>
              <div className="card-body">
                <h5 className="">
                  Types of buttons for everything and anywhere.
                </h5>
                <p>
                  Pages UI has four types of buttons that come with all types of
                  sizes and purposes. <br />
                  You can use these alternatively with just adding classes to
                  create awareness of user actions and controls.
                </p>
                <div className="bg-contrast-lower">
                  <div className="container">
                    <div className="row m-t-30 p-t-40 p-b-20">
                      <div className="col-lg-3">
                        <div className="text-center">
                          <Button type="link">Link</Button>
                        </div>
                        <div className="card card-default m-t-30">
                          <div className="card-body padding-10">
                            <p className="m-t-0 bold p-b-5">Text Button</p>
                            <p>
                              Text buttons are typically used for less important
                              actions. Used mainly as links in a page
                            </p>
                            <p className="hint-text p-t-10 fs-12">
                              Low emphasis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="text-center">
                          <Button type="outline-primary">Outlined</Button>
                        </div>
                        <div className="card card-default m-t-30">
                          <div className="card-body padding-10">
                            <p className="m-t-0 bold p-b-5">Outlined Button</p>
                            <p>
                              Outlined buttons are used for more emphasis than
                              text buttons due to the stroke.
                            </p>
                            <p className="hint-text p-t-10 fs-12">
                              Medium emphasis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="text-center">
                          <Button type="primary">Text</Button>
                        </div>
                        <div className="card card-default m-t-30">
                          <div className="card-body padding-10">
                            <p className="m-t-0 bold p-b-5">Contained Button</p>
                            <p>
                              Contained buttons have more emphasis, as they use
                              a contrasted color fill.
                            </p>
                            <p className="hint-text p-t-10 fs-12">
                              High emphasis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="text-center">
                          <div className="btn-group">
                            <Button type="default" staticicon="true" size="lg">
                              <i className="pg-icon">format_bold</i>
                            </Button>
                            <Button
                              type="default"
                              staticicon="true"
                              size="lg"
                              active="true"
                            >
                              <i className="pg-icon">format_italics</i>
                            </Button>
                            <Button type="default" staticicon="true" size="lg">
                              <i className="pg-icon">format_highlight</i>
                            </Button>
                          </div>
                        </div>
                        <div className="card card-default m-t-30">
                          <div className="card-body padding-10">
                            <p className="m-t-0 bold p-b-5">Button Groups</p>
                            <p>
                              Buttons group a set of actions using layout and
                              spacing. They’re used less often.
                            </p>
                            <p className="hint-text p-t-10 fs-12">Often</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END card */}
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default ButtonTypeCom;
