// import React, { createContext, useState, useEffect } from "react";
// import { BASE_URL } from "../utilities/constants";

// export const GlobalContext = createContext({});

// export const GlobalProvider = ({ children }) => {
//   const [company, setCompany] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [query, setQuery] = useState("");
//   const searchParam = ["name", "email", "role"];

//   useEffect(() => {
//     async function company() {
//       try {
//         const res = await fetch(`${BASE_URL}/adminui-problem/members.json`);
//         if (!res.ok) {
//           const message = `An error has occured: ${res.status} - ${res.statusText}`;
//           throw new Error(message);
//         }
//         const data = await res.json();
//         setCompany(data);
//       } catch (err) {
//         setErrorMessage(err.message);
//       }
//     }
//     company();
//   }, []);

//   const onSearchChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const searchResult = company.filter((user) => {
//     return searchParam.some((x) => {
//       return user[x].toString().toLowerCase().indexOf(query.toLowerCase()) > -1;
//     });
//   });

//   const [editFormData, setEditFormData] = useState({
//     name: "",
//     email: "",
//     role: "",
//   });

//   const [editUserId, setEditUserId] = useState(null);

//   const handleEditFormChange = (event) => {
//     event.preventDefault();

//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;

//     const newFormData = { ...editFormData };
//     newFormData[fieldName] = fieldValue;

//     setEditFormData(newFormData);
//   };

//   const handleEditFormSubmit = (event) => {
//     event.preventDefault();

//     const editedContact = {
//       id: editUserId,
//       name: editFormData.name,
//       email: editFormData.email,
//       role: editFormData.role,
//     };

//     const newCompanyData = [...company];

//     const index = company.findIndex((user) => user.id === editUserId);

//     newCompanyData[index] = editedContact;

//     setCompany(newCompanyData);
//     setEditUserId(null);
//   };

//   const handleEditClick = (event, user) => {
//     event.preventDefault();
//     setEditUserId(user.id);

//     const formValues = {
//       name: user.name,
//       email: user.email,
//       role: user.role,
//     };

//     setEditFormData(formValues);
//   };

//   const handleCancelClick = () => {
//     setEditUserId(null);
//   };

//   const handleDeleteClick = (ID) => {
//     const newCompanyData = [...company];

//     const index = company.findIndex((user) => user.id === ID);

//     newCompanyData.splice(index, 1);

//     setCompany(newCompanyData);
//   };

//   return (
//     <GlobalContext.Provider
//       value={{
//         company,
//         onSearchChange,
//         searchResult,
//         searchResult,
//         editUserId,
//         handleDeleteClick,
//         handleCancelClick,
//         handleEditClick,
//         handleEditFormSubmit,
//         handleEditFormChange,
//         errorMessage,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };
import React, { createContext, useState, useEffect } from "react";
import { BASE_URL } from "../utilities/constants";

// const BASE_URL = `https://geektrust.s3-ap-southeast-1.amazonaws.com`;

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [company, setCompany] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [query, setQuery] = useState("");
  const searchParam = ["name", "email", "role"];
  const [checkedUsers, setCheckedUsers] = useState({});


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
      [event.target.name]: event.target.checked
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
    setQuery(e.target.value);
  };

  const searchResult = company.filter((user) =>
  user.name.toLowerCase().includes(query.toLowerCase()) ||
  user.email.toLowerCase().includes(query.toLowerCase()) ||
  user.role.toLowerCase().includes(query.toLowerCase()));

  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  const [editUserId, setEditUserId] = useState(null);

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
      role: editFormData.role
    };

    const newCompanyData = [...company];

    const index = company.findIndex((user) => user.id === editUserId);

    newCompanyData[index] = editedContact;

    setCompany(newCompanyData);
    setEditUserId(null);
  };

  const handleEditClick = (event, user) => {
    event.preventDefault();
    setEditUserId(user.id);

    const formValues = {
      name: user.name,
      email: user.email,
      role: user.role
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditUserId(null);
  };

  const handleDeleteClick = (ID) => {
    const newCompanyData = [...company];

    const index = company.findIndex((user) => user.id === ID);

    newCompanyData.splice(index, 1);

    setCompany(newCompanyData);
  };

  const deleteSelectedCheckbox = () =>{
    const updatedUsers = company.filter(user => !checkedUsers[user.id]);
    setCompany(updatedUsers);
    setCheckedUsers({});
  }

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
        errorMessage
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
