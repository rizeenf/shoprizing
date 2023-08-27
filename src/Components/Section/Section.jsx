import React from "react";
import "./Section.scss";
import Card from "../Card/Card";

const Section = ({ type }) => {
  const products = [
    {
      id: 1,
      title: "Peaky blinder's Coat",
      img1: "https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=1600",
      oldPrice: 52,
      newPrice: 45,
      newItem: true,
    },
    {
      id: 2,
      title: "Red Woman's Coat",
      img1: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1906877/pexels-photo-1906877.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      oldPrice: 42,
      newPrice: 35,
      newItem: false,
    },
    {
      id: 3,
      title: "Grey Woman's Coat",
      img1: "https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/2043592/pexels-photo-2043592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldPrice: 33,
      newPrice: 30,
      newItem: false,
    },
    {
      id: 4,
      title: "Red Woman's Coat",
      img1: "https://images.pexels.com/photos/3951783/pexels-photo-3951783.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/3951785/pexels-photo-3951785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      oldPrice: 58,
      newPrice: 49,
      newItem: true,
    },
  ];

  return (
    <div className="sections">
      <div className="top">
        <h2>{type} Products</h2>
        <p>
          Professional tutoring services in math and science subjects.
          Experienced tutor with a proven track record of improving student
          grades. Flexible scheduling and affordable rates.Vintage vinyl records
          collection - various genres from the '60s to '90s. Well-preserved and
          in excellent condition. Price varies per record or discounted for the
          whole collection.
        </p>
      </div>
      <div className="bottom">
        {products.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Section;
