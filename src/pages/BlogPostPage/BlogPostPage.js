import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { POSTS_URL } from '../../utils/constants';
import { useGetSinglePost } from '../../utils/hooks';

import { ReactComponent as HeartIcon } from '../../assets/images/heart.svg';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../../store/slices/posts';
import { EditForm } from '../../components/EditForm/EditForm';

export const BlogPostPage = ({ isAdmin }) => {
  const { postId } = useParams();

  const history = useHistory();

  const dispatch = useDispatch();

  const { blogPost, setBlogPost, isLoading, error } = useGetSinglePost(
    POSTS_URL,
    postId
  );

  const [showEditForm, setShowEditForm] = useState(false);

  const { title, description, liked } = blogPost;

  if (isLoading) return <h1>Получаем данные...</h1>;

  if (error) return <h1>{error.message}</h1>;

  const handleLikePost = () => {
    const updatedPost = { ...blogPost, liked: !blogPost.liked };

    dispatch(editPost(updatedPost)).then(() => {
      setBlogPost(updatedPost);
    });
  };

  const handleDeletePost = () => {
    const isDelete = window.confirm('Удалить пост?');

    if (isDelete) {
      dispatch(deletePost(postId)).then(() => history.goBack());
    }
  };

  const handleEditFormShow = () => setShowEditForm(true);

  const customFilling = liked ? 'crimson' : 'black';

  return (
    <div className='post'>
      <h2>{title}</h2>
      {description}
        <button onClick={handleLikePost} className='likeBtn'>
          <HeartIcon fill={customFilling} />
        </button>
     {/* {isAdmin && (
      <div className='actions'>
        <button onClick={handleDeletePost} className='deleteBtn'>
          <DeleteForeverIcon />
        </button>
        <button onClick={handleEditFormShow} className='selectBtn'>
          <EditIcon />
        </button>
      </div>
        )} */}
      {showEditForm && (
        <EditForm setShowEditForm={setShowEditForm} selectedPost={blogPost} />
      )}
    </div>
  
  );
};
