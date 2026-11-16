interface Game {
  id: number;
  title: string;
  platform: string;
  year: number;
  status: string;
  score: string;
}

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <article className="game-card">
      <div className="game-card-reference">
        <span>N.º {String(game.id).padStart(3, "0")}</span>
        <span>GA / 024</span>
      </div>

      <div className="game-cover-placeholder">PORTADA NO DISPONIBLE</div>

      <h3>{game.title}</h3>

      <p className="game-metadata">
        {game.platform} · {game.year}
      </p>

      <div className="game-card-footer">
        <span
          className={game.status === "COMPLETADO" ? "completed" : "in-progress"}
        >
          {game.status}
        </span>

        <span>{game.score}/10</span>
      </div>
    </article>
  );
}

export default GameCard;
