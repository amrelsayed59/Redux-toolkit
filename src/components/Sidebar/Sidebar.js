import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
