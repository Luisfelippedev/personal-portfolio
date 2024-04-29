"use client";

import { useState } from "react";
import { Button } from "../Button";
import styles from "./styles.module.scss";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    // Seleciona o elemento de texto (seu endereço de e-mail)
    const emailElement: any = document.querySelector("." + styles.text);

    // Cria um elemento de área de texto temporário
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = emailElement.textContent;

    // Adiciona o elemento de área de texto à página
    document.body.appendChild(tempTextArea);

    // Seleciona e copia o texto na área de texto temporária
    tempTextArea.select();
    document.execCommand("copy");

    // Remove o elemento de área de texto temporário
    document.body.removeChild(tempTextArea);

    // Atualiza o estado para indicar que o texto foi copiado
    setIsCopied(true);

    // Reseta o estado após alguns segundos (3000 milissegundos = 3 segundos)
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={styles.navbar}
    >
      <div className={styles.firstBox}>
        <div className={`${styles.emailIcon} ${isCopied ? styles.copied : ""}`}>
          <div onClick={handleCopyClick}>
            <a
              style={{ cursor: "pointer", whiteSpace: "nowrap" }}
              className={styles.text}
            >
              {isCopied ? "E-mail Copiado!" : "felippe.luisdev@gmail.com"}
            </a>
          </div>

          <div
            style={{ cursor: "pointer" }}
            className={styles.copyIcon}
            onClick={handleCopyClick}
          >
            <ContentCopyIcon style={{ height: "100%" }} />
          </div>
        </div>
        <Link href="Profile.pdf" target="_blank">
          <div className={styles.buttonCV}>
            <Button color="primary">CV</Button>
          </div>
        </Link>
      </div>

      <div className={styles.lastBox}>
        <a
          href="https://www.linkedin.com/in/luisfelippedev/"
          target="_blank"
          className={styles.textLink}
        >
          LinkedIn
        </a>
        <p className={styles.text}>/</p>
        <a
          href="https://github.com/Luisfelippedev"
          target="_blank"
          className={styles.textLink}
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};
