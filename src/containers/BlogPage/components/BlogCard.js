import './BlogCard.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { NavLink } from 'react-router-dom';

export const BlogCard = ({
  title,
  description,
  liked,
  likePost,
  deletePost,
  handleEditFormShow,
  handleSelectPost,
  isAdmin,
}) => {

  const showEditForm = () => {
    handleSelectPost();
    handleEditFormShow();
  }

  const heartFill = liked ? 'crimson' : 'black'

  const shortDescription = description.length > 200 ? (
    <>
      <span>{`${description.slice(0, 201)}...`}</span>
    </>
  ) : description



  return (
    <div className="post">
      <div className="postContent">
        <h2>{title}</h2>
        <p>{shortDescription}</p>
        <div>
          <button onClick={likePost}>
            <FavoriteIcon style={{ fill: heartFill }} />
          </button>
        </div>
      </div>
      {isAdmin && (
        <div className="postsControl">
          <button className="editBtn" onClick={showEditForm}>
            <EditIcon />
          </button>
          <button className="deleteBtn" onClick={deletePost}>
            <DeleteForeverIcon />
          </button>
        </div>
      )}
    </div>
  );
};
