"use client";

import { motion } from "framer-motion";

import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export const TimeLine = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1100);
    };

    handleResize(); // Definir inicialmente com base na largura da tela
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Timeline horizontal={isSmallScreen ? false : true}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <TimelineItem>
          <TimelinePoint id="time-line-point" icon={HiCalendar}></TimelinePoint>
          <TimelineContent style={{ marginTop: "1rem" }}>
            <TimelineTime>2021</TimelineTime>
            <TimelineTitle style={{ color: "#352d27" }}>
              Faculdade
            </TimelineTitle>
            <TimelineBody>
              Iniciando minha graduação em análise e desenvolvimento de sistemas
              através do Instituto Federal da Paraíba.
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <TimelineItem>
          <TimelinePoint id="time-line-point" icon={HiCalendar}></TimelinePoint>
          <TimelineContent style={{ marginTop: "1rem" }}>
            <TimelineTime>2022</TimelineTime>
            <TimelineTitle style={{ color: "#352d27" }}>
              JavaScript
            </TimelineTitle>
            <TimelineBody>
              Explorando de forma mais detalhada a linguagem JavaScript e
              aprofundando-me em seus aspectos tanto no desenvolvimento
              front-end quanto no back-end.
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
      >
        <TimelineItem>
          <TimelinePoint id="time-line-point" icon={HiCalendar}></TimelinePoint>
          <TimelineContent style={{ marginTop: "1rem" }}>
            <TimelineTime>2023</TimelineTime>
            <TimelineTitle style={{ color: "#352d27" }}>
              Bibliotecas e Projetos
            </TimelineTitle>
            <TimelineBody>
              Explorando o imenso potencial das bibliotecas em JavaScript e
              criando projetos pessoais de maneira eficiente.
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
      >
        <TimelineItem>
          <TimelinePoint id="time-line-point" icon={HiCalendar}></TimelinePoint>
          <TimelineContent style={{ marginTop: "1rem" }}>
            <TimelineTime>2024</TimelineTime>
            <TimelineTitle style={{ color: "#352d27" }}>
              Até o momento
            </TimelineTitle>
            <TimelineBody>
              Em busca de uma oportunidade como desenvolvedor.
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </motion.div>
    </Timeline>
  );
};
