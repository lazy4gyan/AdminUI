import { useContext, useState } from "react";
import Pagination from "../components/pagination/Index";
import Search from "../components/search/Index";
import AdminTable from "../components/table/Index";
import { GlobalContext } from "../contexts/Provider";
import ErrorPage from "./ErrorPage";
import "./style.scss";

const AdminPage = () => {
  const globalStore = useContext(GlobalContext);
  const { company, errorMessage, searchResult } = globalStore;
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const items = searchResult ? searchResult : company;
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    const maxPageNumber = Math.ceil(items.length / itemsPerPage);
    if (pageNumber < 1) {
      pageNumber = 1;
    } else if (pageNumber > maxPageNumber) {
      pageNumber = maxPageNumber;
    }
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const companyUser = items.slice(startIndex, endIndex);
  return (
    <section className="page_container">
      {!errorMessage ? (
        <>
          <Search />
          <div className="table_container">
            <AdminTable companyUser={companyUser} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      ) : (
        <ErrorPage errorMessage={errorMessage} />
      )}
    </section>
  );
};

export default AdminPage;
