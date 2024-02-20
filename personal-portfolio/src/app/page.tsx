import Link from "next/link";
import styles from "./styles.module.scss";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
}
