import React from 'react';
import { useParams } from 'react-router-dom';
import { POSTS_URL } from '../../utils/constants';
import { useGetSinglePost } from '../../utils/hooks';
import './../BlogPage/Post/Post.css';
import CircularProgress from '@material-ui/core/CircularProgress';

import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch } from 'react-redux';
import { editPost } from '../../store/slices/posts';

export const BlogPostPage = ({ isAdmin }) => {
  const { postId } = useParams();

  const dispatch = useDispatch();

  const { blogPost, setBlogPost, isLoading, error, isFetching } = useGetSinglePost(
    POSTS_URL,
    postId,
  );

  const { title, description, liked } = blogPost;

  if (isLoading) return <h1>Получаем данные...</h1>;

  if (error) return <h1>{error.message}</h1>;

  const handleLikePost = () => {
    const updatedPost = { ...blogPost, liked: !blogPost.liked };

    dispatch(editPost(updatedPost)).then(() => {
      setBlogPost(updatedPost);
    });
  };

  

  const postOpactiy = isFetching ? 0.5 : 1;
  const heartFill = liked ? 'crimson' : 'black';

  return (
    <>
      <div className='post' style={{ opacity: postOpactiy }}>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
              <button onClick={handleLikePost} className='likeBtn'>
                <FavoriteIcon style={{ fill: heartFill }} />
              </button>
            </div>
          </div>
      </div>
      {isFetching && <CircularProgress className='preloader' />}
    </>
  );
}