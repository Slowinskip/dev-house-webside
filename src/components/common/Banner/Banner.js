import React from "react";
import styles from "./Banner.module.scss";
import { Col, Row } from "react-bootstrap";
const Banner = () => {
  return (
    <div className={styles.bannerDiv}>
      <Row className={styles.banner_row}>
        <Col xs={12} md={6} className={styles.banner_bg_1}>
          <div>
            <h1>Dev House</h1>
            <h1>Your place on earth</h1>
          </div>
        </Col>
        <Col xs={12} md={6} className={styles.banner_bg_2}>
          1
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
