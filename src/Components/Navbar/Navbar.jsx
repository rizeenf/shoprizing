import { Link } from "react-router-dom";
import "./Navbar.scss";
import Flag from "../../Assets/id.svg";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="flag">
          <img src={Flag} alt="Flag" title="Country" />
          <ArrowDropDownOutlinedIcon />
        </div>
        <div className="currency">
          <span>USD</span>
          <ArrowDropDownOutlinedIcon />
        </div>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Batik</p>
      </div>
      <div className="center">
        <Link to="/">
          <a>SHOPPRIZEING</a>
        </Link>
      </div>
      <div className="right">
        <p>Homepage</p>
        <p>Stores</p>
        <p>Promo</p>
        <SearchOutlinedIcon />
        <div className="cart">
          <ShoppingCartOutlinedIcon />
          <div className="circle">6</div>
        </div>
        <FavoriteBorderOutlinedIcon />
        <PersonOutlinedIcon />
      </div>
    </div>
  );
};

export default Navbar;
