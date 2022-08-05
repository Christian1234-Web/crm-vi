import React, { useState } from "react";

import Dashboard from "../components/Theme-Executive/Dashboard";
import Social from "../components/Social";
import Cards from "../components/Card";
import Views from "../components/View";
import Chart from "../components/Chart";

import Builder from "../components/Theme-Executive/Builder";

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

import Header from "../components/Theme-Executive/Header";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Search from "../components/Theme-Executive/Search";

const Executive = ({ location }) => {
  const [mobileSidebarToggle, setMobileSidebarToggle] = useState(false);
  let path = location.pathname;

  if (path.includes("/executive")) {
    document.body.classList.add("executive");
    require("../pages/scss/themes/condensed/condensed.scss");
  }

  if (path.includes("/cards")) {
    document.body.classList.add("cards-view-page");
  }
  else{
	document.body.classList.remove("cards-view-page");
  }

  return (
    <div className="h-100">
      <div
        className="horizontal-menu-backdrop"
        style={
          mobileSidebarToggle
            ? { display: "block", zIndex: 10 }
            : { display: "none" }
        }
      ></div>
      {path.includes("/executive") &&
        !path.includes("/boxed_layout") &&
        !path.includes("/login") &&
        !path.includes("/register") &&
        !path.includes("/lock_screen") &&
        !path.includes("/404") &&
        !path.includes("/500") && (
          <Header
            location={location}
            openMobileToggle={(value) => setMobileSidebarToggle(value)}
          />
        )}

      <Route exact={true} path="/executive" component={Dashboard} />
      <Route path="/executive/dashboard" component={Dashboard} />
      <Route path="/executive/social" component={Social} />

      {/* START Builder route */}
      <Route path="/executive/builder" component={Builder} />
      {/* END builder route */}

      {/* START UIElements group routes */}
      <Route path="/executive/color" component={UIElementsColor} />
      <Route path="/executive/typography" component={UIElementstypography} />
      <Route path="/executive/icons" component={UIElementsIcons} />
      <Route path="/executive/buttons" component={UIElementsButtons} />
      <Route path="/executive/notifications" component={UIElementsNotify} />
      <Route path="/executive/modals" component={UIElementsModal} />
      <Route
        path="/executive/progress"
        component={UIElementsProgressActivity}
      />
      <Route
        path="/executive/tabs_accordian"
        component={UIElementsTabsAccordion}
      />
      <Route path="/executive/sliders" component={UIElementsSliders} />
      <Route path="/executive/tree_view" component={UIElementsTreeView} />
      <Route path="/executive/nestables" component={UIElementsNestables} />
      {/* END UIElements routes */}

      {/* START Forms group routes */}
      <Route path="/executive/form_elements" component={FormElement} />
      <Route path="/executive/form_layouts" component={FormLayout} />
      <Route path="/executive/form_wizard" component={FormWizard} />
      {/* END Forms routes */}

      <Route path="/executive/cards" component={Cards} />
      <Route path="/executive/views" component={Views} />

      {/* START Tables group routes */}
      <Route path="/executive/basic_tables" component={TableBasic} />
      <Route path="/executive/data_tables" component={TableData} />
      {/* END Tables routes */}

      {/* START Maps group routes */}
      <Route path="/executive/google_map" component={MapGoogle} />
      <Route path="/executive/vector_map" component={MapVector} />
      {/* END Maps routes */}

      <Route path="/executive/charts" component={Chart} />

      {/* START Extra group routes */}
      <Route path="/executive/extra/invoice" component={ExtraInvoice} />
      <Route path="/executive/extra/404" component={Extra400} />
      <Route path="/executive/extra/500" component={Extra500} />
      <Route path="/executive/extra/blank_template" component={ExtraBlank} />
      <Route path="/executive/extra/login" component={ExtraLogin} />
      <Route path="/executive/extra/register" component={ExtraRegister} />
      <Route path="/executive/extra/lock_screen" component={ExtraLockScreen} />
      <Route path="/executive/extra/gallery" component={ExtraGallery} />
      <Route path="/executive/extra/timeline" component={ExtraTimeLine} />
      {/* END Extra routes */}

      {/* START Menu Levels group routes */}
      <Route path="/executive/levelOne" component={MenuLevelOne} />
      <Route path="/executive/submenu" component={Submenu} />
      {/* END Menu Levels routes */}

      {path.includes("/executive") && <Search />}
    </div>
  );
};

export default withRouter(Executive);
