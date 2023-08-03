import React from "react";
import { Col, Container } from "react-bootstrap";
import styles from "./Home.module.scss";
export const Home = () => {
  return (
    <section className={styles.homeSection}>
      <Container className={styles.container}>
        <Col className={styles.informationDiv}>
          <h1>
            <span className={styles.spanDev}>Dev</span>
            <span className={styles.spanHouse}>House</span> is a new and
            innovative player on the development market. See what we can offer
            you.
          </h1>
        </Col>
        <Col className={styles.bgTitle}>
          <h1 className={styles.devLogo}>
            Dev<span>House</span>
          </h1>
        </Col>
      </Container>
    </section>
  );
};
