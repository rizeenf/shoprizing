import React from "react";
import "./Home.scss";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";

const Home = () => {
  return (
    <div>
      <Hero />
      <Section type="Featured" />
      <Section type="Trending" />
    </div>
  );
};

export default Home;
