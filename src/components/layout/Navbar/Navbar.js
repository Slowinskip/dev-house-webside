import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FiMenu } from "react-icons/fi";
import { Modal } from "react-bootstrap";
const Navbar = () => {
  const [width, setWidth] = useState(window.window.innerWidth);
  const [modalOpen, setModalOpen] = useState(false);

  window.addEventListener("resize", () => {
    setWidth(window.window.innerWidth);
  });

  return (
    <div className={styles.navbar}>
      <a href="/">
        {" "}
        <img
          className={styles.navbar_logo}
          alt="img"
          src="./images/loogo.jpg"
        ></img>
      </a>
      {width > 700 ? (
        <ul className={styles.menuList}>
          <li>
            <a href="/" className={styles.menu_link}>
              Build with us
            </a>
          </li>

          <li>
            <a href="/" className={styles.menu_link}>
              Renovate with us
            </a>
          </li>

          <li>
            <a href="/" className={styles.menu_link}>
              About us
            </a>
          </li>
        </ul>
      ) : (
        <>
          <button
            onClick={() => setModalOpen(true)}
            className={styles.mobileBtn}
          >
            <FiMenu className={styles.mobileBtn_icon} />
          </button>
          <Modal
            show={modalOpen}
            onHide={() => setModalOpen(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Dev House
              </Modal.Title>
            </Modal.Header>
            <Modal.Body></Modal.Body>
          </Modal>{" "}
        </>
      )}
    </div>
  );
};

export default Navbar;
