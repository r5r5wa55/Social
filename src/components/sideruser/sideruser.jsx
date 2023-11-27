import React from 'react'
import "./sideruser.css"

export default function sideruser({user}) {
  return (
    <div>
      
            <ul className='sidebarFridenList'>
                <li className="sidebarFridend">
                  <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">{user.username}</span>
                </li>
            </ul>

    </div>
  )
}
