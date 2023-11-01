import { useState, useEffect } from "react";
import { BrandIcon } from "../components/BrandIcon";
import { routes, themeColors } from "../utils";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../App";

const Login = ({ setToken }: { setToken: Function; token: string | null }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const adminToken = localStorage.getItem("admin_tk");

  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      alert(error.message || "An error occurred while logging in");
    } else {
      setToken(JSON.stringify(data.user));
      navigate(routes.admin);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!adminToken) {
      navigate(routes.home);
      alert("You are not authorized to view this page");
    }
  }, []);

  if (!adminToken) {
    return (
      <div>
        <h2>Admin Page Only</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }} className="container">
      <div className="row">
        <form
          className="col s12 m6 offset-m3 center-align"
          onSubmit={(e) => handleLogin(e)}
        >
          <div className="card">
            <div className="card-content">
              <div className="center">
                <BrandIcon variant="sm" />
              </div>
              <span className="card-title center">Admin Login</span>
              <div className="input-field">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="validate teal-accent-4"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="validate teal-accent-4"
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="card-action">
              <button
                disabled={loading}
                style={{ background: themeColors.brand }}
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
