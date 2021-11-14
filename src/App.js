import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import MainPage from './containers/MainPage/MainPage'
import BlogPage from './containers/BlogPage/BlogPage'
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { NoMatch } from "./containers/NoMatch/NoMatch";

export function App() {

  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Switch>
            <Route exact path='/'
              render={() =>
                <Redirect to={"/main"} />} />

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
