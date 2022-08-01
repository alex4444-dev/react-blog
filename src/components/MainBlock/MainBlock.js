import { useState } from "react";
import { Header } from './Header/Header';

import './MainBlock.css';
import { Route } from 'react-router-dom';
import { BlogPage } from '../../pages/BlogPage/BlogPage';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/HomePage';
import { BlogPostPage } from '../../pages/BlogPostPage/BlogPostPage';
import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { NoMatch } from '../../pages/NoMatch/NoMatch';

export const MainBlock = ({ postsData }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("userName") === "admin");

  return (
    <>
      <Header 
        userName={userName}
        isLoggedIn={isLoggedIn}
        setUserName={setUserName}
        setIsLoggedIn={setIsLoggedIn}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      <main className='mainBlock'>
        <Switch>
        <Route exact
                path='/'
                render={() => {
                    if (isLoggedIn) 
                    return <Redirect to='/home' />;      
                }}/>
          <Route exact path='/login'>
            <LoginPage />
          </Route>
          <Route exact path='/home'>
            <HomePage />
          </Route>
          <Route exact path='/blog'>
            <BlogPage title="Posts" {...postsData} />
          </Route>
          <Route exact path='/favourite'>
            <BlogPage title="Favourite posts" {...postsData} isLikedPosts />
          </Route> 
          <Route path="/blog/:postId">
            <BlogPostPage setBlogPosts={postsData.setBlogPosts} />
          </Route>
          <Route path='*'>
            <NoMatch />
        </Route>
        </Switch>
        
      </main>
    </>
  );
};
