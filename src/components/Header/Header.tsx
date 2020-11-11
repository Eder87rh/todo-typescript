import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./header.module.css";

export type HeaderProps = { title: string };
export const Header: React.FC<HeaderProps> = ({ title }) => {
  const [darkMode, setDarkMode] = useState(false);
  const replaceTheme = (newThemeName: boolean) => {
    setDarkMode(newThemeName);
    const mainElement: HTMLElement | null = document.getElementById("main");

    if (!!mainElement) {
      const curretClassName: string | null = mainElement.getAttribute("class");
      const mainClass: string | undefined = curretClassName?.split(" ")[0];

      mainElement.className = newThemeName
        ? `${mainClass} dark-theme`
        : `${mainClass} light-theme`;
    }
  };

  return (
    <header>
      <h1 className={Styles.title}>{title}</h1>
      <div className={Styles.toolbar}>
        <nav className={Styles.navContainer}>
          <NavLink
            exact
            className={Styles.navElement}
            activeClassName={Styles.activeNavElement}
            to="/"
          >
            Pendings
          </NavLink>
          <NavLink
            exact
            className={Styles.navElement}
            activeClassName={Styles.activeNavElement}
            to="/create"
          >
            New Task
          </NavLink>
        </nav>
        <div>
          <input
            id="theme"
            style={{ marginRight: ".8rem" }}
            type="checkbox"
            name="theme"
            onChange={(e) => replaceTheme(e.target.checked)}
          />
          <label htmlFor="theme">{darkMode ? "Light Mode" : "Dark mode"}</label>
        </div>
      </div>
    </header>
  );
};

export default Header;
