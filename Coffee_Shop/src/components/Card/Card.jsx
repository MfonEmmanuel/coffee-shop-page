/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Card = ({
  text = "Product Name",
  text1 = "Excepteur sint occaecat cup",
  text2 = "$ XX.XX",
  rectangle = "/img/rectangle-6-9.png",
  divClassName,
  rectangleClassName,
}) => {
  return (
    <div className="flex flex-col w-48 items-center justify-center gap-2.5 relative rounded-[20px]">
      <img
        className={`relative w-[188px] h-[283px] object-cover ${rectangleClassName}`}
        alt="Rectangle"
        src={rectangle}
      />
      <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-semi-semi-bold-20 font-[number:var(--semi-semi-bold-20-font-weight)] text-[#1f1f1f] text-[length:var(--semi-semi-bold-20-font-size)] text-center tracking-[var(--semi-semi-bold-20-letter-spacing)] leading-[var(--semi-semi-bold-20-line-height)] [font-style:var(--semi-semi-bold-20-font-style)]">
            {text}
          </div>
        </div>
        <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
          <div
            className={`relative self-stretch w-[173px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)] ${divClassName}`}
          >
            {text1}
          </div>
        </div>
        <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative self-stretch w-[52px] mt-[-1.00px] font-body-body-22 font-[number:var(--body-body-22-font-weight)] text-[#1f1f1f] text-[length:var(--body-body-22-font-size)] text-center tracking-[var(--body-body-22-letter-spacing)] leading-[var(--body-body-22-line-height)] [font-style:var(--body-body-22-font-style)]">
            {text2}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rectangle: PropTypes.string,
};
