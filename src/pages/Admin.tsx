import { supabase } from "../App";
import { AdminPostCard } from "../components/AdminPostCard";
import { DeleteModal } from "../components/DeleteModal";
import { usePosts } from "../contexts/PostsProvider";
import { useState } from "react";

export const Admin = ({ user }: any) => {
  let { posts } = usePosts() as any;
  const postsArray: any[] | null = posts ? Object.values(posts) : [];
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [toDelete, setToDelete] = useState<string>("");

  function handleDeletePost(e: any) {
    e.preventDefault();
    if (!toDelete) return;
    setIsOpen(false);
    setLoading(true);

    supabase
      .from("posts")
      .delete()
      .match({ id: toDelete })
      .then(({ data, error }) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(data);
        setLoading(false);
        alert("Post deleted successfully!");
        window.location.reload();
      });
  }

  return (
    <>
      <div className="container">
        <h4>Admin Dashboard</h4>
        <hr />
        <div className="row">
          <div className="">{JSON.parse(user)?.email}</div>
          <div className="col s12 m8 offset-m2">
            <h5 className="center-align">My Posts</h5>
            {postsArray?.length > 0 ? (
              postsArray?.map((post) => (
                <AdminPostCard
                  key={post.id}
                  post={post}
                  loading={loading}
                  setIsOpen={setIsOpen}
                  setToDelete={setToDelete}
                />
              ))
            ) : (
              <p>You do not have any posts yet</p>
            )}
          </div>
        </div>
        <DeleteModal
          open={isOpen}
          handleDeletePost={handleDeletePost}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </>
  );
};
