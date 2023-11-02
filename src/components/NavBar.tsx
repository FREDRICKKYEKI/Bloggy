import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { BrandIcon } from "./BrandIcon";
import { routes } from "../utils";
import { supabase } from "../App";
// import M from "materialize-css/dist/js/materialize.min.js";
import M from "materialize-css";
import { WritePostButton } from "./WritePostButton";

export const NavBar = () => {
  const { currentUser } = useAuth() as any;
  const admin_tk = localStorage.getItem("admin_tk") as string;

  async function handleSignOut(e: Event) {
    e.preventDefault();
    localStorage.removeItem("user_tk");
    localStorage.removeItem("admin_tk");
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    try {
      let sidenav = document.querySelector("#slide-out");
      if (sidenav) {
        M.Sidenav.init(sidenav, {});
      }
    } catch (e) {}
  }, []);

  return (
    <>
      <div className="navbar-fixed">
        <nav style={{ height: "70px" }} className="nav-extended black ">
          <div className="nav-wrapper container">
            <a style={{ marginTop: "0.5rem" }} href="/" className="brand-logo">
              <BrandIcon variant="sm" />
              Bloggy
            </a>
            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href={routes.blogs}>Blogs</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              {currentUser?.email ? (
                <>
                  <li>
                    <a
                      href={routes.login}
                      onClick={(e) => handleSignOut(e.nativeEvent)}
                    >
                      Logout
                    </a>
                  </li>
                  <li>
                    <WritePostButton />
                  </li>
                </>
              ) : (
                <li>{admin_tk ? <a href={routes.login}>Login</a> : ""}</li>
              )}
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="slide-out">
        <li>
          <a href={routes.home}>Home</a>
        </li>
        <li>
          <a href={routes.blogs}>Blogs</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        {currentUser?.email ? (
          <>
            <li>
              <a
                href={routes.login}
                onClick={(e) => handleSignOut(e.nativeEvent)}
              >
                Logout
              </a>
            </li>
            <li>
              <WritePostButton />
            </li>
          </>
        ) : (
          <li>{admin_tk ? <a href={routes.login}>Login</a> : ""}</li>
        )}
      </ul>
    </>
  );
};
