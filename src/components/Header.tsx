import * as React from 'react';
import { Link } from 'react-router-dom';

export type HeaderProps = { title: string }
export const Header: React.FC<HeaderProps> = ({ title }) => {
  console.log({ title })
  return (
    <header>
      <h1>{title}</h1>
      <Link to="/">Pendings</Link>
      <Link to="/create">New To do</Link>
    </header>
  )
};


export default Header;