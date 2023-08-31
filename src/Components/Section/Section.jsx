import "./Section.scss";
import Card from "../Card/Card";
import axios from "axios";
import { useState, useEffect } from "react";

const Section = ({ type }) => {
  const [datas, setDatas] = useState([]);
  const [ifShowMore, setIfShowMore] = useState(false);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_API_PIXABAY}&q=fashion&image_type=photo&per_page=15`
        );
        setDatas(res.data.hits);
        console.log(datas);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
          ? datas?.map((item) => <Card item={item} key={item.id} />)
          : datas
              ?.slice(0, 4)
              .map((item) => <Card item={item} key={item.id} />)}
      </div>
      <button className="showmore" onClick={() => setIfShowMore(!ifShowMore)}>
        Show more
      </button>
    </div>
  );
};

export default Section;
