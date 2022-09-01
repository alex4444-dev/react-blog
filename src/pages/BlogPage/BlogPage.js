import React, { useEffect, useState } from 'react';
import s from './BlogPage.module.css';

import { Post } from './Post/Post';
import { PostsHeader } from './PostsHeader/PostsHeader';
import { fetchPosts } from '../../store/slices/posts';
import { Link } from 'react-router-dom';
import { POSTS_URL } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { EditForm } from '../../components/EditForm/EditForm';

export const BlogPage = ({
  title,
  blogPosts,
  isLoading,
  setBlogPosts,
  error,
  isLikedPosts = false,
  isAdmin
}) => {
  const likedPosts = blogPosts.filter((post) => post.liked);

  const likePost = (pos) => {
    const updatedPosts = [...blogPosts];
    updatedPosts[pos].liked = !updatedPosts[pos].liked;
    fetch(POSTS_URL + updatedPosts[pos].id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPosts[pos]),
    })
      .then((res) => res.json())
      .then((updatedPostFromServer) => {
        updatedPosts[pos] = updatedPostFromServer;
        setBlogPosts(updatedPosts);
      })
      .catch((error) => console.log(error));
  };


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  const deletePost = (postId) => {
    const isDelete = window.confirm('Удалить пост?');

    if (isDelete) {
      fetch(POSTS_URL + postId, { method: 'DELETE' })
        .then(() =>
          setBlogPosts(blogPosts.filter((post) => post.id !== postId))
        )
        .catch((error) => console.log(error));
    }
  };

  const [selectedPost, setSelectedPost] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);

  const selectPost = (post) => {
    setSelectedPost(post);
    setShowEditForm(true);
  };

  if (isLoading) return <h1>Получаем данные...</h1>;

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className={s.postsWrapper}>
      <PostsHeader
        title={title}
        isLikedPosts={isLikedPosts}
        setBlogPosts={setBlogPosts}
        blogPosts={blogPosts}
        isAdmin={isAdmin}
      />

      <section className={s.posts}>
        {(isLikedPosts ? likedPosts : blogPosts).map((post, pos) => {
          return (
            <React.Fragment key={post.id}>
              <Post
                title={post.title}
                description={post.description}
                liked={post.liked}
                likePost={() => likePost(pos)}
                deletePost={() => deletePost(post.id)}
                selectPost={() => selectPost(post)}
                isAdmin={isAdmin}
              />
              <div className={s.readMoreLink}><Link to={`/blog/${post.id}`}>Подробнее</Link></div>
            </React.Fragment>
          );

        })}
      </section>

      {showEditForm && (
        <EditForm
          selectedPost={selectedPost}
          setShowEditForm={setShowEditForm}
          setBlogPosts={setBlogPosts}
          blogPosts={blogPosts}
        />
      )}
    </div>
  );
};