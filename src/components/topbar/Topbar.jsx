import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@mui/icons-material"

import React from 'react'

export default function Topbar() {
  return (
    <div>
        <div className="topbarContainer">
          <div className="topbarLeft">
            <span className="logo">werpol</span>
          </div>
          <div className="topbarcanter">
            <div className="searchber">
              <Search className="searhIcon"/>
              <input type="text" className="searchInput" placeholder="ค้นหาข้อมูล"/>
            </div>
          </div>
          <div className="topbarRight">
            <div className="topbarLinks">
              <span className="topbarLink">HomePage</span>
              <span className="topbarLink">TimeLine</span>
            </div>

            <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person />
                <span className="topbarIconBadge">1</span>
              </div>

              <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge">3</span>
              </div>

              <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconBadge">10</span>
              </div>
            </div >
            <img src="/assets/person/1.jpeg" alt="" className="topbarImage"/>
          </div>
      
        </div>
    </div>
  )
}

