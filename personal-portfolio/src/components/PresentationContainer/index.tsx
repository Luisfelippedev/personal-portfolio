"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "../Button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { Avatar } from "flowbite-react";

export const PresentationContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstBox}>
        <div className={styles.imageBox}>
          <div
            style={{
              width: "45%",
              height: "70%",
              borderRadius: "400px",
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "inherit",
                width: "100%",
                height: "100%",
                border: "3px solid white",
              }}
            >
              <Image
                src="/eu.jpeg"
                alt="Descrição da imagem"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          {/* <button className={styles.fixedButton}>
            <p className={styles.myButton}>Bem vindo</p>

            <div className={styles.imageAdeus}>
              <Image
                src="/adeus.png"
                alt="Descrição da imagem"
                layout="fill"
                objectFit="cover"
                style={{ marginLeft: 5 }}
              />
            </div>
          </button> */}
        </div>
      </div>
      <div className={styles.secondBox}>
        <p className={styles.text}>Luis Felippe</p>
        <p className={styles.subtitle}>Desenvolvedor de Sistemas</p>
      </div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={styles.lastBox}
      >
        <Link
          to="section-project"
          spy={true}
          smooth={true}
          duration={600} // Duração em milissegundos do scroll
          className={styles.buttonProjects}
        >
          <Button color="primary">
            <p className={styles.buttonText}>Projetos</p>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};
