import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Project.module.scss";
const Project = () => {
  return (
    <section className={styles.sectionProjects}>
      <Container className={styles.container}>
        <h1 className={styles.titleProject}>Projects</h1>
        <div className={styles.row}>
          <Col xs={10} md={5} lg={4} className={styles.project}>
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
          <Col xs={10} md={5} lg={4} className={styles.project}>
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
          <Col xs={10} md={5} lg={4} className={styles.project}>
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
        </div>
      </Container>
    </section>
  );
};

export default Project;
