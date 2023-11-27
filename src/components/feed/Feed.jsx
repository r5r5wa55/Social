import React from 'react'
import "./feed.css"
import  Share from '../share/Share'
import Post from '../post/Post';
import {Posts} from "../../dummyData"

export default function Feed() {
  return (
    <div className="feed">  
      <div className="feedWrappaer">
        <Share />
        {Posts.map((e)=>(<Post post={e} key={e.id}/>)
           
        )}
     

      </div>
    </div>
  )
}
