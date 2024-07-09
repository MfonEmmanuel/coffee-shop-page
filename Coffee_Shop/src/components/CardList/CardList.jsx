/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Card } from "../Card";

export const CardList = ({
  className,
  cardText = "$ XX.XX",
  cardText1 = "Product Name",
  cardText2 = "Excepteur sint occaecat cup",
  cardText3 = "$ XX.XX",
  cardRectangle = "/img/rectangle-6-9.png",
  cardText4 = "Product Name",
  cardText5 = "Excepteur sint occaecat cup",
  cardText6 = "$ XX.XX",
  cardImg = "/img/rectangle-6-9.png",
  cardText7 = "Product Name",
  cardText8 = "Excepteur sint occaecat cup",
  cardRectangle1 = "/img/rectangle-6-9.png",
  cardDivClassName,
  cardText9 = "Product Name",
  cardText10 = "$ XX.XX",
  cardText11 = "Excepteur sint occaecat cup",
  cardText12 = "$ XX.XX",
  cardRectangle2 = "/img/rectangle-6-9.png",
  cardText13 = "Product Name",
  cardText14 = "Excepteur sint occaecat cup",
  cardText15 = "$ XX.XX",
  cardRectangle3 = "/img/rectangle-6-9.png",
  cardText16 = "Product Name",
  cardText17 = "Excepteur sint occaecat cup",
  cardRectangle4 = "/img/rectangle-6-9.png",
  cardRectangleClassName,
  cardRectangle5 = "/img/rectangle-6-9.png",
  cardRectangleClassNameOverride,
  cardRectangle6 = "/img/rectangle-6-9.png",
  cardImgClassName,
  cardRectangle7 = "/img/rectangle-6-9.png",
}) => {
  return (
    <div className={`inline-flex items-start gap-[38px] relative overflow-scroll ${className}`}>
      <Card rectangle={cardRectangle7} text={cardText1} text1={cardText2} text2={cardText} />
      <Card rectangle={cardRectangle} text={cardText4} text1={cardText5} text2={cardText3} />
      <Card rectangle={cardImg} text={cardText7} text1={cardText8} text2={cardText6} />
      <Card
        divClassName={cardDivClassName}
        rectangle={cardRectangle1}
        text={cardText9}
        text1={cardText11}
        text2={cardText10}
      />
      <Card rectangle={cardRectangle2} text={cardText13} text1={cardText14} text2={cardText12} />
      <Card rectangle={cardRectangle3} text={cardText16} text1={cardText17} text2={cardText15} />
      <Card
        rectangle={cardRectangle4}
        rectangleClassName={cardRectangleClassName}
        text="Product Name"
        text1="Excepteur sint occaecat cup"
        text2="$ XX.XX"
      />
      <Card
        rectangle={cardRectangle5}
        rectangleClassName={cardRectangleClassNameOverride}
        text="Product Name"
        text1="Excepteur sint occaecat cup"
        text2="$ XX.XX"
      />
      <Card
        rectangle={cardRectangle6}
        rectangleClassName={cardImgClassName}
        text="Product Name"
        text1="Excepteur sint occaecat cup"
        text2="$ XX.XX"
      />
    </div>
  );
};

CardList.propTypes = {
  cardText: PropTypes.string,
  cardText1: PropTypes.string,
  cardText2: PropTypes.string,
  cardText3: PropTypes.string,
  cardRectangle: PropTypes.string,
  cardText4: PropTypes.string,
  cardText5: PropTypes.string,
  cardText6: PropTypes.string,
  cardImg: PropTypes.string,
  cardText7: PropTypes.string,
  cardText8: PropTypes.string,
  cardRectangle1: PropTypes.string,
  cardText9: PropTypes.string,
  cardText10: PropTypes.string,
  cardText11: PropTypes.string,
  cardText12: PropTypes.string,
  cardRectangle2: PropTypes.string,
  cardText13: PropTypes.string,
  cardText14: PropTypes.string,
  cardText15: PropTypes.string,
  cardRectangle3: PropTypes.string,
  cardText16: PropTypes.string,
  cardText17: PropTypes.string,
  cardRectangle4: PropTypes.string,
  cardRectangle5: PropTypes.string,
  cardRectangle6: PropTypes.string,
  cardRectangle7: PropTypes.string,
};
