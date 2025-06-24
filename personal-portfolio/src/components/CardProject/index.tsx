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
import { SiLeaflet } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandVite } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

type ProjectType =
  | "tridev"
  | "personalPortfolio"
  | "nobullying"
  | "agendamentoChacara"
  // | "kerigma";
  | "cursoFisioterapia";

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
        "Landign Page que apresenta a marca Tridev Soluções. A Tridev presta serviços de consultoria e desenvolvimento de sistemas web de ponta a ponta para clientes reais.",
      linkGitHub: "https://github.com/Luisfelippedev/tridev",
      linkDeploy: "https://tridev-chi.vercel.app/",
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
        "Landign page de apresentação pessoal, construida para apresentar meu perfil profissional e acadêmico.",
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
      linkDeploy: "declaracaoNobullying.pdf",
      icons: [
        <TbBrandReactNative size={25} key="react-native" />,
        <SiStyledcomponents size={25} key="styled-components" />,
        <SiAxios size={25} key="axios" />,
        <BiLogoTypescript size={25} key="typescript" />,
      ],
    },
    agendamentoChacara: {
      name: "chacara-do-dandao",
      description:
        "Sistema web para submissão e gerenciamento de reservas da chácara do Dandão. Possui dois módulos de usuário, comum e administrador.",
      image: "chacara.png",
      linkGitHub: "https://github.com/Luisfelippedev/agendamento-chacara",
      linkDeploy: "https://www.dandaochacara.com.br/",
      icons: [
        <TbBrandNextjs size={25} key="nextjs" />,
        <BiLogoTypescript size={25} key="typescript" />,
        <FaSass size={25} key="sass" />,
        <TbBrandFramerMotion size={25} key="frame-motion" />,
        <SiLeaflet size={25} key="leaf-let" />,
        <SiMui size={25} key="material-ui" />,
        <IoLogoFirebase size={25} key="firebase-db" />,
        <SiExpress size={25} key="express" />,
        <BiLogoPostgresql size={25} key="postgres-sql" />,
        <FaDocker size={25} key="docker" />,
        <DiNodejs size={25} key="node-js" />,
      ],
    },
    // kerigma: {
    //   name: "kerigma-systems",
    //   description:
    //     "Landign page de abertura, construida para apresentar a marca Kerigma Systems e atrair a atenção de novos clientes para a empresa.",
    //   linkDeploy: "https://www.kerigmasystems.com.br/",
    //   image: "kerigma-logo.png",
    //   icons: [
    //     <TbBrandNextjs size={25} key="nextjs" />,
    //     <BiLogoTypescript size={25} key="typescript" />,
    //     <FaSass size={25} key="sass" />,
    //   ],
    // },
    cursoFisioterapia: {
      name: "curso-fisioterapia",
      description:
        "Página de vendas, construida para anunciar o curso do Dr. André e atrair a atenção de novos alunos para o treinamento.",
      linkDeploy: "https://escoliose-dr-andre.vercel.app/",
      image: "curso-fisioterapia-png.png",
      icons: [
        <TbBrandVite size={25} key="vite" />,
        <BiLogoTypescript size={25} key="typescript" />,
        <SiTailwindcss size={25} key="tailwind" />,
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
            <img
              src={image}
              alt="Descrição da imagem"
              style={{ width: name == "chacara-do-dandao" ? 65 : 90 }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProject;
