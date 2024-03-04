"use client";

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
      <TimelineItem>
        <TimelinePoint icon={HiCalendar}></TimelinePoint>
        <TimelineContent style={{ marginTop: "1rem" }}>
          <TimelineTime>2021</TimelineTime>
          <TimelineTitle>Faculdade</TimelineTitle>
          <TimelineBody>
            Iniciando minha graduação em análise e desenvolvimento de sistemas
            através do Instituto Federal da Paraíba.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem >
        <TimelinePoint icon={HiCalendar}></TimelinePoint>
        <TimelineContent style={{ marginTop: "1rem" }}>
          <TimelineTime>2022</TimelineTime>
          <TimelineTitle>JavaScript</TimelineTitle>
          <TimelineBody>
            Explorando de forma mais detalhada a linguagem JavaScript e
            aprofundando-me em seus aspectos tanto no desenvolvimento front-end
            quanto no back-end.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint icon={HiCalendar}></TimelinePoint>
        <TimelineContent style={{ marginTop: "1rem" }}>
          <TimelineTime>2023</TimelineTime>
          <TimelineTitle>Bibliotecas e Projetos</TimelineTitle>
          <TimelineBody>
            Explorando o imenso potencial das bibliotecas em JavaScript e criando projetos pessoais de maneira eficiente.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint icon={HiCalendar}></TimelinePoint>
        <TimelineContent style={{ marginTop: "1rem" }}>
          <TimelineTime>2024</TimelineTime>
          <TimelineTitle>Até o momento</TimelineTitle>
          <TimelineBody>
            Em busca da minha primeira oportunidade como desenvolvedor.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
};
