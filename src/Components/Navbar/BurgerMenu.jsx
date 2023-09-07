import "./BurgerMenu.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const BurgerMenu = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="bwrapper">
      <label
        htmlFor="checked"
        className="burger"
        onClick={() => setChecked(!checked)}
      >
        <input type="checkbox" name="checked" id="checked" value={checked} />
      </label>
      <div className="menu">
        <Link to="/products/men" className="link">
          <p>Men</p>
        </Link>
        <Link to="/products/women" className="link">
          <p>Women</p>
        </Link>
        <Link to="/products/kids" className="link">
          <p>Kids</p>
        </Link>
        <Link to="/products/batik" className="link">
          <p>Batik</p>
        </Link>
        <Link to="../" className="link">
          <p>Profil</p>
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
