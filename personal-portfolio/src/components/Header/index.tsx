import { Navbar } from "../Navbar";
import { PresentationContainer } from "../PresentationContainer";
import styles from "./styles.module.scss";
import { Carousel } from "../Carousel";

export const Header = () => {
  return (
    <div className={styles.headerBackground}>
      <div className={styles.HeaderContainer}>
        <div className={styles.firstSectionBackground}>
          <div className={styles.firstSection}>
            <Navbar />
            <div className={styles.presentationContainer}>
              <PresentationContainer />
            </div>
          </div>
        </div>

        <div className={styles.lastSection}>
          <div className={styles.carousel}>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};
