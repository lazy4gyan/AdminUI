import "./useDeleteStyle.scss"

const DeleteConfirmation = ({ onCancel, onDelete }) => {
  return (
    <div className="delete-confirmation">
      <h2 className="dialog-container">Are you sure you want to delete records?</h2>
      <div className="buttons">
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
