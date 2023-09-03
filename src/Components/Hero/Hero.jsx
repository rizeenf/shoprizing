import React, { useState } from "react";
import "./Hero.scss";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardNewOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Hero = ({ products }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    currentImage === products.length - 1
      ? setCurrentImage(0)
      : setCurrentImage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    currentImage === 0
      ? setCurrentImage(products.length - 1)
      : setCurrentImage((prev) => prev - 1);
  };

  return (
    <div className="hero">
      <div
        className="wrapper"
        style={{
          transform: `translateX(-${currentImage * (products.length * 2)}vw)`,
        }}
      >
        {products.map((item) => (
          <img
            src={item.largeImageURL}
            key={item.id}
            alt="Image 1"
            title={item.tags}
          />
        ))}
      </div>
      <div className="toggle">
        <div className="arrow" onClick={handlePrevious}>
          <ArrowBackIosNewOutlinedIcon />
        </div>
        <div className="arrow" onClick={handleNext}>
          <ArrowForwardNewOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Hero;
