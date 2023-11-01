import { useAuth } from "../contexts/AuthContext";
import { BrandIcon } from "./BrandIcon";
import { routes } from "../utils";
import { supabase } from "../App";
import { WritePostButton } from "./WritePostButton";

export const NavBar = () => {
  const { currentUser } = useAuth() as any;

  async function handleSignOut(e: Event) {
    e.preventDefault();
    localStorage.removeItem("user_tk");
    localStorage.removeItem("admin_tk");
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error.message);
    }
  }
  return (
    <div className="navbar-fixed">
      <nav style={{ height: "70px" }} className="black">
        <div className="nav-wrapper container">
          <a style={{ marginTop: "0.5rem" }} href="/" className="brand-logo">
            <BrandIcon variant="sm" />
            Bloggy
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
              <li>
                <a href={routes.login}>Login</a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
