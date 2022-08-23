import React, { useState, useEffect } from "react";

import Dashboard from "../components/Theme-Simple/Dashboard";
import Ticket from "../components/Theme-Simple/Ticket";
import Settings from "../components/Theme-Simple/Settings";

import Social from "../components/Social";
import Contact from "../components/Theme-Simple/Contact";


import CallLog from "../components/Theme-Simple/Call-Log";


import Email from "../components/Email";
import ComposeEmail from "../components/ComposeEmail";
import Cards from "../components/Card";
import Views from "../components/View";
import Chart from "../components/Chart";

import Calendar from "../components/Calendar/Basic";
import CalendarLang from "../components/Calendar/Languages";
import CalendarMonth from "../components/Calendar/Month";
import CalendarLazy from "../components/Calendar/Lazyload";
import CalendarDocs from "../components/Calendar/Documentation";

import Builder from "../components/Builder";

import LayoutsBox from "../components/Layouts/Box";
import LayoutsDefault from "../components/Layouts/Default";
import LayoutsRtl from "../components/Layouts/Rtl";
import LayoutsSecondary from "../components/Layouts/Secondary";

import UIElementsColor from "../components/Theme-Simple/Color";
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
import Landing from "../components/Landing";

import FormWizard from "../components/Forms/Wizard";

import TableBasic from "../components/Tables/Basic";
import TableData from "../components/Tables/Data";

import MapGoogle from "../components/Maps/GoogleMap";
import MapVector from "../components/Maps/VectorMap";

import ExtraInvoice from "../components/Extra/Invoice";
import Extra400 from "../components/Extra/404Page";
import Extra500 from "../components/Extra/500Page";
import ExtraBlank from "../components/Extra/BlankPage";
// import ExtraLogin from "../components/Extra/Login";
// import Landing from "../components/Extra/Landing";

import ExtraRegister from "../components/Extra/register";
import ExtraLockScreen from "../components/Extra/LockScreen";
import ExtraGallery from "../components/Extra/Gallery";
import ExtraTimeLine from "../components/Extra/TimeLine";

import MenuLevelOne from "../components/MenuLevel/LevelOne";
import Submenu from "../components/MenuLevel/LevelTwo/Submenu";

import Search from "../components/Theme-Simple/Search";
import Header from "../components/Theme-Simple/Header";
import Sidebar from "../components/Theme-Simple/SidebarSimple";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

const Simple = ({ location }) => {
  let path = location.pathname;
  const [toggleInboxHeader, setToggleInboxHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setToggleInboxHeader(false);
    });
    return () => window.removeEventListener("resize", null);
  });

  if (path.includes("/simple")) {
    require("../pages/scss/themes/simpleTheme/simple.scss");
    document.body.classList.remove("pace-done");
    document.body.classList.add("mac");
    document.body.classList.add("desktop");
    document.body.classList.add("js-focus-visible");
    document.body.classList.add("menu-unpinned");
    document.body.classList.add("simple");

    const { innerWidth: width, innerHeight: height } = window;
    width < 1200 && width > 991
      ? document.body.classList.remove("menu-pin")
      : document.body.classList.add("menu-pin");
  }

  if (path.includes("/cards")) {
    document.body.classList.add("cards-view-page");
  }
  else {
    document.body.classList.remove("cards-view-page");
  }

  return (
    <div className="h-100">

      {path.includes("/simple") &&
        !path.includes("/boxed_layout") &&
        !path.includes("/login") &&
        !path.includes("/landing") &&

        !path.includes("/register") &&
        !path.includes("/lock_screen") &&
        !path.includes("/404") &&
        !path.includes("*") &&
        !path.includes("/500") && <Sidebar location={location} />}

      {path.includes("/simple") &&
        !path.includes("/boxed_layout") &&
        !path.includes("/login") &&
        !path.includes("/landing") &&
        !path.includes("*") &&

        !path.includes("/register") &&
        !path.includes("/lock_screen") &&
        !path.includes("/404") &&
        !path.includes("*") &&
        !path.includes("/500") && (
          <Header
            location={location}
            inboxHeader={toggleInboxHeader}
            setInboxHeader={(value) => setToggleInboxHeader(value)}
          />
        )}

      <Route exact={true} path="/simple/" component={Dashboard} />
      {/* landing page */}
      {/* end of landing */}
      <Route path="/simple/dashboard" component={Dashboard} />
      <Route path="/simple/ticket" component={Ticket} />
      <Route path="/simple/settings" component={Settings} />

      <Route path="/simple/social" component={Social} />
      <Route path="/simple/contact" component={Contact} />

      <Route path="/simple/call-log" component={CallLog} />

      <Route
        path="/simple/email"
        render={() => (
          <Email inboxHeader={toggleInboxHeader} location={location} />
        )}
      />
      <Route
        path="/simple/compose_email"
        render={() => (
          <ComposeEmail inboxHeader={toggleInboxHeader} location={location} />
        )}
      />
      {/* START Calendar group routes */}
      <Route path="/simple/calendar/basic" component={Calendar} />
      <Route path="/simple/calendar/languages" component={CalendarLang} />
      <Route path="/simple/calendar/Month" component={CalendarMonth} />
      <Route path="/simple/calendar/lazyload" component={CalendarLazy} />
      <Route path="/simple/calendar_docs" component={CalendarDocs} />
      {/* END Calendar routes */}

      {/* START Builder route */}
      <Route path="/simple/builder" component={Builder} />
      {/* END builder route */}

      {/* START Layouts group routes */}
      <Route path="/simple/default_layout" component={LayoutsDefault} />
      <Route path="/simple/secondary_layout" component={LayoutsSecondary} />
      <Route path="/simple/boxed_layout" component={LayoutsBox} />
      <Route path="/simple/rtl_layout" component={LayoutsRtl} />
      {/* END Layouts routes */}

      {/* START UIElements group routes */}
      <Route path="/simple/color" component={UIElementsColor} />
      <Route path="/simple/typography" component={UIElementstypography} />
      <Route path="/simple/icons" component={UIElementsIcons} />
      <Route path="/simple/buttons" component={UIElementsButtons} />
      <Route path="/simple/notifications" component={UIElementsNotify} />
      <Route path="/simple/modals" component={UIElementsModal} />
      <Route path="/simple/progress" component={UIElementsProgressActivity} />
      <Route
        path="/simple/tabs_accordian"
        component={UIElementsTabsAccordion}
      />
      <Route path="/simple/sliders" component={UIElementsSliders} />
      <Route path="/simple/tree_view" component={UIElementsTreeView} />
      <Route path="/simple/nestables" component={UIElementsNestables} />
      {/* END UIElements routes */}

      {/* START Forms group routes */}
      <Route path="/simple/form_elements" component={FormElement} />
      <Route path="/simple/form_layouts" component={FormLayout} />
      <Route path="/simple/landing" component={Landing} />

      <Route path="/simple/form_wizard" component={FormWizard} />
      {/* END Forms routes */}

      <Route path="/simple/cards" component={Cards} />
      <Route path="/simple/views" component={Views} />

      {/* START Tables group routes */}
      <Route path="/simple/basic_tables" component={TableBasic} />
      <Route path="/simple/data_tables" component={TableData} />
      {/* END Tables routes */}

      {/* START Maps group routes */}
      <Route path="/simple/google_map" component={MapGoogle} />
      <Route path="/simple/vector_map" component={MapVector} />
      {/* END Maps routes */}

      <Route path="/simple/charts" component={Chart} />

      {/* START Extra group routes */}
      <Route path="/simple/extra/invoice" component={ExtraInvoice} />
      <Route path="/simple/extra/404" component={Extra400} />

      <Route path="/simple/extra/500" component={Extra500} />
      <Route path="/simple/extra/blank_template" component={ExtraBlank} />
      {/* <Route path="/simple/extra/login" component={ExtraLogin} /> */}


      <Route path="/simple/extra/register" component={ExtraRegister} />
      {/* <Route path="*" component={Extra400} /> */}

      <Route path="/simple/extra/lock_screen" component={ExtraLockScreen} />
      <Route path="/simple/extra/gallery" component={ExtraGallery} />
      <Route path="/simple/extra/timeline" component={ExtraTimeLine} />
      {/* END Extra routes */}

      {/* START Menu Levels group routes */}
      <Route path="/simple/levelOne" component={MenuLevelOne} />
      <Route path="/simple/submenu" component={Submenu} />
      {/* END Menu Levels routes */}

      {/* <Route path="/simpledocs" component={}/>
        <Route path="/simplechange_log" component={}/> */}

      {/* {path.includes('/simple') && <Quickview />} */}
      {/* <Route path="*" component={Extra400} exact /> */}

      {path.includes(`/simple`) && !path.includes("/boxed_layout") && (
        <Search />
      )}

    </div>
  );
};

export default withRouter(Simple);
