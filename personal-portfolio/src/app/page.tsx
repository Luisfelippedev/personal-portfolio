import Link from "next/link";
import styles from "./styles.module.scss";
import { Header } from "@/components/Header";
import { AboutMe } from "@/components/AboutMe";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.background}>
          <AboutMe />
      </div>
      
    </div>
  );
}
