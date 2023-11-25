import React from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'


export default function Post() {
  return (

        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="" className="postTopLeftImg" />
                        <span className="postUsername">Werapol</span>
                        <span className="postDate">4 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div> 
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! It my frist</span>
                    <img src="/assets/post/1.jpeg" alt="" className='postImeCenter'/>   
                </div>
                <div className="postBottom">
                    <div className="postBottonLeft">
                        <img src="assets/like.png" alt="" className="likeIcon" />
                        <img src="assets/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">4 comment</span>
                    </div>
                </div>
            </div>
        </div>

  )
}