import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="wrapper">
        <div className="col">
          <div className="item">
            <Link to="../products/1">
              <img
                src="https://images.pexels.com/photos/847414/pexels-photo-847414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Link>
          </div>
          <div className="item">
            <Link to="../products/2">
              <img
                src="https://images.pexels.com/photos/2146344/pexels-photo-2146344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="item">
            <Link to="../products/3">
              <img
                src="https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="item">
            <div className="item">
              <Link to="../products/4">
                <img
                  src="https://images.pexels.com/photos/1035673/pexels-photo-1035673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </Link>
            </div>
            <div className="item">
              <Link to="../products/5">
                <img
                  src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="item">
            <Link to="../products/6">
              <img
                src="https://images.pexels.com/photos/842539/pexels-photo-842539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
