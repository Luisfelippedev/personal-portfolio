"use client";

import styles from "./styles.module.scss";
import { PiHandshakeThin } from "react-icons/pi";
import { Button } from "../Button";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";

const TellMeSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tellMeSection}>
        <motion.div
          whileInView={{ rotateY: 360 }} // Animação de rotação em torno do eixo Y
          transition={{ duration: 0.7, ease: "linear" }}
          className={styles.circleContainer}
        >
          <PiHandshakeThin size="50%" />
        </motion.div>
        <p className={styles.text}>Entre em contato comigo!</p>
        <div className={styles.buttonsContainer}>
          <a
            href="mailto:felippe.luisdev@gmail.com"
            rel="noopener noreferrer"
            target="blank"
            className={styles.buttonEmail}
          >
            <Button color="primary">
              <MdOutlineEmail size="20%" className={styles.emailIcon} />
              E-mail
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/luis-felippe-67b033210/"
            target="blank"
            className={styles.buttonLinkedin}
          >
            <Button color="primary">
              <CiLinkedin
                size="23%"
                className={styles.linkedinIcon}
              />
              LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TellMeSection;
