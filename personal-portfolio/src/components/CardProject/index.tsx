import Link from "next/link";
import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import {
  SiExpress,
  SiHandlebarsdotjs,
  SiRedis,
  SiSequelize,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

type ProjectType = "devblog" | "cacheredis" | "spatialdata";

interface ProjectDetails {
  name: string;
  description: string;
  linkGitHub: string;
  linkDeploy: string;
  icons: JSX.Element[];
}

const CardProject = ({ project }: { project: ProjectType }) => {
  const projectDetails: Record<ProjectType, ProjectDetails> = {
    devblog: {
      name: "DevBlog",
      description:
        "Um blog que viabiliza aos usuários a criação de contas, efetuar o login e realizar postagens para promover a interação entre todos os participantes da plataforma.",
      linkGitHub: "https://github.com/Luisfelippedev/devblog-mongodb",
      linkDeploy: "https://github.com/Luisfelippedev/devblog-mongodb",
      icons: [
        <IoLogoNodejs size={25} key="node" />,
        <SiExpress size={25} key="express" />,
        <SiHandlebarsdotjs size={25} key="handlebars" />,
        <FaBootstrap size={25} key="bootstrap" />,
        <SiMongodb size={25} key="mongodb" />,
      ],
    },
    cacheredis: {
      name: "Cache-com-redis",
      description:
        "API REST com operações CRUD. Visando aprimorar a compreensão prática de como construir uma aplicação mais eficiente para os usuários utilizando cache.",
      linkGitHub: "https://github.com/Luisfelippedev/cache-com-redis",
      linkDeploy: "https://github.com/Luisfelippedev/cache-com-redis",
      icons: [
        <IoLogoNodejs size={25} key="node" />,
        <SiExpress size={25} key="express" />,
        <SiRedis size={25} key="redis" />,
        <BiLogoPostgresql size={25} key="postgresql" />,
        <SiSequelize size={25} key="sequelize" />,
      ],
    },
    spatialdata: {
      name: "Dados-espaciais",
      description:
        "Mapa global com a capacidade de adicionar marcadores, utilizando um banco de dados local e realizando uma abstração da API do Google Maps.",
      linkGitHub: "https://github.com/Luisfelippedev/using-spatial-data",
      linkDeploy: "https://github.com/Luisfelippedev/using-spatial-data",
      icons: [
        <IoLogoNodejs size={25} key="node" />,
        <SiExpress size={25} key="express" />,
        <SiHandlebarsdotjs size={25} key="handlebars" />,
        <BiLogoPostgresql size={25} key="postgresql" />,
        <SiSequelize size={25} key="sequelize" />,
      ],
    },
  };

  const { name, description, linkGitHub, linkDeploy, icons } =
    projectDetails[project];

  return (
    <div className={styles.container}>
      <Link href={linkDeploy}>
        <div className={styles.link}>
          <div className={styles.firstBox}>
            <div className={styles.ballsBox}>
              <FaGithub size={35} />
            </div>
            <p className={styles.textPrimary}>{name}</p>
            <p className={styles.textSecondary}>{description}</p>
          </div>
          <div className={styles.secondBox}>
            {icons.map((icon, index) => (
              <div key={index} className={styles.icon}>
                {icon}
              </div>
            ))}
          </div>
          <div className={styles.lastBox}>
            <img
              src="node.png"
              alt="Descrição da imagem"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProject;
