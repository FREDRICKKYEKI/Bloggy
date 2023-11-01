import { PostCard } from "../components/PostCard";
import { heroText } from "../utils";
import { usePosts } from "../contexts/PostsProvider";

export const Home = () => {
  let { posts } = usePosts() as { posts: {} };
  const postsArray: any[] = Object.values(posts);
  return (
    <>
      <div className="container row section">
        <div className="col l6 s12">
          <img
            className="responsive-img landing-img right"
            src="/assets/home_setup.jpg"
          />{" "}
        </div>
        <div className="col l6 s12 center-align">
          <h4>My Blog</h4>
          <p className="intro-text">{heroText.introTextOne}</p>
          <p className="intro-text">{heroText.introTextTwo}</p>
        </div>
      </div>

      <div className="section container">
        <h3>Featured Posts </h3>
        <div className="row">
          {postsArray.length > 0 ? (
            postsArray.slice(0, 3).map((data: any) => (
              <div className="col s12 m4">
                <PostCard key={data.id} post={data} />
              </div>
            ))
          ) : (
            <p>You do not have any posts yet</p>
          )}
        </div>
      </div>
    </>
  );
};
