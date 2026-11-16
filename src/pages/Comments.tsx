import { useState } from "react";
import { comments as initialComments } from "../data/comments";
import type { Comment } from "../data/comments";
import { games } from "../data/games";

function Comments() {
  // Estado de los comentarios
  const [comments, setComments] = useState<Comment[]>(initialComments);

  // Estados de búsqueda y filtrado
  const [search, setSearch] = useState("");
  const [selectedGame, setSelectedGame] = useState("all");

  // Estados del formulario
  const [showForm, setShowForm] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [formGameId, setFormGameId] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formStatus, setFormStatus] = useState<Comment["status"]>("PUBLICADO");

  // Filtrado de comentarios
  const filteredComments = comments.filter((comment) => {
    const game = games.find((item) => item.id === comment.gameId);

    const matchesSearch =
      comment.content.toLowerCase().includes(search.toLowerCase()) ||
      game?.title.toLowerCase().includes(search.toLowerCase());

    const matchesGame =
      selectedGame === "all" || comment.gameId === Number(selectedGame);

    return matchesSearch && matchesGame;
  });

  // Abrir formulario para crear un comentario
  function handleCreate() {
    setEditingCommentId(null);
    setFormGameId("");
    setFormContent("");
    setFormStatus("PUBLICADO");
    setShowForm(true);
  }

  // Abrir formulario para editar un comentario
  function handleEdit(comment: Comment) {
    setEditingCommentId(comment.id);
    setFormGameId(String(comment.gameId));
    setFormContent(comment.content);
    setFormStatus(comment.status);
    setShowForm(true);
  }

  // Guardar comentario nuevo o editado
  function handleSubmit(
    event: Parameters<NonNullable<React.ComponentProps<"form">["onSubmit"]>>[0],
  ) {
    event.preventDefault();

    if (!formGameId || !formContent.trim()) {
      return;
    }

    if (editingCommentId !== null) {
      setComments((currentComments) =>
        currentComments.map((comment) =>
          comment.id === editingCommentId
            ? {
                ...comment,
                gameId: Number(formGameId),
                content: formContent.trim(),
                status: formStatus,
              }
            : comment,
        ),
      );
    } else {
      const newComment: Comment = {
        id: Math.max(0, ...comments.map((comment) => comment.id)) + 1,
        gameId: Number(formGameId),
        date: new Date().toLocaleDateString("es-ES"),
        content: formContent.trim(),
        status: formStatus,
      };

      setComments((currentComments) => [newComment, ...currentComments]);
    }

    setShowForm(false);
    setEditingCommentId(null);
  }

  // Eliminar comentario
  function handleDelete(commentId: number) {
    setComments((currentComments) =>
      currentComments.filter((comment) => comment.id !== commentId),
    );
  }

  return (
    <div className="comments-page">
      <div className="document-reference">
        <span>G.A. / ARCHIVO PERSONAL</span>
        <span>SECCIÓN 03 - REGISTRO DE COMENTARIOS</span>
      </div>

      <section className="comments-heading">
        <div>
          <h2>COMMENTS</h2>
          <p>Todo expediente guarda una historia.</p>
          <small>Registro de observaciones personales.</small>
        </div>

        <button className="comment-create-button" onClick={handleCreate}>
          + NUEVO COMENTARIO
        </button>
      </section>

      <div className="comments-summary">
        <span>{comments.length} COMENTARIOS</span>
        <span>
          {comments.filter((comment) => comment.status === "PUBLICADO").length}{" "}
          PUBLICADOS
        </span>
        <span>
          {comments.filter((comment) => comment.status === "BORRADOR").length}{" "}
          BORRADORES
        </span>
      </div>

      {showForm && (
        <form className="comment-form" onSubmit={handleSubmit}>
          <h3>
            {editingCommentId !== null
              ? "EDITAR COMENTARIO"
              : "NUEVO COMENTARIO"}
          </h3>

          <label htmlFor="comment-game">VIDEOJUEGO</label>

          <select
            id="comment-game"
            value={formGameId}
            onChange={(event) => setFormGameId(event.target.value)}
            required
          >
            <option value="">SELECCIONA UN VIDEOJUEGO</option>

            {games.map((game) => (
              <option key={game.id} value={game.id}>
                {game.title}
              </option>
            ))}
          </select>

          <label htmlFor="comment-content">CONTENIDO</label>

          <textarea
            id="comment-content"
            value={formContent}
            onChange={(event) => setFormContent(event.target.value)}
            placeholder="ESCRIBE TUS OBSERVACIONES..."
            rows={4}
            required
          />

          <label htmlFor="comment-status">ESTADO</label>

          <select
            id="comment-status"
            value={formStatus}
            onChange={(event) =>
              setFormStatus(event.target.value as Comment["status"])
            }
          >
            <option value="PUBLICADO">PUBLICADO</option>
            <option value="BORRADOR">BORRADOR</option>
          </select>

          <div className="comment-form-actions">
            <button type="submit">
              {editingCommentId !== null
                ? "GUARDAR CAMBIOS"
                : "CREAR COMENTARIO"}
            </button>

            <button type="button" onClick={() => setShowForm(false)}>
              CANCELAR
            </button>
          </div>
        </form>
      )}

      <div className="comments-filters">
        <input
          type="text"
          placeholder="BUSCAR COMENTARIO O VIDEOJUEGO..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={selectedGame}
          onChange={(event) => setSelectedGame(event.target.value)}
        >
          <option value="all">VIDEOJUEGO: TODOS</option>

          {games.map((game) => (
            <option key={game.id} value={game.id}>
              {game.title}
            </option>
          ))}
        </select>
      </div>

      <div className="comments-list">
        {filteredComments.length > 0 ? (
          filteredComments.map((comment) => {
            const game = games.find((item) => item.id === comment.gameId);

            return (
              <article className="comment-card" key={comment.id}>
                <div className="comment-card-reference">
                  <span>
                    COMENTARIO N.º {String(comment.id).padStart(3, "0")}
                  </span>
                  <span>{comment.date}</span>
                </div>

                <h3>{game?.title ?? "VIDEOJUEGO DESCONOCIDO"}</h3>

                <p>{comment.content}</p>

                <div className="comment-card-footer">
                  <span
                    className={
                      comment.status === "PUBLICADO"
                        ? "completed"
                        : "in-progress"
                    }
                  >
                    {comment.status}
                  </span>

                  <div className="comment-actions">
                    <button type="button" onClick={() => handleEdit(comment)}>
                      EDITAR
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(comment.id)}
                    >
                      ELIMINAR
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        ) : (
          <div className="comments-empty">
            <h3>NINGÚN REGISTRO ENCONTRADO</h3>
            <p>No hay comentarios que coincidan con la búsqueda.</p>
          </div>
        )}
      </div>

      <div className="document-footer">
        MOSTRANDO {filteredComments.length} DE {comments.length} COMENTARIOS
      </div>
    </div>
  );
}

export default Comments;
