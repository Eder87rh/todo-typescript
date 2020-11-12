import * as React from "react";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { IDropdownItem } from "./IDropdownItem";
import Styles from "./dropdown.module.css";

export type DropDownProps = { options: IDropdownItem[] };
export const DropDown: React.FC<DropDownProps> = ({ options }) => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  return (
    <div className={Styles.dropdown}>
      <MenuIcon
        className={Styles.button}
        onClick={() => setMenuVisible(!menuVisible)}
      />
      <div
        className={Styles.content}
        style={{ display: menuVisible ? "block" : "none" }}
      >
        {options.map((option) => (
          <div onClick={option.action} className={Styles.item}>
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
