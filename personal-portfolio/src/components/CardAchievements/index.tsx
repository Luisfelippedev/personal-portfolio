// BookComponent.js
import styles from "./styles.module.scss";

type ProjectType = "nobullying" | "loopis" | "tridev" | "korporate";

interface ProjectDetails {
  name: string;
  description: string;
  image: string;
  date: string;
}

export const CardAchievements = ({ project }: { project: ProjectType }) => {
  const projectDetails: Record<ProjectType, ProjectDetails> = {
    nobullying: {
      name: "NoBullying",
      date: "01/2023 - 04/2024",
      description:
        "Idealizei e desenvolvi o projeto NoBullying junto a dois colegas. Trata-se de uma iniciativa inovadora para o NUCA (Núcleo de Combate ao Assédio) do IFPB-CZ, um sistema de gerenciamento e denúncias de bullying e assédio.",
      image: "NoBullyingLogo.svg",
    },
    loopis: {
      name: "LoopisJr",
      date: "12/2022 - 01/2024",
      description:
        "Durante um ano e meio, tive a oportunidade de trabalhar na empresa Júnior do IFPB - campus CZ. Meu cargo na empresa evoluiu de trainee para consultor de projetos. Uma digna experiência.",
      image: "loopis.png",
    },
    tridev: {
      name: "Tridev Soluções",
      date: "04/2024 - 07/2024",
      description:
        "Atuação de forma autônoma como consultor e desenvolvedor web full-stack na Tridev Soluções, prestando soluções tecnologicas de ponta a ponta para clientes reais.",
      image: "logo-no-background.png",
    },
    korporate: {
      name: "Korporate Solution Factory",
      date: "07/2024 - Até o momento",
      description:
        "Atualmente, atuo como desenvolvedor front-end na Korporate Solution Factory, trabalhando no desenvolvimento de um sistema voltado para o setor de seguros.",
      image: "korporate_solution_factory_logo.png",
    },
  };

  const { name, description, image, date } = projectDetails[project];

  return (
    <div className={styles.card}>
      <div className={styles.cover}>
        <p className={styles.textTitle}>{name}</p>
        <p className={styles.dateText}>{date}</p>
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
