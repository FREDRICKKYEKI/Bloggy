import Modal from "react-responsive-modal";

export const DeleteModal = ({
  open,
  onClose,
  handleDeletePost,
}: {
  open: boolean;
  onClose: any;
  handleDeletePost: Function;
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete this post?</p>
      <div className="row">
        <div className="col">
          <button className="btn teal" onClick={(e) => handleDeletePost(e)}>
            Yes
          </button>
        </div>
        <div className="col">
          <button className="btn red" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};
