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
import { FaLock } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { SiStyledcomponents } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

type ProjectType = "devblog" | "cacheredis" | "spatialdata" | "nobullying";

interface ProjectDetails {
  name: string;
  description: string;
  linkGitHub?: string;
  linkDeploy?: string;
  image: string;
  icons: JSX.Element[];
}

const CardProject = ({
  project,
  privateStatus,
  star,
}: {
  star?: boolean;
  privateStatus?: boolean;
  project: ProjectType;
}) => {
  const projectDetails: Record<ProjectType, ProjectDetails> = {
    devblog: {
      name: "dev-blog",
      description:
        "Um blog que viabiliza aos usuários a criação de contas, efetuar o login e realizar postagens para promover a interação entre todos os participantes da plataforma.",
      linkGitHub: "https://github.com/Luisfelippedev/devblog-mongodb",
      linkDeploy: "https://github.com/Luisfelippedev/devblog-mongodb",
      image: "blog.png",
      icons: [
        <IoLogoNodejs size={25} key="node" />,
        <SiExpress size={25} key="express" />,
        <SiHandlebarsdotjs size={25} key="handlebars" />,
        <FaBootstrap size={25} key="bootstrap" />,
        <SiMongodb size={25} key="mongodb" />,
      ],
    },
    cacheredis: {
      name: "cache-com-redis",
      description:
        "API REST com operações CRUD. Visando aprimorar a compreensão prática de como construir uma aplicação mais eficiente para os usuários utilizando cache.",
      linkGitHub: "https://github.com/Luisfelippedev/cache-com-redis",
      linkDeploy: "https://github.com/Luisfelippedev/cache-com-redis",
      image: "cache.svg",
      icons: [
        <IoLogoNodejs size={25} key="node" />,
        <SiExpress size={25} key="express" />,
        <SiRedis size={25} key="redis" />,
        <BiLogoPostgresql size={25} key="postgresql" />,
        <SiSequelize size={25} key="sequelize" />,
      ],
    },
    spatialdata: {
      name: "dados-espaciais",
      description:
        "Mapa global com a capacidade de adicionar marcadores, utilizando um banco de dados local e realizando uma abstração da API do Google Maps.",
      linkGitHub: "https://github.com/Luisfelippedev/using-spatial-data",
      linkDeploy: "https://github.com/Luisfelippedev/using-spatial-data",
      image: "map.png",
      icons: [
        <IoLogoNodejs size={25} key="node" />,
        <SiExpress size={25} key="express" />,
        <SiHandlebarsdotjs size={25} key="handlebars" />,
        <BiLogoPostgresql size={25} key="postgresql" />,
        <SiSequelize size={25} key="sequelize" />,
      ],
    },
    nobullying: {
      name: "no-bullyingm",
      description:
        "Aplicação mobile para submissão de denúncias acerca de bullying e assédio no Instituto Federal da Paraíba, Campus Cajazeiras.",
      image: "NoBullyingLogo.svg",
      icons: [
        <TbBrandReactNative size={25} key="react-native" />,
        <SiStyledcomponents size={25} key="styled-components" />,
        <SiAxios size={25} key="axios" />,
        <BiLogoTypescript size={25} key="typescript" />,
      ],
    },
  };

  const { name, description, linkGitHub, linkDeploy, image, icons } =
    projectDetails[project];

  return (
    <div className={styles.container}>
      {linkDeploy ? (
        <Link target="blank" href={linkDeploy ? linkDeploy : "#"}>
          <div className={styles.link}>
            <div className={styles.firstBox}>
              <div className={styles.ballsBox}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className={styles.redBall} />

                  <div className={styles.yellowBall} />
                  <div className={styles.greenBall} />
                </div>
                <div className={styles.githubIcon}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {star ? (
                      <FaStar
                        style={{ marginRight: 15 }}
                        color="#FFD700"
                        size={35}
                      />
                    ) : (
                      ""
                    )}

                    {privateStatus ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: 35,
                        }}
                      >
                        <FaLock size={30} />
                      </div>
                    ) : (
                      <div className={styles.githubIcon}>
                        <FaGithub size={35} />
                      </div>
                    )}
                  </div>
                </div>
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
                src={image}
                alt="Descrição da imagem"
                style={{ width: 90 }}
              />
            </div>
          </div>
        </Link>
      ) : (
        <div>
          <div className={styles.link}>
            <div className={styles.firstBox}>
              <div className={styles.ballsBox}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className={styles.redBall} />

                  <div className={styles.yellowBall} />
                  <div className={styles.greenBall} />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {star ? (
                    <FaStar
                      style={{ marginRight: 15 }}
                      color="#FFD700"
                      size={35}
                    />
                  ) : (
                    ""
                  )}

                  {privateStatus ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 35,
                      }}
                    >
                      <FaLock size={30} />
                    </div>
                  ) : (
                    <div className={styles.githubIcon}>
                      <FaGithub size={35} />
                    </div>
                  )}
                </div>
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
                src={image}
                alt="Descrição da imagem"
                style={{ width: 90 }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardProject;
