import React from "react";
import "./Home.scss";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import Categories from "../../Components/Categories/Categories";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Section type="Featured" />
      <Categories />
      <Section type="Trending" />
    </div>
  );
};

export default Home;
