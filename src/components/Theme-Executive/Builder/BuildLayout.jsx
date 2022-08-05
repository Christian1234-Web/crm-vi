import React from "react";

const layout = ({
  className,
  children,
  dataAction,
  type,
  active,
  description,
  ...rest
}) => {
  return (
    <a
      className={`btn-toggle-layout fs-12 ${
        active ? "active" : ""
      } ${className}`}
      data-action={`${dataAction}`}
      {...rest}
    >
      {type === "HorizontalMenu" ? (
        <img
          alt="default-horizontal-menu"
          className="m-b-15"
          src={process.env.PUBLIC_URL + "/assets/img/demo/horizontal.png"}
          data-src={process.env.PUBLIC_URL + "/assets/img/demo/horizontal.png"}
          data-src-retina="assets/img/demo/horizontal_2x.png"
          width="126"
          height="95"
        />
      ) : null}
      {type === "HorizontalMenuSidebar" ? (
        <img
          alt="horizontal-menu-sidebar"
          className="m-b-15 "
          src={
            process.env.PUBLIC_URL + "/assets/img/demo/horizontal_secondary.png"
          }
          data-src={
            process.env.PUBLIC_URL + "/assets/img/demo/horizontal_secondary.png"
          }
          data-src-retina={
            process.env.PUBLIC_URL +
            "/assets/img/demo/horizontal_secondary_2x.png"
          }
          width="126"
          height="95"
        />
      ) : null}
      <br />
      <span className="text-dark m-t-5">{description}</span>
      {children}
    </a>
  );
};

export default layout;
