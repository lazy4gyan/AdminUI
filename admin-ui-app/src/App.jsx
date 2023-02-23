import { useContext, useMemo, useState } from "react";
import "./App.scss";
import Pagination from "./components/pagination/Index";
import AdminTable from "./components/table/Index";
import { GlobalContext } from "./contexts/Provider";
import AdminPage from "./page/Index";

function App() {
  return (
    <div className="App">
      <AdminPage />
    </div>
  );
}

export default App;
