import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { POSTS_URL } from '../../utils/constants';
import { useGetSinglePost } from '../../utils/hooks';
import './../BlogPage/Post/Post.css';
import CircularProgress from '@material-ui/core/CircularProgress';

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

  const { blogPost, setBlogPost, isLoading, error, isFetching } = useGetSinglePost(
    POSTS_URL,
    postId,
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

  const postOpactiy = isFetching ? 0.5 : 1;
  const customFilling = liked ? 'crimson' : 'black';

  return (
    <>
      <div className='post' style={{ opacity: postOpactiy }}>
        {showEditForm && (
          <EditForm
            setShowEditForm={setShowEditForm}
            selectedPost={blogPost}
          />
        )}

        <div className='post'>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
              <button onClick={handleLikePost} className='likeBtn'>
                <HeartIcon fill={customFilling} />
              </button>
            </div>
          </div>
          {isAdmin && (
            <div className='actions'>
              <button onClick={handleDeletePost} className='deleteBtn'>
                <DeleteForeverIcon />
              </button>
              <button onClick={handleEditFormShow} className='selectBtn'>
                <EditIcon />
              </button>
            </div>
          )}
        </div>
      </div>
      {isFetching && <CircularProgress className='preloader' />}
    </>
  );
};