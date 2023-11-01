import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { supabase } from "../App";
import { childrenProps } from "../styles/types";

const PostsContext = createContext({});

export function usePosts() {
  return useContext(PostsContext);
}

export const PostsProvider = ({ children }: childrenProps) => {
  const [posts, setPosts] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("user_tk") as string)
  );

  const postDict: any = {};
  useEffect(() => {
    supabase
      .from("posts")
      .select("*")
      .then(({ data, error }) => {
        if (error) {
          setLoading(false);
        } else {
          for (const post of data) {
            postDict[post.id] = post;
          }
          setPosts(postDict);
          setLoading(false);
        }
      });
  }, []);
  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    token,
  };
  if (loading) return <div className="container center">Loading...</div>;

  return (
    <PostsContext.Provider value={value}>
      {!loading && children}
    </PostsContext.Provider>
  );
};
