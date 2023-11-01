import { routes } from "../utils";

export const Footer = () => {
  return (
    <footer className="page-footer black">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright, Kelvin
          <a className="right grey-text text-lighten-4" href={routes.admin}>
            Admin
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
