import React, { useState } from "react";
import Label from "./Label";

const InputWithLabel = ({ className, label, type, icon, value, ...rest }) => {
  const [active, setActive] = useState(false);

  useState();
  return (
    <div>
      <div className="d-flex align-items-center">
        <Label className={value !== "" || active ? "fade" : ""}>{label}</Label>
        {icon && (
          <i
            className={`fa text-complete m-l-5" ${icon}`}
            style={{ marginLeft: "5px" }}
          ></i>
        )}
      </div>

      <input
        className={className}
        type={`${type}`}
        {...rest}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
    </div>
  );
};

export default InputWithLabel;
