import "./Header.scss";
import { CgMenuLeft } from "react-icons/cg";
import { Type } from "../../Services/interfaces";
function Header( {dispatch}:any) {


  return (
    <div className="header">
        <CgMenuLeft className="menuIcon" onClick={() => { dispatch({ type: Type.sidebarToggle })}}/>
        <span className="headerText">Unsplash Photos</span>
    </div>
  );
}

export default Header;
