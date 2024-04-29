import Link from "next/link";
import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { SiStyledcomponents } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";

type ProjectType = "tridev" | "personalPortfolio" | "nobullying";

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
    tridev: {
      name: "tridev",
      description:
        "Landign Page que apresenta a marca Tridev Soluções. A tridev presta serviços de desenvolvimento de sites. Na qual, eu sou fundador da equipe.",
      linkGitHub: "https://github.com/Luisfelippedev/tridev",
      linkDeploy: "https://www.tridev.com.br/",
      image: "logo-no-background.png",
      icons: [
        <TbBrandNextjs size={25} key="nextjs" />,
        <BiLogoTypescript size={25} key="typescript" />,
        <FaSass size={25} key="sass" />,
        <TbBrandFramerMotion size={25} key="frame-motion" />,
      ],
    },
    personalPortfolio: {
      name: "personal-portfolio",
      description:
        "Landign page de apresentação pessoal, construida em Nextjs.",
      linkGitHub: "https://github.com/Luisfelippedev/personal-portfolio",
      linkDeploy: "https://luisfelippe.vercel.app/",
      image: "personal-porfolio-icon.png",
      icons: [
        <TbBrandNextjs size={25} key="nextjs" />,
        <BiLogoTypescript size={25} key="typescript" />,
        <FaSass size={25} key="sass" />,
        <TbBrandFramerMotion size={25} key="frame-motion" />,
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
      <Link
        onClick={linkDeploy ? undefined : (e) => e.preventDefault()}
        target="_blank"
        href={linkDeploy ? linkDeploy : ""}
      >
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
                    <a target="_blank" href={linkGitHub ? linkGitHub : "#"}>
                      <FaGithub size={35} />
                    </a>
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
            <img src={image} alt="Descrição da imagem" style={{ width: 90 }} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProject;
