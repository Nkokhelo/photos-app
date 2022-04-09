import "./Header.scss";
import { CgMenuLeft } from "react-icons/cg";
function Header( {toggleMenu}:any) {


  return (
    <div className="header">
        <CgMenuLeft className="menuIcon" onClick={toggleMenu}/>
        <span className="headerText">Unsplash Photos</span>
    </div>
  );
}

export default Header;
