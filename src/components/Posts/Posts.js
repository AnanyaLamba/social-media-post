import React, { useState } from "react";
import "./posts.css";
import {useSelector , useDispatch} from "react-redux";
import { toggleLike , addComment , selectPostById , editComment , deleteComment} from "../../slices/postsSlice";

const Posts = ({postId}) => {
  const [commentText , setCommentText] = useState("");
  const dispatch = useDispatch();
  const [editingCommentId, setEditingCommentId] = useState(null);
const [updatedText, setUpdatedText] = useState("");
  
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
      {/* <div className="comments-list">
       {post.comments.map((comment , index)=>(
        <div key={index} className="comment">
          <strong>{comment.userName}:</strong> {comment.text}
          <button onClick={handle}>Edit </button>
          <button>Delete </button>
        </div>
       ))}
      </div> */}
      <div className="comments-list">
  {post.comments.map((comment) => (
    <div key={comment.id} className="comment">
      {editingCommentId === comment.id ? (
        <div>
          {/* Editing Mode */}
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            className="edit-comment-input"
          />
          <button
            onClick={() => {
              dispatch(
                editComment({
                  postId: post.id,
                  commentId: comment.id,
                  updatedText,
                })
              );
              setEditingCommentId(null);
            }}
            className="save-comment-btn"
          >
            Save
          </button>
          <button
            onClick={() => setEditingCommentId(null)}
            className="cancel-edit-btn"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          {/* Display Mode */}
          <strong>{comment.userName}:</strong> {comment.text}
          <button
            onClick={() => {
              setEditingCommentId(comment.id);
              setUpdatedText(comment.text);
            }}
            className="edit-comment-btn"
          >
            Edit
          </button>
          <button
            onClick={() =>
              dispatch(deleteComment({ postId: post.id, commentId: comment.id }))
            }
            className="delete-comment-btn"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  ))}
</div>

    </div> 
    );
}
 
export default Posts;