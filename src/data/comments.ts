export interface Comment {
  id: number;
  gameId: number;
  date: string;
  content: string;
  status: "PUBLICADO" | "BORRADOR";
}

export const comments: Comment[] = [
  {
    id: 1,
    gameId: 1,
    date: "15/03/2022",
    content:
      "Una de las mejores experiencias narrativas que he jugado. El sistema de habilidades y los diálogos son extraordinarios.",
    status: "PUBLICADO",
  },
  {
    id: 2,
    gameId: 2,
    date: "20/12/2019",
    content:
      "Un mundo increíblemente detallado. Los personajes y la historia hacen que merezca la pena cada hora.",
    status: "PUBLICADO",
  },
  {
    id: 3,
    gameId: 3,
    date: "18/06/2021",
    content:
      "El diseño de niveles es excelente, aunque algunos combates requieren bastante paciencia.",
    status: "PUBLICADO",
  },
  {
    id: 4,
    gameId: 4,
    date: "12/04/2022",
    content: "Todavía tengo mucho por descubrir. El mundo es enorme.",
    status: "BORRADOR",
  },
  {
    id: 5,
    gameId: 7,
    date: "10/09/2020",
    content:
      "Un juego que consigue sorprender constantemente. Recomiendo evitar cualquier spoiler.",
    status: "PUBLICADO",
  },
];
