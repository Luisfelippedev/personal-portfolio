import styles from "./styles.module.scss";
import Image from "next/image";

interface Props {
  type:
    | "userExperience"
    | "devWeb"
    | "responsiveLayout"
    | "devMobile"
    | "innovation"
    | "api";
}

export const Card = ({ type }: Props) => {

  const renderTextContentByCase = () =>  {
    let component;

    switch (type) {
      case "userExperience":
        return component = <p>Experiência do Usuário</p>;
      case "devWeb":
        return component = <p>Desenvolvimento Web</p>;
      case "responsiveLayout":
        return component = <p>Design Responsivo</p>;
      case "devMobile":
        return component = <p>Desenvolvimento Mobile</p>;
      case "innovation":
        return component = <p>Inovação Tecnológica</p>;
      case "api":
        return component = <p>Conexão com Banco de Dados</p>;
      default:
        return component = <p>Default</p>;
    }

  };

  const getImagePathByCase = () =>  {
    let component;

    switch (type) {
      case "userExperience":
        return component = '/ui_color.png';
      case "devWeb":
        return component = '/web_color.png';
      case "responsiveLayout":
        return component = '/responsive_color.png';
      case "devMobile":
        return component = '/mobile_color.png';
      case "innovation":
        return component = '/inovação_color.png';
      case "api":
        return component = '/api_color.png';
      default:
        return component = 'null';
    }

  };

  return (
    <div className={styles.card}>
      <div
        className={styles.imageContainer}
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "inherit",
        }}
      >
        <Image
          src={getImagePathByCase()}
          alt="Descrição da imagem"
          layout="fill"
          objectFit="contain"
        />
      </div>
      {renderTextContentByCase()}
    </div>
  );
};
