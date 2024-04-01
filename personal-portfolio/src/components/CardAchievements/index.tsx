// BookComponent.js
import styles from "./styles.module.scss";

type ProjectType = "nobullying" | "loopis";

interface ProjectDetails {
  name: string;
  description: string;
  image: string;
}

export const CardAchievements = ({ project }: { project: ProjectType }) => {
  const projectDetails: Record<ProjectType, ProjectDetails> = {
    nobullying: {
      name: "NoBullying",
      description:
        "Idealizei e desenvolvi o projeto NoBullying junto a dois colegas. Trata-se de uma iniciativa inovadora para o NUCA (Núcleo de Combate ao Assédio) do IFPB-CZ, um sistema de gerenciamento e denúncias de bullying e assédio.",
      image: "NoBullyingLogo.svg",
    },
    loopis: {
      name: "LoopisJr",
      description:
        "Durante um ano e meio, tive a oportunidade de trabalhar na empresa Júnior do IFPB - campus CZ. Na área de projetos, participei ativamente de projetos reais para clientes da empresa, o que me permitiu adquirir conhecimento e aplicá-lo na prática.",
      image: "loopis.png",
    },
  };

  const { name, description, image } = projectDetails[project];

  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <p className={styles.textTitle}>{name}</p>
      </div>
      <div className={styles.insideCard}>
        <div className={styles.insideFirst}></div>
        <div className={styles.insideLast}>
          <div className={styles.imgContainer}>
            <img src={image} alt="icon" style={{ width: 90 }} />
          </div>

          <p className={styles.textDescc}>{description}</p>
        </div>
      </div>
    </div>
  );
};
