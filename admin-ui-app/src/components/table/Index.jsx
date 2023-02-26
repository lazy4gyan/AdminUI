import { Fragment, useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from "../../contexts/Provider";
import EditTableRow from "./EditTableRow";
import ReadTableRow from "./ReadTableRow";
import DeleteConfirmation from "../../utilities/useDelete/useDeleteConfirmation";
import style from "./style.module.scss";

const AdminTable = ({ companyUser }) => {
  const {
    editUserId,
    handleEditFormSubmit,
    editFormData,
    handleEditFormChange,
    handleCancelClick,
    handleEditClick,
    handleDeleteClick,
    checkedUsers,
    handleCheckAll,
    handleCheckboxChange,
    deleteSelectedCheckbox,
    showConfirmation,
    setShowConfirmation,
  } = useContext(GlobalContext);
  return (
    <>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" onChange={handleCheckAll} />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companyUser.map((user, idx) => (
              <Fragment key={idx}>
                {editUserId === user.id ? (
                  <EditTableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadTableRow
                    user={user}
                    checkedUsers={checkedUsers}
                    handleCheckboxChange={handleCheckboxChange}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
        {Object.values(checkedUsers).includes(true) && (
          <button
            className={`${style.delete} ${style.button_reset}`}
            onClick={() => setShowConfirmation(true)}
          >
            <FaTrashAlt /> Delete
          </button>
        )}
        {showConfirmation && (
          <DeleteConfirmation
            onCancel={() => setShowConfirmation(false)}
            onDelete={deleteSelectedCheckbox}
          />
        )}
      </form>
      <ToastContainer />
    </>
  );
};

export default AdminTable;
