import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import { IconContext } from "react-icons";
import { FaFolderOpen, FaFolder, FaRegFileAlt } from "react-icons/fa";

import PageContainer from "../../UIElements/Containers";
import PageBreadcrumb from "../../UIElements/Breadcrumb";
import PageScroll from "../../UIElements/PageScroll";
import Copyright from "../../ui/Footer/Copyright";
import { treeView, checkTree } from "./data";

import "react-checkbox-tree/lib/react-checkbox-tree.css";
import "font-awesome/css/font-awesome.min.css";
import "./style.css";

const content = ({ path }) => {
  const [checkedTreeViewOne, setCheckedTreeViewOne] = useState([]);
  const [expandedTreeViewOne, setExpandedTreeViewOne] = useState([
    "DocumentWithSomeChildren",
  ]);
  const [nodesTreeViewOne] = useState(treeView);

  const [checkedTreeViewTwo, setCheckedTreeViewTwo] = useState([]);
  const [expandedTreeViewTwo, setExpandedTreeViewTwo] = useState([
    "DocumentWithSomeChildren",
    "SubItem4.1",
    "SubItem4.2",
  ]);
  const [nodesTreeViewTwo] = useState(treeView);

  const [checkedCheckTree, setCheckedCheckTree] = useState(["Item2"]);
  const [expandedCheckTree, setExpandedCheckTree] = useState([
    "DocumentWithSomeChildren",
  ]);
  const [nodesCheckTree] = useState(checkTree);

  const icons = {
    parentClose: (
      <IconContext.Provider value={{ color: "#41AEF9" }}>
        <FaFolder />
      </IconContext.Provider>
    ),
    parentOpen: (
      <IconContext.Provider value={{ color: "#41AEF9" }}>
        <FaFolderOpen />
      </IconContext.Provider>
    ),
    leaf: (
      <IconContext.Provider value={{ color: "#9C9C9C" }}>
        <FaRegFileAlt />
      </IconContext.Provider>
    ),
  };

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content ">
        <div className="jumbotron" data-pages="parallax">
          <PageContainer
            className={
              path.includes("/executive") || path.includes("/casual")
                ? "container p-l-10"
                : " "
            }
          >
            <PageScroll>
              <PageBreadcrumb>
                <li className="breadcrumb-item">
                  <a href="javascript:void(0);">UI Elements</a>
                </li>
                <li className="breadcrumb-item active">Tree View</li>
              </PageBreadcrumb>
              <div className="row">
                <div className="col-xl-7 col-lg-6 ">
                  <div className="card card-transparent">
                    <div className="card-header ">
                      <div className="card-title">Getting started</div>
                    </div>
                    <div className="card-body">
                      <CheckboxTree
                        nodes={nodesTreeViewOne}
                        checked={checkedTreeViewOne}
                        expanded={expandedTreeViewOne}
                        onCheck={(checked) => setCheckedTreeViewOne(checked)}
                        onExpand={(expanded) =>
                          setExpandedTreeViewOne(expanded)
                        }
                        icons={icons}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 ">
                  <div className="card card-transparent">
                    <div className="card-body">
                      <h3 className="">Tree view</h3>
                      <p>
                        This is powered by react-checkbox-tree, most extensively
                        used tree view plugin which is easy use and customize,
                        for further more we have explained how to set up you
                        tree view on pages
                      </p>
                      <br />
                      <a
                        href="https://www.npmjs.com/package/react-checkbox-tree"
                        target="_blank"
                        className="btn btn-complete"
                      >
                        See Plugin
                      </a>
                      <p className="small hinted-text inline v-align-middle see-plugin">
                        see the plugin for
                        <br /> https://www.npmjs.com/package/react-checkbox-tree
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </PageScroll>
          </PageContainer>
        </div>

        <PageContainer
          className={
            path.includes("/executive") || path.includes("/casual")
              ? "container"
              : " "
          }
        >
          <div className="row">
            <div className="col-md-6">
              <div className="card card-default">
                <div className="card-header ">
                  <div className="card-title">Tree View</div>
                </div>
                <div className="card-body">
                  <p>
                    A simple tree styled to pages color palette, Please refer
                    the documentation for more details or react-checkbox-tree
                    documentation
                  </p>
                  <CheckboxTree
                    nodes={nodesTreeViewTwo}
                    checked={checkedTreeViewTwo}
                    expanded={expandedTreeViewTwo}
                    onCheck={(checked) => setCheckedTreeViewTwo(checked)}
                    onExpand={(expanded) => setExpandedTreeViewTwo(expanded)}
                    icons={icons}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-default">
                <div className="card-header ">
                  <div className="card-title">Check Tree</div>
                </div>
                <div className="card-body">
                  <p>
                    You can make all the items to checkbox or even mix them up
                    with radio controls, Please refer the documentation for more
                    details or react-checkbox-tree documentation
                  </p>
                  <CheckboxTree
                    nodes={nodesCheckTree}
                    checked={checkedCheckTree}
                    expanded={expandedCheckTree}
                    onCheck={(checked) => setCheckedCheckTree(checked)}
                    onExpand={(expanded) => setExpandedCheckTree(expanded)}
                    icons={icons}
                  />
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>

      {/* START COPYRIGHT */}
      <Copyright
        year={"2014"}
        brand={"REVOX"}
        reserved={"All rights reserved."}
        terms={"Terms of use"}
        policy={"Privacy Policy"}
      />
      {/* END COPYRIGHT */}
      {/* END PAGE CONTENT */}
    </div>
  );
};

export default content;
