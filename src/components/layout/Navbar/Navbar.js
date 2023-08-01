import React from "react";
import styles from "./Navbar.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  };
  const item = {
    hidden: { x: 200, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Container>
      <Row className={styles.navbarContainer}>
        <Col>
          {" "}
          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Dev<span>House</span>
          </motion.h1>
        </Col>
        <motion.Col
          variants={container}
          initial="hidden"
          animate="show"
          className={"" + styles.links_container}
        >
          <motion.li variants={item}>
            <Link variants={item} className={styles.links} href="/">
              Build with Us
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link className={styles.links} href="/">
              Develop with Us
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link variants={item} className={styles.links} href="/">
              About
            </Link>
          </motion.li>
        </motion.Col>
      </Row>{" "}
    </Container>
  );
};

export default Navbar;
