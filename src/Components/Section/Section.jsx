import React from "react";
import "./Section.scss";
import Card from "../Card/Card";

const Section = ({ type }) => {
  return (
    <div className="section">
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
        <Card />
      </div>
    </div>
  );
};

export default Section;
