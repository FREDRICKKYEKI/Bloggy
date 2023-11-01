import { BlogCard } from "../components/BlogCard";
import { usePosts } from "../contexts/PostsProvider";

export const Blogs = () => {
  let { posts } = usePosts() as any;
  const postsArray: any[] | null = posts ? Object.values(posts) : [];
  return (
    <div className="container">
      <h4>Blogs for you</h4>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          {postsArray?.length > 0 ? (
            postsArray?.map((post) => <BlogCard key={post.id} post={post} />)
          ) : (
            <p>You do not have any posts yet</p>
          )}
        </div>
      </div>
    </div>
  );
};
