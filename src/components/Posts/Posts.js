import React from "react";
import "./posts.css";
const Posts = () => {
    return ( 
    <div className="post">
        {/* user info */}
        <div className="post-header">
            <div className="user-info">
            <img src="https://picsum.photos/200/300" alt="image" className="profile-pic" />
                <h4>lion</h4>
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
          <button className="action-btn">❤️</button>
          <button className="action-btn">💬</button>
          <button className="action-btn">↗️</button>
        </div>
        <span className="likes-count">5 likes</span>
      </div>

      

      {/* Add Comment */}
      <div className="add-comment-section">
        <textarea
          placeholder="Add a comment..."
          className="comment-input"
        ></textarea>
        <button className="post-comment-btn">Post</button>
      </div>

      {/* Comments Section */}
      <div className="post-caption">
        <strong>John Doe</strong> This is a sample caption for the post.
      </div>
      <div className="comments-list">
        <div className="comment">
          <strong>Jane Doe:</strong> This is a comment.
        </div>
        <div className="comment">
          <strong>Mary Jane:</strong> Another great comment!
        </div>
      </div>
    </div> 
    );
}
 
export default Posts;