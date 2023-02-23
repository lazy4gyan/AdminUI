import { Fragment, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/Provider";
import EditTableRow from "./EditTableRow";
import ReadTableRow from "./ReadTableRow";
import style from "./style.module.scss";

const AdminTable = () => {
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
    errorMessage
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
            {company.map((user) => (
              <Fragment>
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
        <button onClick={deleteSelectedCheckbox}>Delete</button>
      </form>
    </>
  );
};

export default AdminTable;
