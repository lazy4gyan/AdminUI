import { Fragment, useContext, useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { GlobalContext } from "../../contexts/Provider";
import EditTableRow from "./EditTableRow";
import ReadTableRow from "./ReadTableRow";
import style from "./style.module.scss";

const AdminTable = ({ companyUser }) => {
  const {
    company,
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
    errorMessage,
  } = useContext(GlobalContext);


  return (
    <>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox"  onChange={handleCheckAll} />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companyUser.map((user,idx) => (
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
        <button 
            className={`${style.delete} ${style.button_reset}`}
         onClick={deleteSelectedCheckbox}>
          <FaTrashAlt/> Delete
          </button>
      </form>
    </>
  );
};

export default AdminTable;
