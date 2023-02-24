import React from "react";
import { FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

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
          className={style.name_input}
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
          className={style.email_input}
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
          className={style.role_input}
          type="text"
          required="required"
          placeholder="Enter a role..."
          name="role"
          value={editFormData?.role}
          onChange={handleEditFormChange}
        />
      </td>
      <td className={style.btn_container}>
        <button 
            className={`${style.SUCCESS} ${style.button_reset}`}
        type="submit">
          <FaCheck />
        </button>
        <button 
            className={`${style.REJECT} ${style.button_reset}`}
        type="button" onClick={handleCancelClick}>
          {/* Cancel */}
          <RxCross1/>
        </button>
      </td>
    </tr>
  );
};

export default EditTableRow;
