import { useAuth } from "../contexts/AuthContext";
import { childrenProps } from "../styles/types";
import { useLocation, Navigate } from "react-router-dom";
import { routes } from "../utils";

export const RequireAuth = ({ children }: childrenProps) => {
  const { currentUser } = useAuth() as any;
  const location = useLocation();
  const tok = JSON.parse(JSON.parse(localStorage.getItem("user_tk") as string));
  const admin_tok = localStorage.getItem("admin_tk") as string;

  if (!currentUser?.email && !tok?.email && !admin_tok) {
    return <Navigate to={routes.login} state={location.pathname} />;
  }

  return children;
};
