import styles from "./styles.module.scss";
import { Button } from "flowbite-react";
import { FaMedal } from "react-icons/fa";
import { CardAchievements } from "../CardAchievements";

export const Achievements = () => {
  return (
    <div className={styles.container}>
      <Button
        style={{
          cursor: "auto",
          pointerEvents: "none",
          backgroundColor: "rgba(0, 0, 0, 0.822)",
          height: 50,
          width: 168,
          marginBottom: 20,
        }}
      >
        <FaMedal size={23} className={styles.iconMedal} />
        <p className={styles.textButton}>Conquistas</p>
      </Button>

      <div className={styles.cardsContainer}>
        <CardAchievements project="nobullying" />
        <CardAchievements project="loopis" />
      </div>
    </div>
  );
};
