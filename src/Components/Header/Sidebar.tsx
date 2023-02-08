import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar" style={{padding:"10px", backgroundColor: "#EAECEE"}}>
      <ul style={{listStyleType: 'none'}}>
        <li>
          <a href="#" className="sidebar-link" style={{textDecoration: 'none'}}>Link 1</a>
        </li>
        <li>
          <a href="#" className="sidebar-link" style={{textDecoration: 'none'}}>Link 2</a>
        </li>
        <li>
          <a href="#" className="sidebar-link" style={{textDecoration: 'none'}}>Link 3</a>
        </li>
      </ul>
      <div className="sidebar-dropdown">
        <ul style={{listStyleType: 'none'}}>
          <li>
            <a href="#" className="dropdown-link" style={{textDecoration: 'none'}}>Dropdown 1</a>
          </li>
          <li>
            <a href="#" className="dropdown-link" style={{textDecoration: 'none'}}>Dropdown 2</a>
          </li>
          <li>
            <a href="#" className="dropdown-link" style={{textDecoration: 'none'}}>Dropdown 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;