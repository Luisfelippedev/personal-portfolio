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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <CardProject project="devblog" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
        >
          <CardProject project="cacheredis" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
        >
          <CardProject project="spatialdata" />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
