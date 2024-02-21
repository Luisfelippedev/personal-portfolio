import { Button } from "../Button";
import styles from "./styles.module.scss";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.firstBox}>
        <div className={styles.emailIcon}>
          <p className={styles.text}>luis2015.sjp@gmail.com</p>
          <div className={styles.copyIcon}>
            <ContentCopyIcon style={{height: '100%'}} />
          </div>
          
        </div>         

          <div className={styles.buttonCV}>
              <Button color="primary">
                <p className={styles.textCV}>
                  CV
                </p>
              
            </Button>
          </div>

      </div>
      <div className={styles.lastBox}>
        <p className={styles.text}>LinkedIn</p>
        <p className={styles.text}>/</p>
        <p className={styles.text}>GitHub</p>
      </div>
    </div>
  );
};
