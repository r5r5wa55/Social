import React from 'react'
import Topbar  from "../../components/topbar/Topbar"
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/sidebar'
import Feed from '../../components/feed/Feed'
import "./proflie.css"



export default function Home() {
  return (

    <>
      {/* <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className="profileRight">
            <div className="prfileRightTop">werapol</div>
            <div className="prfileRightBottom">
                <Feed />
                <Rightbar />
            </div>
        </div>
     
      </div> */}
       <Topbar />
      <div className='homeContainer'>
 
        <Sidebar />
        <div className="prfileRightTop">
            <div className="profilewerapi">
                <div className="profileCover">
                    <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                    <img src="/assets/person/7.jpeg" alt="" className="porfileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInforName">Werapol</h4>
                    <span className="profileDesc">Hello My Friends...</span>
                </div>
            </div>
            <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
            </div>
        </div>
    
      </div>
    </>
  )
}
