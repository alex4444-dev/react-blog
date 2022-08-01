import React, { useState } from 'react';
import './EditForm.css';
import { ReactComponent as CloseIcon } from '../../assets/images/close.svg';
import { useDispatch } from 'react-redux';
import { editPost } from '../../store/slices/posts';

export const EditForm = ({ setShowEditForm, selectedPost }) => {
  const [postTitle, setPostTitle] = useState(selectedPost?.title);
  const [postDesc, setPostDesc] = useState(selectedPost?.description);

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handlePostDescChange = (e) => {
    setPostDesc(e.target.value);
  };

  const dispatch = useDispatch();

  const handleEditPost = (e) => {
    e.preventDefault();

    const updatedPost = {
      ...selectedPost,
      title: postTitle,
      description: postDesc,
    };

    dispatch(editPost(updatedPost)).finally(() => setShowEditForm(false));
  };

  return (
    <>
      <form className='editPostForm' onSubmit={handleEditPost}>
        <button className='hideBtn' onClick={() => setShowEditForm(false)}>
          <CloseIcon />
        </button>
        <h2>Редактирование поста</h2>
        <div>
          <input
            className='editFormInput'
            type='text'
            name='postTitle'
            placeholder='Заголовок поста'
            value={postTitle}
            onChange={handlePostTitleChange}
            required
          />
        </div>
        <div>
          <textarea
            className='editFormInput'
            name='postDescription'
            placeholder='Описание поста'
            value={postDesc}
            onChange={handlePostDescChange}
            rows={8}
            required
          />
        </div>
        <div>
          <button className='editPostBtn' type='submit'>
            Сохранить и закрыть
          </button>
        </div>
      </form>
      <div className='overlay' onClick={() => setShowEditForm(false)}></div>
    </>
  );
};
