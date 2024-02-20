import { Button } from "../Button";
import styles from "./styles.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.firstBox}>
        <p className={styles.text}>luis2015.sjp@gmail.com</p>
        <Button size="medium" color="primary">Copy</Button>
        <Button size="medium" color="primary">CV</Button>
      </div>
      <div className={styles.lastBox}>
        <p className={styles.text}>asdasd</p>
        <p className={styles.text}>asdasd</p>
        <p className={styles.text}>asdasd</p>
      </div>
    </div>
  );
};
