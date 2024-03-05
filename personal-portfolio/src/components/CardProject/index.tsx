import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiHandlebarsdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

type Props = {
  project: "devblog";
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
      default:
        return (component = "null");
    }
  };

  const getNameByCase = () => {
    let component;

    switch (project) {
      case "devblog":
        return "DevBlog"
      default:
        return (component = "null");
    }
  };

  const getDescriptionByCase = () => {
    let component;

    switch (project) {
      case "devblog":
        return "Um blog que viabiliza aos usuários a criação de contas, efetuar o login e realizar postagens para promover a interação entre todos os participantes da plataforma."
      default:
        return (component = "null");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.firstBox}>
        <div className={styles.ballsBox}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div className={styles.redBall}></div>
            <div className={styles.yellowBall}></div>
            <div className={styles.greenBall}></div>
          </div>
            <FaGithub size={30} />
        </div>

        <p className={styles.textPrimary}>{getNameByCase()}</p>
        <p className={styles.textSecondary}>{getDescriptionByCase()}</p>
      </div>
      <div className={styles.secondBox}>{getIconsByCase()}</div>
      <div className={styles.lastBox}>
      <img
        src="node.png" 
        alt="Descrição da imagem"
        style={{ width: '100%' }}  
      />
      </div>
    </div>
  );
};

export default CardProject;
