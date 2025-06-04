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
            width: 170,
          }}
        >
          <img className={styles.iconClipe} src="/clipe.png" alt="icon" />
          <p className={styles.textButton}>Projetos</p>
        </Button>
      </div>

      <div className={styles.cardsContainer}>
        {" "}
        <CardProject privateStatus star project="nobullying" />
        <CardProject star project="tridev" />
        <CardProject project="agendamentoChacara" />
        <CardProject privateStatus project="kerigma" />
        <CardProject project="personalPortfolio" />
      </div>
    </div>
  );
};

export default Projects;
