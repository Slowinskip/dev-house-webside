import React from "react";
import styles from "./Home.module.scss";
import Banner from "../../common/Banner/Banner";
import { Navbar } from "react-bootstrap";
const Home = () => {
  return (
    <Banner>
      {" "}
      <Navbar />
    </Banner>
  );
};

export default Home;
