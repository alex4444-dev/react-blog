import postImage from '../assets/images/postImage.jpg';

export const POSTS = [
  {
    id: 1,
    title: 'Post 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae temporibus ad omnis? Quod delen',
    liked: false,
    image: postImage,
  },
  {
    id: 2,
    title: 'Post 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae temporibus ad omnis? Quod delen',
    liked: false,
    image: postImage,
  },
  {
    id: 3,
    title: 'Post 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae temporibus ad omnis? Quod delen',
    liked: false,
  },
];

export const POSTS_URL = 'https://618d258eedab980017fd521e.mockapi.io/api/posts/';

export const APP_ROUTES = [
  '/',
  '/home',
  '/blog',
  '/favourite',
  '/login',
];
