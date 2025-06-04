import styles from "./styles.module.scss";
import { TimeLine } from "../TimeLine";
import { Button } from "flowbite-react";

export const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutMeSection}>
        <Button
          style={{
            cursor: "auto",
            pointerEvents: "none",
            backgroundColor: "rgba(0, 0, 0, 0.822)",
            height: 50,
            width: 170,
            marginBottom: 20,
          }}
        >
          <img className={styles.iconInfo} src="/info.png" alt="icon" />
          <p className={styles.textButton}>Sobre mim</p>
        </Button>

        <p className={styles.textName}>Luis Felippe</p>
        <ul style={{ display: "flex", flexDirection: "column" }}>
          <li className={styles.textLi}>
            <img src="/seta-direita.png" alt="icon" />
            Desenvolvendo interfaces de usuário e APIs com Javascript/Typescript
            desde 2022
          </li>
          <li className={styles.textLi}>
            <img src="/seta-direita.png" alt="icon" />
            Pós-graduação Lato Sensu, Desenvolvimento Full Stack - Estácio
            (2024-O momento)
          </li>
          <li className={styles.textLi}>
            <img src="/seta-direita.png" alt="icon" />
            Análise e Desenvolvimento de Sistemas - IFPB (2021-2024)
          </li>
          <li className={styles.textLi}>
            <img src="/seta-direita.png" alt="icon" />
            Técnico em Informática - ECIT (2017-2019)
          </li>
          <li className={styles.textLi}>
            <img src="/seta-direita.png" alt="icon" />
            Interesse em desenvolvimento full-stack
          </li>
          {/* <li className={styles.textLi}>
            <img src="/seta-direita.png" alt="icon" />
            Aberto para oportunidades
          </li> */}
        </ul>
      </div>
      <div className={styles.timeLineSection}>
        <TimeLine />
      </div>
    </div>
  );
};
