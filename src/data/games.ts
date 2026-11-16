export interface Game {
  id: number;
  title: string;
  platform: string;
  year: number;
  status: "COMPLETADO" | "EN CURSO";
  score: string;
  genre: string;
  developer: string;
  synopsis: string;
  purchaseDate: string;
  personalNotes: string;
}

export const games: Game[] = [
  {
    id: 1,
    title: "Disco Elysium",
    platform: "PC",
    year: 2019,
    status: "COMPLETADO",
    score: "9.5",
    genre: "RPG / Narrativo",
    developer: "ZA/UM",
    synopsis:
      "Un detective despierta sin memoria en una ciudad decadente. Deberá reconstruir los acontecimientos mientras investiga un asesinato y se enfrenta a sus propios conflictos.",
    purchaseDate: "12/03/2022",
    personalNotes: "Una experiencia narrativa excepcional.",
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    platform: "PS4",
    year: 2018,
    status: "COMPLETADO",
    score: "9.8",
    genre: "Acción / Aventura",
    developer: "Rockstar Games",
    synopsis:
      "Arthur Morgan y la banda de Van der Linde intentan sobrevivir en un mundo que está cambiando rápidamente.",
    purchaseDate: "08/11/2019",
    personalNotes: "Destaca especialmente por su mundo y sus personajes.",
  },
  {
    id: 3,
    title: "Hollow Knight",
    platform: "SWITCH",
    year: 2017,
    status: "EN CURSO",
    score: "—",
    genre: "Metroidvania",
    developer: "Team Cherry",
    synopsis:
      "Un pequeño caballero explora las ruinas de Hallownest, un reino subterráneo lleno de secretos y criaturas.",
    purchaseDate: "15/06/2021",
    personalNotes: "Pendiente de completar.",
  },
  {
    id: 4,
    title: "Elden Ring",
    platform: "PC",
    year: 2022,
    status: "EN CURSO",
    score: "—",
    genre: "Action RPG",
    developer: "FromSoftware",
    synopsis:
      "Un Sinluz explora las Tierras Intermedias para convertirse en el próximo Señor del Círculo.",
    purchaseDate: "25/02/2022",
    personalNotes: "Exploración todavía en progreso.",
  },
  {
    id: 5,
    title: "The Last of Us Part II",
    platform: "PS5",
    year: 2022,
    status: "COMPLETADO",
    score: "9.2",
    genre: "Acción / Aventura",
    developer: "Naughty Dog",
    synopsis:
      "Una historia de supervivencia, pérdida y venganza en un mundo devastado por una infección.",
    purchaseDate: "10/04/2023",
    personalNotes: "Una historia emocionalmente intensa.",
  },
  {
    id: 6,
    title: "Death Stranding",
    platform: "PC",
    year: 2019,
    status: "COMPLETADO",
    score: "8.7",
    genre: "Acción / Aventura",
    developer: "Kojima Productions",
    synopsis:
      "Sam Porter Bridges debe reconectar una sociedad fragmentada transportando suministros entre asentamientos.",
    purchaseDate: "20/07/2021",
    personalNotes: "Una propuesta diferente y atmosférica.",
  },
  {
    id: 7,
    title: "Outer Wilds",
    platform: "PC",
    year: 2019,
    status: "COMPLETADO",
    score: "9.7",
    genre: "Exploración / Aventura",
    developer: "Mobius Digital",
    synopsis:
      "Un explorador espacial investiga un misterioso sistema solar atrapado en un ciclo temporal.",
    purchaseDate: "04/09/2020",
    personalNotes: "Conviene descubrirlo sin conocer demasiados detalles.",
  },
  {
    id: 8,
    title: "Control",
    platform: "PS5",
    year: 2019,
    status: "COMPLETADO",
    score: "8.5",
    genre: "Acción / Aventura",
    developer: "Remedy Entertainment",
    synopsis:
      "Jesse Faden llega a una misteriosa agencia gubernamental donde las leyes de la realidad parecen haber cambiado.",
    purchaseDate: "18/01/2022",
    personalNotes: "Ambientación y diseño visual muy interesantes.",
  },
  {
    id: 9,
    title: "Celeste",
    platform: "SWITCH",
    year: 2018,
    status: "COMPLETADO",
    score: "9.0",
    genre: "Plataformas",
    developer: "Matt Makes Games",
    synopsis:
      "Madeline intenta escalar una montaña mientras afronta sus propios miedos y dificultades.",
    purchaseDate: "03/05/2020",
    personalNotes: "Gran diseño de niveles y banda sonora.",
  },
  {
    id: 10,
    title: "Alan Wake 2",
    platform: "PS5",
    year: 2023,
    status: "EN CURSO",
    score: "—",
    genre: "Survival Horror",
    developer: "Remedy Entertainment",
    synopsis:
      "Una investigación criminal sobrenatural conecta a una agente del FBI con un escritor atrapado en una realidad oscura.",
    purchaseDate: "27/10/2023",
    personalNotes: "Pendiente de completar.",
  },
];
