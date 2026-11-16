import { useParams, useNavigate } from "react-router-dom";
import { games } from "../data/games";

function GameDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const game = games.find((item) => item.id === Number(id));

  if (!game) {
    return (
      <div className="placeholder-page">
        <h2>EXPEDIENTE NO ENCONTRADO</h2>
        <p>NO EXISTE NINGÚN REGISTRO CON ESE IDENTIFICADOR.</p>

        <button onClick={() => navigate("/library")}>
          VOLVER A LA BIBLIOTECA
        </button>
      </div>
    );
  }

  return (
    <div className="game-detail">
      <div className="document-reference">
        <span>G.A. / ARCHIVO PERSONAL</span>
        <span>EXPEDIENTE N.º {String(game.id).padStart(3, "0")}</span>
      </div>

      <div className="game-detail-top">
        <div>
          <p className="game-detail-label">EXPEDIENTE DE VIDEOJUEGO</p>
          <h2>{game.title}</h2>
          <span
            className={
              game.status === "COMPLETADO" ? "completed" : "in-progress"
            }
          >
            {game.status}
          </span>
        </div>

        <button
          className="close-detail-button"
          onClick={() => navigate("/library")}
        >
          ✕ CERRAR EXPEDIENTE
        </button>
      </div>

      <div className="game-detail-content">
        <section className="game-detail-cover">PORTADA NO DISPONIBLE</section>

        <section className="game-detail-information">
          <div className="detail-section">
            <h3>FICHA TÉCNICA</h3>

            <div className="detail-data">
              <p>
                <strong>PLATAFORMA:</strong> {game.platform}
              </p>
              <p>
                <strong>AÑO:</strong> {game.year}
              </p>
              <p>
                <strong>GÉNERO:</strong> {game.genre}
              </p>
              <p>
                <strong>DESARROLLADORA:</strong> {game.developer}
              </p>
            </div>
          </div>

          <div className="detail-section">
            <h3>SINOPSIS</h3>
            <p>{game.synopsis}</p>
          </div>

          <div className="detail-section">
            <h3>REGISTRO PERSONAL</h3>
            <div className="detail-data">
              <p>
                <strong>ADQUISICIÓN:</strong> {game.purchaseDate}
              </p>
              <p>
                <strong>VALORACIÓN:</strong> {game.score}/10
              </p>
              <p>
                <strong>ESTADO:</strong> {game.status}
              </p>
            </div>
          </div>

          <div className="detail-section">
            <h3>OBSERVACIONES DEL PROPIETARIO</h3>
            <p>{game.personalNotes}</p>
          </div>
        </section>
      </div>

      <div className="document-footer">
        REGISTRO {String(game.id).padStart(3, "0")} / LIBGA P.D.
      </div>
    </div>
  );
}

export default GameDetail;
