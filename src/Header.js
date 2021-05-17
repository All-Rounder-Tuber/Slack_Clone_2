import React from 'react';
import "./Header.css"
import "./App.css"
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export default function Header() {
  return(
    <div className="header">
      <div className="header_left">
        <Avatar
        className="header_avatar"
        alt="Pranshu Mohanty"
        src=""
        />
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input type="text" placeholder="Search Slack"/>
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  )
}