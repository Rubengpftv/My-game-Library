import { useState } from "react";
import { initialProfile } from "../data/profile";
import type { Profile } from "../data/profile";
import { games } from "../data/games";
import { comments } from "../data/comments";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  const [formUsername, setFormUsername] = useState(profile.username);
  const [formEmail, setFormEmail] = useState(profile.email);
  const [formAvatar, setFormAvatar] = useState(profile.avatar);
  const [formBiography, setFormBiography] = useState(profile.biography);

  // Estadísticas calculadas a partir de los datos existentes
  const completedGames = games.filter(
    (game) => game.status === "COMPLETADO",
  ).length;

  const inProgressGames = games.filter(
    (game) => game.status === "EN CURSO",
  ).length;

  const publishedComments = comments.filter(
    (comment) => comment.status === "PUBLICADO",
  ).length;

  function handleEdit() {
    setFormUsername(profile.username);
    setFormEmail(profile.email);
    setFormAvatar(profile.avatar);
    setFormBiography(profile.biography);
    setIsEditing(true);
  }

  function handleSubmit(
    event: Parameters<NonNullable<React.ComponentProps<"form">["onSubmit"]>>[0],
  ) {
    event.preventDefault();

    if (!formUsername.trim() || !formEmail.trim()) {
      return;
    }

    setProfile({
      ...profile,
      username: formUsername.trim(),
      email: formEmail.trim(),
      avatar: formAvatar.trim(),
      biography: formBiography.trim(),
    });

    setIsEditing(false);
  }

  return (
    <div className="profile-page">
      <div className="document-reference">
        <span>G.A. / ARCHIVO PERSONAL</span>
        <span>SECCIÓN 04 - IDENTIFICACIÓN DEL USUARIO</span>
      </div>

      <section className="profile-heading">
        <h2>PROFILE</h2>
        <p>Identificación del propietario del archivo.</p>
      </section>

      <div className="profile-content">
        <section className="profile-card">
          <div className="profile-avatar">
            {profile.avatar ? (
              <img src={profile.avatar} alt="Avatar del usuario" />
            ) : (
              <span>{profile.username.charAt(0).toUpperCase()}</span>
            )}
          </div>

          <h3>{profile.username}</h3>
          <p>{profile.email}</p>

          <div className="profile-registration">
            <span>FECHA DE REGISTRO</span>
            <strong>{profile.registrationDate}</strong>
          </div>

          <div className="profile-biography">
            <h4>BIOGRAFÍA</h4>
            <p>{profile.biography || "SIN BIOGRAFÍA REGISTRADA"}</p>
          </div>

          <button className="profile-edit-button" onClick={handleEdit}>
            EDITAR PERFIL
          </button>
        </section>

        <section className="profile-statistics">
          <h3>RESUMEN DE ACTIVIDAD</h3>

          <div className="profile-statistics-grid">
            {/* REGISTRO DE COLECCIÓN */}
            <article className="profile-stat-container">
              <h4>REGISTRO DE COLECCIÓN</h4>

              <div className="profile-stat-row">
                <span>Total de juegos</span>
                <strong>{games.length}</strong>
              </div>

              <div className="profile-stat-row">
                <span>Euros gastados</span>
                <strong>NO DISPONIBLE</strong>
              </div>
            </article>

            {/* ESTADO DE LA COLECCIÓN */}
            <article className="profile-stat-container">
              <h4>ESTADO DE LA COLECCIÓN</h4>
              <div className="profile-stat-row">
                <span>En curso</span>
                <strong>{inProgressGames}</strong>
              </div>
              <ul className="profile-game-list profile-game-list-scroll">
                {games
                  .filter((game) => game.status === "EN CURSO")
                  .map((game) => (
                    <li key={game.id}>{game.title}</li>
                  ))}
              </ul>{" "}
            </article>

            {/* JUEGOS COMPLETADOS */}
            <article className="profile-stat-container">
              <h4>JUEGOS COMPLETADOS</h4>

              <div className="profile-stat-row">
                <span>Total completados</span>
                <strong>{completedGames}</strong>
              </div>

              <details className="profile-completed-details">
                <summary>CONSULTAR COLECCIÓN</summary>
                <ul className="profile-game-list profile-game-list-scroll">
                  {games
                    .filter((game) => game.status === "COMPLETADO")
                    .map((game) => (
                      <li key={game.id}>{game.title}</li>
                    ))}
                </ul>{" "}
              </details>
            </article>

            {/* ACTIVIDAD */}
            <article className="profile-stat-container">
              <h4>ACTIVIDAD</h4>
              <div className="profile-stat-row">
                <span>Comentarios publicados</span>
                <strong>{publishedComments}</strong>
              </div>
              <button
                className="profile-comments-button"
                onClick={() => navigate("/comments")}
              >
                IR A COMMENTS →
              </button>{" "}
            </article>
          </div>
        </section>
      </div>

      {isEditing && (
        <form className="profile-form" onSubmit={handleSubmit}>
          <h3>MODIFICAR IDENTIFICACIÓN</h3>

          <label htmlFor="profile-username">NOMBRE DE USUARIO</label>
          <input
            id="profile-username"
            value={formUsername}
            onChange={(event) => setFormUsername(event.target.value)}
            required
          />

          <label htmlFor="profile-email">CORREO ELECTRÓNICO</label>
          <input
            id="profile-email"
            type="email"
            value={formEmail}
            onChange={(event) => setFormEmail(event.target.value)}
            required
          />

          <label htmlFor="profile-avatar">URL DEL AVATAR</label>
          <input
            id="profile-avatar"
            type="url"
            value={formAvatar}
            onChange={(event) => setFormAvatar(event.target.value)}
            placeholder="https://..."
          />

          <label htmlFor="profile-biography">BIOGRAFÍA</label>
          <textarea
            id="profile-biography"
            value={formBiography}
            onChange={(event) => setFormBiography(event.target.value)}
            rows={3}
          />

          <div className="profile-form-actions">
            <button type="submit">GUARDAR CAMBIOS</button>

            <button type="button" onClick={() => setIsEditing(false)}>
              CANCELAR
            </button>
          </div>
        </form>
      )}

      <div className="document-footer">LIBGA P.D. / FICHA DE PROPIETARIO</div>
    </div>
  );
}

export default ProfilePage;
