export const setPostsToLocalStorage = (updatedPosts) => {
  localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
};