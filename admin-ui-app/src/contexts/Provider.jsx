import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../utilities/constants";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [company, setCompany] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedUsers, setCheckedUsers] = useState({});
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [editUserId, setEditUserId] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    async function company() {
      try {
        const res = await fetch(`${BASE_URL}/adminui-problem/members.json`);
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
        const data = await res.json();
        setCompany(data);
      } catch (err) {
        setErrorMessage(err.message);
      }
    }
    company();
  }, []);

  const handleCheckboxChange = (event) => {
    setCheckedUsers({
      ...checkedUsers,
      [event.target.name]: event.target.checked,
    });
  };

  const handleCheckAll = (event) => {
    const newCheckedUsers = {};

    if (event.target.checked) {
      company.forEach((item) => {
        newCheckedUsers[item.id] = true;
      });
    } else {
      company.forEach((item) => {
        newCheckedUsers[item.id] = false;
      });
    }

    setCheckedUsers(newCheckedUsers);
  };

  const onSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchResult = company.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editUserId,
      name: editFormData.name,
      email: editFormData.email,
      role: editFormData.role,
    };
    const newCompanyData = [...company];
    const index = company.findIndex((user) => user.id === editUserId);
    newCompanyData[index] = editedContact;
    setCompany(newCompanyData);
    setEditUserId(null);
    if (newCompanyData && editUserId !== null) {
      toast.success("Your record has been updated.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleEditClick = (event, user) => {
    event.preventDefault();
    setEditUserId(user.id);

    const formValues = {
      name: user.name,
      email: user.email,
      role: user.role,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditUserId(null);
  };

  const handleDeleteClick = (ID) => {
    const filteredUsers = company.filter((user) => user.id !== ID);
    setCompany(filteredUsers);
    if (filteredUsers) {
      toast.success("Record was deleted.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const deleteSelectedCheckbox = () => {
    const updatedUsers = company.filter((user) => !checkedUsers[user.id]);
    setCompany(updatedUsers);
    setShowConfirmation(false);
    if (updatedUsers) {
      toast.success("Record was deleted.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    setCheckedUsers({});
  };

  return (
    <GlobalContext.Provider
      value={{
        company,
        onSearchChange,
        searchResult,
        editUserId,
        editFormData,
        checkedUsers,
        handleCheckAll,
        handleCheckboxChange,
        deleteSelectedCheckbox,
        handleDeleteClick,
        handleCancelClick,
        handleEditClick,
        handleEditFormSubmit,
        handleEditFormChange,
        showConfirmation,
        setShowConfirmation,
        errorMessage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
