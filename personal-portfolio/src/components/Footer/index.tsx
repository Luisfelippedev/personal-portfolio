import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.textRights}>© 2024 All rights reserved.</p>
      <div className={styles.socialBox}>
        <a
          href="https://www.linkedin.com/in/luis-felippe-67b033210/"
          target="_blank"
          className={styles.textLink}
        >
          LinkedIn
        </a>
        <p className={styles.text}>/</p>
        <a
          href="https://github.com/Luisfelippedev"
          target="_blank"
          className={styles.textLink}
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
