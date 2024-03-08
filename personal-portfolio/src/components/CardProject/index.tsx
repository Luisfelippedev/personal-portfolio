import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiHandlebarsdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSequelize } from "react-icons/si";

type Props = {
  project: "devblog" | "cacheredis" | "spatialdata";
};

const CardProject = ({ project }: Props) => {
  const getIconsByCase = () => {
    let component;

    switch (project) {
      case "devblog":
        return (
          <>
            <IoLogoNodejs size={25} />
            <SiExpress size={25} />
            <SiHandlebarsdotjs size={25} />
            <FaBootstrap size={25} />
            <SiMongodb size={25} />
          </>
        );
      case "cacheredis":
        return (
          <>
            <IoLogoNodejs size={25} />
            <SiExpress size={25} />
            <SiRedis size={25} />
            <BiLogoPostgresql size={25} />
            <SiSequelize size={25} />
          </>
        );
      case "spatialdata":
        return (
          <>
            <IoLogoNodejs size={25} />
            <SiExpress size={25} />
            <SiHandlebarsdotjs size={25} />
            <BiLogoPostgresql size={25} />
            <SiSequelize size={25} />
          </>
        );
      default:
        return (component = "null");
    }
  };

  const getNameByCase = () => {
    let component;

    switch (project) {
      case "devblog":
        return "DevBlog";
      case "cacheredis":
        return "Cache-com-redis";
      case "spatialdata":
        return "Dados-espaciais";
      default:
        return (component = "null");
    }
  };

  const getDescriptionByCase = () => {
    let component;

    switch (project) {
      case "devblog":
        return "Um blog que viabiliza aos usuários a criação de contas, efetuar o login e realizar postagens para promover a interação entre todos os participantes da plataforma.";
      case "cacheredis":
        return "API REST com operações CRUD. Visando aprimorar a compreensão prática de como construir uma aplicação mais eficiente para os usuários utilizando cache.";
      case "spatialdata":
        return "Mapa global com a capacidade de adicionar marcadores, utilizando um banco de dados local e realizando uma abstração da API do Google Maps.";
      default:
        return (component = "null");
    }
  };

  const getLinkGitHubByCase = () => {
    let component;

    switch (project) {
      case "devblog":
        return "https://github.com/Luisffelipe/devblog-mongodb";
      case "cacheredis":
        return "https://github.com/Luisffelipe/cache-com-redis";
      case "spatialdata":
        return "https://github.com/Luisffelipe/using-spatial-data";
      default:
        return (component = "null");
    }
  };

  const getLinkDeployByCase = () => {
    let component;

    switch (project) {
      case "devblog":
        return "https://github.com/Luisffelipe/devblog-mongodb";
      case "cacheredis":
        return "https://github.com/Luisffelipe/cache-com-redis";
      case "spatialdata":
        return "https://github.com/Luisffelipe/using-spatial-data";
      default:
        return (component = "null");
    }
  };

  return (
    <a href={getLinkDeployByCase()} target="blank" className={styles.container}>
      <div className={styles.firstBox}>
        <div className={styles.ballsBox}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={styles.redBall}></div>
            <div className={styles.yellowBall}></div>
            <div className={styles.greenBall}></div>
          </div>
          <a
            href={getLinkGitHubByCase()}
            target="blank"
            className={styles.githubIcon}
          >
            <FaGithub size={35} />
          </a>
        </div>

        <p className={styles.textPrimary}>{getNameByCase()}</p>
        <p className={styles.textSecondary}>{getDescriptionByCase()}</p>
      </div>
      <div className={styles.secondBox}>{getIconsByCase()}</div>
      <div className={styles.lastBox}>
        <img
          src="node.png"
          alt="Descrição da imagem"
          style={{ width: "100%" }}
        />
      </div>
    </a>
  );
};

export default CardProject;
