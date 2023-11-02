import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../contexts/PostsProvider";
import { useEffect } from "react";
import { routes } from "../utils";
import MDEditor from "@uiw/react-md-editor";

export const Blog = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { posts } = usePosts() as any;
  const post = posts[params?.id as any];

  useEffect(() => {
    if (!post) navigate(routes.home);
  }, []);

  return (
    <div
      data-color-mode="light"
      style={{ marginTop: "2rem" }}
      className="container"
    >
      <MDEditor.Markdown source={post?.content} />
    </div>
  );
};
