import styles from "./styles.module.scss";
import { PiHandshakeThin } from "react-icons/pi";
import { Button } from "../Button";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

const TellMeSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tellMeSection}>
        <div className={styles.circleContainer}>
          <PiHandshakeThin size="50%" />
        </div>
        <p className={styles.text}>Entre em contato comigo!</p>
        <div className={styles.buttonsContainer}>
          <a
            href="mailto:felippe.luisdev@gmail.com"
            rel="noopener noreferrer"
            target="blank"
            className={styles.buttonEmail}
          >
            <Button color="secondary">
              <MdOutlineEmail
                style={{ marginRight: "6%" }}
                size="20%"
                color="white"
              />
              <p className={styles.buttonText}>E-mail</p>
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/luis-felippe-67b033210/"
            target="blank"
            className={styles.buttonLinkedin}
          >
            <Button color="primary">
              <CiLinkedin
                style={{ marginRight: "4%" }}
                size="23%"
                color="black"
              />
              <p className={styles.buttonText}>LinkedIn</p>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TellMeSection;
