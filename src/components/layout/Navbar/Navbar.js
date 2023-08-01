import React from "react";
import styles from "./Navbar.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Container>
      <Row className={styles.navbarContainer}>
        <Col>
          {" "}
          <h1>
            Dev<span>House</span>
          </h1>
        </Col>
        <Col className={"" + styles.links_container}>
          <Link className={styles.links} to="/">
            Build with Us
          </Link>
          <Link className={styles.links} to="/">
            Develop with Us
          </Link>
          <Link className={styles.links} to="/">
            About
          </Link>
        </Col>
      </Row>{" "}
    </Container>
  );
};

export default Navbar;
