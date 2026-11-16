import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

function Home() {
  const { isAuthenticated, login, register } = useAuth();
  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(
    event: Parameters<NonNullable<React.ComponentProps<"form">["onSubmit"]>>[0],
  ) {
    event.preventDefault();
    setError("");

    const success = isRegistering
      ? register(username, email, password)
      : login(email, password);

    if (!success) {
      setError("Debes completar todos los campos.");
      return;
    }

    navigate("/library");
  }

  return (
    <div
      className={`home-cover-content ${
        isAuthenticated ? "home-cover-authenticated" : ""
      }`}
    >
      <div className="home-cover-form">
        {!isAuthenticated && (
          <div className="home-form-container">
            <h1>{isRegistering ? "REGISTER" : "LOGIN"}</h1>

            <form onSubmit={handleSubmit}>
              {isRegistering && (
                <label>
                  USERNAME
                  <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                  />
                </label>
              )}

              <label>
                EMAIL
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>

              <label>
                PASSWORD
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </label>

              {error && <p className="home-error">{error}</p>}

              <button type="submit">
                {isRegistering ? "CREATE ACCOUNT" : "SIGN IN"}
              </button>
            </form>

            <p className="home-switch-form">
              {isRegistering
                ? "¿Ya tienes una cuenta?"
                : "¿Todavía no tienes una cuenta?"}

              <button
                type="button"
                onClick={() => {
                  setIsRegistering(!isRegistering);
                  setError("");
                }}
              >
                {isRegistering ? "LOGIN" : "REGISTER"}
              </button>
            </p>
          </div>
        )}
      </div>
      <div className="home-cover-divider" />
      <div className="home-cover-logo">
        <img src={logo} alt="LIBGA P.D. - Game Archive" />
      </div>
    </div>
  );
}

export default Home;
