export const AdminPostCard = ({
  post,
  loading,
  setIsOpen,
  setToDelete,
}: {
  post: any;
  loading: boolean;
  setIsOpen: Function;
  setToDelete: Function;
}) => {
  return (
    <div style={{ cursor: "pointer" }} className="card ">
      <div className="card-content">
        <span className="card-title">
          <h4>{post?.title}</h4>
        </span>
        <span>{post?.description}</span>
        <div className="card-action">
          <ul style={{ display: "flex", gap: "1rem" }}>
            <li>
              <a href={`admin/edit/${post.id}`}>
                <button disabled={loading} className="btn d-flex teal">
                  <i className="material-icons">edit</i>
                  Edit
                </button>
              </a>
            </li>
            <li>
              <button
                disabled={loading}
                className="btn d-flex red darken-2"
                id={post?.id}
                onClick={() => {
                  setIsOpen(true);
                  setToDelete(post?.id);
                }}
              >
                <i className="material-icons">delete</i>
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
