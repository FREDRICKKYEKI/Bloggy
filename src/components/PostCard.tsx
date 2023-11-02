import MDEditor from "@uiw/react-md-editor";

export const PostCard = ({ post }: any) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          style={{ maxHeight: "150px", objectFit: "cover" }}
          src="/assets/icon.jpg"
        />
        <span
          className="card-title"
          style={{ background: "rgb(0,0,0,.5)", height: "100%", width: "100%" }}
        >
          <h6>{post.title} </h6>
        </span>
      </div>
      <div className="card-content">
        <MDEditor.Markdown
          source={post.description}
          style={{
            whiteSpace: "pre-wrap",
            height: "100px" /* Adjust the maximum height as needed */,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        />
      </div>
      <div className="card-action">
        <a className="center-align" href={`blog/${post.id}`}>
          Read Blog
        </a>
      </div>
    </div>
  );
};
