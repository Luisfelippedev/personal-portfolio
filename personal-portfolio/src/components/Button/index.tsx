import { ReactNode } from "react";
import styles from "./styles.module.scss";
import SouthIcon from "@mui/icons-material/South";

type Props = {
  children: ReactNode;
  color: "primary" | "secondary";
  iconSize?: "small" | "large"
};

export const Button = ({ children, color, iconSize}: Props) => {
  return (
    <button
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        padding: "3% 9%",
      }}
      className={
        color == "primary" ? styles.ButtonPrimary : styles.ButtonSecondary
      }
    >
      <div className={styles.contentButton}>
        {children}
      </div>
    </button>
  );
};
