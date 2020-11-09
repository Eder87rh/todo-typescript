import React from "react";
import { Link } from "react-router-dom";

export type HeaderProps = { title: string };
export const Header: React.FC<HeaderProps> = ({ title }) => {
  const replaceTheme = (newThemeName: boolean) => {
    console.log("replaceTheme -> newThemeName", newThemeName);
    const myElement: HTMLElement | null = document.getElementById("main");

    if (!!myElement) {
      myElement.className = newThemeName
        ? "main dark-theme"
        : "main dark-theme";
    }
  };

  return (
    <header>
      <h1>{title}</h1>
      <input
        type="checkbox"
        name="theme"
        id="theme"
        onChange={(e) => replaceTheme(e.target.checked)}
      />
      <Link to="/">Pendings</Link>
      <Link to="/create">New To do</Link>
    </header>
  );
};

export default Header;
