import React, { useState } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import "./styles.css";

const Slider = ({
  toolTips,
  start,
  min,
  max,
  connect,
  behaviour,
  margin = 0,
  id,
  orientation = "horizontal",
  showValue = false,
  className,
  children,
  ...rest
}) => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <React.Fragment>
      <Nouislider
        id={id}
        range={{ min: min, max: max }}
        start={start}
        behaviour={behaviour}
        margin={margin}
        connect={connect}
        tooltips={toolTips}
        orientation={orientation}
        {...rest}
        onUpdate={(value) => setSliderValue(value[0])}
      />
      {showValue ? (
        <div id="slider-limit-value-min" style={{ marginTop: "10px" }}>
          {sliderValue}
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Slider;
