import React, { useState } from "react";
import "./Hero.scss";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardNewOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const datas = [
    "https://images.pexels.com/photos/2709563/pexels-photo-2709563.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/1126935/pexels-photo-1126935.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/2702800/pexels-photo-2702800.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];

  const handleNext = () => {
    currentImage === datas.length - 1
      ? setCurrentImage(0)
      : setCurrentImage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    currentImage === 0
      ? setCurrentImage(datas.length - 1)
      : setCurrentImage((prev) => prev - 1);
  };

  return (
    <div className="hero">
      <div
        className="wrapper"
        style={{
          transform: `translateX(-${currentImage * 100}vw)`,
        }}
      >
        <img src={datas[0]} alt="Image 1" title="Man's Suit" />
        <img src={datas[1]} alt="Image 1" title="Woman's Shirt" />
        <img src={datas[2]} alt="Image 1" title="Woman's Scarf" />
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
