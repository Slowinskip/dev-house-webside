import React from "react";
import styles from "./Banner.module.scss";
import { Col } from "react-bootstrap";
import { delay, motion } from "framer-motion";

const Banner = ({ title }) => {
  return (
    <div className={styles.bannerContainer}>
      <Col className={styles.bannerBg_1}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 5 }}
          class={styles.bannerTitle}
        >
          {title}
        </motion.h1>
      </Col>
      <Col className={styles.bannerBg_2}></Col>
    </div>
  );
};

export default Banner;
