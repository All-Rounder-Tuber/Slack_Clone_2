import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <h2>All Rounder Tech</h2>
        <h3>
          <FiberManualRecordIcon />
          Pranshu Mohanty
        </h3>
      </div>
    </div>
  );
}
