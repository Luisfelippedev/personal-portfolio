import { Button } from "../Button";
import styles from "./styles.module.scss";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.firstBox}>
        <div className={styles.emailIcon}>
          <p className={styles.text}>luis2015.sjp@gmail.com</p>
          <ContentCopyIcon sx={{height: 20}} />
        </div>

          <div className={styles.buttonCopy}>
              <Button size="medium" color="primary">
                Copy
              </Button>
          </div>
          
          <div className={styles.buttonCV}>
              <Button size="medium" color="primary">
              CV
            </Button>
          </div>

      </div>
      <div className={styles.lastBox}>
        <p className={styles.text}>Linkedin</p>
        <p className={styles.text}>/</p>
        <p className={styles.text}>Github</p>
      </div>
    </div>
  );
};
