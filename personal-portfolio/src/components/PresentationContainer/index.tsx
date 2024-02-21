import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "../Button";

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
                src="/desenvolvedor.jpg"
                alt="Descrição da imagem"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <button className={styles.fixedButton}>
            <p className={styles.myButton}>Luis Felipe</p>
            
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
          Building digital products, brands, and experience.
        </p>
      </div>

      <div className={styles.lastBox}>
        <div className={styles.buttonProjects}>
          <Button isIcon color="secondary">
            <p className={styles.buttonText}>
              Projetos
            </p>
            
          </Button>
        </div>
      </div>
    </div>
  );
};
