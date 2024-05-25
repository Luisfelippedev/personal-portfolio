// BookComponent.js
import styles from "./styles.module.scss";

type ProjectType = "nobullying" | "loopis" | "tridev";

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
        "Durante um ano e meio, tive a oportunidade de trabalhar na empresa Júnior do IFPB - campus CZ. Meu cargo na empresa evoluiu de trainee para consultor de projetos. Uma digna experiência.",
      image: "loopis.png",
    },
    tridev: {
      name: "Tridev Soluções",
      description:
        "Até o momento atuo de forma autônoma como consultor e desenvolvedor web full-stack na Tridev Soluções, prestando soluções tecnologicas de ponta a ponta para clientes reais.",
      image: "logo-no-background.png",
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
            <img
              src={image}
              alt="icon"
              style={{ width: name == "Tridev Soluções" ? 115 : 90 }}
            />
          </div>
          <p className={styles.textDescc}>{description}</p>
        </div>
      </div>
    </div>
  );
};
