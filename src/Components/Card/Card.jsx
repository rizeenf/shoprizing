import React from "react";
import "./Card.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Card = ({ item }) => {
  return (
    <div className="cards">
      <img src={item.img1} alt="" />
      <p>{item.title}</p>
      <div className="details">
        <div className="prices">
          <span>${item.oldPrice} </span>
          <span>${item.newPrice} </span>
        </div>
        <div className="addToCart">
          <span>ADD</span>
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Card;