import React, { Suspense, lazy, useEffect, useState } from "react";
import "./Products.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const Card = lazy(() => import("../../Components/Card/Card"));

const Products = () => {
  const [products, setProducts] = useState([]);
  const catId = useParams().cat;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_API_PIXABAY}&q=${catId}&image_type=photo&order=latest`
        );
        setProducts(res.data.hits);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [catId]);

  return (
    <div className="w-products">
      <div className="left">
        <div className="filter">
          <h3>Product Categories</h3>
          <div className="input">
            <input type="checkbox" name="1" id="1" />
            <label htmlFor="1">Shirt</label>
          </div>
          <div className="input">
            <input type="checkbox" name="2" id="2" />
            <label htmlFor="2">Pants</label>
          </div>
          <div className="input">
            <input type="checkbox" name="3" id="3" />
            <label htmlFor="3">Accessories</label>
          </div>
          <div className="input">
            <input type="checkbox" name="4" id="4" />
            <label htmlFor="4">Jacket</label>
          </div>
        </div>
        <div className="filter">
          <h3>Filter by Price</h3>
          <div className="input">
            <span>0</span>
            <input type="range" name="price" id="price" min="0" max="1000" />
            <span>1000</span>
          </div>
        </div>
        <div className="filter">
          <h3>Sort by</h3>
          <div className="input">
            <input type="radio" name="sort" id="asc" />
            <label htmlFor="asc">Lowest prices</label>
          </div>
          <div className="input">
            <input type="radio" name="sort" id="desc" />
            <label htmlFor="desc">Highest prices</label>
          </div>
        </div>
        <span>Show more</span>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="listProducts">
          <Suspense fallback={<div>Loading..</div>}>
            {products?.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Products;
