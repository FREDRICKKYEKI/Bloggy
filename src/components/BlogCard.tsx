export const BlogCard = ({ post }: { post: any }) => {
  return (
    <div style={{ cursor: "pointer" }} className="card ">
      <div className="card-content">
        <span className="card-title">
          <h4>{post?.title}</h4>
        </span>
        <span>{post?.description}</span>
        <div className="card-action">
          <a className="center-align" href={`blog/${post.id}`}>
            Read Blog
          </a>
        </div>
      </div>
    </div>
  );
};
