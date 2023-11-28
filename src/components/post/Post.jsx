import React, { useState } from 'react'
import './post.css'
import { MoreVert } from '@mui/icons-material'
import {Users} from '../../dummyData'

export default function Post({post}) {

  
    const [like,setlike]= useState(post.like)
    const [isLike ,setIsLike] = useState(true);

    function likePost(e){
        console.log(isLike);
        setlike(isLike ? like + 1 : like -1 )
        setIsLike(!isLike)
    }


  return (

        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" className="postTopLeftImg" />
                        <span className="postUsername">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div> 
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className='postImeCenter'/>   
                </div>
                <div className="postBottom">
                    <div className="postBottonLeft">
                        <img src="assets/like.png" alt="" className="likeIcon" onClick={likePost} />
                        <img src="assets/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">{like}  people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comment</span>
                    </div>
                </div>
            </div>
        </div>

  )
}
