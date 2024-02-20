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
        width: size === "small" ? "5rem" : size === "medium" ? "7rem" : "10rem",
        justifyContent: isIcon && size === "large" ? "space-around" : "center",
        padding: isIcon && size === "large" ? "3.5% 16%" : "3.5% 9%",
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
