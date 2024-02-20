import { ReactNode } from "react";
import styles from "./styles.module.scss";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

type Props = {
  children: ReactNode;
  color: "primary" | "secondary";
  size: "small" | "medium" | "large";
  isIcon?: boolean;
};

export const Button = ({ children, color, size, isIcon }: Props) => {
  return (
    <button
      style={{
        width: '100%',
        justifyContent: isIcon && size === "large" ? "space-around" : "center",
        padding: isIcon && size === "large" ? "3% 10%" : "3% 9%",
      }}
      className={
        color == "primary" ? styles.ButtonPrimary : styles.ButtonSecondary
      }
    >
      {children}
      {isIcon ? <ArrowOutwardIcon /> : null}
    </button>
  );
};
