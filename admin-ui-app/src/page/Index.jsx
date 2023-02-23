import { useContext, useMemo, useState } from 'react';
// import Pagination from '../components/pagination/Index';
import Search from '../components/search/Index'
import AdminTable from '../components/table/Index'
import { GlobalContext } from '../contexts/Provider';

// let PageSize = 10;


const AdminPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

  const globalStore = useContext(GlobalContext);
  // const {companyData} = globalStore;

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return companyData.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);
  return (
    <section style={{margin:"1rem"}}>
        <Search />
        <div style={{marginTop:"2rem"}}>
       <AdminTable/>
        {/* <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={companyData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      /> */}
        </div>
    </section>
  )
}

export default AdminPage
