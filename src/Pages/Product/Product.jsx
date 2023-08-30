import React, { useState } from "react";
import "./Product.scss";

const Product = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2043592/pexels-photo-2043592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2043592/pexels-photo-2043592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="w-product">
      <div className="left">
        <div className="previewImage">
          <img
            src={images[0]}
            alt="Images"
            onClick={() => setCurrentImage(0)}
            className={currentImage === 0 ? "active" : ""}
          />
          <img
            src={images[1]}
            alt="Images"
            onClick={() => setCurrentImage(1)}
            className={currentImage === 1 ? "active" : ""}
          />
          <img
            src={images[2]}
            alt="Images"
            onClick={() => setCurrentImage(2)}
            className={currentImage === 2 ? "active" : ""}
          />
        </div>
        <img src={images[currentImage]} alt="" className="mainImg" />
      </div>
      <div className="right">
        <div className="title">
          <h2>Grey Woman's Coat</h2>
          <h1>$30</h1>
        </div>
        <div className="desc">
          <span>
            Offer: Professional tutoring services in math and science subjects.
            Experienced tutor with a proven track record of improving student
            grades. Flexible scheduling and affordable rates Professional
            tutoring services in math and science subjects. Experienced tutor
            with a proven track record of improving student grades. Flexible
            scheduling and affordable rates
          </span>
        </div>
        <div className="quantity">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <div className="addToCart">
          <button>+ CART</button>
        </div>
        <div className="details">
          <span>Vendor : UNIQLO</span>
          <span>Product : Skirt</span>
          <span>Tag : Skirt, Woman, Jeans</span>
          <span>About</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
