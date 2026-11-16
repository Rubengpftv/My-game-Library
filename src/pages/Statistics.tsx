import { games } from "../data/games";
import { comments } from "../data/comments";

function Statistics() {
  const completedGames = games.filter((game) => game.status === "COMPLETADO");

  const inProgressGames = games.filter((game) => game.status === "EN CURSO");

  const ratedGames = completedGames.filter((game) => game.score !== "—");

  const averageScore =
    ratedGames.length > 0
      ? (
          ratedGames.reduce((total, game) => total + Number(game.score), 0) /
          ratedGames.length
        ).toFixed(2)
      : "—";

  const publishedComments = comments.filter(
    (comment) => comment.status === "PUBLICADO",
  );

  const draftComments = comments.filter(
    (comment) => comment.status === "BORRADOR",
  );

  const platforms = games.reduce<Record<string, number>>((result, game) => {
    result[game.platform] = (result[game.platform] || 0) + 1;
    return result;
  }, {});

  const genres = games.reduce<Record<string, number>>((result, game) => {
    result[game.genre] = (result[game.genre] || 0) + 1;
    return result;
  }, {});

  return (
    <div className="statistics-page">
      <div className="document-reference">
        <span>G.A. / ARCHIVO PERSONAL</span>
        <span>SECCIÓN 05 - INFORME ESTADÍSTICO</span>
      </div>

      <section className="statistics-heading">
        <h2>STATISTICS</h2>
        <p>Análisis de actividad y composición de la colección.</p>
      </section>

      <section className="statistics-overview">
        <article className="statistics-card">
          <span>JUEGOS REGISTRADOS</span>
          <strong>{games.length}</strong>
        </article>

        <article className="statistics-card">
          <span>JUEGOS COMPLETADOS</span>
          <strong>{completedGames.length}</strong>
        </article>

        <article className="statistics-card">
          <span>JUEGOS EN CURSO</span>
          <strong>{inProgressGames.length}</strong>
        </article>

        <article className="statistics-card">
          <span>MEDIA DE VALORACIONES</span>
          <strong>{averageScore}</strong>
        </article>
      </section>

      <div className="statistics-details">
        <section className="statistics-container">
          <h3>DISTRIBUCIÓN POR PLATAFORMA</h3>

          {Object.entries(platforms).map(([platform, total]) => (
            <div className="statistics-row" key={platform}>
              <span>{platform}</span>
              <strong>{total}</strong>
            </div>
          ))}
        </section>

        <section className="statistics-container">
          <h3>DISTRIBUCIÓN POR GÉNERO</h3>

          {Object.entries(genres).map(([genre, total]) => (
            <div className="statistics-row" key={genre}>
              <span>{genre}</span>
              <strong>{total}</strong>
            </div>
          ))}
        </section>

        <section className="statistics-container">
          <h3>ACTIVIDAD DE COMENTARIOS</h3>

          <div className="statistics-row">
            <span>Publicados</span>
            <strong>{publishedComments.length}</strong>
          </div>

          <div className="statistics-row">
            <span>Borradores</span>
            <strong>{draftComments.length}</strong>
          </div>

          <div className="statistics-row">
            <span>Total</span>
            <strong>{comments.length}</strong>
          </div>
        </section>
      </div>

      <div className="document-footer">
        INFORME GENERADO A PARTIR DE LOS REGISTROS DISPONIBLES
      </div>
    </div>
  );
}

export default Statistics;
