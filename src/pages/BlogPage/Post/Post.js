import React from 'react';
import './Post.css'

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

import { ReactComponent as HeartIcon } from '../../../assets/images/heart.svg';


export const Post = ({
  id,
  title,
  description,
  liked = false,
  likePost,
  deletePost,
  selectPost,
  isAdmin
}) => {

  const customFilling = liked ? 'crimson' : 'black';

  const finalDescription = (
    <p>
      {description.length > 100 ? (
        <>
          {description.slice(0, 101)}...
        </>
      ) : (
        description
      )}
      &nbsp;
      
    </p>
  );

  return (
    <div className='post'>
      <h2>{title}</h2>
      {finalDescription}  
        <button onClick={likePost} className='likeBtn'>
          <HeartIcon fill={customFilling} />
        </button>

        {isAdmin && (
          <div className="actions">
          <button onClick={deletePost} className='deleteBtn'>
            <DeleteForeverIcon />
          </button>
          <button onClick={selectPost} className='selectBtn'>
            <EditIcon />
          </button>
        </div>
        )}
    </div>
  );
};
