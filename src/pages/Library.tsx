import GameCard from "../components/GameCard";
import { games } from "../data/games";

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
