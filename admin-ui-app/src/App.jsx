import { useContext, useMemo, useState } from 'react';
import './App.scss'
import Pagination from './components/pagination/Index';
import AdminTable from './components/table/Index';
import { GlobalContext } from './contexts/Provider';
import AdminPage from './page/Index';

// let PageSize = 10;

function App() {

  // const [currentPage, setCurrentPage] = useState(1);

  // const globalStore = useContext(GlobalContext);
  // const {membersData} = globalStore;

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return membersData.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);
  return (
    <div className="App">
      {/* {<AdminTable currentTableData={currentTableData}/>}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={membersData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      /> */}
      <AdminPage/>
    </div>
  )
}

export default App
