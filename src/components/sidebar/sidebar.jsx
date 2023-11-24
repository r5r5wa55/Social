import React from 'react'
import "./sidebar.css"
import { RssFeed ,Chat,PlayCircle,Group, Bookmark, HelpOutline, WorkOutline, EventNote, School} from '@mui/icons-material'


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className='sidebarIcon' />
                <span className="sidebarListItemText">
                  Feed
                </span>
            </li>
            <li className="sidebarListItem">
              <Chat className='sidebarIcon' />
                <span className="sidebarListItemText">
                Chats
                </span>
            </li>
            <li className="sidebarListItem">
              <PlayCircle className='sidebarIcon' />
                <span className="sidebarListItemText">
                Videos
                </span>
            </li>
            <li className="sidebarListItem">
              <Group className='sidebarIcon' />
                <span className="sidebarListItemText">
                Groups
                </span>
            </li>
            <li className="sidebarListItem">
              <Bookmark className='sidebarIcon' />
                <span className="sidebarListItemText">
                Bookmarks
                </span>
            </li>
            <li className="sidebarListItem">
              <HelpOutline className='sidebarIcon' />
                <span className="sidebarListItemText">
                Questions
                </span>
            </li>
            <li className="sidebarListItem">
              <WorkOutline className='sidebarIcon' />
                <span className="sidebarListItemText">
                Jobs
                </span>
            </li>
            <li className="sidebarListItem">
              <EventNote className='sidebarIcon' />
                <span className="sidebarListItemText">
                Events
                </span>
            </li>
            <li className="sidebarListItem">
              <School className='sidebarIcon' />
                <span className="sidebarListItemText">
                Courses
                </span>
            </li>
          </div>
            <button className='sidebarButton'>Show More</button>
            <hr className='sidebarHr'/>
            <ul className='sidebarFridenList'>
                <li className="sidebarFridend">
                  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Esso</span>
                </li>
            </ul>
            <ul className='sidebarFridenList'>
                <li className="sidebarFridend">
                  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Esso</span>
                </li>
            </ul>
            <ul className='sidebarFridenList'>
                <li className="sidebarFridend">
                  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Esso</span>
                </li>
            </ul>
            <ul className='sidebarFridenList'>
                <li className="sidebarFridend">
                  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Esso</span>
                </li>
            </ul>
            <ul className='sidebarFridenList'>
                <li className="sidebarFridend">
                  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Esso</span>
                </li>
            </ul>
            <ul className='sidebarFridenList'>
                <li className="sidebarFridend">
                  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Esso</span>
                </li>
            </ul>
            <ul className='sidebarFridenList'>
                <li className="sidebarFridend">
                  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Esso</span>
                </li>
            </ul>
            <ul className='sidebarFridenList'>
                <li className="sidebarFridend">
                  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Esso</span>
                </li>
            </ul>
            <ul className='sidebarFridenList'>
                <li className="sidebarFridend">
                  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Esso</span>
                </li>
            </ul>
            <ul className='sidebarFridenList'>
                <li className="sidebarFridend">
                  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Esso</span>
                </li>
            </ul>
            <ul className='sidebarFridenList'>
                <li className="sidebarFridend">
                  <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Esso</span>
                </li>
            </ul>
        </div>

    </div>
  )
}
