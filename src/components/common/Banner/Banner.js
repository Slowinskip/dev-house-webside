import React from "react";
import styles from "./Banner.module.scss";
import { Col, Row } from "react-bootstrap";
const Banner = () => {
  return (
    <div className={styles.bannerDiv}>
      <Row className={styles.banner_row}>
        <Col xs={12} md={6} className={styles.banner_bg_1}>
          <h1 className=" ">Your place on earth</h1>
        </Col>
        <Col xs={12} md={6} className={styles.banner_bg_2}></Col>
      </Row>
    </div>
  );
};

export default Banner;
