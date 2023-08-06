import React from "react";
import { Container } from "react-bootstrap";
import styles from "./BuildInformation.module.scss";
const BuildInformation = () => {
  const images = [
    {
      image: "build1.webp",
      disc: "Entrust us with your dreams. Our team of qualified designers will create the house of your dreams. All the latest functionalities will be used to make your time at home more pleasant.",
    },
    {
      image: "build2.jpg",
      disc: "You dont have to worry about extended waiting times for materials. We have large warehouses that we keep replenishing so that we can start construction right after the project is approved!",
    },
    {
      image: "build5.jpg",
      disc: `We do not accept half measures or compromise on the quality of materials. When building a house, we respond to safety concerns, so you can be sure that all elements are of the highest quality.`,
    },

    {
      image: "build3.jpg",
      disc: `
    Thanks to the use of the latest techniques in laying the floor, we have seen an unparalleled increase in bluntness in the construction of houses. During two days, we are able to erect the entire floor, including pouring the ceiling.`,
    },
    {
      image: "build4.jpg",
      disc: `
    The technique given earlier came with us straight from America, where we have been implementing our projects in recent years. Careful observations show that the quality of construction does not decrease with the increase in the pace of construction.`,
    },
  ];

  function Image(id, disc) {
    return (
      <div className={styles.buildSection}>
        <div>
          <img
            className={styles.buildSection_img}
            src={`./images/${id}`}
            alt="img"
          ></img>
        </div>
        <p className={styles.buildSection_disc}>{disc}</p>
      </div>
    );
  }
  return (
    <section>
      <Container className={styles.containerBuild}>
        {images.map((i) => Image(i.image, i.disc))}
      </Container>
    </section>
  );
};

export default BuildInformation;
