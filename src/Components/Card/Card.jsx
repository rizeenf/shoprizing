import { Link } from "react-router-dom";
import "./Card.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Card = ({ item }) => {
  return (
    <div className="cards">
      <Link to={`../product/${item.id}`} className="link">
        <div className="imgs">
          <img src={item.webformatURL} alt={item.user} className="img1" />
          {item?.userImageURL ? (
            <img src={item?.userImageURL} className="img2" />
          ) : (
            ""
          )}
        </div>

        <p>{item.tags.toUpperCase().slice(0, 25)}</p>

        <div className="details">
          <div className="prices">
            <span>${item.previewWidth} </span>
            <span>${item.previewHeight} </span>
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
