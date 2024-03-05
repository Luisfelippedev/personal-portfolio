import styles from "./styles.module.scss";
import CardProject from "../CardProject";
import { Button } from "flowbite-react";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonBox}>
      <Button
  style={{
    cursor: "auto",
    pointerEvents: "none",
    backgroundColor: "rgb(33, 33, 33)", // Tonalidade de preto
    color: "#fff", // Cor do texto em branco para manter o contraste
    height: 70,
    width: 200,
  }}
>
          <p className={styles.textButton}>Projetos</p>
        </Button>
      </div>

      <div className={styles.cardsContainer}>
        <CardProject project="devblog" />
      </div>
    </div>
  );
};

export default Projects;
