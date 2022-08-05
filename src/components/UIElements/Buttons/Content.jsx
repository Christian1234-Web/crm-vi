import React from "react";
import { Row, Col } from "reactstrap";

import PageContainer from "../Containers";

import Copyright from "../../ui/Footer/Copyright";
import SocialCommonButtons from "./Contents/SocialCommonButtons";
import GroupedButtons from "./Contents/GroupedButtons";
import DifferentStyleButtons from "./Contents/DifferentStyleButtons";
import ButtonBlocks from "./Contents/ButtonBlocks";
import ButtonAnimations from "./Contents/ButtonAnimations";
import ToggleVariations from "./Contents/ToggleVariations";
import SizeOptions from "./Contents/SizeOptions";
import ButtonColorCom from "./Contents/ButtonColorCom";
import JumbotronCom from "./Contents/JumbotronCom";
import ButtonTypeCom from "./Contents/ButtonTypeCom";

const content = ({ path }) => {
  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content">
        {/* START CONTAINER FLUID */}

        {/* START JUMBOTRON */}

        <JumbotronCom path={path} />
        {/* END JUMBOTRON */}

        {/* START CONTAINER FLUID */}

        {/* START TYPE component */}
        <ButtonTypeCom path={path} />
        {/* END TYPE component */}

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container "
              : " "
          }
        >
          <ButtonColorCom />

          <Row>
            <Col sm="12" md="12" lg="12" xl="4">
              {/* START SIZE OPTIONS card */}
              <SizeOptions />
              {/* END SIZE OPTIONS card */}
            </Col>
            <Col sm="12" md="12" lg="12" xl="4">
              {/* START TOGGLE VARIATIONS card */}
              <ToggleVariations />
              {/* END TOGGLE VARIATIONS card */}
            </Col>
            <Col sm="12" md="12" lg="12" xl="4">
              {/* START card */}
              <Row>
                <Col sm="12" md="12" lg="12" xl="12">
                  {/* START BUTTON ANIMATIONS card */}
                  <ButtonAnimations />
                  {/* END BUTTON ANIMATIONS card */}
                </Col>
              </Row>
              <Row>
                <Col sm="12" md="12" lg="12" xl="12">
                  {/* START BUTTON BLOCKS card */}
                  <ButtonBlocks />
                  {/* END BUTTON BLOCKS card */}
                </Col>
              </Row>
            </Col>
          </Row>

          {/* START card */}
          <div className="card card-default">
            <div className="card-header ">
              <div className="card-title">Different Styles</div>
            </div>
            <div className="card-body no-padding">
              <DifferentStyleButtons />
            </div>
          </div>
          {/* END card */}

          {/* START card */}
          <div className="card card-transparent">
            <div className="card-header ">
              <div className="card-title">Grouped Buttons</div>
            </div>
            <div className="card-body no-padding">
              <GroupedButtons />
            </div>
            {/* END card */}
            {/* START COMMON and SOCIAL icon button section */}
            <SocialCommonButtons />
            {/* END COMMON and SOCIAL icon button section */}
          </div>
          {/* END CONTAINER FLUID */}
        </PageContainer>
        {/* END CONTAINER FLUID */}
      </div>
      {/* END PAGE CONTENT */}
      {/* START COPYRIGHT */}
      <Copyright
        year={"2014"}
        brand={"REVOX"}
        reserved={"All rights reserved."}
        terms={"Terms of use"}
        policy={"Privacy Policy"}
      />
      {/* END COPYRIGHT */}
    </div>
  );
};

export default content;
