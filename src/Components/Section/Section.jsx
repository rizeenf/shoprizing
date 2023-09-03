import "./Section.scss";
import Card from "../Card/Card";
import axios from "axios";
import { useState, useEffect, lazy, Suspense } from "react";

const Section = ({ type, products }) => {
  const [ifShowMore, setIfShowMore] = useState(false);

  return (
    <div className={`sections show${ifShowMore}`}>
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
        {ifShowMore
          ? products
              ?.slice(0, 15)
              .map((item) => <Card item={item} key={item.id} />)
          : products
              ?.slice(0, 4)
              .map((item) => <Card item={item} key={item.id} />)}
      </div>

      <button className="showmore" onClick={() => setIfShowMore(!ifShowMore)}>
        {ifShowMore ? "Show less" : "Show more"}
      </button>
    </div>
  );
};

export default Section;
