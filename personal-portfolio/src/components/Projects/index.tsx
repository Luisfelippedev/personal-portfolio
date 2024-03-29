"use client";

import styles from "./styles.module.scss";
import CardProject from "../CardProject";
import { Button } from "flowbite-react";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonBox}>
        <Button
          style={{
            cursor: "auto",
            pointerEvents: "none",
            backgroundColor: "rgba(0, 0, 0, 0.822)",
            height: 50,
            width: 150,
          }}
        >
          <img className={styles.iconClipe} src="/clipe.png" alt="icon" />
          <p className={styles.textButton}>Projetos</p>
        </Button>
      </div>

      <div className={styles.cardsContainer}>
        {" "}
        <CardProject privateStatus={true} star={true} project="nobullying" />
        <CardProject project="devblog" />
        <CardProject project="cacheredis" />
        <CardProject project="spatialdata" />
      </div>
    </div>
  );
};

export default Projects;
