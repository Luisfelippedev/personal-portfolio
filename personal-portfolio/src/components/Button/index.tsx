import { ReactNode } from "react";
import styles from "./styles.module.scss";
import SouthIcon from "@mui/icons-material/South";

type Props = {
  children: ReactNode;
  color: "primary" | "secondary";
  isIcon?: boolean;
};

export const Button = ({ children, color, isIcon }: Props) => {
  return (
    <button
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        padding: isIcon ? "3% 10%" : "3% 9%",
      }}
      className={
        color == "primary" ? styles.ButtonPrimary : styles.ButtonSecondary
      }
    >
      <div className={styles.contentButton}>
        {children}
        {isIcon ? <SouthIcon fontSize="small" /> : null}
      </div>
    </button>
  );
};
