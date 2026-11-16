import { useState } from "react";
import { Link } from "react-router-dom";
import { games } from "../data/games";
import { mockPurchaseData } from "../data/ratings";
import type { Game } from "../data/games";

type RankingGame = Game & {
  purchaseDate: string;
  price: number;
};

function Ratings() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // Unimos los videojuegos con sus datos económicos y de adquisición.
  const rankingGames: RankingGame[] = games.map((game) => {
    const purchase = mockPurchaseData.find((item) => item.gameId === game.id);

    return {
      ...game,
      purchaseDate: purchase?.purchaseDate ?? "",
      price: purchase?.price ?? 0,
    };
  });

  const ratedGames = rankingGames.filter(
    (game) => game.score !== "—" && !Number.isNaN(Number(game.score)),
  );

  const unratedGames = rankingGames.filter(
    (game) => game.score === "—" || Number.isNaN(Number(game.score)),
  );

  const bestRated = [...ratedGames].sort(
    (a, b) => Number(b.score) - Number(a.score),
  );

  const worstRated = [...ratedGames].sort(
    (a, b) => Number(a.score) - Number(b.score),
  );

  const oldestGames = [...rankingGames].sort(
    (a, b) =>
      new Date(a.purchaseDate).getTime() - new Date(b.purchaseDate).getTime(),
  );

  const newestGames = [...rankingGames].sort(
    (a, b) =>
      new Date(b.purchaseDate).getTime() - new Date(a.purchaseDate).getTime(),
  );

  const mostExpensive = [...rankingGames].sort((a, b) => b.price - a.price);

  const cheapest = [...rankingGames].sort((a, b) => a.price - b.price);

  const averageScore = ratedGames.length
    ? (
        ratedGames.reduce((total, game) => total + Number(game.score), 0) /
        ratedGames.length
      ).toFixed(2)
    : "—";

  const totalSpent = rankingGames.reduce(
    (total, game) => total + game.price,
    0,
  );

  const averagePrice = rankingGames.length
    ? totalSpent / rankingGames.length
    : 0;

  const formatPrice = (price: number) =>
    price.toLocaleString("es-ES", {
      style: "currency",
      currency: "EUR",
    });

  const formatDate = (date: string) =>
    new Date(`${date}T12:00:00`).toLocaleDateString("es-ES");

  const getCounts = (values: string[]) => {
    return Object.entries(
      values.reduce<Record<string, number>>((counts, value) => {
        counts[value] = (counts[value] ?? 0) + 1;
        return counts;
      }, {}),
    ).sort((a, b) => b[1] - a[1]);
  };

  const platformRanking = getCounts(rankingGames.map((game) => game.platform));

  const genreRanking = getCounts(rankingGames.map((game) => game.genre));

  const developerRanking = getCounts(
    rankingGames.map((game) => game.developer),
  );

  const toggleRanking = (key: string) => {
    setExpanded((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  function RankingList({
    title,
    description,
    ranking,
    value,
    formatValue,
    id,
  }: {
    title: string;
    description: string;
    ranking: RankingGame[];
    value: (game: RankingGame) => string;
    formatValue?: (game: RankingGame) => string;
    id: string;
  }) {
    const isExpanded = expanded[id];
    const visibleGames = isExpanded ? ranking : ranking.slice(0, 5);

    return (
      <section className="rating-ranking">
        <div className="rating-section-heading">
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <span>{ranking.length} RECORDS</span>
        </div>

        {visibleGames.length > 0 ? (
          <ol className="rating-ranking-list">
            {visibleGames.map((game, index) => (
              <li key={game.id}>
                <span className="rating-rank-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Link to={`/library/${game.id}`} className="rating-game-name">
                  {game.title}
                  <small>{game.platform}</small>
                </Link>

                <strong>{formatValue ? formatValue(game) : value(game)}</strong>
              </li>
            ))}
          </ol>
        ) : (
          <p className="rating-empty">NO RECORDS FOUND</p>
        )}

        {ranking.length > 5 && (
          <button
            className="rating-expand-button"
            type="button"
            onClick={() => toggleRanking(id)}
          >
            {isExpanded ? "SHOW LESS" : "SHOW ALL"}
          </button>
        )}
      </section>
    );
  }

  function SimpleRanking({
    title,
    description,
    ranking,
    id,
  }: {
    title: string;
    description: string;
    ranking: [string, number][];
    id: string;
  }) {
    const isExpanded = expanded[id];
    const visibleItems = isExpanded ? ranking : ranking.slice(0, 5);

    return (
      <section className="rating-ranking">
        <div className="rating-section-heading">
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <span>{ranking.length} RECORDS</span>
        </div>

        <ol className="rating-ranking-list">
          {visibleItems.map(([name, count], index) => (
            <li key={name}>
              <span className="rating-rank-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rating-game-name">{name}</span>
              <strong>{count} GAMES</strong>
            </li>
          ))}
        </ol>

        {ranking.length > 5 && (
          <button
            className="rating-expand-button"
            type="button"
            onClick={() => toggleRanking(id)}
          >
            {isExpanded ? "SHOW LESS" : "SHOW ALL"}
          </button>
        )}
      </section>
    );
  }

  return (
    <div className="ratings-page">
      <header className="ratings-header">
        <div>
          <h2>COLLECTION RANKINGS</h2>
          <p>CLASIFICACIÓN Y REGISTROS DE LA COLECCIÓN</p>
        </div>
        <span className="ratings-file-code">FILE Nº 006 / RATINGS</span>
      </header>

      <section className="ratings-overview">
        <article className="rating-overview-card">
          <span>TOTAL RECORDS</span>
          <strong>{rankingGames.length}</strong>
          <small>JUEGOS REGISTRADOS</small>
        </article>

        <article className="rating-overview-card">
          <span>AVERAGE SCORE</span>
          <strong>{averageScore}</strong>
          <small>MEDIA DE VALORACIONES</small>
        </article>

        <article className="rating-overview-card">
          <span>TOTAL INVESTMENT</span>
          <strong>{formatPrice(totalSpent)}</strong>
          <small>DINERO INVERTIDO</small>
        </article>

        <article className="rating-overview-card">
          <span>AVERAGE PRICE</span>
          <strong>{formatPrice(averagePrice)}</strong>
          <small>PRECIO MEDIO POR JUEGO</small>
        </article>
      </section>

      <div className="ratings-category-heading">
        <h2>01 / VALORACIONES</h2>
        <span>PERSONAL SCORES</span>
      </div>

      <div className="ratings-grid">
        <RankingList
          id="best"
          title="BEST RATED"
          description="JUEGOS CON MAYOR PUNTUACIÓN"
          ranking={bestRated}
          value={(game) => game.score}
          formatValue={(game) => `${game.score} / 10`}
        />

        <RankingList
          id="worst"
          title="LOWEST RATED"
          description="JUEGOS CON MENOR PUNTUACIÓN"
          ranking={worstRated}
          value={(game) => game.score}
          formatValue={(game) => `${game.score} / 10`}
        />
      </div>

      <RankingList
        id="unrated"
        title="PENDING EVALUATION"
        description="JUEGOS TODAVÍA SIN VALORACIÓN"
        ranking={unratedGames}
        value={() => "PENDING"}
      />

      <div className="ratings-category-heading">
        <h2>02 / ANTIGÜEDAD</h2>
        <span>ACQUISITION RECORDS</span>
      </div>

      <div className="ratings-grid">
        <RankingList
          id="oldest"
          title="OLDEST ACQUISITIONS"
          description="JUEGOS QUE LLEVAN MÁS TIEMPO EN LA BIBLIOTECA"
          ranking={oldestGames}
          value={(game) => formatDate(game.purchaseDate)}
        />

        <RankingList
          id="newest"
          title="LATEST ACQUISITIONS"
          description="JUEGOS ADQUIRIDOS MÁS RECIENTEMENTE"
          ranking={newestGames}
          value={(game) => formatDate(game.purchaseDate)}
        />
      </div>

      <div className="ratings-category-heading">
        <h2>03 / ECONOMÍA</h2>
        <span>FINANCIAL RECORDS</span>
      </div>

      <div className="ratings-grid">
        <RankingList
          id="expensive"
          title="MOST EXPENSIVE"
          description="MAYOR PRECIO DE COMPRA"
          ranking={mostExpensive}
          value={(game) => formatPrice(game.price)}
        />

        <RankingList
          id="cheapest"
          title="LOWEST PRICE"
          description="MENOR PRECIO DE COMPRA"
          ranking={cheapest}
          value={(game) => formatPrice(game.price)}
        />
      </div>

      <div className="ratings-category-heading">
        <h2>04 / CURIOSIDADES</h2>
        <span>COLLECTION INSIGHTS</span>
      </div>

      <div className="ratings-grid">
        <SimpleRanking
          id="platforms"
          title="PLATFORM RECORDS"
          description="JUEGOS POR PLATAFORMA"
          ranking={platformRanking}
        />

        <SimpleRanking
          id="genres"
          title="GENRE RECORDS"
          description="GÉNEROS MÁS FRECUENTES"
          ranking={genreRanking}
        />

        <SimpleRanking
          id="developers"
          title="DEVELOPER RECORDS"
          description="DESARROLLADORAS MÁS REPRESENTADAS"
          ranking={developerRanking}
        />
      </div>

      <footer className="ratings-footer">
        <p>LOS PRECIOS Y FECHAS DE ADQUISICIÓN SON DATOS SIMULADOS.</p>
        <p>LIBGA P.D. / END OF CLASSIFICATION REPORT</p>
      </footer>
    </div>
  );
}

export default Ratings;
