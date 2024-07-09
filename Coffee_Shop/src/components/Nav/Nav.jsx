/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Nav = ({ className, divClassName, text = "list item" }) => {
  return (
    <div className={`inline-flex items-center justify-center gap-2.5 p-2.5 relative ${className}`}>
      <div
        className={`relative w-fit mt-[-1.00px] font-body-body-21 font-[number:var(--body-body-21-font-weight)] text-[#ffffff] text-[length:var(--body-body-21-font-size)] tracking-[var(--body-body-21-letter-spacing)] leading-[var(--body-body-21-line-height)] [font-style:var(--body-body-21-font-style)] ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

Nav.propTypes = {
  text: PropTypes.string,
};
