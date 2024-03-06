import Link from "next/link";
import styles from "./styles.module.scss";
import { Header } from "@/components/Header";
import { AboutMe } from "@/components/AboutMe";
import Projects from "@/components/Projects";
import TellMeSection from "@/components/TellMeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.background}>
        <AboutMe />
      </div>
      <div className={styles.projectSection}>
        <Projects />
      </div>
      <TellMeSection />
      <div style={{ padding: "0 10%" }}>
        <Footer />
      </div>
    </div>
  );
}
