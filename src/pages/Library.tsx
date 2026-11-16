import GameCard from "../components/GameCard";

const games = [
  {
    id: 1,
    title: "Disco Elysium",
    platform: "PC",
    year: 2019,
    status: "COMPLETADO",
    score: "9.5",
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    platform: "PS4",
    year: 2018,
    status: "COMPLETADO",
    score: "9.8",
  },
  {
    id: 3,
    title: "Hollow Knight",
    platform: "SWITCH",
    year: 2017,
    status: "EN CURSO",
    score: "—",
  },
  {
    id: 4,
    title: "Elden Ring",
    platform: "PC",
    year: 2022,
    status: "EN CURSO",
    score: "—",
  },
  {
    id: 5,
    title: "The Last of Us Part II",
    platform: "PS5",
    year: 2022,
    status: "COMPLETADO",
    score: "9.2",
  },
  {
    id: 6,
    title: "Death Stranding",
    platform: "PC",
    year: 2019,
    status: "COMPLETADO",
    score: "8.7",
  },
  {
    id: 7,
    title: "Outer Wilds",
    platform: "PC",
    year: 2019,
    status: "COMPLETADO",
    score: "9.7",
  },
  {
    id: 8,
    title: "Control",
    platform: "PS5",
    year: 2019,
    status: "COMPLETADO",
    score: "8.5",
  },
  {
    id: 9,
    title: "Celeste",
    platform: "SWITCH",
    year: 2018,
    status: "COMPLETADO",
    score: "9.0",
  },
  {
    id: 10,
    title: "Alan Wake 2",
    platform: "PS5",
    year: 2023,
    status: "EN CURSO",
    score: "—",
  },
  {
    id: 1,
    title: "Disco Elysium",
    platform: "PC",
    year: 2019,
    status: "COMPLETADO",
    score: "9.5",
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    platform: "PS4",
    year: 2018,
    status: "COMPLETADO",
    score: "9.8",
  },
  {
    id: 3,
    title: "Hollow Knight",
    platform: "SWITCH",
    year: 2017,
    status: "EN CURSO",
    score: "—",
  },
  {
    id: 4,
    title: "Elden Ring",
    platform: "PC",
    year: 2022,
    status: "EN CURSO",
    score: "—",
  },
  {
    id: 5,
    title: "The Last of Us Part II",
    platform: "PS5",
    year: 2022,
    status: "COMPLETADO",
    score: "9.2",
  },
  {
    id: 6,
    title: "Death Stranding",
    platform: "PC",
    year: 2019,
    status: "COMPLETADO",
    score: "8.7",
  },
  {
    id: 7,
    title: "Outer Wilds",
    platform: "PC",
    year: 2019,
    status: "COMPLETADO",
    score: "9.7",
  },
  {
    id: 8,
    title: "Control",
    platform: "PS5",
    year: 2019,
    status: "COMPLETADO",
    score: "8.5",
  },
  {
    id: 9,
    title: "Celeste",
    platform: "SWITCH",
    year: 2018,
    status: "COMPLETADO",
    score: "9.0",
  },
  {
    id: 10,
    title: "Alan Wake 2",
    platform: "PS5",
    year: 2023,
    status: "EN CURSO",
    score: "—",
  },
];

function Library() {
  const completedGames = games.filter(
    (game) => game.status === "COMPLETADO",
  ).length;

  return (
    <div className="library-page">
      <div className="document-reference">
        <span>G.A. / ARCHIVO PERSONAL</span>
        <span>SECCIÓN 02 - CATÁLOGO DE EVIDENCIAS</span>
      </div>

      <section className="library-heading">
        <h2>LIBRARY</h2>
        <div>
          <p>Todo juego deja una huella.</p>
          <small>Colecciona historias. Conserva el registro.</small>
        </div>
      </section>

      <div className="library-summary">
        <span>{games.length} EXPEDIENTES</span>
        <span>{games.length - completedGames} EN CURSO</span>
        <span>{completedGames} COMPLETADOS</span>
      </div>

      <div className="library-filters">
        <input
          type="text"
          placeholder="BUSCAR TÍTULO O EXPEDIENTE..."
          disabled
        />

        <select disabled defaultValue="all">
          <option value="all">ESTADO: TODOS</option>
        </select>

        <select disabled defaultValue="all">
          <option value="all">PLATAFORMA: TODAS</option>
        </select>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <div className="document-footer">
        MOSTRANDO 01-{games.length} DE {games.length} EXPEDIENTES
      </div>
    </div>
  );
}

export default Library;
