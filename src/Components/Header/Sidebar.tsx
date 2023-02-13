import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import { 
  HOME, 
  LOGIN, 
  DASHBOARD, 
  LOGOUT, 
  USERS, 
  MODULES,
  ROLS,
  NOTIFICATIONS,
  PERMISSIONS } from '../../config/rutas/rutas';
import { useTranslation } from 'react-i18next';
import '../Footer/background.css';

function SideBar() {
  const  { t, i18n } = useTranslation();  

  return (
    <div className="sidebar" >
      <ul style={{listStyleType: 'none'}}>
        <li>
          <NavLink className="nav-link" to={DASHBOARD} style={{color: "white", padding:"10px"}}>
            {t('sidebar.dashboard')}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to={USERS} style={{color: "white", padding:"10px"}}>
            {t('sidebar.users')}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to={NOTIFICATIONS} style={{color: "white", padding:"10px"}}>
            {t('sidebar.notifications')}
          </NavLink>
        </li>
      </ul>
      <div className="sidebar-dropdown">
        <ul style={{listStyleType: 'none'}}>
          <li>
            <NavLink className="nav-link" to={ROLS} style={{color: "white", padding:"10px"}}>
            {t('sidebar.rols')}
          </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={MODULES} style={{color: "white", padding:"10px"}}>
            {t('sidebar.module')}
          </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={PERMISSIONS} style={{color: "white", padding:"10px"}}>
            {t('sidebar.permission')}
          </NavLink>
          </li>
        </ul>
      </div>
      <ul style={{listStyleType: 'none'}}>
        <li>
          <NavLink className="nav-link" to="#" style={{color: "white", padding:"10px"}}>
            {t('sidebar.color')}
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to={LOGOUT} style={{color: "white", padding:"10px"}}>
            {t('header.logout')}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;