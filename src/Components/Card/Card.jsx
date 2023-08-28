import { Link } from "react-router-dom";
import "./Card.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Card = ({ item }) => {
  return (
    <div className="cards">
      <Link to="../product/1">
        <div className="imgs">
          <img src={item.img1} alt={item.title} className="img1" />
          <img src={item.img2} alt={item.title} className="img2" />
        </div>

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
      </Link>
    </div>
  );
};

export default Card;
