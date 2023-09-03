import React, { useState, useEffect, Suspense, lazy } from "react";
import "./Home.scss";
import axios from "axios";

const Hero = lazy(() => import("../../Components/Hero/Hero"));
const Section = lazy(() => import("../../Components/Section/Section"));
const Categories = lazy(() => import("../../Components/Categories/Categories"));

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_API_PIXABAY}&q=suit&image_type=photo&order=latest`
        );

        setProducts(res.data.hits);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <Suspense fallback={<div>Loading..</div>}>
        <Hero products={products} />
        <Section type="Featured" products={products} />
        <Categories products={products} />
        <Section type="Trending" products={products} />
      </Suspense>
    </div>
  );
};

export default Home;
