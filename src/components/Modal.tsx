import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export const Dialog = ({
  isOpen,
  closeModal,
  title,
  setTitle,
  description,
  setDescription,
  onSubmit,
}: {
  isOpen: boolean;
  closeModal: any;
  title: string;
  setTitle: any;
  description: string;
  setDescription: any;
  onSubmit: any;
}) => {
  return (
    <Modal open={isOpen} onClose={closeModal} center>
      <div className="container">
        <h5>Create a New Blog Post</h5>
        <form className="form center" onSubmit={onSubmit}>
          <div className="input-field">
            <input
              id="blog_title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="validate"
              value={title}
              required
            />
            <label htmlFor="blog_title">Title</label>
          </div>
          <div className="input-field">
            <textarea
              id="blog_description"
              className="materialize-textarea"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            ></textarea>
            <label htmlFor="blog_description">Description</label>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};
