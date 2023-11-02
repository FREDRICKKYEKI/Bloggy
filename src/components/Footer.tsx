import { routes } from "../utils";

export const Footer = () => {
  const admin_tok = localStorage.getItem("admin_tk");
  return (
    <footer className="page-footer black">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright, Kelvin
          <a className="right grey-text text-lighten-4" href={routes.admin}>
            {admin_tok === (import.meta as any).env.VITE_ADMIN_KEY
              ? "Admin"
              : ""}
          </a>
          <br />
          <br />
          <span>
            Website by <a href="https://github.com/FREDRICKKYEKI">FRED</a>
          </span>
        </div>
      </div>
    </footer>
  );
};
