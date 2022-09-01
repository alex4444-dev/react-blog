
import { useState } from "react";
import { Switch } from "react-router-dom";

import './App.css';
import { MainBlock } from './components/MainBlock/MainBlock';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { POSTS_URL } from './utils/constants';
import { useFetchPosts } from './utils/hooks';
import { LoginPage } from './pages/LoginPage/LoginPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("userName") === "admin");

  const postsData = useFetchPosts(POSTS_URL);

  const blogPostRoutes = postsData.blogPosts.map((post) => {
    return `/blog/${post.id}`;
  });

  return (
    <div className='App'>
      <Switch>
        <PrivateRoute path='/login'>
          <LoginPage
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
            setUserName={setUserName}
            setIsAdmin={setIsAdmin}
            isAdmin={isAdmin}
            userName={userName}
          />
        </PrivateRoute>

        <PublicRoute path='/' blogPostRoutes={blogPostRoutes}>
          <MainBlock
            postsData={postsData}
            isAdmin={isAdmin}
            setIsAdmin={setIsAdmin}
            setIsLoggedIn={setIsLoggedIn}
            setUserName={setUserName}
          />
        </PublicRoute>
      </Switch>
    </div>
  );
}

export default App;
