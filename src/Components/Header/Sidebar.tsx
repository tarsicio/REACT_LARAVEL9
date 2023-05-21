import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { AiFillDashboard } from "react-icons/ai";
import { MdNotificationsActive } from "react-icons/md";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { SiOpenaccess } from "react-icons/si";
import { GoFileSubmodule } from "react-icons/go";
import { IoIosColorPalette } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { BsArrowLeftSquare } from "react-icons/bs";
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
import { userData } from '../../store/StoreDataUser';

function SideBar() {
  const  { t, i18n } = useTranslation();
  const _sidebar = userData(state => state.setSidebar);
  let href = null;
  href = window.location.pathname;

  const changeSidebar = (e) =>{
    _sidebar(false);
    e.preventDefault();
    history.push(href);
  }

  return (    
    <div className="sidebar">
      <table>
        <thead>
          <tr>
            <th style={{padding:"15px"}}>
              <NavLink className="nav-link" to={href} onClick={()=> changeSidebar()}>
                  <BsArrowLeftSquare />
              </NavLink>              
            </th>
            <th style={{padding:"15px"}}>{t('sidebar.menu')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <NavLink className="nav-link" to={DASHBOARD} style={{color: "white", padding:"10px"}}>
                  <AiFillDashboard />
              </NavLink>              
            </td>
            <td>
              <NavLink className="nav-link" to={DASHBOARD} style={{color: "white", padding:"10px"}}>
                  {t('sidebar.dashboard')}
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink className="nav-link" to={USERS} style={{color: "white", padding:"10px"}}>
                  <FaUserTie />
              </NavLink>
            </td>
            <td>
              <NavLink className="nav-link" to={USERS} style={{color: "white", padding:"10px"}}>
                  {t('sidebar.users')}
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink className="nav-link" to={NOTIFICATIONS} style={{color: "white", padding:"10px"}}>
                  <MdNotificationsActive />
              </NavLink>
            </td>
            <td>
              <NavLink className="nav-link" to={NOTIFICATIONS} style={{color: "white", padding:"10px"}}>
                  {t('sidebar.notifications')}
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink className="nav-link" to={ROLS} style={{color: "white", padding:"10px"}}>
                  <GiPoliceOfficerHead />
              </NavLink>
            </td>
            <td>
              <NavLink className="nav-link" to={ROLS} style={{color: "white", padding:"10px"}}>
                  {t('sidebar.rols')}
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink className="nav-link" to={MODULES} style={{color: "white", padding:"10px"}}>
                  <GoFileSubmodule />
              </NavLink>
            </td>
            <td>
              <NavLink className="nav-link" to={MODULES} style={{color: "white", padding:"10px"}}>
                  {t('sidebar.module')}
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink className="nav-link" to={PERMISSIONS} style={{color: "white", padding:"10px"}}>
                <SiOpenaccess />
              </NavLink>
            </td>
            <td>
              <NavLink className="nav-link" to={PERMISSIONS} style={{color: "white", padding:"10px"}}>
                {t('sidebar.permission')}
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink className="nav-link" to="#" style={{color: "white", padding:"10px"}}>
                <IoIosColorPalette />
              </NavLink>              
            </td>
            <td>
              <NavLink className="nav-link" to="#" style={{color: "white", padding:"10px"}}>
                {t('sidebar.color')}
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink className="nav-link" to={LOGOUT} style={{color: "white", padding:"10px"}}>
                <ImExit />
              </NavLink>
            </td>
            <td>
              <NavLink className="nav-link" to={LOGOUT} style={{color: "white", padding:"10px"}}>
                {t('header.logout')}
              </NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SideBar;