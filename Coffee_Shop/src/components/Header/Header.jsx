/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Shopping3 } from "../../icons/Shopping3";

export const Header = ({ className }) => {
  return (
    <div
      className={`flex w-[428px] items-center justify-between px-[30px] py-[17px] relative bg-[#261200] ${className}`}
    >
      <img className="relative w-6 ml-[-2.00px]" alt="Frame" src="/img/frame-21.svg" />
      <div className="relative w-fit [font-family:'Gobold_Uplow-Regular',Helvetica] font-normal text-[#d05000] text-[29px] text-center tracking-[0] leading-[normal]">
        brewhut
      </div>
      <Shopping3 className="!relative !w-[50px] !h-[50px]" color="white" />
    </div>
  );
};
