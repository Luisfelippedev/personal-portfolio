import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "../Button";
import Link from "next/link";

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
          <button className={styles.fixedButton}>
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
          </button>
        </div>
      </div>

      <div className={styles.secondBox}>
        <p className={styles.text}>
          Desenvolvimento de soluções em software, aplicações e interfaces de
          usuário.
        </p>
      </div>

      <div className={styles.lastBox}>
        <Link href={"/#section-project"} className={styles.buttonProjects}>
          <Button color="secondary">
            <p className={styles.buttonText}>Projetos</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};
