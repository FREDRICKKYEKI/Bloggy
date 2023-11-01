import { useParams, useNavigate } from "react-router-dom";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { usePosts } from "../contexts/PostsProvider";
import { useEffect } from "react";
import { routes } from "../utils";

export const Blog = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { posts } = usePosts() as any;
  const post = posts[params?.id as any];

  useEffect(() => {
    if (!post) navigate(routes.home);
  }, []);

  return (
    <div style={{ marginTop: "2rem" }} className="container">
      <MarkdownEditor.Markdown source={post?.content} />;
    </div>
  );
};
