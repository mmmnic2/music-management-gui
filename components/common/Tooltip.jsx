"use client";
import React, { useRef, useState, useEffect } from "react";

const Tooltip = ({ content, children }) => {
  const tooltipRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState({});

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible && tooltipRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();

      let newStyle = {
        bottom: "100%",
        left: "50%",
        transform: "translateX(-50%)",
      };

      if (tooltipRect.right > bodyRect.right) {
        console.log("right");
        newStyle.left = "100%";
        newStyle.transform = "translateX(-100%)"
        console.log(newStyle);
      } else if (tooltipRect.left < bodyRect.left) {
        console.log("left");
        newStyle.left = "0";
        newStyle.transform = "translateX(0)";
      }

      setTooltipStyle(newStyle);
    }
  }, [isVisible]);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}

      {isVisible && (
        <div
          ref={tooltipRef}
          className="absolute mb-2 w-max px-4 py-2 bg-gray-700 text-white text-sm rounded-md shadow-md"
          style={tooltipStyle}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
