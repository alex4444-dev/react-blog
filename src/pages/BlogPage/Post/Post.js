import React from "react";
import "./Post.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

export const Post = ({
  id,
  title,
  description,
  liked = false,
  likePost,
  deletePost,
  selectPost,
  isAdmin,
}) => {
  const heartFill = liked ? "crimson" : "black";

  const finalDescription = (
    <p>
      {description.length > 100 ? (
        <>{description.slice(0, 101)}...</>
      ) : (
        description
      )}
      &nbsp;
      <Link to={`/blog/${id}`}>Подробнее</Link>
    </p>
    
  );

  return (
    <div className="post">
      <h3>{title}</h3>
      {finalDescription}
      <button onClick={likePost} className="likeBtn">
       <FavoriteIcon style={{ fill: heartFill }}  />
      </button>
      
      

      {isAdmin && (
        <div className="actions">
          <button onClick={deletePost} className="deleteBtn">
            <DeleteForeverIcon />
          </button>
          <button onClick={selectPost} className="selectBtn">
            <EditIcon />
          </button>
        </div>
      )}
      
    </div>
  )
}    