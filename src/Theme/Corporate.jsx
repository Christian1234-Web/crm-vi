import React, { useState, useEffect } from "react";

import Social from "../components/Social";
import Email from "../components/Email/Component";
import ComposeEmail from "../components/ComposeEmail";
import Cards from "../components/Card";
import Views from "../components/View";
import Chart from "../components/Chart";

import Builder from "../components/Builder";

import LayoutsBox from "../components/Layouts/Box";
import LayoutsDefault from "../components/Layouts/Default";
import LayoutsRtl from "../components/Layouts/Rtl";
import LayoutsSecondary from "../components/Layouts/Secondary";

import UIElementsColor from "../components/Theme-Condensed/Color";
import UIElementstypography from "../components/UIElements/Typography";
import UIElementsIcons from "../components/UIElements/Icons";
import UIElementsButtons from "../components/UIElements/Buttons";
import UIElementsNotify from "../components/UIElements/Notification";
import UIElementsModal from "../components/UIElements/Modals";
import UIElementsProgressActivity from "../components/UIElements/ProgressAndActivity";
import UIElementsTabsAccordion from "../components/UIElements/TabsAndAccordion";
import UIElementsSliders from "../components/UIElements/Sliders";
import UIElementsTreeView from "../components/UIElements/TreeView";
import UIElementsNestables from "../components/UIElements/Nestables";

import FormElement from "../components/Forms/Elements";
import FormLayout from "../components/Forms/FormLayouts";
import FormWizard from "../components/Forms/Wizard";

import TableBasic from "../components/Tables/Basic";
import TableData from "../components/Tables/Data";

import MapGoogle from "../components/Maps/GoogleMap";
import MapVector from "../components/Maps/VectorMap";

import ExtraInvoice from "../components/Extra/Invoice";
import Extra400 from "../components/Extra/404Page";
import Extra500 from "../components/Extra/500Page";
import ExtraBlank from "../components/Extra/BlankPage";
import ExtraLogin from "../components/Extra/Login";
import ExtraRegister from "../components/Extra/register";
import ExtraLockScreen from "../components/Extra/LockScreen";
import ExtraGallery from "../components/Extra/Gallery";
import ExtraTimeLine from "../components/Extra/TimeLine";

import MenuLevelOne from "../components/MenuLevel/LevelOne";
import Submenu from "../components/MenuLevel/LevelTwo/Submenu";

import Header from "../components/Theme-Corporate/Header";
import Sidebar from "../components/Theme-Corporate/SidebarCorporate";
import Dashboard from "../components/Theme-Corporate/Dashboard";
import Search from "../components/Theme-Corporate/Search";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

const Corporate = ({ location }) => {
  if (window.location.pathname.includes("corporate")) {
    require("../pages/scss/themes/corporate/corporate.scss");
  }
  let path = location.pathname;
  const [toggleInboxHeader, setToggleInboxHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setToggleInboxHeader(false);
    });

    return () => window.removeEventListener("resize", null);
  });

  if (path.includes("/cards")) {
    document.body.classList.add("cards-view-page");
  }
  else{
	document.body.classList.remove("cards-view-page");
  }

  if (path.includes("/corporate")) {
    document.body.classList.remove("pace-done");
    document.body.classList.add("mac");
    document.body.classList.add("desktop");
    document.body.classList.add("js-focus-visible");
    document.body.classList.add("pace-done");
    document.body.classList.add("menu-unpinned");
    document.body.classList.add("menu-pin");
    document.body.classList.add("corporate");
    document.body.classList.add("menu-behind");
    if (path.includes("boxed_layout")) {
      //fixed-header menu-pin box-layout  mac desktop js-focus-visible pace-done
      document.body.classList.remove("menu-unpinned");
      document.body.classList.add("fixed-header");
      document.body.classList.add("box-layout");
    } else {
      document.body.classList.remove("box-layout");
      document.body.classList.add("fixed-header");
    }
    const { innerWidth: width, innerHeight: height } = window;
    width < 1200 && width > 991
      ? document.body.classList.remove("menu-pin")
      : document.body.classList.add("menu-pin");
  }
  return (
    <div className="h-100">
      {path.includes("/corporate") &&
        !path.includes("/boxed_layout") &&
        !path.includes("/login") &&
        !path.includes("/register") &&
        !path.includes("/lock_screen") &&
        !path.includes("/404") &&
        !path.includes("/500") && (
          <div className="">
            <div className="">
              <Sidebar location={location} />
            </div>
          </div>
        )}

      <div className="full-height">
        {path.includes("/corporate") &&
          !path.includes("/boxed_layout") &&
          !path.includes("/login") &&
          !path.includes("/register") &&
          !path.includes("/lock_screen") &&
          !path.includes("/404") &&
          !path.includes("/500") && (
            <Header
              location={location}
              inboxHeader={toggleInboxHeader}
              setInboxHeader={(value) => setToggleInboxHeader(value)}
            />
          )}

        {path.includes("/corporate") && (
          <>
            <Route exact={true} path="/corporate/" component={Dashboard} />
            <Route path="/corporate/dashboard" component={Dashboard} />
          </>
        )}

        <Route path="/corporate/social" component={Social} />
        <Route
          path="/corporate/email"
          render={() => (
            <Email inboxHeader={toggleInboxHeader} location={location} />
          )}
        />
        <Route
          path="/corporate/compose_email"
          render={() => (
            <ComposeEmail inboxHeader={toggleInboxHeader} location={location} />
          )}
        />

        {/* START Builder route */}
        <Route path="/corporate/builder" component={Builder} />
        {/* END builder route */}

        {/* START Layouts group routes */}
        <Route path="/corporate/default_layout" component={LayoutsDefault} />
        <Route
          path="/corporate/secondary_layout"
          component={LayoutsSecondary}
        />
        <Route path="/corporate/boxed_layout" component={LayoutsBox} />
        <Route path="/corporate/rtl_layout" component={LayoutsRtl} />
        {/* END Layouts routes */}

        {/* START UIElements group routes */}
        <Route path="/corporate/color" component={UIElementsColor} />
        <Route path="/corporate/typography" component={UIElementstypography} />
        <Route path="/corporate/icons" component={UIElementsIcons} />
        <Route path="/corporate/buttons" component={UIElementsButtons} />
        <Route path="/corporate/notifications" component={UIElementsNotify} />
        <Route path="/corporate/modals" component={UIElementsModal} />
        <Route
          path="/corporate/progress"
          component={UIElementsProgressActivity}
        />
        <Route
          path="/corporate/tabs_accordian"
          component={UIElementsTabsAccordion}
        />
        <Route path="/corporate/sliders" component={UIElementsSliders} />
        <Route path="/corporate/tree_view" component={UIElementsTreeView} />
        <Route path="/corporate/nestables" component={UIElementsNestables} />
        {/* END UIElements routes */}

        {/* START Forms group routes */}
        <Route path="/corporate/form_elements" component={FormElement} />
        <Route path="/corporate/form_layouts" component={FormLayout} />
        <Route path="/corporate/form_wizard" component={FormWizard} />
        {/* END Forms routes */}

        <Route path="/corporate/cards" component={Cards} />
        <Route path="/corporate/views" component={Views} />

        {/* START Tables group routes */}
        <Route path="/corporate/basic_tables" component={TableBasic} />
        <Route path="/corporate/data_tables" component={TableData} />
        {/* END Tables routes */}

        {/* START Maps group routes */}
        <Route path="/corporate/google_map" component={MapGoogle} />
        <Route path="/corporate/vector_map" component={MapVector} />
        {/* END Maps routes */}

        <Route path="/corporate/charts" component={Chart} />

        {/* START Extra group routes */}
        <Route path="/corporate/extra/invoice" component={ExtraInvoice} />
        <Route path="/corporate/extra/404" component={Extra400} />
        <Route path="/corporate/extra/500" component={Extra500} />
        <Route path="/corporate/extra/blank_template" component={ExtraBlank} />
        <Route path="/corporate/extra/login" component={ExtraLogin} />
        <Route path="/corporate/extra/register" component={ExtraRegister} />
        <Route
          path="/corporate/extra/lock_screen"
          component={ExtraLockScreen}
        />
        <Route path="/corporate/extra/gallery" component={ExtraGallery} />
        <Route path="/corporate/extra/timeline" component={ExtraTimeLine} />
        {/* END Extra routes */}

        {/* START Menu Levels group routes */}
        <Route path="/corporate/levelOne" component={MenuLevelOne} />
        <Route path="/corporate/submenu" component={Submenu} />
        {/* END Menu Levels routes */}

        {path.includes("/corporate") && <Search />}
      </div>
    </div>
  );
};

export default withRouter(Corporate);
