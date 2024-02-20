import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "../Button";
import tchauIcon from "../../../public/adeus.png";

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
                border: '4px solid white'
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
            Meu Botão
            <Image
            src="/adeus.png"
            alt="Descrição da imagem"
            height={20}
            width={20}
            style={{marginLeft: 5}}
          />
          </button>
        </div>
      </div>

      <div className={styles.secondBox}>
        <p className={styles.text}>
          Building digital products, brands, and experience.
        </p>
      </div>

      <div className={styles.lastBox}>
        <Button isIcon color="secondary" size="large">
          Latest Shot
        </Button>
      </div>
    </div>
  );
};
