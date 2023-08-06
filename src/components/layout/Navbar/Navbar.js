import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { BiExit } from "react-icons/bi";
const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

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
      <Row
        className={styles.navbarContainer}
        style={{
          flexDirection: scroll || width < 800 ? "row" : "column",
          justifyContent: scroll || width < 800 ? "space-between" : "",
          alignItems: scroll || width < 800 ? "center" : "",
          width: scroll || width < 800 ? "100%" : "auto",
          top: scroll || width < 800 ? "8%" : "3rem",
          left: scroll || width < 800 ? "51%" : "4%",
          transform: scroll || width < 800 ? "translate(-50%, -50%)" : "",
        }}
      >
        <Col>
          {" "}
          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={styles.devLogo}
          >
            Dev<span>House</span>
          </motion.h1>
        </Col>
        {width > 800 && !scroll ? (
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
        ) : (
          <div className={styles.mobileContainer}>
            <HiMenu
              onClick={() => setShowMenu(!showMenu)}
              className={styles.mobileMenuBtn}
            />
            <motion.div
              animate={{ x: showMenu ? -330 : 0, opacity: showMenu ? 1 : 0 }}
              transition={{ duration: 1 }}
              className={styles.mobileMenu}
            >
              {" "}
              <BiExit
                onClick={() => setShowMenu(!showMenu)}
                className={styles.mobileMenuBtn}
              />
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
            </motion.div>
          </div>
        )}
      </Row>{" "}
    </Container>
  );
};

export default Navbar;
