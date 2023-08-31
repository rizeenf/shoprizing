import React, { useEffect, useState } from "react";
import "./Products.scss";
import Card from "../../Components/Card/Card";
import axios from "axios";

const Products = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_API_PIXABAY}&q=fashion&image_type=photo`
        );
        setDatas(res.data.hits);
        console.log(datas);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // const products = [
  //   {
  //     id: 1,
  //     title: "Peaky blinder's Coat",
  //     img1: "https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     oldPrice: 52,
  //     newPrice: 45,
  //     newItem: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Red Woman's Coat",
  //     img1: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/1906877/pexels-photo-1906877.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  //     oldPrice: 42,
  //     newPrice: 35,
  //     newItem: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Grey Woman's Coat",
  //     img1: "https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/2043592/pexels-photo-2043592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     oldPrice: 33,
  //     newPrice: 30,
  //     newItem: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Red Woman's Coat",
  //     img1: "https://images.pexels.com/photos/3951783/pexels-photo-3951783.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/3951785/pexels-photo-3951785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     oldPrice: 58,
  //     newPrice: 49,
  //     newItem: true,
  //   },
  // ];
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
          {datas?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
