import "./Header.scss";
import { CgMenuLeft } from "react-icons/cg";
function Header() {
  return (
    <div className="header">
        <label className="menuLabel" htmlFor="togglerCheckBox">
        <input
            type="checkbox"
            title="togglerCheck"
            name="togglerCheckBox"
            id="togglerCheckBox"   
          />
          <CgMenuLeft className="menuIcon"/>
        </label>
        <span className="headerText">Unsplash Photos</span>
    </div>
  );
}

export default Header;
