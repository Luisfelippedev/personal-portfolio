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
            color: "rgba(0, 0, 0, 0.822)",
          }}
        >
          <p className={styles.textButton}>🧐 Sobre mim</p>
        </Button>
        <p className={styles.textName}>Luis Felipe</p>
        <ul>
          <li className={styles.textLi}>
            👨‍💻 Desenvolvendo interfaces de usuário e APIs com
            Javascript/Typescript desde 2022
          </li>
          <li className={styles.textLi}>
            🎓 Cursando Análise e Desenvolvimento de Sistemas 7/7
          </li>
          <li className={styles.textLi}>
            💡 Interesse em desenvolvimento full-stack
          </li>
          <li className={styles.textLi}>
            🚀 Buscando uma oportunidade para atuar como desenvolvedor
          </li>
        </ul>
      </div>
      <div className={styles.timeLineSection}>
        <TimeLine />
      </div>
    </div>
  );
};
