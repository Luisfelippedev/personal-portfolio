import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>

      <p className={styles.textRights}>© 2024 All rights reserved.</p>
      <div className={styles.socialBox}>
        <p className={styles.text}>LinkedIn</p>
        <p className={styles.text}>/</p>
        <p className={styles.text}>GitHub</p>
      </div>
    </div>
  );
};

export default Footer;
