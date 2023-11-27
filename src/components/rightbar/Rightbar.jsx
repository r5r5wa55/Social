import React from 'react'
import "./rightbar.css"
import Online from "../online/Online"
import {Users} from "../../dummyData"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">

          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other firend</b>have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>

        {Users.map((e)=>(<Online user={e} key={e.id}/>))}
        
      </div>
    </div>
  )
}
