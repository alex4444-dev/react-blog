import React, { useEffect, useState } from "react";
import s from "./BlogPage.module.css";

import { Post } from "./Post/Post";
import { PostsHeader } from "./PostsHeader/PostsHeader";
import {
  deletePost,
  editPost,
  fetchPosts,
  selectPostsData,
} from "../../store/slices/posts";
import { useDispatch, useSelector } from "react-redux";
import { EditForm } from "../../components/EditForm/EditForm";
import arrowUp from "../../assets/images/up-arrow.svg";

export const BlogPage = ({
  title,
  blogPosts,
  setBlogPosts,
  isLikedPosts = false,
  isAdmin,
}) => {
  const { list: posts, isLoading, error } = useSelector(selectPostsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const likedPosts = posts.filter((post) => post.liked);

  const handleLikePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index] = {
      ...updatedPosts[index],
      liked: !updatedPosts[index].liked,
    };
    dispatch(editPost(updatedPosts[index]));
  };

  const handleDeletePost = (postId) => {
    const isDelete = window.confirm("Удалить пост?");

    if (isDelete) {
      dispatch(deletePost(postId));
    }
  };

  const [selectedPost, setSelectedPost] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);
  const [showButton, setShowButton] = useState("");

  const selectPost = (post) => {
    setSelectedPost(post);
    setShowEditForm(true);
  };

  useEffect(() => {
    const handleScrollButtonVisiblity = () => {
      window.pageYoffset > 600 ? setShowButton(true) : setShowButton(true);
    };
    window.addEventListener("scroll", handleScrollButtonVisiblity);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisiblity);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return <h1>Получаем данные...</h1>;

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className={s.postsWrapper}>
      <PostsHeader
        title={title}
        isLikedPosts={isLikedPosts}
        setBlogPosts={setBlogPosts}
        blogPosts={posts}
        isAdmin={isAdmin}
      />

      <section className={s.posts}>
        {(isLikedPosts ? likedPosts : posts).map((post, pos) => {
          return (
            <React.Fragment key={post.id}>
              <Post
                {...post}
                likePost={() => handleLikePost(pos)}
                deletePost={() => handleDeletePost(post.id)}
                selectPost={() => selectPost(post)}
                isAdmin={isAdmin}
              />
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

      {showButton && (
        <div>
          <button className={s.upToTopButton} onClick={handleScrollToTop}>
            <img src={arrowUp} alt="scrollToTop" />
          </button>
        </div>
      )}
    </div>
  );
};
