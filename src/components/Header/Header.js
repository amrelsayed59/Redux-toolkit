import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';

const Header = () => {
  const { name } = useSelector((state) => state.user.userData);
  return (
    <>
      <div className="header">
        <h1>Logo</h1>
        <p>Hello {name}</p>
      </div>
    </>
  );
};

export default Header;
