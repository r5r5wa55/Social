import React from 'react';
import './share.css'
import { EmojiObjects, Label, PermMedia, Room } from '@mui/icons-material';


export default function Share() {
  return (
    <div>
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
            <input type="text" className="shareInput" placeholder='What is  your mind'/>
          </div>
        </div>
        <hr className="shareHr" />
        <div className="shareBotton">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className='shareIcon' htmlColor='tomato'/>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label className='shareIcon' htmlColor='blue'/>
              <span className="shareOptionText" >Tag</span>
            </div>
            <div className="shareOption">
              <Room className='shareIcon' htmlColor="green"/>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption"htmlColor="golden">
              <EmojiObjects className='shareIcon' />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div> 
      </div>
    </div>
  )
}
