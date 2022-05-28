import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { Main } from './pages/Main/Main';
import { SingleBlogPost } from './pages/SingleBlogPost/SingleBlogPost';
import { Blog } from './pages/Blog/Blog';
import { Login } from './pages/Login/Login';
import { NoMatch } from "./pages/NoMatch/NoMatch";
import { PostCard } from './pages/Blog/PostCard/PostCard';


export const AppRoutes = ({
    isLoggedIn,
    setIsLoggedIn,
    setUserName,
    setIsAdmin,
    isAdmin,
}) => {
    return (
        <Switch>
            <Route
                exact
                path='/'
                render={() => {
                    if (isLoggedIn) return <Redirect to='/main' />;
                    return <Redirect to='/login' />;
                }}
            />

            <PublicRoute isLoggedIn={isLoggedIn} path='/login'>
                <Login
                    setIsLoggedIn={setIsLoggedIn}
                    setUserName={setUserName}
                    setIsAdmin={setIsAdmin}
                />
            </PublicRoute>

            <PrivateRoute isLoggedIn={isLoggedIn} path="/blog/:postId" exact>
                <SingleBlogPost isAdmin={isAdmin} />
            </PrivateRoute>

            <PrivateRoute isLoggedIn={isLoggedIn} path='/blog'>
                <Blog isAdmin={isAdmin} />
            </PrivateRoute>


            <Route path='/main'
                render={() => <Main />} />

            <Route path='/blog'
                render={() => <Blog />} />


            <Route path='*'>
                <NoMatch />
            </Route>
        </Switch>
    )
}
