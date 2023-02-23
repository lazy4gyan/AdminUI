import React from "react";
import { FaCheck } from "react-icons/fa";
import style from "./style.module.scss";

const EditTableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick
}) => {
  return (
    <tr>
      <td>
        <input type="checkbox" id="" name="" />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editFormData?.name}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData?.email}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a role..."
          name="role"
          value={editFormData?.role}
          onChange={handleEditFormChange}
        />
      </td>
      <td className={style.btn_container}>
        <button type="submit">
          <FaCheck />
        </button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditTableRow;
