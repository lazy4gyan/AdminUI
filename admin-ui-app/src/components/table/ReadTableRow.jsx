import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import style from "./style.module.scss";

const ReadTableRow = ({ user, handleEditClick, handleDeleteClick, checkedUsers,handleCheckboxChange }) => {
  const renderReadOnlyRow = [user].map(({ id, name, email, role }, idx) => {
    return (
      <tr key={idx} id={id}>
        <td>
          <input type="checkbox"  name={id} checked={checkedUsers[id]} onChange={handleCheckboxChange} />
        </td>
        <td>{name}</td>
        <td
        //  title={user.email}
        >
          {email}
        </td>
        <td>{role.charAt(0).toUpperCase() + role.slice(1)}</td>
        <td className={style.btn_container}>
          <button
            className={style.edit_btn}
            onClick={(event) => handleEditClick(event, user)}
          >
            <FaEdit />
          </button>
          <button
            className={style.delete_btn}
            onClick={() => handleDeleteClick(user.id)}
            // onClick={()=>handleDelete(id)}
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    );
  });

  return <>{renderReadOnlyRow}</>;
};

export default ReadTableRow;

