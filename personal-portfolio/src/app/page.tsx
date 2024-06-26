import Link from "next/link";
import styles from "./styles.module.scss";
import { Header } from "@/components/Header";
import { AboutMe } from "@/components/AboutMe";
import { Achievements } from "@/components/Achievements";
import Projects from "@/components/Projects";
import TellMeSection from "@/components/TellMeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="home-section" className={styles.container}>
      <Header />
      <div className={styles.background}>
        <AboutMe />
        <Achievements />
      </div>
      <div id="section-project" className={styles.projectSection}>
        <Projects />
      </div>
      <TellMeSection />
      <div style={{ padding: "0 10%" }}>
        <Footer />
      </div>
    </div>
  );
}
