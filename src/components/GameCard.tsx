import { Link } from "react-router-dom";
import type { Game } from "../data/games";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Link to={`/library/${game.id}`} className="game-card-link">
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
            className={
              game.status === "COMPLETADO" ? "completed" : "in-progress"
            }
          >
            {game.status}
          </span>

          <span>{game.score}/10</span>
        </div>
      </article>
    </Link>
  );
}

export default GameCard;
