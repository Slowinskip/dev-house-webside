import React from "react";
import { Col, Container } from "react-bootstrap";
import styles from "./Project.module.scss";
import { motion } from "framer-motion";

const Project = () => {
  const projectVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <section className={styles.sectionProjects}>
      <Container className={styles.container}>
        <h1 className={styles.titleProject}>Original house designs</h1>
        <motion.div
          variants={projectVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          className={styles.row}
        >
          {" "}
          <Col xs={10} md={5} lg={4} className={styles.project}>
            {" "}
            <img
              className={styles.project_img}
              alt="img"
              src="./images/house1.webp"
            ></img>
            <p className={styles.project_disc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              suscipit lobortis risus, in facilisis magna.
            </p>{" "}
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
        </motion.div>
      </Container>
    </section>
  );
};

export default Project;
