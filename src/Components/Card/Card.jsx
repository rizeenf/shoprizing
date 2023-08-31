import { Link } from "react-router-dom";
import "./Card.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Card = ({ item }) => {
  return (
    <div className="cards">
      <Link to={`../product/${item.id}`} className="link">
        <div className="imgs">
          <img src={item.webformatURL} alt={item.user} className="img1" />
          <img src={item?.userImageURL} className="img2" />
        </div>

        <p>{item.tags.toUpperCase()}</p>

        <div className="details">
          <div className="prices">
            <span>${item.collections} </span>
            <span>${item.comments} </span>
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
