import { Link } from "react-router-dom";
import "./Navbar.scss";
import Flag from "../../Assets/id.svg";
import Cart from "../Cart/Cart";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useState } from "react";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="wrapper">
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
          <Link to="/products/1" className="link">
            <p>Men</p>
          </Link>
          <Link to="/products/1" className="link">
            <p>Women</p>
          </Link>
          <Link to="/products/1" className="link">
            <p>Kids</p>
          </Link>
          <Link to="/products/1" className="link">
            <p>Batik</p>
          </Link>
        </div>
        <div className="center">
          <Link to="/" className="link">
            <h2>SHOPPRIZEING</h2>
          </Link>
        </div>
        <div className="right">
          <Link to="/products/1" className="link">
            <p>Homepage</p>
          </Link>
          <Link to="/products/1" className="link">
            <p>Stores</p>
          </Link>
          <Link to="/products/1" className="link">
            <p>Promo</p>
          </Link>
          <SearchOutlinedIcon />
          <div className="cart" onClick={() => setIsCartOpen(!isCartOpen)}>
            <ShoppingCartOutlinedIcon />
            <div className="circle">6</div>
          </div>
          <FavoriteBorderOutlinedIcon />
          <PersonOutlinedIcon />
        </div>
      </div>
      {isCartOpen ? <Cart /> : ""}
    </div>
  );
};

export default Navbar;
