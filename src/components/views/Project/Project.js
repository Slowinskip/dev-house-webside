import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Project.module.scss";
const Project = () => {
  return (
    <section className={styles.sectionProjects}>
      <Container>
        <Row className={styles.row}>
          <Col className={styles.project}>
            <img
              className={styles.project_img}
              alt="img"
              src="./images/house1.webp"
            ></img>
            <p className={styles.project_disc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              suscipit lobortis risus, in facilisis magna.
            </p>
          </Col>
          <Col className={styles.project}>
            {" "}
            <img
              className={styles.project_img}
              alt="img"
              src="./images/house2.jpg"
            ></img>{" "}
            <p className={styles.project_disc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              suscipit lobortis risus, in facilisis magna.
            </p>
          </Col>
          <Col className={styles.project}>
            {" "}
            <img
              className={styles.project_img}
              alt="img"
              src="./images/house3.webp"
            ></img>{" "}
            <p className={styles.project_disc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              suscipit lobortis risus, in facilisis magna.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Project;
