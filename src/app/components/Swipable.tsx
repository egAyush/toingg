"use client";

import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Feature1 from "./feature/Feature1";
import Feature2 from "./feature/Feature2";
import Feature3 from "./feature/Feature3";

const Swipable = () => {
  const [index, setIndex] = useState(0);
  return (
    <SwipeableViews
      className="w-[300px] h-[500px] mt-[20px]"
      enableMouseEvents
      index={0}
    >
      <Feature1 />
      <Feature2 />
      <Feature3 />
    </SwipeableViews>
  );
};

export default Swipable;
