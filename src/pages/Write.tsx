import { useState, useEffect } from "react";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { Dialog } from "../components/Modal";
import { supabase } from "../App";
import { mdStr, routes } from "../utils";
import { useLocation, useNavigate } from "react-router-dom";

export const Write = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const [postContent, setPostContent] = useState(mdStr);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState<any>(null);
  const [description, setDescription] = useState("");

  async function handleSubmit(e: FormDataEvent) {
    e.preventDefault();
    setLoading(true);
    setOpenModal(false);
    const newPost = {
      content: postContent,
      title: title,
      description: description,
    };
    if (post && post.id) {
      const { error } = await supabase
        .from("posts")
        .update(newPost)
        .eq("id", post.id);
      alert(error ? error : "Post Updated!");
      setLoading(false);
      return;
    } else {
      const { error } = await supabase.from("posts").insert([newPost]);
      alert(error ? error : "Success!");
      navigate(routes.admin);
      setLoading(false);
    }
  }

  useEffect(() => {
    const blogParams = location.pathname.split("/")[3];

    if (blogParams === "new") return;
    else {
      supabase
        .from("posts")
        .select("*")
        .eq("id", blogParams)
        .then(({ data, error }) => {
          if (error) alert(error.message);
          else {
            const post_ = data[0];
            setPost(post_);
            setTitle(post_.title);
            setDescription(post_.description);
            setPostContent(post_.content);
          }
        });
    }
  }, []);

  return (
    <div className="container center">
      <MarkdownEditor
        defaultValue={postContent}
        value={postContent}
        style={{ padding: "2rem" }}
        onChange={(text, _) => setPostContent(text)}
      />
      <button
        onClick={() => setOpenModal(true)}
        disabled={loading}
        style={{ margin: "1rem" }}
        className="btn teal"
      >
        <span style={{ display: "flex", alignItems: "center" }}>
          <i className="material-icons">save</i>
          Save
        </span>
      </button>
      <Dialog
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
