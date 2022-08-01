import React, { useState } from 'react';
import './AddForm.css';
import { ReactComponent as CloseIcon } from '../../../../assets/images/close.svg';
import { createNewPost } from '../../../../store/slices/posts';
import { useDispatch } from 'react-redux';

export const AddForm = ({ setShowAddForm }) => {

  const [postTitle, setPostTitle] = useState('');
  const [postDesc, setPostDesc] = useState('');

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value)
  }

  const handlePostDescChange = (e) => {
    setPostDesc(e.target.value)
  }

  const dispatch = useDispatch();

  const handleCreatePost = (e) => {
    e.preventDefault();

    const newPost = {
      title: postTitle,
      description: postDesc,
      liked: false,
    }
    dispatch(createNewPost(newPost))
      .finally(() => setShowAddForm(false));
  }

  return (
    <>
      <form className='addPostForm' onSubmit={handleCreatePost}>
        <button className='hideBtn' onClick={() => setShowAddForm(false)}>
          <CloseIcon />
        </button>
        <h2>Создание поста</h2>
        <div>
          <input
            className='addFormInput'
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
            className='addFormInput'
            name='postDescription'
            placeholder='Описание поста'
            value={postDesc}
            onChange={handlePostDescChange}
            rows={8}
            required
          />
        </div>
        <div>
          <button className='addPostBtn' type='submit'>
            Добавить пост
          </button>
        </div>
      </form>
      <div onClick={() => setShowAddForm(false)} className="overlay"></div>
    </>
  );
};
