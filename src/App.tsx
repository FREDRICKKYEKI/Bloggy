import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { createClient } from "@supabase/supabase-js";
import { routes } from "./utils";
import { Admin } from "./pages/Admin";
import { useLocalStorage } from "@uidotdev/usehooks";
import { AuthProvider } from "./contexts/AuthContext";
import { RequireAuth } from "./components/RequireAuth";
import { Write } from "./pages/Write";
import { Blog } from "./pages/Blog";
import { PostsProvider } from "./contexts/PostsProvider";
import { Blogs } from "./pages/Blogs";

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL;
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  const [token, setToken] = useLocalStorage<string | null>("user_tk", null);

  return (
    <AuthProvider>
      <PostsProvider>
        <NavBar />
        <main>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route
              path={routes.login}
              element={<Login token={token} setToken={setToken} />}
            />
            <Route
              path={routes.admin}
              element={
                <RequireAuth>
                  <Admin user={token} />
                </RequireAuth>
              }
            />
            <Route path={routes.edit} element={<Write />} />
            <Route path={routes.write_new} element={<Write />} />
            <Route path={routes.blog} element={<Blog />} />
            <Route path={routes.blogs} element={<Blogs />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </main>
        <Footer />
      </PostsProvider>
    </AuthProvider>
  );
}

export default App;
