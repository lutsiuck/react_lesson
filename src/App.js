import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from './components/Header/Header';
import NewPost from './pages/Profile/NewPost';
import MyPosts from './pages/Profile/MyPosts';


function App(props) {
  return (
    <BrowserRouter>
      <div className="main">
          <Header />
          <Route exact path="/">
            <Home posts={props.state.posts} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/new-post">
            <NewPost />
          </Route>
          <Route path="/my-posts">
            <MyPosts />
          </Route>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
