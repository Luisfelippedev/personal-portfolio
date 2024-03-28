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
            backgroundColor: "rgb(165 243 252 / var(--tw-bg-opacity))",
            height: 50,
            width: 168,
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
            desde 2021
          </li>
          <li className={styles.textLi}>
            <img src="/seta-direita.png" alt="icon" />
            Análise e Desenvolvimento de Sistemas 6/6
          </li>
          <li className={styles.textLi}>
            <img src="/seta-direita.png" alt="icon" />
            Interesse em desenvolvimento full-stack
          </li>
          <li className={styles.textLi}>
            <img src="/seta-direita.png" alt="icon" />
            Buscando uma oportunidade para atuar como desenvolvedor
          </li>
        </ul>
      </div>
      <div className={styles.timeLineSection}>
        <TimeLine />
      </div>
    </div>
  );
};
