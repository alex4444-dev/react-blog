import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import MainPage from './containers/MainPage/MainPage';
import BlogPage from './containers/BlogPage/BlogPage';
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { NoMatch } from "./containers/NoMatch/NoMatch";
import LoginPage from './containers/LoginPage/LoginPage';



export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("userName") === "admin");

  return (
    <Router>
      <div className="App">
        <Header
          userName={userName}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setIsAdmin={setIsAdmin}
        />

        <main>
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
              <LoginPage
                setIsLoggedIn={setIsLoggedIn}
                setUserName={setUserName}
                setIsAdmin={setIsAdmin}
              />
            </PublicRoute>

            <PrivateRoute isLoggedIn={isLoggedIn} path='/blog'>
              <BlogPage isAdmin={isAdmin} />
            </PrivateRoute>

            <Route path='/main'
              render={() => <MainPage />} />

            <Route path='/blog'
              render={() => <BlogPage />} />

            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </main>

        <Footer year={new Date().getFullYear()} />
      </div>
    </Router>
  );
}

