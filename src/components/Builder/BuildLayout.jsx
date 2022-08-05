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
      {type === "DividedHeader" ? (
        <img
          alt="Menu divided icon"
          className="m-b-15"
          src={
            process.env.PUBLIC_URL + "/assets/img/demo/menu_divided_con_2.png"
          }
          data-src={
            process.env.PUBLIC_URL + "/assets/img/demo/menu_divided_con.png"
          }
          data-src-retina="assets/img/demo/menu_divided_con_2x.png"
          width="126"
          height="95"
        />
      ) : null}
      {type === "FullWidthHeader" ? (
        <img
          alt="Full header icon"
          className="m-b-15 "
          src={
            process.env.PUBLIC_URL + "/assets/img/demo/full_header_con_2.png"
          }
          data-src-retina={
            process.env.PUBLIC_URL + "/assets/img/demo/full_header_con_2x.png"
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
