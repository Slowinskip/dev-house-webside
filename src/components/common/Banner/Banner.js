import React from "react";
import styles from "./Banner.module.scss";
import { Col } from "react-bootstrap";
const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <Col className={styles.bannerBg_1}></Col>
      <Col className={styles.bannerBg_2}></Col>
    </div>
  );
};

export default Banner;
