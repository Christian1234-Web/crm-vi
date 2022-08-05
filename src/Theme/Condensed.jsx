import React, { useState, useEffect } from "react";

import Dashboard from "../components/Theme-Condensed/Dashboard";
import Social from "../components/Social";
import Email from "../components/Email";
import ComposeEmail from "../components/ComposeEmail";
import Cards from "../components/Card";
import Views from "../components/View";
import Chart from "../components/Chart";

import Builder from "../components/Builder";

import LayoutsBox from "../components/Layouts/Box";
import LayoutsDefault from "../components/Layouts/Default";
import LayoutsRtl from "../components/Layouts/Rtl";
import LayoutsSecondary from "../components/Layouts/Secondary";

import UIElementsColor from "../components/UIElements/Color";
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

import Header from "../components/Theme-Condensed/Header";
import Sidebar from "../components/Theme-Condensed/Sidebar";
import Search from "../components/Theme-Condensed/Search";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

const Condensed = ({ location }) => {
  if (
    window.location.pathname.includes("condensed") ||
    window.location.pathname === "/"
  ) {
    require("../pages/scss/themes/condensed/condensed.scss");
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

  return (
    <div className="h-100">
      {(path.includes("/condensed") || path === "/") &&
        !path.includes("boxed_layout") &&
        !path.includes("/login") &&
        !path.includes("/register") &&
        !path.includes("/lock_screen") &&
        !path.includes("/404") &&
        !path.includes("/500") && (
          <div>
            <Header
              location={location}
              inboxHeader={toggleInboxHeader}
              setInboxHeader={(value) => setToggleInboxHeader(value)}
            />
            <Sidebar location={location} />
          </div>
        )}
      <Route exact={true} path="/" component={Dashboard} />
      <Route exact={true} path="/condensed" component={Dashboard} />
      <Route path="/condensed/dashboard" component={Dashboard} />
      <Route path="/condensed/social" component={Social} />
      <Route
        path="/condensed/email"
        render={() => (
          <Email inboxHeader={toggleInboxHeader} location={location} />
        )}
      />
      <Route
        path="/condensed/compose_email"
        render={() => (
          <ComposeEmail inboxHeader={toggleInboxHeader} location={location} />
        )}
      />

      {/* START Builder route */}
      <Route path="/condensed/builder" component={Builder} />
      {/* END builder route */}

      {/* START Layouts group routes */}
      <Route path="/condensed/default_layout" component={LayoutsDefault} />
      <Route path="/condensed/secondary_layout" component={LayoutsSecondary} />
      <Route path="/condensed/boxed_layout" component={LayoutsBox} />
      <Route path="/condensed/rtl_layout" component={LayoutsRtl} />
      {/* END Layouts routes */}

      {/* START UIElements group routes */}
      <Route path="/condensed/color" component={UIElementsColor} />
      <Route path="/condensed/typography" component={UIElementstypography} />
      <Route path="/condensed/icons" component={UIElementsIcons} />
      <Route path="/condensed/buttons" component={UIElementsButtons} />
      <Route path="/condensed/notifications" component={UIElementsNotify} />
      <Route path="/condensed/modals" component={UIElementsModal} />
      <Route
        path="/condensed/progress"
        component={UIElementsProgressActivity}
      />
      <Route
        path="/condensed/tabs_accordian"
        component={UIElementsTabsAccordion}
      />
      <Route path="/condensed/sliders" component={UIElementsSliders} />
      <Route path="/condensed/tree_view" component={UIElementsTreeView} />
      <Route path="/condensed/nestables" component={UIElementsNestables} />
      {/* END UIElements routes */}

      {/* START Forms group routes */}
      <Route path="/condensed/form_elements" component={FormElement} />
      <Route path="/condensed/form_layouts" component={FormLayout} />
      <Route path="/condensed/form_wizard" component={FormWizard} />
      {/* END Forms routes */}

      <Route path="/condensed/cards" component={Cards} />
      <Route path="/condensed/views" component={Views} />

      {/* START Tables group routes */}
      <Route path="/condensed/basic_tables" component={TableBasic} />
      <Route path="/condensed/data_tables" component={TableData} />
      {/* END Tables routes */}

      {/* START Maps group routes */}
      <Route path="/condensed/google_map" component={MapGoogle} />
      <Route path="/condensed/vector_map" component={MapVector} />
      {/* END Maps routes */}

      <Route path="/condensed/charts" component={Chart} />

      {/* START Extra group routes */}
      <Route path="/condensed/extra/invoice" component={ExtraInvoice} />
      <Route path="/condensed/extra/404" component={Extra400} />
      <Route path="/condensed/extra/500" component={Extra500} />
      <Route path="/condensed/extra/blank_template" component={ExtraBlank} />
      <Route path="/condensed/extra/login" component={ExtraLogin} />
      <Route path="/condensed/extra/register" component={ExtraRegister} />
      <Route path="/condensed/extra/lock_screen" component={ExtraLockScreen} />
      <Route path="/condensed/extra/gallery" component={ExtraGallery} />
      <Route path="/condensed/extra/timeline" component={ExtraTimeLine} />
      {/* END Extra routes */}

      {/* START Menu Levels group routes */}
      <Route path="/condensed/levelOne" component={MenuLevelOne} />
      <Route path="/condensed/submenu" component={Submenu} />
      {/* END Menu Levels routes */}

      {(path.includes("/condensed") || path === "/") && <Search />}
    </div>
  );
};

export default withRouter(Condensed);
