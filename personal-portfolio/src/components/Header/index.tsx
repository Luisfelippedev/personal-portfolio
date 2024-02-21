import { Navbar } from "../Navbar";
import { PresentationContainer } from "../PresentationContainer";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.firstSection}>
        <Navbar />
        <PresentationContainer />
      </div>
      <div className={styles.lastSection}>

      </div>
    </div>
  );
};
