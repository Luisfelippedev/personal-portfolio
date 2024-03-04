import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";

const CardProject = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstBox}>
        <div className={styles.ballsBox}>
          <div className={styles.redBall}><></></div>
          <div className={styles.yellowBall}></div>
          <div className={styles.greenBall}></div>
        </div>
        <p className={styles.textPrimary}>Jogo da Memória</p>
        <p className={styles.textSecondary}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          repellat recusandae? Maxime su..
        </p>
      </div>
      <div className={styles.secondBox}>
        <FaGithub />
        <FaGithub />
        <FaGithub />
        
      </div>
      <div className={styles.lastBox}></div>
    </div>
  );
};

export default CardProject;
