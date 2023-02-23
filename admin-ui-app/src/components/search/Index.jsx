import { useContext } from "react";
import { GlobalContext } from "../../contexts/Provider";
import style from "./style.module.scss";

const Search = () => {
  const globalStore = useContext(GlobalContext);
  const {onSearchChange} = globalStore;

  return (
    <div>
      <input className={style.searchbar} type="text" placeholder="Search by name, email or role" onChange={onSearchChange}/>
    </div>
  )
}

export default Search
