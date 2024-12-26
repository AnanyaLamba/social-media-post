import React, { useState } from "react";
import "./posts.css";
import {useSelector , useDispatch} from "react-redux";
import { toggleLike , addComment , selectPostById } from "../../slices/postsSlice";

const Posts = ({postId}) => {
  const [commentText , setCommentText] = useState("");
  const dispatch = useDispatch();
  const post = useSelector((state)=> selectPostById(state,postId));
  console.log("selected post:" , post);
  // if there is no post found 
  if (!post) {
    return <div className="error">Post not found!</div>;
  }

  const handleAddComments = () =>{
    if(commentText.trim()){
      dispatch(
        addComment({
          postId,
          text: commentText,
        })
      )
      setCommentText("");
    }
  }
    return ( 
    <div className="post">
        {/* user info */}
        <div className="post-header">
            <div className="user-info">
            <img src="https://picsum.photos/200/300" alt="image" className="profile-pic" />
                <h4>{post.userName}</h4>
            </div>
            <button className="post-options">...</button>
        </div>
        
        {/* post content */}
        <div className="post-image-container">
        <img src="https://picsum.photos/id/237/200/300" alt="post image"  className="post-image"/>
        </div>

        {/* post actions */}
        <div className="post-actions">
        <div className="action-buttons">
          <button className="action-btn" onClick={()=>dispatch(toggleLike(postId))}>{post.liked ? "💔" : "❤️"}</button>
          <button className="action-btn">💬</button>
          <button className="action-btn">↗️</button>
        </div>
        <span className="likes-count">{post.likes}</span>
      </div>

      

      {/* Add Comment */}
      <div className="add-comment-section">
        <textarea
          placeholder="Add a comment..."
          className="comment-input"
          value={commentText}
          onChange={(e)=> setCommentText(e.target.value)}
        ></textarea>
        <button className="post-comment-btn" onClick={handleAddComments}>Post</button>
      </div>

      {/* Comments Section */}
      <div className="post-caption">
        <strong>{post.userName}:</strong>{post.content}
      </div>
      <div className="comments-list">
       {post.comments.map((comment , index)=>(
        <div key={index} className="comment">
          <strong>{comment.userName}:</strong> {comment.text}
        </div>
       ))}
      </div>
    </div> 
    );
}
 
export default Posts;